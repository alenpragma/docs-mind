To become a validator configure your node correctly and sync the full chain 


 please read: [Installation](/docs/get-started/installation) and [full node Setup](/docs/get-started/full-node-deployment).


 ## collect the node privatekey 

 ```shell
 cat node/consensus/validator.key

```

it will return your private key like this 
```shell
/root/setpos/node (main) $ cat node/consensus/validator.key
3d8bb3ccb69463b4974108d140b480bbbf9ab151bdc1e37be2260334445ad0ac
```

 ## Install the staking script 

```shell
git clone https://github.com/Mind-chain/mindstaker
cd mindstaker 
npm i --f 
```
`it will install the node.js dependencies`

## setup the env vars using .env

```shell
# Define the values
JSONRPC_URL="https://rpc-msc.mindchain.info/"
PRIVATE_KEYS="PASTE_THE_COLLECTED_PRIVATE_KEY"
STAKING_CONTRACT_ADDRESS="0x0000000000000000000000000000000000001001"
MAX_VALIDATOR_COUNT="1000"
MIN_VALIDATOR_COUNT="4"

# Create or overwrite the .env file
echo "JSONRPC_URL=$JSONRPC_URL" > .env
echo "PRIVATE_KEYS=$PRIVATE_KEYS" >> .env
echo "STAKING_CONTRACT_ADDRESS=$STAKING_CONTRACT_ADDRESS" >> .env
echo "MAX_VALIDATOR_COUNT=$MAX_VALIDATOR_COUNT" >> .env
echo "MIN_VALIDATOR_COUNT=$MIN_VALIDATOR_COUNT" >> .env

# Print a message indicating success
echo "written to .env file"

```

## Note the node adress to topup mind for staking 

```shell
 npm run getbalance
```
it will print balance,address and pivatekey like this :

```shell
setpos/mindstaker (main) $ npm run getbalance

> staking-contracts@0.0.1 getbalance
> hardhat run scripts/getbalance.ts

Generating typings for: 0 artifacts in dir: types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
Private Key:  0x3d8bb3ccb69463b4974108d140b480bbbf9ab151bdc1e37be2260334445ad0ac
Address:  0x364234d9bDf773945CAe10CDB1f9503B0752a0B7
balance 0
```
 
``copy the address and topup minimum 10000 mind for staking
``

now again back to the terminal and check your balance by ``npm run getbalance``


## Stake your mind 
```shell
npm run stake 
```

## now check your status 

```shell
npm run info 
```
it will return some logs like this 
```shell
setpos/mindstaker (main) $ npm run info 

> staking-contracts@0.0.1 info
> hardhat run scripts/info.ts --network polygonedge

Downloading compiler 0.8.7
Compiling 3 files with 0.8.7
Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> contracts/MockStaker.sol


Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> contracts/Staking.sol


Generating typings for: 3 artifacts in dir: types for target: ethers-v5
Successfully generated 7 typings!
Successfully generated 3 typings for external artifacts!
Solidity compilation finished successfully
Check current contract information
Total staked amount: 60000000000000000000
Minimum number of validators 4
Maximum number of validators 1000
Current validators list [
  '0x394089c9A3fD81Ca5E0A9dbc9d1020DfB99C2605',
  '0x3fac5A12314Fdc0935586FbDB47aed57Abb1dBB2',
  '0xF4DAeb189BBe02920523D15dA9a34D104aFe858D',
  '0x040cda93502D34517781Dad158159639e6Cd4C9a',
  '0xA7f680dC3f37267F49218F0A4cbad9aF0cCec6C2',
  '0x98AEa18C1e71Fa3B63Ff22DbdCCbA0a5c424Ac9e'
]
BLS Public Keys [ '0x', '0x', '0x', '0x', '0x', '0x' ]
```

if your mind staked successfully you can see your address at validatorSet list 
```shell
Current validators list [
  '0x394089c9A3fD81Ca5E0A9dbc9d1020DfB99C2605',
  '0x3fac5A12314Fdc0935586FbDB47aed57Abb1dBB2',
  '0xF4DAeb189BBe02920523D15dA9a34D104aFe858D',
  '0x040cda93502D34517781Dad158159639e6Cd4C9a',
  '0xA7f680dC3f37267F49218F0A4cbad9aF0cCec6C2',
  '0x98AEa18C1e71Fa3B63Ff22DbdCCbA0a5c424Ac9e',
  'YOUR_CAN_SEE_YOUR_ADDRESS_HERE'
]
BLS Public Keys [ '0x', '0x', '0x', '0x', '0x', '0x' ]
```
``if everithing configured correctly your node will start block mining ``

you can check the mining logs by attaching the tmux session 

```shell
tmux attach-session -t mind-node
```

## Unstake your MIND
```shell
npm run unstake 
```