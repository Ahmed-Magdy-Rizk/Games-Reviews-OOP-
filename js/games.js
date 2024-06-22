// import { gamesResponse, shooterResponse, sailingResponse, permadeathResponse, superheroResponse, pixelResponse } from "./response.js";
import { displayGamesData } from "./ui.js";

export class Games {
    constructor() {
        var myThis = this;
        // change the nav link
        var navLinks = document.getElementsByClassName("nav-link");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", async function (e) {
                document.getElementsByClassName("nav-link active")[0].classList.remove('active');
                e.target.classList.add("active");
                // get the games catergory from the link that we clicked
                var category = e.target.innerHTML;
                // i declared mythis out side the event because this refers to the event target (the clicked link), not the Games instance.
                try {
                    var gamesData = await myThis.getGamesDataByCategory(category);
                    displayGamesData(gamesData);
                } catch (error) {
                    console.log(error);
                }
            })
        }
        
    };

    // get games data from the API
    async getGamesDataByCategory(category) {
        document.getElementsByClassName("my-loader")[0].classList.replace("d-none", "d-flex");
        document.getElementById("games-data").classList.add("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '09786d32b7msh04aca0ba86d8056p1f685fjsn92af4410b236',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            document.getElementsByClassName("my-loader")[0].classList.replace("d-flex", "d-none");
            document.getElementById("games-data").classList.remove("d-none");
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}
