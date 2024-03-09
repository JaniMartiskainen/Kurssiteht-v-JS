//Express.js palvelin//
const path = require('path')
const express = require('express') //Otetaan Express-kirjasto käyttöön Node-moduuleista

const app = express() //app-sanan takana on Express-kirjaston toimintoja

const henkilot = require('./Henkilokunta.json')

 //GET ALL etsitään kaikki henkilötiedot jsonista
 app.get('/api/henkilot', async (req, res) => {
    try {
        const response = await fetch('https://github.com/JaniMartiskainen/Kurssiteht-v-JS/blob/master/Henkilokunta.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
})

//Tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './public')

//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})