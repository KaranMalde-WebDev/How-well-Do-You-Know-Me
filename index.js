 var readlinesync = require('readline-sync')
 var score = 0;

  var welcome = readlinesync.question("welcome to Quiz game !!" )

  var names = readlinesync.question("Please enter your name ? ")

  console.log("WELCOME TO QUIZ SHOW "+ names )
// var game = readlinesync.question("welcome to game")




//  questionone = {
//   question : "what is your name",
//   answer : "karan",
// }

// questionTwo = {
//   question :"where do you live",
//   answer : "mumbai",
// }

var questions = [ {
  question : "what is my job role ",
  answer : "web developer",
},{
  question :"where do I live ",
  answer : "mumbai",
}]


console.log(questions[0].answer)

function play(questions,answer)
{
  var useranswer = readlinesync.question(questions)
  if(useranswer===answer)
  {
    console.log("you win")
    score++
  }
  else
  {
    console.log("you lose")
  }

  console.log("ypur score is " + score)
 
  console.log("--------------------")
}

for(i=0;i<questions.length;i++)
{
  var question = questions[i]
    play(question.question,question.answer)
}


var highscore = [
  {
    name : "mihir",
    score :"2"
  },
  {
    name : "deep",
    score:"1"
  },
  {
    name:names,
    score:score,
  }
]

// highscore.sort(function(a,b)
// {
//   return a.score-b.score;
// }
// );



for(i=0;i<highscore.length;i++)
{
  console.log("LeaderBoard")
  console.log("Name : " +highscore[i].name)
  console.log("SCORE : "+ highscore[i].score)
}




