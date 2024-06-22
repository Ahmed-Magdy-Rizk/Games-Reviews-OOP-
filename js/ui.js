import { Details } from "./details.js";

const details = new Details;
export class Ui {
    constructor() {
        console.log("hello, Ui");
    };
}


export function displayGamesData(gamesData) {
    var box = "";

    for (var i = 0; i < gamesData.length; i++) {
        box += `
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card text-center rounded-3 p-3" id=${gamesData[i].id}>
                    <div class="card-image">
                        <img src="${gamesData[i].thumbnail}" alt="" class="w-100 rounded-3">
                    </div>
                    <div class="card-name mt-3 hstack justify-content-between">
                        <h3 class="h6 small text-white">${gamesData[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <div class="card-info">${gamesData[i].short_description.split(" ").slice(0, 8).join(" ")}</div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${gamesData[i].genre}</span>
                        <span class="badge badge-color">${gamesData[i].platform}</span>
                    </footer>
                </div>
            </div>`
    }
    document.getElementById("games-data").innerHTML = box;
    addEventListenerToCard()
}

function addEventListenerToCard() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (e) {
            displayDetailsSection(e.currentTarget.id);
        })
    }
}
async function displayDetailsSection(clickedElementId) {

    // make the games section to disappear if we clicked on any card
    document.getElementById("games").classList.replace("d-block", "d-none");

    // make the games section to disappear if we clicked on any card
    document.getElementById("details").classList.replace("d-none", "d-block");


    var gameDetails = await details.getGameDetailsById(clickedElementId); 
    document.getElementById("gameDetailsContent").innerHTML =
        `<div class="col-md-4">
            <img src="${gameDetails.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
            <h3>Title: ${gameDetails.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${gameDetails.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${gameDetails.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${gameDetails.status}</span> </p>
            <p class="small">${gameDetails.description}
            </p>
            <a class="btn btn-outline-warning" target="_blank" href="${gameDetails.freetogame_profile_url}">Show Game</a>
        </div>`
        displayGamesSection()
};

function displayGamesSection() {
    var closeSign = document.getElementById("close-sign");
    closeSign.addEventListener("click", function () {
        // make the details section to disappear
        document.getElementById("games").classList.replace("d-none", "d-block");

        // make the games section to appear
        document.getElementById("details").classList.replace("d-block", "d-none");

    })
}