// import { callOfDutyResponse, lostArkResponse, genshinImpactResponse } from "./response.js";
export class Details {
    constructor() {
        // console.log("hello, datails");
    };

    // get game details data from the API
    async getGameDetailsById(id) {
        // show loader
        document.getElementsByClassName("my-loader2")[0].classList.replace("d-none", "d-flex");
        document.getElementById("details").classList.add("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
            document.getElementsByClassName("my-loader2")[0].classList.replace("d-flex", "d-none");
            document.getElementById("details").classList.remove("d-none");
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}