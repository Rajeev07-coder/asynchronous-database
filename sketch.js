var dataBase;
var canvas;
var gameState = 0;
var playerCount;
var form,player,game;


function setup(){
    dataBase = firebase.database();
    canvas = createCanvas(500,500);
    game = new Game();
    game.getState();
    game.Start();
}

function draw(){
   
}

