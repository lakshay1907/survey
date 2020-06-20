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
    
    text("Q-1 What is one change you would like to see? ",3,20);
    text("Q-2 What motivates you to learn more?",3,80);
    text("Q-3 What are the achievements you are proud of?",3,160);
    text("Q-4Does your teacher encourage you to perform better?",1,245);
    text("Q-5Does your teacher guide you in setting personal",1,300);
    text("targets and developing strategies to achieve that target?",3,320);
    text("Q-6 Was the survey useful to you?",3,400);
}


