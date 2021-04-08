var abi = require('ethereumjs-abi')

var parameterTypes = ["address"];
var parameterValues = ["0xE168cfd368430e3E3D82fb46d14D051FE075Efd8"];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));