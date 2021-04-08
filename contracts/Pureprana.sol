pragma solidity ^0.5.0;

import "./ERC721Tradable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Pureprana is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
    public
    ERC721Tradable("PurePrana", "OSC", _proxyRegistryAddress)
    {}

    function baseTokenURI() public pure returns (string memory) {
        return "https://pureprana.art/api/metadata/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://pureprana.art/api/contract";
    }
}
