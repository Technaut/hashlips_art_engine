/**
 * If you are exporting your project for Solana:
 * 1. Read the Readme section for more info
 * 2. Enter your metadata information in this file, more on the Slana Metadata
 *    standards here, https://docs.metaplex.com/nft-standard
 * 3. Run the generate for Solana script, yarn generate:solana (or npm run generate:solana)
 * 4. If you forgot to do step 3, do step 3 OR run the solana util
 *    `node utils/metaplex.js`
 *
 * Credits:
 * Metaplex.js util by https://github.com/DawidAbram
 */

const collectionName = "Monks on Solana";
const collectionFamily = "Generation 1"; // Many projects can belong to one family
const symbol = "MONKSOL";

const baseUriPrefix = ""; // OPTIONAL, if you need to prefix your image#.png with a baseURI
const description = "Monks on Solana have their own corner of the metaverse that prying eyes are kept away from; you can still degen here, no paperhanded shit allowed.";
const external_url = "https://monksonsolana.com"; // add optional external URL here, e.g, https://0n10nDivision.com

const royaltyFee = 500; // This is 2% royalty fee

/**
 * Array of Creators.
 * If there is more than one creator, add additional objects with address and share properties.
 */
const creators = [
  {
    address: "8nVfVQbq1oba6A6gKW569gwAkkgsBCi1erYzRJNqYmaL", // Wallet address for royalties
    share: 100, // Amount of shares for this wallet, can be more than one, all have to add up to 100 together
  },
  // uncomment and edit for additional creator.
  // {
  //   address: "second wallet address here",
  //   share: 100,
  // },
];

/**
 * Only change this if you need to generate data for video/VR/3d content
 */
const propertyCategory = "image";

module.exports = {
  symbol,
  collectionName,
  collectionFamily,
  description,
  royaltyFee,
  creators,
  external_url,
  baseUriPrefix,
  propertyCategory,
};
