$(document).ready(function() {

var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var userNumberText = $("#user-number");
var randomNumberText = $("#random-number");

var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");


var wins = 0;
var losses = 0;

var userNumber = 0;


winsText.text("Wins: " + wins);
lossesText.text("Losses: " + losses);
userNumberText.text(userNumber);

var randomNumber = Math.floor(Math.random() * 100);
randomNumberText.text(randomNumber);

var crystal1num = Math.floor(Math.random() * 10) +1;
console.log("OG crystal" + crystal1num);

var crystal2num = Math.floor(Math.random() * 10) +1;

console.log("OG crystal" + crystal2num);
var crystal3num = Math.floor(Math.random() * 10) +1;
console.log("OG crystal" + crystal3num);
var crystal4num = Math.floor(Math.random() * 10) +1;
console.log("OG crystal" + crystal4num);

reset = function() {
    randomNumber = Math.floor(Math.random() * 100);
    randomNumberText.text(randomNumber);

    crystal1num = Math.floor(Math.random() * 10) +1;
    console.log("crystal " + crystal1num);


    crystal2num = Math.floor(Math.random() * 10) +1;
    console.log("crystal " + crystal2num);


    crystal3num = Math.floor(Math.random() * 10) +1;
    console.log("crystal " + crystal3num);

    crystal4num = Math.floor(Math.random() * 10) +1;
    console.log("crystal " + crystal4num);

    userNumber = 0;
    userNumberText.text(userNumber);

    return [crystal1num, crystal2num, crystal3num, crystal4num, randomNumber, userNumber];



}


crystal1.on("click", function() {
    userNumber = crystal1num + userNumber;
    userNumberText.text(userNumber);
    console.log(userNumber);
    check(userNumber);
});

crystal2.on("click", function() {
    userNumber = crystal2num + userNumber;
    userNumberText.text(userNumber);
    console.log(userNumber);
    check(userNumber);
});

crystal3.on("click", function() {
    userNumber = crystal3num + userNumber;
    userNumberText.text(userNumber);
    console.log(userNumber);
    check(userNumber);
});

crystal4.on("click", function() {
    userNumber = crystal4num + userNumber;
    userNumberText.text(userNumber);
    console.log(userNumber);
    check(userNumber);
});


check = function() {
    if (userNumber === randomNumber) {
    wins++;
    winsText.text("Wins: " + wins);
    reset();

    }

    if (userNumber > randomNumber) {
    losses++;
    lossesText.text("Losses: " + losses);
    reset();

    console.log("losses " + losses)
    
    }

}


});