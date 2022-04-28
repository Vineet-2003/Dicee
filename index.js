// Generating two random numbers for dice. 
// alert("Refresh to start the game.");
let player1 = (Math.floor(Math.random()*6)) + 1 ;
let player2 = (Math.floor(Math.random()*6)) + 1 ;
console.log(player1);
console.log(player2);

switch (player1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
    default:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
}
switch (player2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
    default:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
}

let heading = document.querySelector(".container h1").textContent;
// document.querySelector(".container h1").textContent = "Its tie. Refresh again 😊";
// console.log(heading);

if (player1 > player2) {
    document.querySelector(".container h1").textContent = "🚩 player 1 wins !";
} 
else if (player1 < player2) {
    document.querySelector(".container h1").textContent = "🚩 player 2 wins !";
} 
else {
    document.querySelector(".container h1").classList.add("tie");
    document.querySelector(".container h1").textContent = "Its tie. Refresh again 😊";
}
console.log(document.querySelector(".container h1").textContent);