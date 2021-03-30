node-red-contrib-opendart
================

Node-RED node for opendart



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-opendart, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-opendart

## Wrapper opendart - guide
- https://www.npmjs.com/package/opendart

## Example 
- 사전에 opendart 사이트에서 개발자 API Key 발급 필요
- https://opendart.fss.or.kr/uss/umt/EgovMberInsertView.do

```javascript
msg = {};
msg.api = 'disclosure'
msg.action = 'company'
msg.options = {
    'corp_code' : '00126380'
}
return msg;
```

## Sample Flow
```text
[{"id":"ce91a720.0faeb8","type":"opendart","z":"abcf76be.64d1e8","name":"","api":"disclosure","action":"company","options":"","creds":"5bfafd58.28bef4","x":490,"y":140,"wires":[["3c4e8220.6ca2fe"]]},{"id":"fd0b4430.1702c8","type":"function","z":"abcf76be.64d1e8","name":"","func":"msg = {};\n// msg.api = 'disclosure'\n// msg.action = 'company'\nmsg.options = {\n    'corp_code' : '00126380'\n}\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":140,"wires":[["ce91a720.0faeb8"]]},{"id":"3c4e8220.6ca2fe","type":"debug","z":"abcf76be.64d1e8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":680,"y":140,"wires":[]},{"id":"8726993.672bb68","type":"inject","z":"abcf76be.64d1e8","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":130,"y":140,"wires":[["fd0b4430.1702c8"]]},{"id":"5bfafd58.28bef4","type":"opendartApiKey","name":""}]
```
