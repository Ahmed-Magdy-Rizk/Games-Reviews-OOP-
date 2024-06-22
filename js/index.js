import { Games } from "./games.js"
import { Details } from "./details.js"
import { displayGamesData } from "./ui.js"

const games = new Games;
const details = new Details;
// const ui = new Ui;


(async function(){
    var homeGamesData = await games.getGamesDataByCategory("mmorpg");
    displayGamesData(homeGamesData);
})();

