var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("yellow");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  if(allContestants!=undefined){
    fill("Blue")
    textSize(30);
    text("*Note:Consetants who answered correctly are highlighted in green colour",130,130);

    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer)
      fill("Green")
      else
      fill("red");
    }

  }
}
