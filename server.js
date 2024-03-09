//Express.js palvelin//
const path = require('path')
const express = require('express') //Otetaan Express-kirjasto käyttöön Node-moduuleista
const axios = require('axios'); // Lisää axios-kirjasto


const app = express() //app-sanan takana on Express-kirjaston toimintoja
const polku = path.join(__dirname, './public')  //Tehdään polkumääritys public kansioon

/*const henkilot = require('./Henkilokunta.json')*/

 //GET ALL etsitään kaikki henkilötiedot jsonista
 app.get('/api/henkilot', async (req, res) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/JaniMartiskainen/Kurssiteht-v-JS/master/Henkilokunta.json?token=GHSAT0AAAAAACPH3K35KZBACCT2B2SMPBLKZPMRK7Q');
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
})



//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})