/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-02-18
*
********************************************************************************/

// part 2 and 3.
// This will automatically read both files and generate two arrays of objects: "setData" and "themeData".
const setData = require("../data/setData");
const themeData = require("../data/themeData");
// create a variable called "sets", initialized to an empty array
let sets = [];

// creating a function called initialize
// purpose: fill the "sets" array, by adding copies of all the setData
function initialize() {
    // return a new promise object that "resolves" either with data (if the function returns data)
    // this function should resolve with no data, once the operation is complete
    return new Promise((resolve, reject) => {
        try {
            sets = setData.map(set => {
                const theme = themeData.find(theme => theme.id === set["theme_id"]); // it will find the theme name according to ID
                return {
                    // I forgot to copy "set_num,name,year,theme_id,num_parts,img_url"
                    // and the conversor considered the first row that I paste
                    // as "connector".
                /*    
                set_num: set["001-1"],
                name: set.Gears,
                year: set["1965"],
                theme_id: set["1"],
                num_parts: set["43"],
                img_url: set["https://cdn.rebrickable.com/media/sets/001-1.jpg"],
                theme: theme ? theme.name : "Unknown Theme",
                */
                  // set_num,name,year,theme_id,num_parts,img_url
                set_num: set["set_num"],
                name: set.name,
                year: set["year"],
                theme_id: set["theme_id"],
                num_parts: set["num_parts"],
                img_url: set["img_url"],
                theme: theme ? theme.name : "Unknown Theme",


                };
            });
            resolve();
        } catch (error) {
            // or rejects with an error if the function encounters an error
            reject(error);
        }
    });
}

// creating a function called getAllSets
// this function simply returns the complete "sets" array
function getAllSets() {
    // this function should resolve with the completed "sets" array
    return new Promise((resolve) => resolve(sets));
}

// creating a function called getSetByNum
// this function will return a specific "set" object from the "sets" array
// whose "set_num" value matches the value of the "setNum"
function getSetByNum(setNum) {
    // this should resolve with the found "set" object, and reject with an appropriate message
    return new Promise((resolve, reject) => {
        const set = sets.find((set) => set.set_num === setNum);
        if (set) {
            resolve(set);
        } else {
            reject(`Unable to find set with set number: ${setNum}`);
        }
    });
}

// creating a function called getSetsByTheme
// purpose: return an array of objects from the "sets" array whose "theme" value matches the "theme" parameter 
function getSetsByTheme(theme) {
    const themeLowerCase = theme.toLowerCase();
    const filteredSets = sets.filter((set) =>
        set.theme.toLowerCase().includes(themeLowerCase)
    );
    return new Promise((resolve) => resolve(filteredSets));
    
}

/* Part 3.Testing:
// Initializing the sets array
initialize();

const allSets = getAllSets();
console.log(allSets);

const specificSet = getSetByNum('001-1');
console.log(specificSet);

const setsByTheme = getSetsByTheme('technic');
console.log(setsByTheme);
 */

// Module exports
module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };
