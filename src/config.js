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
    growEditionSizeTo: 100,
    // namePrefix: "Monkey", Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "01_Backgrounds" },
      { name: "02_Skins" },
      { name: "04_Eyebrow" },
      { name: "05_Mouth" },
      { name: "10_Necklace" },
      { name: "07_ear" },
      { name: "09_Head_Laser",
        sublayerOptions:{
          "09_Head_Laser" : { trait : "09_Head"},
      },
    },
      { name: "03_Eyes_Laser",
      sublayerOptions:{
        "03_Eyes_Laser" : { trait : "03_Eyes"},
    
    },
  },
      
 
    ],
  },


  //going to take the helmets ou of this batch
  {
    growEditionSizeTo: 200,
    // namePrefix: "Monkey", Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "01_Backgrounds" },
      { name: "02_Skins" },
      { name: "04_Eyebrow" },
      { name: "05_Mouth" },
      { name: "03_Eyes_Normal",
      sublayerOptions:{
        "03_Eyes_Normal" : { trait : "03_Eyes"},
    },
  },
      { name: "06_EyeWear" },
      { name: "10_Necklace" },
      { name: "07_ear" },
      { name: "09_Head_No_Eyewear",
      sublayerOptions:{
        "09_Head_No_Eyewear" : { trait : "09_Head"},
    },
  },
      
    ],
  },

    //no lasers, no eyewear and helmet heads
    {
      growEditionSizeTo: 300,
      // namePrefix: "Monkey", Use to add a name to Metadata `name:`
      layersOrder: [
        { name: "01_Backgrounds" },
        { name: "02_Skins" },
        { name: "04_Eyebrow" },
        { name: "05_Mouth" },
        { name: "03_Eyes_Normal",
        sublayerOptions:{
          "03_Eyes_Normal" : { trait : "03_Eyes"},
      },
    },
        
        /*{ name: "06_EyeWear" },*/
        { name: "10_Necklace" },
        { name: "07_ear" },
        { name: "09_Head_Covered",
        sublayerOptions:{
          "09_Head_Covered" : { trait : "09_Head"},
      },
    },
        
      ],
    },

];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {


  /*Earring to head incompats*/
    "Cross-gold" : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    Cross : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    "Diamond_Stud" : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    Earpods :["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    "Gold_Stud" :["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    Hoops : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    /*Plain : ["Ninja_Mask"],*/
    "Silver_Stud" : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    Silver : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],
    "Solana_Stud" : ["Ninja_Mask","Turban","HeadSet","Work_Headset"],

  /*Eye to Eyewear incompats */
  Cyborg : ["Aviator", "Cyberpunk", "Cyclops","Pirate","Pit-Vipers","Plain", "Solana","Sunglasses","Thug_Life","vR","Wayfarer"],
  
  //mouth incompats
  "Angry_Eyebrows" : ["Smiling"], 
  "Mad" : ["Smiling"], 

  
  
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

  "Bored_Eyebrows" : ["Bored_Mouth","Bored"],
  "Surprised_Eyebrows" : ["Surprised_Mouth","Surprise"],
  "Sad_Eyebrows" : ["Sad"],
  "Angry_Eyebrows" : ["Angry"],
  "Mad" : ["Angry"],
  "Hypnotised_Eyebrows" : ["Hypnotised"]
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
