/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const yetisAddress = "0x33a39af0F83E9D46a055e6eEbde3296D26d916F4";
const yetisAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner_","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner_","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Plasma","outputs":[{"internalType":"contract iPlasma","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"SSAddressToMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSMintsPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSTokenReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSTokensAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSTokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SSTokensPerMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_satelliteMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_whitelistMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToEmergencyUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToWLMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintsPerWL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"multiSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tos_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"ownerMintMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payableGovernanceAddresses","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payableGovernanceShares","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plasmaAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMaxMintsPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reouncePayableGovernancePermissions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetPayableGovernanceShareholders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"satelliteMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"satelliteMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"satelliteStationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"ext_","type":"string"}],"name":"setBaseTokenURI_EXT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"supply_","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintPrice_","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable[]","name":"addresses_","type":"address[]"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"name":"setPayableGovernanceShareholders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setPlasma","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"},{"internalType":"uint256","name":"time_","type":"uint256"}],"name":"setPublicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"},{"internalType":"uint256","name":"time_","type":"uint256"}],"name":"setSatelliteMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"},{"internalType":"uint256","name":"time_","type":"uint256"}],"name":"setWhitelisMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockEmergencyFunctionsAsShareholder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewWithdrawAmounts","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"whitelistMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`;
};

const cyborgsAddress = "0xCcD1Cb7D615615330BAD5620bf3224E2f3930Bd5";
const cyborgsAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner_","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner_","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Plasma","outputs":[{"internalType":"contract iPlasma","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SpaceYetis","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"parent1_","type":"uint256"},{"internalType":"uint256","name":"parent2_","type":"uint256"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"fusion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fusionCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"multiSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"ext_","type":"string"}],"name":"setBaseTokenURI_EXT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fusionCost_","type":"uint256"}],"name":"setFusionCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTokens_","type":"uint256"}],"name":"setMaxTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setPlasma","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"},{"internalType":"uint256","name":"time_","type":"uint256"}],"name":"setPublicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setSpaceYetis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]`;
};

const plasmaAddress = "0xC3aF7Bb38999e8A1db7849e30706Efbf8FFd57Fa";
const plasmaAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"CreditsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"CreditsDeducted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner_","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner_","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PO","outputs":[{"internalType":"contract iPlasmaOld","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SpaceYetis","outputs":[{"internalType":"contract iSpaceYetis","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"addCredits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToYield","outputs":[{"internalType":"uint40","name":"lastUpdatedTime_","type":"uint40"},{"internalType":"uint176","name":"pendingRewards_","type":"uint176"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses_","type":"address[]"}],"name":"airdropMigration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"airdropMigration2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"claimTokensFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"deductCredits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getPendingClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getStorageClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTotalClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getYieldRateOfAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalModulus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"migrateRewardsFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses_","type":"address[]"}],"name":"migrateSetNewTimestampOnAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"plasmaControllers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"raw_getPendingClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"raw_getStorageClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"raw_getTotalClaimableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setControllers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setMigrationEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setPlasmaOld","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setSpaceYetis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint40","name":"yieldEndTime_","type":"uint40"}],"name":"setYieldEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldEndTime","outputs":[{"internalType":"uint40","name":"","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldRatePerYeti","outputs":[{"internalType":"uint40","name":"","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldStartTime","outputs":[{"internalType":"uint40","name":"","type":"uint40"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;

const baseYetiImageURI = "https://api.nonfungiblecdn.com/spaceyetis/images/";

const baseCyborgImageURI = "https://api.nonfungiblecdn.com/spaceyetiscyborgs/images/";

const correctChain = 1;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const yetisAddress = "0xDf5bAe8cCceE441a52ee6E44873b04ca31288B48";
// const yetisAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"multiSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]`;
// };

// const cyborgsAddress = "0xCcD1Cb7D615615330BAD5620bf3224E2f3930Bd5";
// const cyborgsAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner_","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner_","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Plasma","outputs":[{"internalType":"contract iPlasma","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SpaceYetis","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_publicMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"parent1_","type":"uint256"},{"internalType":"uint256","name":"parent2_","type":"uint256"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"fusion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fusionCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"multiSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256[]","name":"tokenIds_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri_","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"ext_","type":"string"}],"name":"setBaseTokenURI_EXT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fusionCost_","type":"uint256"}],"name":"setFusionCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTokens_","type":"uint256"}],"name":"setMaxTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setPlasma","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bool_","type":"bool"},{"internalType":"uint256","name":"time_","type":"uint256"}],"name":"setPublicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setSpaceYetis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId_","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]`;
// };

// const plasmaAddress = "0xAfDdf74AC74C73Eef14C4e1063333D26858CE3f1";
// const plasmaAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

// const baseYetiImageURI = "https://api.nonfungiblecdn.com/spaceyetis/images/";

// const baseCyborgImageURI = "https://api.nonfungiblecdn.com/spaceyetiscyborgs/images/";

// const correctChain = 4;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser or mobile app like Metamask to fuse Cyborgs!');
    $("#available-cyborg-images").empty();
    $("#available-cyborg-images").append("<br><p>No cyborgs available...</p>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const yetis = new ethers.Contract(yetisAddress, yetisAbi(),signer);
const cyborgs = new ethers.Contract(cyborgsAddress, cyborgsAbi(),signer);
const plasma = new ethers.Contract(plasmaAddress, plasmaAbi(),signer);

var plasmaBalanceGlobal;

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const getYetiEnum = async()=>{
    let userAddress = await getAddress();
    let ownedYetisCount = await yetis.balanceOf(userAddress);
    return  ownedYetisCount;
};

const getYetisOwned = async() => {
    let userAddress = await getAddress();
    let ownedYetis = await yetis.walletOfOwner(userAddress);
    return [...ownedYetis].sort((a, b) => a - b);
}

const getCyborgsEnum = async()=>{
    let userAddress = await getAddress();
    let ownedCyborgsCount = await cyborgs.balanceOf(userAddress);
    return  ownedCyborgsCount;
};

const getCyborgsOwned = async() => {
    let userAddress = await getAddress();
    let ownedCyborgs = await cyborgs.walletOfOwner(userAddress);
    return [...ownedCyborgs].sort((a, b) => a - b);
}

const getPlasmaBalance = async()=>{
    let userAddress = await getAddress();
    let plasmaBalance = formatEther(await plasma.balanceOf(userAddress));
    if (plasmaBalance >= 650) {
        $("#plasma-status").addClass("condition-met");
        $("#plasma-status").removeClass("condition-failed");
    }
    else {
        $("#plasma-status").addClass("condition-failed");
        $("#plasma-status").removeClass("condition-met");
    }
    plasmaBalanceGlobal = plasmaBalance;
    return plasmaBalance;
};

const fuse = async() => {
    const selected = Array.from(selectedForAction);
    const numberToFuse = Number($("#number-to-mint").text());
    if (selected.length !== 2) {
        await displayErrorMessage("Select 2 yetis to fuse!");
    }
    else if (plasmaBalanceGlobal < 650 * numberToFuse) {
        await displayErrorMessage("Insufficient $PLASMA balance!");
    }
    else {
        try {
            const id1 = selected[0];
            const id2 = selected[1];

            const gasLimit = await cyborgs.estimateGas.fusion(id1, id2, numberToFuse);
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();

            await cyborgs.fusion(id1, id2, numberToFuse, {gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
        catch (error) {
            if ((error.message).includes("Parents can't be the same!")) {
                await displayErrorMessage("Parents can't be the same!");
            }
            else if ((error.message).includes("You do not own these Yetis!")) {
                await displayErrorMessage("You do not own these Yetis!");
            }
            else if ((error.message).includes("You don't have enough $PLASMA!")) {
                await displayErrorMessage("You don't have enough $PLASMA!");
            }
            else if ((error.message).includes("Not enough remaining Cyborg Yetis!")) {
                await displayErrorMessage("Not enough remaining Cyborg Yetis!");
            }
            else if ((error.message).includes("Public Mint is not enabled yet!")) {
                await displayErrorMessage("Fusion is not active yet!");
            }
            else {
                await displayErrorMessage("An error occurred! See console output or window alert...");
                window.alert(error);
                console.log(error);
            }
        }
    }
}

const getCyborgImages = async()=>{
    $("#available-cyborg-images").empty();

    $("#cyborg-label").removeClass("hidden");

    const yourCyborgsCount = await getCyborgsEnum();
    $("#num-cyborgs").html(`(${Number(yourCyborgsCount)})`);
    if (yourCyborgsCount == 0) {
        $("#available-cyborg-images").append("<br><p>No cyborgs available...</p>");
    }
    else {
        const yourCyborgs = await getCyborgsOwned();
        for (let i = 0; i < yourCyborgs.length; i++) {
            let cyborgId = yourCyborgs[i];
            let fakeJSX = `<div id="cyborg-${cyborgId}" class="your-cyborg"><img src="${baseCyborgImageURI}${cyborgId}.png"><p class="cyborg-id">#${cyborgId}</p></div>` //revealed
            // let fakeJSX = `<div id="cyborg-${cyborgId}" class="your-cyborg"><img src="./images/cyborg-loading.gif"><p class="cyborg-id">#${cyborgId}</p></div>` // hidden
            $("#available-cyborg-images").append(fakeJSX);
        };
    }
};

// Control fuse amounts and price update

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    let newClaim = currentClaim + 1;
    let newPrice = 650 * newClaim;
    if (newPrice > plasmaBalanceGlobal) {
        displayErrorMessage(`Insufficient $PLASMA for ${newClaim} fusions!`)
    }
    else {
        $("#number-to-mint").text(newClaim);
    }
}

function updatePrice() {
    let currentClaim = Number($("#number-to-mint").text());
    $("#current-cost").text(`${(650 * currentClaim)}`)
}

// Yeti selection

let yetiImages = new Map();
let yetisInWallet = [];
let yetiImageSelectLoaded = false;

// Load select display
const loadYetiImages = async() => {
    if (!yetiImageSelectLoaded) {
        yetisInWallet = await getYetisOwned();
        for (let i = 0; i < yetisInWallet.length; i++) {
            let id = Number(yetisInWallet[i]);
            yetiImages.set(id, `${baseYetiImageURI}${id}.png`);
        }
    
        yetiImageSelectLoaded = true;
    }
}

let selectedForAction = new Set();

async function selectForAction(id, num) {
    if (!selectedForAction.has(id)) {
        if (selectedForAction.size == 2) {
            await displayErrorMessage("You can only select 2 yetis to fuse!")
        }
        else {
            selectedForAction.add(id);
            $(`#yeti-${id}`).addClass("selected");
        }
    }
    else {
        selectedForAction.delete(id);
        $(`#yeti-${id}`).removeClass("selected");
    }
    if (selectedForAction.size == 0) {
        $(`.selected-yetis`).text("Selected: None");
    }
    else {
        let selectedString = `${Array.from(selectedForAction).sort((a, b) => a - b).join(' ')}`;
        $(`.selected-yetis`).text('Selected: ' + selectedString);
    }
}

const displayYetiSelect = async(num) => {
    const currentlySelected = selectedForAction;
    let yetisOwned = yetisInWallet;

    if (yetisOwned.length == 0) {
        if (yetiImageSelectLoaded) {
            await displayErrorMessage(`You do not have any yetis!`);
        }
        else {
            await displayErrorMessage(`Still loading yetis! Try again in a moment...`);
        }
    }
    else {
        let yetisJSX = "";
        for (let i = 0; i < yetisOwned.length; i++) {
            id = Number(yetisOwned[i]);
            img = yetiImages.get(id);
            if (!img) {
                console.log(id, img)
                await displayErrorMessage(`Still loading yetis! Please wait a moment and try again...`)
                return;
            }
            selected = "";
            if (currentlySelected.has(id)) {
                selected = "selected";
            }
            
            yetisJSX += `<div class='yeti-div ${selected}' id="yeti-${id}" onclick="selectForAction(${id}, ${num})"><img src="${img}"><h2>${id}</h2></div>`
        }

    
        let fakeJSX = `<div id="yeti-select"><div style="position:relative;height:100%;"><h1 class="section-title">SELECT SUBJECTS</h1><br><div id="available-yetis"><div id="close-div"><span id="close" onclick='closeDisplay()'>x</span></div>${yetisJSX}</div><div id='bottom-div'><div class="selected-yetis" id="selected-yetis-big">Selected: None</div><br class="hide-on-mobile"><button class="button" id='confirm' onclick="closeDisplay()">CONFIRM</button></div></div></div>`;
        let height = $(document).height();
        $("body").append(`<div id='block-screen' style="height:${height}px" onclick='closeDisplay()'></div>`);
        $("body").append(fakeJSX);


        
        if (currentlySelected.size == 0) {
            $(`.selected-yetis`).text("Selected: None");
        }
        else {
            let selectedString = `${Array.from(currentlySelected).sort((a, b) => a - b).join(' ')}`;
            $( `.selected-yetis`).text('Selected: ' + selectedString);
        }
    }

};

const loadSelectedSubjects = async() => {
    $("#subject-1").empty();
    $("#subject-2").empty();
    const selected = Array.from(selectedForAction);
    for (let i = 0; i < selected.length; i++) {
        let id = selected[i];
        $(`#subject-${i+1}`).html(`<div><img src="${yetiImages.get(id)}"><h2>${id}</h2></div>`);
    }
    if (selected.length < 2) {
        for (let j = selected.length; j < 2; j++) {
            $(`#subject-${j+1}`).html(`<div><img src="./images/bluryeti.png" style="background-color:rgb(170, 169, 169)"><h2>???</h2></div>`);
        }
        $("#subject-status").addClass("condition-failed");
        $("#subject-status").removeClass("condition-met");
    }
    else {
        $("#subject-status").removeClass("condition-failed");
        $("#subject-status").addClass("condition-met");      
    }
}

const closeDisplay = async() => {
    await loadSelectedSubjects();
    $(`#yeti-select`).remove(); 
    $("#error-popup").remove();
    $("#block-screen").remove();
};

// end selection logic


const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>FUSION INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        await getCyborgImages();
        $("#your-plasma").text(`${await getPlasmaBalance()}`);
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-yeti-images").empty();
        $("#available-yeti-images").text("Error: Wrong Network");
        $("#your-plasma").html(`0.0`);
        $("#claimable-plasma").html(`0.0`);
        displayErrorMessage("Error: Wrong Network", false);
    }
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateClaimingInfo();
        }
    });

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("CyborgsPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("CyborgsPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("CyborgsPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
    displayLoading();
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    $("#loading-popup").remove();
    $("#block-screen-loading").remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

setInterval(async()=>{
    await updateInfo();
}, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    if (!yetiImageSelectLoaded) {
        await loadYetiImages();
    }
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}