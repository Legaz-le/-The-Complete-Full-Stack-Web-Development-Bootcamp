var randomNumber = Math.floor(Math.random() * 6) + 1;

var ranodmDiceImage = "images/dice" + randomNumber + ".png"

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

var first = image1.setAttribute("src", ranodmDiceImage);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var ranodmDiceImage1 = "images/dice" + randomNumber1 + ".png";

var second = image2.setAttribute("src", ranodmDiceImage1);

if (randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML("Player 1 Wins")
}else if (randomNumber1 > randomNumber){
    document.querySelector("h1").innerHTML("Player 2 Wins")
}else {
    document.querySelector("h1").innerHTML("Draw")
}


