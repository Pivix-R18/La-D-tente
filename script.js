const tbody = document.getElementById("votetable");

const promise01 = fetch("https://api.top-serveurs.net/v1/servers/F3RRM4J1A852/players-ranking");
const promise02 = fetch("https://api.top-serveurs.net/v1/servers/F3RRM4J1A852/players-ranking?type=lastMonth")

promise01
    .then ((response) => {

        const usersData = response.json();

        usersData.then((utilisateur) => {
            console.log(utilisateur.players)

            for(var index in utilisateur.players){
                const player = utilisateur.players[index]
                const tr = document.createElement("tr")
                tr.className = "crote"
                const tbody = document.getElementById("votetable");
                tbody.appendChild(tr)
                const td = document.createElement("td")
                td.innerText = parseInt(index) + 1
                tr.appendChild(td)

                const td2 = document.createElement("td")
                var playername = player.playername
                if (playername === ""){
                    playername = "Joueur Anonyme"
                } 
                td2.innerText = playername
                tr.appendChild(td2)

                const td3 = document.createElement("td")
                td3.innerText = player.votes
                tr.appendChild(td3)
            }

        });
    })

    promise02
    .then ((response) => {

        const usersData = response.json();

        usersData.then((utilisateur) => {
            console.log(utilisateur.players)

            for(var index in utilisateur.players){
                const player = utilisateur.players[index]
                const tr = document.createElement("tr")
                tr.className = "crote"
                const tbody = document.getElementById("votetable2");
                tbody.appendChild(tr)
                const td = document.createElement("td")
                td.innerText = parseInt(index) + 1
                tr.appendChild(td)

                const td2 = document.createElement("td")
                var playername = player.playername
                if (playername === ""){
                    playername = "Joueur Anonyme"
                } 
                td2.innerText = playername
                tr.appendChild(td2)

                const td3 = document.createElement("td")
                td3.innerText = player.votes
                tr.appendChild(td3)
            }

        });
    })
    .catch((err) => console.log(err));
