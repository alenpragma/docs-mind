---
id: full-node-deployment
title: Full Node
---


Full node deployment of the Mind-chainblockchain.

## Requirements

* vCPUs >= 16
* Memory: at least 32GB
* Disk space
    * at least 1TB for the data directory ( recommend SSD ), solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms. (for the best performance， it will need NVMe SSD)
    * data disk mount to /data
* Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud.
* A broadband Internet connection with upload/download speeds of 5 megabyte per second.
* Linux os (one of them)
    * Ubuntu 20.04/22.04
    * CentOS 8.0+ / Rocky Linux 8.6 / Almalinux 8.6
    * Rocky Linux 9 / Almalinux 9
    * Debian 10/11
* curl or wget
* tar
* gzip




## Download && Installation


```
git clone https://github.com/Mind-chain/setpos
cd setpos
bash install.sh
```
## if installed successfully it will return the version like this 
```
[VERSION INFO]
Release version = <none>
Git branch      = <none>
Commit hash     = <none>
Build time      = <none>
```


## Now generate keys and bootnode secrets from your node 

```shell
bash genkey.sh
```

### Start the node with tmux (tmux is a cli for running mind node background)

```shell
 tmux new-session -s mind-node
```

##  Start the node

```shell
bash start.sh
```

```
/root/setpos (main) $ bash start.sh
sudo: firewall-cmd: command not found
sudo: firewall-cmd: command not found
start.sh: line 3: ufw: command not found
start.sh: line 4: ufw: command not found

2023-08-25T04:43:24.176Z [INFO]  polygon.server: Data dir: path=node
2023-08-25T04:43:24.200Z [INFO]  polygon.blockchain: genesis: hash=0x3b8a7026c5d46c1208a2a4b4376c4d0912f3be4844cc90982554bb6cf2c8d3d0
2023-08-25T04:43:24.201Z [INFO]  polygon.server.ibft: validator key: addr=0x364234d9bDf773945CAe10CDB1f9503B0752a0B7
2023-08-25T04:43:24.201Z [INFO]  polygon.server: GRPC server running: addr=127.0.0.1:9632
2023-08-25T04:43:24.201Z [INFO]  polygon.network: LibP2P server running: addr=/ip4/0.0.0.0/tcp/10001/p2p/16Uiu2HAmNBSHE9s4kAFsE8fFqMUenZQiKvUbJAxMP31bRQNeWJQx
2023-08-25T04:43:24.202Z [INFO]  polygon.server.jsonrpc: http server started: addr=0.0.0.0:8545
2023-08-25T04:43:24.622Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAm4ujNpKKcERwzPsiHyJFTzW3vSbGSiEN3cqD3YbkKh9DQ
2023-08-25T04:43:24.633Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAmSgT3kgpYWmtfB3NphVVCQtYikFpccKCK6ZipKmdV55tr
2023-08-25T04:43:24.685Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAmN282voTxQjaw1jEGWyH5f6sctCZRCtQjPkesrtJKeqeH
2023-08-25T04:43:24.721Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAm4U75Qru871t4GB1dsm4ZLb5Y7CQAELYLigZJP2TmR9oN
2023-08-25T04:43:24.739Z [WARN]  polygon.network: Attempted to save protocol /syncer/0.2 stream for non-existing peer 16Uiu2HAkwD1SjmUwx1qrjRVw99zuQE9hRf7Vsmp1pMpiFZ4t144H
2023-08-25T04:43:24.966Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAmC3j4SCSGHfYXqmn6AUtKNHCnwuwBvxbq555gKRH5XsFU
2023-08-25T04:43:24.969Z [INFO]  polygon.network: Peer connected: id=16Uiu2HAkwD1SjmUwx1qrjRVw99zuQE9hRf7Vsmp1pMpiFZ4t144H
2023-08-25T04:43:25.001Z [INFO]  polygon.blockchain: new block: number=1 txs=0 hash=0x46b60999d38d2b281328d366606a92d8351b684b56f4ee60ad8054a71ce85f16 parent=0x3b8a7026c5d46c1208a2a4b4376c4d0912f3be4844cc90982554bb6cf2c8d3d0 source=syncer generation_time_in_seconds=1690630287
2023-08-25T04:43:25.004Z [INFO]  polygon.blockchain: new block: number=2 txs=0 hash=0x41f6874543644201c68a5c9d392ba5c0d383c7a2ce7827948f8ce452b80c752b parent=0x46b60999d38d2b281328d366606a92d8351b684b56f4ee60ad8054a71ce85f16 source=syncer generation_time_in_seconds=3
2023-08-25T04:43:25.008Z [INFO]  polygon.blockchain: new block: number=3 txs=0 hash=0x58a9325da6ccfbd7200229aefc50bfd0875be9cb961d500672dd269c34c0a325 parent=0x41f6874543644201c68a5c9d392ba5c0d383c7a2ce7827948f8ce452b80c752b source=syncer generation_time_in_seconds=3
```


`Congratulations you are started the node correctly and now you are a part of mind network` 


##  Now detach the tmux session 
``
CTRL+B and D
``

##  You can reattach the tmux session

```shell
tmux attach-session -t mind-node
```