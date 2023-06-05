// Connect to the contract
var contractAddress = '0x33BC66756a50b9C3bAbAD19d8a5f32D7a36D9731';
var contractABI = [{
"inputs": [],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "uint256",
"name": "_id",
"type": "uint256"
},
{
"indexed": true,
"internalType": "uint256",
"name": "pid",
"type": "uint256"
},
{
"indexed": false,
"internalType": "string",
"name": "quality",
"type": "string"
},
{
"indexed": false,
"internalType": "string",
"name": "quantity",
"type": "string"
},
{
"indexed": false,
"internalType": "string",
"name": "exporterLicense",
"type": "string"
},
{
"indexed": false,
"internalType": "string",
"name": "harvestor",
"type": "string"
},
{
"indexed": false,
"internalType": "string",
"name": "source",
"type": "string"
}
],
"name": "CreateProductEvent",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "bytes",
"name": "qrCode",
"type": "bytes"
}
],
"name": "QRCodeEvent",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "bytes",
"name": "qrCode",
"type": "bytes"
}
],
"name": "ScanQRCodeEvent",
"type": "event"
},
{
"inputs": [],
"name": "productCount",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function",
"constant": true
},
{
"inputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"name": "products",
"outputs": [
{
"internalType": "uint256",
"name": "_id",
"type": "uint256"
},
{
"internalType": "uint256",
"name": "pid",
"type": "uint256"
},
{
"internalType": "string",
"name": "quality",
"type": "string"
},
{
"internalType": "string",
"name": "quantity",
"type": "string"
},
{
"internalType": "string",
"name": "exporterLicense",
"type": "string"
},
{
"internalType": "string",
"name": "harvestor",
"type": "string"
},
{
"internalType": "string",
"name": "source",
"type": "string"
}
],
"stateMutability": "view",
"type": "function",
"constant": true
},
{
"inputs": [
{
"internalType": "bytes",
"name": "",
"type": "bytes"
}
],
"name": "qrCodesScanned",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"stateMutability": "view",
"type": "function",
"constant": true
},
{
"inputs": [
{
"internalType": "uint256",
"name": "pid",
"type": "uint256"
},
{
"internalType": "string",
"name": "_quality",
"type": "string"
},
{
"internalType": "string",
"name": "_quantity",
"type": "string"
},
{
"internalType": "string",
"name": "_exporterLicense",
"type": "string"
},
{
"internalType": "string",
"name": "_harvestor",
"type": "string"
},
{
"internalType": "string",
"name": "_source",
"type": "string"
}
],
"name": "createProduct",
"outputs": [
{
"components": [
 {
   "internalType": "uint256",
   "name": "_id",
   "type": "uint256"
 },
 {
   "internalType": "uint256",
   "name": "pid",
   "type": "uint256"
 },
 {
   "internalType": "string",
   "name": "quality",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "quantity",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "exporterLicense",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "harvestor",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "source",
   "type": "string"
 }
],
"internalType": "struct ProductReg.Product",
"name": "",
"type": "tuple"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
"internalType": "uint256",
"name": "_id",
"type": "uint256"
}
],
"name": "getProductById",
"outputs": [
{
"components": [
 {
   "internalType": "uint256",
   "name": "_id",
   "type": "uint256"
 },
 {
   "internalType": "uint256",
   "name": "pid",
   "type": "uint256"
 },
 {
   "internalType": "string",
   "name": "quality",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "quantity",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "exporterLicense",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "harvestor",
   "type": "string"
 },
 {
   "internalType": "string",
   "name": "source",
   "type": "string"
 }
],
"internalType": "struct ProductReg.Product",
"name": "",
"type": "tuple"
}
],
"stateMutability": "view",
"type": "function",
"constant": true
},
{
"inputs": [
{
"internalType": "uint256",
"name": "_id",
"type": "uint256"
}
],
"name": "getQRCodeById",
"outputs": [
{
"internalType": "bytes",
"name": "",
"type": "bytes"
}
],
"stateMutability": "view",
"type": "function",
"constant": true
},
{
"inputs": [
{
"internalType": "bytes",
"name": "qrCode",
"type": "bytes"
}
],
"name": "scanQRCode",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
}
];

// Request user account access
// Request user account access
ethereum.request({ method: 'eth_requestAccounts' })
.then(function(accounts) {
// Use the first account
account = accounts[0];
})
.catch(function(error) {
console.error(error);
});


// Call the createProduct function in the contract
function createProduct(pid, quality, quantity, exporterLicense, harvestor, source) {
contract.methods.createProduct(
 pid,
 quality,
 quantity,
 exporterLicense,
 harvestor,
 source
)
.send({ from: account, gasPrice: '10000000000', gas: 500000 })
.then(function(result) {
 // Handle the result
 console.log(result);
 
 window.setTimeout(() => {
     location.assign('/')
 })

})
.catch(function(error) {
 // Handle errors
 console.error(error);
});
}

document.querySelector('.form').addEventListener('submit', function(e) {
e.preventDefault();
var pid = document.getElementById('pid').value;
var quality = document.getElementById('Quality').value;
var quantity = document.getElementById('Quantity').value;
var exporterLicense = document.getElementById('Exporter License').value;
var harvestor = document.getElementById('Harvester').value;
var source = document.getElementById('Source').value;

createProduct(pid, quality, quantity, exporterLicense, harvestor, source);
});


// Check if MetaMask is installed
if (window.ethereum) {
// MetaMask is installed, enable the application
web3 = new Web3(ethereum);
} else {
// MetaMask is not installed, show an error message or redirect the user
alert('Please install MetaMask to use this application.');
}

var contract = new web3.eth.Contract(contractABI, contractAddress);
    