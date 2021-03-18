const opendart = require("opendart");
module.exports = function(RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.name = n.name;
        
        for(var key in n){
            node[key] = n[key] || "";
        }
        this.on('input', function(msg) {
            for(var i in msg){
                if(i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid'){
                    node[i] = node[i] || msg[i];
                }
            }
            opendart[node.api][node.action](node.accesstoken, node.options).then(response => {msg.payload = response;node.send(msg);});
            // node.send(msg);
        });
    }
    RED.nodes.registerType("opendart", FunctionNode);
};
