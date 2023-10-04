const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  //pass the address of the Box contract deployed
  await upgrades.upgradeProxy('0xdb55a6426DC43AfBED7800EeFcb3Ecf75212F576', BoxV2);
  console.log('Box upgraded');
}

main();