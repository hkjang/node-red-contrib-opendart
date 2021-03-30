const opendart = require("opendart");
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        if (RED.nodes.getNode(n.creds)){
            this.apiKey = RED.nodes.getNode(n.creds).credentials.apiKey;
        } else {
            this.apiKey = "";
        }
        var node = this;
        this.name = n.name;

        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            opendart[node.api][node.action](node.apiKey, node.options).then(response => {
                msg.payload = response;
                node.send(msg);
            });
            // node.send(msg);
        });
    }

    RED.nodes.registerType("opendart", FunctionNode, {
        credentials: {
            apiKey: {type:"text"}
        }
    });

    function opendartApiKey(n){
        RED.nodes.createNode(this, n);
        this.apiKey = n.apiKey;
    }

    RED.nodes.registerType("opendartApiKey", opendartApiKey,{
        credentials: {
            apiKey: {type:"text"}
        }
    });

};
