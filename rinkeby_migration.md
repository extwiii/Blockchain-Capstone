Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 0x5f5e0ff


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x54a1d9af0fd40b798239d7b3d4db27bb75ecc1597540789760efaf9afa6cb797
   > Blocks: 0            Seconds: 0
   > contract address:    0x58F7eB6Cd591590a3C5447DeF2f2B6a83cE32843
   > block number:        7
   > block timestamp:     1586743463
   > account:             0x7C93E98b357acCBE39619A67B3A789f7B410F5dB
   > balance:             99.8621461
   > gas used:            190918
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00381836 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00381836 ETH


2_deploy_contracts.js
=====================
Network selected to deploy: development

   Deploying 'MyCustomERC721Token'
   -------------------------------
   > transaction hash:    0x423d72d0f66aa7b4fa3c6fd7bd30d5a33811feb3f3d3abbd2e30dd99260ed6e4
   > Blocks: 0            Seconds: 0
   > contract address:    0x86DBe2041b111503a660e790753c72Fc6A26D677
   > block number:        9
   > block timestamp:     1586743465
   > account:             0x7C93E98b357acCBE39619A67B3A789f7B410F5dB
   > balance:             99.8143383
   > gas used:            2348451
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04696902 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x7b2b14691fd59847c55a67a192336bbe8a56a2696708b64458277b0a60882b6e
   > Blocks: 0            Seconds: 0
   > contract address:    0xf27267EeD9eDa17214DaEDcAe47fF035026a1284
   > block number:        10
   > block timestamp:     1586743465
   > account:             0x7C93E98b357acCBE39619A67B3A789f7B410F5dB
   > balance:             99.79417904
   > gas used:            1007963
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02015926 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xeccf25d2b0f97b1bb032c7995553b087aadc25bf09d05567bf79b34f54388257
   > Blocks: 0            Seconds: 0
   > contract address:    0xb81f691cEafe7D536ff221108Bddcb5867e4671b
   > block number:        11
   > block timestamp:     1586743466
   > account:             0x7C93E98b357acCBE39619A67B3A789f7B410F5dB
   > balance:             99.73723244
   > gas used:            2847330
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0569466 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12407488 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.12789324 ETH


Bilals-MacBook-Pro-2:eth-contracts bilalcagiran$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6306011
   > block timestamp:     1586745412
   > account:             0xFbDf1759a0489274Be8bd0215DeB3462e7d97F46
   > balance:             18.674885707
   > gas used:            153274
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000306548 ETH

   -------------------------------------
   > Total cost:         0.000306548 ETH


2_deploy_contracts.js
=====================
Network selected to deploy: rinkeby-fork
   -------------------------------------
   > Total cost:                   0 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.000306548 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xe585979c9bd21abe3d12fef57f2feedfd4e263f4610995b489e7178f8c3aacf9
   > Blocks: 0            Seconds: 12
   > contract address:    0xE8aDBdB8951dCCC879C5Ee87889078B08Ee8363b
   > block number:        6306012
   > block timestamp:     1586745436
   > account:             0xFbDf1759a0489274Be8bd0215DeB3462e7d97F46
   > balance:             18.671826775
   > gas used:            168274
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00336548 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00336548 ETH


2_deploy_contracts.js
=====================
Network selected to deploy: rinkeby

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x004d5c6f8a03721d091b645e251ead63e2de6716ba411b87490bbd5c7c74de3e
   > Blocks: 0            Seconds: 8
   > contract address:    0x50FafE80bC86c38dB939C1Ea77fad7479315e132
   > block number:        6306014
   > block timestamp:     1586745466
   > account:             0xFbDf1759a0489274Be8bd0215DeB3462e7d97F46
   > balance:             18.654504575
   > gas used:            823831
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01647662 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xf1fc5d2a56d9ecc626487f7e44d57fb5b2c928a6265c960882e19b48edb416e2
   > Blocks: 0            Seconds: 8
   > contract address:    0xc22fdB77CedfE4e11d7b7D52897a24ECeE2945E2
   > block number:        6306015
   > block timestamp:     1586745481
   > account:             0xFbDf1759a0489274Be8bd0215DeB3462e7d97F46
   > balance:             18.607748135
   > gas used:            2337822
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04675644 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06323306 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.06659854 ETH 