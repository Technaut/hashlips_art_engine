"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 8888,
    // namePrefix: "Monkey", Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "01_Backgrounds" },
      { name: "02_Skins" },
      { name: "03_Eyes" },
      { name: "04_Eyebrow" },
      { name: "05_Mouth" },
      { name: "06_Eyewear" },
      { name: "07_Ear" },
      { name: "08_Forehead" },
      { name: "09_Head" },
      { name: "10_Necklace" },
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {

  /*Mouth to head incompats*/ 
  Mask : ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Weed : ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  "Party-Horn" : ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],


  /*Eye to Eyewear incompats*/ 
  Cyborg : ["Aviator", "Cyberpunk", "Cyclops","Pirate","Pit-Vipers","Plain", "Sol-Glasses","Sunglasses","Thug-Life","vR","Wayfarer"],

/*Eyewear to head incompats*/ 
  Aviator: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Cyberpunk: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Cyclops: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Pirate: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  "Pit-Vipers": ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Plain: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  "Sol-Glasses": ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  Sunglasses: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  "Thug-Life": ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  vR: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween", "Mohawk-Titanium", "Mohawk", "Tatto", "Party-Hat"],
    Wayfarer: ["Astronault","Crash-Helmet", "Ninja-Mask", "Halloween"],
  
  /*Earring to head incompats*/ 
  "Cross-Gold" : ["Ninja-Mask"],
  Cross : ["Ninja-Mask"],
  "Diamond-Stud" : ["Ninja-Mask"],
  Earpods : ["Ninja-Mask"],
  "Gold-Stud" : ["Ninja-Mask"],
  Hoops : ["Ninja-Mask"],
  Plain : ["Ninja-Mask"],
  "Silver-Stud" : ["Ninja-Mask"],
  Silver : ["Ninja-Mask"],
  "Solana-Stud" : ["Ninja-Mask"],


};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  floral: ["MetallicShades", "Golden Sakura"],
};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  Helmet: "Space Helmet",
  "gold chain": "GOLDEN NECKLACE",
};

const debugLogs = true;

const format = {
  width: 500,
  height: 551,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  buildDir,
  layersDir,
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraAttributes,
  extraMetadata,
  incompatible,
  forcedCombinations,
  traitValueOverrides,
  outputJPEG,
  emptyLayerName,
  hashImages,
};
