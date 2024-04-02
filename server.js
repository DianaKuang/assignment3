/********************************************************************************
*  WEB322 – Assignment 05
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-04-
*  Published URL: https://tame-erin-earthworm-tux.cyclic.app/
*
********************************************************************************/


const express = require('express');
const legoData = require('./modules/legoSets');
const path = require('path');

const app = express();
const PORT = 8000;

// Updating server.js file to "set" the "view engine" 
// setting to use the value: "ejs"
app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// legoData initialized
app.use(async (req, res, next) => {
    try {
        await legoData.initialize();
        next();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error');
    }
});

// Set up Home route
app.get('/', (req, res) => {
    res.render("home");
});

// About route
app.get('/about', (req, res) => {
    res.render("about");
});

// Lego sets route
app.get('/lego/sets', async (req, res) => {
    try {
        const { theme } = req.query;
        let sets;

        if (theme) {
            sets = await legoData.getSetsByTheme(theme.toLowerCase());
        } else {
            sets = await legoData.getAllSets();
        }

        if (sets.length === 0) {
            // If no sets are found for the specified theme, render the 404 page
            return res.status(404).render("404", { message: "No sets found for the specified theme" });
        }

        // res.json(sets);
        res.render('sets', { sets });

    } catch (error) {
        console.error('Error:', error);
        res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
    }
});

// Lego set by ID route
app.get('/lego/sets/:setNum', async (req, res) => {
    const { setNum } = req.params;

    try {
        const set = await legoData.getSetByNum(setNum);

       
        res.render('set', { set });

    } catch (error) {
        console.error('Error:', error);
        res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
    }
});


// 404 error route
app.get('/404', (req, res) => {
    res.render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
});


// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
