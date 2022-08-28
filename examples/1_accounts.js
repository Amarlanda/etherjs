const { ethers } = require("ethers");

const INFURA_ID = "ab7376e95c9b4e2eb2c0657c12a32bcf";
const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
 const balance = await provider.getBalance(address);
 console.log(
  `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
 );
};

main();
