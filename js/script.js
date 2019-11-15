document.querySelector(".searchButton").addEventListener("click", () => {
    let people = document.querySelector(".searchInput").value
    fetch(`https://swapi.co/api/people/${people}/`)
        .then ((response) => {
            response.json()
            .then((data) => {
                document.querySelector(".answer").innerHTML = ''; 
                /* Create table SW, Thead tr and first table rows */
                let tableSW = document.createElement("table")
                document.querySelector(".answer").appendChild(tableSW)

                let tHeadSW = document.createElement("thead")
                tableSW.appendChild(tHeadSW)

                let tr1 = document.createElement("tr")
                tHeadSW.appendChild(tr1)

                let elementTh1 = document.createElement("th")
                elementTh1.innerHTML = "Nom"
                tr1.appendChild(elementTh1)

                let elementTh2 = document.createElement("th")
                elementTh2.innerHTML = "Anniversaire"
                tr1.appendChild(elementTh2)

                let elementTh3 = document.createElement("th")
                elementTh3.innerHTML = "Genre"
                tr1.appendChild(elementTh3)

                let elementTh4 = document.createElement("th")
                elementTh4.innerHTML = "Couleur des yeux"
                tr1.appendChild(elementTh4)

                let elementTh5 = document.createElement("th")
                elementTh5.innerHTML = "Couleur des cheveux"
                tr1.appendChild(elementTh5)

                /* Create tbody, tr and table rows */

                let tBodySW = document.createElement("tbody")
                tableSW.appendChild(tBodySW)

                let tr2 = document.createElement("tr")
                tBodySW.appendChild(tr2)

                let elementTd1 = document.createElement("td")
                elementTd1.innerHTML = data.name
                tr2.appendChild(elementTd1)

                let elementTd2 = document.createElement("td")
                elementTd2.innerHTML = data.birth_year
                tr2.appendChild(elementTd2)

                let elementTd3 = document.createElement("td")
                elementTd3.innerHTML = data.gender
                tr2.appendChild(elementTd3)

                let elementTd4 = document.createElement("td")
                elementTd4.innerHTML = data.eye_color    
                tr2.appendChild(elementTd4)

                let elementTd5 = document.createElement("td")
                elementTd5.innerHTML = data.hair_color
                tr2.appendChild(elementTd5)
            })
        })
    
}); 