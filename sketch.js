var tom,jerry;
var player,game,form;
var gameState,playerCount;
function preload(){

}
function setup(){
    canvas=createCanvas(displayWidth-20 ,displayHeight-30);
    database =firebase.database();
    gameState=0;
    game=new Game();
    game.getState();
    game.start();
}
function draw(){
    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        game.end();
    }
}