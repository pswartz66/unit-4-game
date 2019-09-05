
// create a random number to be used in the game
// constraints = 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);


// declare counter variables
var totalScore = 0;
var wins = 0;
var losses = 0;


// declare a random number for each gem/picture
var redGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var greenGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var blueGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var blueDiamondRandNum = Math.floor(Math.random() * (12 - 1) + 1);


// reset random numbers inside a js function to be called in jquery script
function reset() {

    randomNumber = "";
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);

    redGemRandNum = "";
    redGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
    
    greenGemRandNum = "";
    greenGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);

    blueGemRandNum = "";
    blueGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);

    blueDiamondRandNum = "";
    blueDiamondRandNum = Math.floor(Math.random() * (12 - 1) + 1);

}





