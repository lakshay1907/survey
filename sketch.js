var ball;
var database;
var position;
var gameState = 0;
var playerCount ;
var form;
var player;
var game;
function setup(){
    createCanvas(500,600);
   
   database= firebase.database();
   game = new Game();
   game.start();
}


function draw(){
    background("white");
    fill(0);
    text("Enter Email",170,530);
    textSize(20);
    text("Q-1 Who was the first vice president of free India?",3,20);
    text("Q-2 Who was the first to lead the Indian army?",3,80);
    text("Q-3 For how many years british ruled India?",3,160);
    text("Q-4 Who led the salt march?",3,245);
    text("Q-5 Which country celebrate it's Independance Day ",3,300);
    text("one day before of India?",39,320);
    text("Q-6 Are you celebrating Independance?",3,400);
   
}


