/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle')

INFURA ='https://rinkeby.infura.io/v3/a43e4f47006f454da3da98654228a629'
PRIVATE ='2812b0ed6cd10476177b788e66f119b333784f63c2ba6b3588e9b6a248910a3f'

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.5.0"
            },
            {
                version: "0.5.11"
            },
            {
                version: "0.5.12"
            },
            {
                version: "0.5.16"
            }
        ]
    },
    networks: {
        rinkeby: {
            url: INFURA,
            accounts: ['0x'+ PRIVATE]
        }

    }
};