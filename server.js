const express = require('express');
const legoData = require('./modules/legoSets');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.static('public'));

// Ensure legoData is initialized
app.use(async (req, res, next) => {
    try {
        await legoData.initialize();
        next();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error');
    }
});

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

// About route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
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

        res.json(sets);
    } catch (error) {
        console.error('Error:', error);
        res.status(404).send('error');
    }
});

// Lego set by ID route
app.get('/lego/sets/:setNum', async (req, res) => {
    const { setNum } = req.params;

    try {
        const set = await legoData.getSetByNum(setNum);
        res.json(set);
    } catch (error) {
        console.error('Error:', error);
        res.status(404).send('error');
    }
});

// 404 error route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});

// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
