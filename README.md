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

```javascript
msg = {};
msg.api = 'disclosure'
msg.action = 'company'
msg.accesstoken = 'ACCESS_TOKEN'
msg.options = {
    'corp_code' : '00126380'
}
return msg;
```

