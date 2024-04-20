/********************************************************************************
*  WEB322 – Assignment 06
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-04-19
*
*  Published URL: https://tame-erin-earthworm-tux.cyclic.app/
*
********************************************************************************/

require('dotenv').config();
const themeData = require("../data/themeData.json"); 
const setData = require("../data/setData");

const mongoose = require('mongoose');


// Define Mongoose schema for Theme
let themeSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, 
    name: { type: String }
});

// Define Mongoose schema for Set
let setSchema = new mongoose.Schema({
    set_num: { type: String, unique: true }, 
    name: { type: String },
    year: { type: Number },
    num_parts: { type: Number },
    theme_id: { type: Number, ref: 'Theme' }, 
    img_url: { type: String },
    theme: {
        id: Number,
        name: String,
      },
});

// Define Theme model
let Theme = mongoose.model('Theme', themeSchema);

// Define Set model
let Set = mongoose.model('Set', setSchema);

//module.exports = Set;
//module.exports = { Theme, Set };

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
   // useNewUrlParser: true,
    //useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    // Import themeData.json
    //Theme.insertMany(themeData)
    //.then(() => console.log('Themes imported successfully'))
    //.catch(err => console.error('Error importing themes:', err));

    // Import setData.js
    //Set.insertMany(setData)
    //.then(() => console.log('Sets imported successfully'))
    //.catch(err => console.error('Error importing sets:', err));
})
.catch(err => console.error('Error connecting to MongoDB:', err));

const db = mongoose.connection;


// Initialize function
function initialize() { 
    return new Promise(async (resolve, reject) => {
        try {
            // No need to sync with MongoDB in Mongoose
            resolve();
        } catch (err) {
            reject(err.message)
        }
    });
}

///////////////////////////////////////////////////////////////////

// Update needed!!
function initialize() { 
    return new Promise(async (resolve, reject) => {
        try {
            // No need to sync with MongoDB in Mongoose
            resolve();
        } catch (err) {
            reject(err.message)
        }
    });
}

function getAllSets() {
    return new Promise(async (resolve, reject) => {
        try {
            let sets = await Set.find().populate('theme_id');
            resolve(sets);
        } catch (err) {
            reject(err.message);
        }
    });
}

function getAllThemes() {
    return new Promise(async (resolve, reject) => {
        try {
            let themes = await Theme.find();
            resolve(themes);
        } catch (err) {
            reject(err.message);
        }
    });
}

function getSetByNum(setNum) {
    return new Promise(async (resolve, reject) => {
        try {
            let foundSet = await Set.findOne({ set_num: setNum }).populate('theme_id');
            if (foundSet) {
                resolve(foundSet);
            } else {
                reject("Unable to find requested set");
            }
        } catch (err) {
            reject(err.message);
        }
    });
}

function getSetsByTheme(theme) {
    return new Promise(async (resolve, reject) => {
        try {
            let foundSets = await Set.find({}).populate({
                path: 'theme_id',
                match: { name: { $regex: new RegExp(theme, 'i') } }
            });
            resolve(foundSets);
        } catch (err) {
            reject(err.message);
        }
    });
}

function addSet(setData) {
    return new Promise(async (resolve, reject) => {
        try {
            let newSet = new Set(setData);
            await newSet.save();
            resolve();
        } catch (err) {
            reject(err.message);
        }
    });
}

function editSet(set_num, setData) {
    return new Promise(async (resolve, reject) => {
        try {
            let updatedSet = await Set.findOneAndUpdate({ set_num: set_num }, setData, { new: true });
            if (updatedSet) {
                resolve();
            } else {
                reject("No set found with the provided set number");
            }
        } catch (err) {
            reject(err.message);
        }
    });
}

function deleteSet(set_num) {
    return new Promise(async (resolve, reject) => {
        try {
            let deletedSet = await Set.findOneAndDelete({ set_num: set_num });
            if (deletedSet) {
                resolve();
            } else {
                reject("No set found with the provided set number");
            }
        } catch (err) {
            reject(err.message);
        }
    });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme, getAllThemes, addSet, editSet, deleteSet };