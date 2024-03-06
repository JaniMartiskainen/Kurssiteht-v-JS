



function etuSivu() {
    document.getElementById("mainArea").innerHTML = "Tämä on pääsivu.";
}

function yritysEsittely() {
    document.getElementById("mainArea").innerHTML = "Yritysesittely.";
}

function yhteysTiedot() {
    document.getElementById("mainArea").innerHTML = "Yhteystiedot.";
}

function henkiloKunta() {
    document.getElementById("mainArea").innerHTML = "Henkilökunnan tiedot.";

    async function fetchData() {
        document.getElementById("mainArea").innerHTML = "<h4>Ladataan sivua...</h4>" //Lautausilmoitus
        
        var x = `<table><thead><th>ID</th><th>Nimi</th><th>Osoite</th><th>Postinumero</th></thead><tbody>`
    
        try {
        const response = await fetch("http://localhost:3000/api/henkilot")
        const henkilodata = await response.json() //muutetaan json => javascript muotoon
    
        await henkilodata.map(h => { //Loopataan läpi oliot map funktiolla, h on 1 herkku
        x += `<tr><td>${h.ID}</td><td>${h.Nimi}</td><td>${h.Osoite}</td><td>${h.Postinumero}</td></tr>`
        })
            
        //taulukko päätetään ja renderöidään html elementtiin
        x += `</tbody></table>`
        document.getElementById("mainArea").innerHTML = x
    
        //Virhetilanteen hallinta
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();
}