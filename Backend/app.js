const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname, 'images')));

app.get('/products', async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '..', 'src', 'components', 'assets', 'data.js');
        const dataFile = await fs.readFile(dataPath); 
        const data = eval(dataFile.toString());
        res.json(data);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/products/:type', async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '..', 'src', 'components', 'assets', 'data.js');
        const dataFile = await fs.readFile(dataPath);
        const data = eval(dataFile.toString());

        const typeFilter = req.params.type;
        const filteredData = data.filter(item => item.type === typeFilter);

        if (filteredData.length === 0) {
            // If no products match the type, return a 404 response
            return res.status(404).json({ error: 'No products found for the given type' });
        }

        res.json(filteredData);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
