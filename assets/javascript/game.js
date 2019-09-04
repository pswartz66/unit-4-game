


// create a random number to be used in the game
// constraints = 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);

var totalScore = 0;
var wins = 0;
var losses = 0;


var scoreCounter = "";
var targetNumber = [];

var recordAttempts = 0;

var redGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var greenGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var blueGemRandNum = Math.floor(Math.random() * (12 - 1) + 1);
var blueDiamondRandNum = Math.floor(Math.random() * (12 - 1) + 1);


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

// console.log(redGemRandNum);
// console.log(greenGemRandNum);
// console.log(blueGemRandNum);
// console.log(blueDiamondRandNum);






