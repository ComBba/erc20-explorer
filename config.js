var web3 = require('web3');
var net = require('net');

var config = function () {
  
  //this.logFormat = "combined";
  this.logFormat = ":remote-addr [:date[clf]] :status :url :referrer :user-agent";
  //this.ipcPath = process.env.HOME + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  //this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  this.provider = new web3.providers.HttpProvider("http://115.68.99.203:8545");
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.erc20ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
  
  this.tokenShortName = "DDT";
  this.tokenAddress = "0x727e98c02e618e84cb6cef9ecaf42d62e21ff1c5";
  this.tokenDecimals = 18;
  this.tokenName = "DDengle Community Token";
  this.tokenDescription = "DDengle Community Token: http://www.ddengle.com/";
  this.tokenTotalSupply = -1;
    
  this.exportStartBlock = 0; // Start block for the historic export (set to 0 for a full export)
  
  this.names = {
    "0x0c74e46b115e19726997dd559d2b6ff1bfb79af6": "Token Creator"
  };
};

module.exports = config;