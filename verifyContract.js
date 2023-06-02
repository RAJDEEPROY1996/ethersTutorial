const { ethers } = require("ethers");
const validation = async() =>{
const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai-bor.publicnode.com');
//const contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';   //to check for wrong address
const contractAddress = '0x1eE100D54073D72C7446D4F28414B1aB46aBC671';   //to check for correct address
const contractABI = [{"inputs":[{"internalType":"uint256","name":"roll","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_class","type":"string"}],"name":"stu","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"studentDetails","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]; // Replace with your actual ABI

const contract = new ethers.Contract(contractAddress, contractABI, provider);
contract.deployed().then((success)=>{
    console.log(success.functions);
}).catch((err)=>{
    console.log("the error is ",err.reason);
})


}

validation()