// Suoritetaan etusivu-funktio kun sivu on ladattu
window.onload = function() {
    etuSivu();
};

//---------------------------------------  TUMMA/VAALEA TEEMA  ----------------------------------------------------//

let theme = "light" // Oletus vaalea teema


function darkTheme() {
        
    theme = "dark"
    document.getElementById("all").style.backgroundColor = "black"
    document.getElementsByTagName("h1")[0].style.color = "silver"
    document.getElementsByTagName("p")[0].style.color = "silver"
}

function lightTheme() {

    theme = "light"
    document.getElementById("all").style.backgroundColor = "white"
    document.getElementsByTagName("h1")[0].style.color = "black"
    document.getElementsByTagName("p")[0].style.color = "black"
}

//---------------------------------------  ETUSIVU  ----------------------------------------------------//
function etuSivu() {
    var mainArea = document.getElementById("mainArea");
    mainArea.innerHTML = ""; // Tyhjennetään mainArea sisällöstä


    // Lisätään otsikko
    var otsikko = document.createElement("h1");
    otsikko.textContent = "Tervetuloa Kukkamestareiden kotisivuille!";
    mainArea.appendChild(otsikko);

    // Lisätään asiasisältöä
    var sisalto = document.createElement("div");
    sisalto.innerHTML = "<p>Meidän laajasta valikoimasta löydät kukat jokaiseen tilanteeseen.</p>";
    mainArea.appendChild(sisalto);

    if (theme === "dark") {
        darkTheme()
    }
    else {
        lightTheme()
    }

    var kuva = document.createElement("img");
    kuva.src = "kukat.jfif";
    kuva.alt = "Kuva";
    mainArea.appendChild(kuva);

}

//---------------------------------------  YRITYSESITTELY  ----------------------------------------------------//

function yritysEsittely() {
    var mainArea = document.getElementById("mainArea");
    mainArea.innerHTML = ""; // Tyhjennetään mainArea sisällöstä


    // Lisätään otsikko
    var otsikko = document.createElement("h1");
    otsikko.textContent = "Tietoja yrityksestä";
    mainArea.appendChild(otsikko);

    // Lisätään asiasisältöä
    var sisalto = document.createElement("div");
    sisalto.innerHTML = "<p>Kukkamme tuoksuvat mahtavasti ja ovat ilo silmälle!</p>";
    mainArea.appendChild(sisalto);

    if (theme === "dark") {
        darkTheme()
    }
    else {
        lightTheme()
    }

    var kuva = document.createElement("img");
    kuva.src = "kukkakauppa.jfif";
    kuva.alt = "Kuva";
    mainArea.appendChild(kuva);
}

//---------------------------------------  YHTEYSTIEDOT  ----------------------------------------------------//

function yhteysTiedot() {
    var mainArea = document.getElementById("mainArea");
    mainArea.innerHTML = ""; // Tyhjennetään mainArea sisällöstä


    // Lisätään otsikko
    var otsikko = document.createElement("h1");
    otsikko.textContent = "Yhteystiedot";
    mainArea.appendChild(otsikko);

    // Lisätään asiasisältöä
    var sisalto = document.createElement("div");
    sisalto.innerHTML = "<p>Yrityksen sijainti ja yhteystiedot.</p>";
    mainArea.appendChild(sisalto);

    if (theme === "dark") {
        darkTheme()
    }
    else {
        lightTheme()
    }

    var kartta = document.createElement("div");
    kartta.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.3121687144935!2d25.646224813502545!3d60.98341757743558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e28543ab2a73b%3A0x4718e84ea2f93c13!2sPaasikivenkatu%202%2C%2015110%20Lahti!5e0!3m2!1sfi!2sfi!4v1709812526097!5m2!1sfi!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    mainArea.appendChild(kartta);

    
}


//---------------------------------------  HENKILÖKUNTA  ----------------------------------------------------//

function henkiloKunta() {


    var mainArea = document.getElementById("mainArea");
    mainArea.innerHTML = ""; // Tyhjennetään mainArea sisällöstä

    // Lisätään otsikko
    /*var otsikko = document.createElement("h1");
    otsikko.textContent = "Henkilökunnan tiedot";
    mainArea.appendChild(otsikko);*/
    
    async function fetchData() {
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

        // Lisätään otsikko
        var otsikko = document.createElement("h1");
        otsikko.textContent = "Henkilökunnan tiedot";
        document.getElementById("mainArea").prepend(otsikko); // Lisätään otsikko ennen taulukkoa

        if (theme === "dark") {
            darkTheme()
        }
        else {
            lightTheme()
        }


        //Virhetilanteen hallinta
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        var kuva = document.createElement("img");
        kuva.src = "floristit.jfif";
        kuva.alt = "Kuva";
        mainArea.appendChild(kuva);

    }
    fetchData();

    
}

