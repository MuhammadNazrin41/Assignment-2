
var players = [{name: 'Player 1',position: 0, turn: 0},
               {name: 'Player 2',position: 0, turn: 1}];

var ranButton1 = document.getElementById('rand1but');
var ranButton2 = document.getElementById('rand2but');

ranButton1.addEventListener('click', function(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var num1 = randomNumber1 ;
  document.getElementById('pos1').innerHTML = CurrentPos1(num1);

});
ranButton2.addEventListener('click', function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var num2 = randomNumber ;
  document.getElementById('pos2').innerHTML = CurrentPos(num2);
});


function CurrentPos1(num1){

  var newPos1 = players[0].position + num1;
  players[0].position =  newPos1;
  console.log(newPos1);

 if(players.turn === 0)
 console.log(players.name);


  if (players[0].position === 15){
     players[0].position = 5;
     console.log("No!!Very unlucky, you fall to position 5");
     }


  if (players[0].position === 23){
     players[0].position = 16;
     console.log("No!!Very unlucky, you fall to position 16");
     }


  if (players[0].position === 8){
      players[0].position = 15;
      console.log("Yay you found the ladder!! advance to positon 15");
  }

  if (players[0].position === 19){
      players[0].position = 24;
      console.log("Yay you found the ladder!! advance to positon 24");
    }

  else  if (players[0].position > 25)
    return ("Congratulation you win this round!!");


 return "You got " + num1 + ". Proceed to box " + players[0].position;


}
function CurrentPos(num2){

  var newPos = players[1].position + num2;
  players[1].position =  newPos;
  console.log(newPos);

 if(players.turn === 1)
 console.log(players.name);


  if (players[1].position === 15){
     players[1].position = 5;
    console.log("No!!Very unlucky, you fall to position 5");
     }


  if (players[1].position === 23){
     players[1].position = 16;
    console.log("No!!Very unlucky, you fall to position 16");
     }


  if (players[1].position === 8){
      players[1].position = 15;
    console.log("Yay you found the ladder!! advance to positon 15");
  }

  if (players[1].position === 19){
      players[1].position = 24;
    console.log("Yay you found the ladder!! advance to positon 24");
    }

  else  if (players[1].position > 25)
    return ("Congratulation you win this round!!");


 return "You got " + num2 + ". Proceed to box " + players[1].position;


}
