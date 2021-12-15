var player_=0;
var winnerName="";
var score1=0;
var score2=0;
var turns=0;
var player1="player1";
var player2="player2";
var win=[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], 
  [1, 4, 7], 
  [2, 5, 8], 
  [3, 6, 9], 
  [1, 5, 9],
  [3, 5, 7]
];
var plr=['X', 'O'];
function saveNames() {
  score1=0;
  score2=0;
  var text = "<h1>" + score1 + ':' + score2 + "</h1>";
  document.getElementById("playerWins").innerHTML = text;
  document.getElementById("playerWins1").innerHTML = text;
  player1=document.getElementById("player111").value;
  player2=document.getElementById("player222").value;
  text = "<h2>" + player1 + "</h2>";
  document.getElementById("player100").innerHTML=text;
  document.getElementById("player10").innerHTML=text;
  text = "<h2>" + player2 + "</h2>";
  document.getElementById("player200").innerHTML=text;
  document.getElementById("player20").innerHTML=text;
}
function move(val) {
  document.getElementById(val).innerHTML="<h1>"+plr[player_]+"</h1>";
  document.getElementById(val).value="<h1>"+plr[player_]+"</h1>";
  if(check()) {
    winner();
  }
  else if(tie()) {
    noWin();
  }
  else {
    turns+=1;
    next();
  }
}
function next() {
  if(player_==0) {
    player_=1;
  }
  else {
    player_=0;
  }
}
function tie() {
  var notfilled=9;
  var ties=false;
  for(let i=0; i<9; i++) {
    if(document.getElementById(i+1).value=="<h1>X</h1>") {
      notfilled=notfilled-1;
    }
    else if(document.getElementById(i+1).value=="<h1>O</h1>") {
      notfilled=notfilled-1;
    }
  }
  if(notfilled == 0) {
    ties=true;
  }
  return ties;
}
function check() {
  var endGame=false;
  var j=0;
  for(let i=0; i<8; i++) {
    if(document.getElementById(win[i][j]).value=='<h1>X</h1>' && document.getElementById(win[i][j+1]).value=='<h1>X</h1>' && 
    document.getElementById(win[i][j+2]).value=='<h1>X</h1>') {
      winnerName=player1;
      endGame=true;
    }
    else if(document.getElementById(win[i][j]).value=='<h1>O</h1>' && document.getElementById(win[i][j+1]).value=='<h1>O</h1>' && 
    document.getElementById(win[i][j+2]).value=='<h1>O</h1>') {
      winnerName=player2;
      endGame=true;
    }
  }
  return endGame;
}
function winner() {
  if(winnerName==player1) {
    score1+=1;
    var text = "<h1>" + score1 + ':' + score2 + "</h1>";
    document.getElementById("playerWins").innerHTML = text;
    document.getElementById("playerWins1").innerHTML = text;
    document.getElementById("winning").innerHTML="<h1>Laimėjo "+ winnerName+ "!</h1><br>";
    document.getElementById("winning").innerHTML+="<input type='submit' class='PLAYMORE' id='submit' value='Žaisti dar' onclick='playMore(), divHide('winning')'></input>";
    divHide("winning");
  }
  else if(winnerName==player2) {
    score2+=1;
    text = "<h1>" + score1 + ':' + score2 + "</h1>";
    document.getElementById("playerWins").innerHTML = text;
    document.getElementById("playerWins1").innerHTML = text;
    document.getElementById("winning").innerHTML="<h1>Laimėjo "+ winnerName+ "!</h1><br>";
    document.getElementById("winning").innerHTML+="<input type='button' class='PLAYMORE' id='submit' value='Žaisti dar' onclick='playMore(), divHide('winning')'></input>";
    divHide("winning");
  }
}
function noWin() {
  var text = "<h1>" + score1 + ':' + score2 + "</h1>";
  document.getElementById("playerWins").innerHTML = text;
  document.getElementById("playerWins1").innerHTML = text;
  document.getElementById("winning").innerHTML="<h1>Lygiosios!</h1><br>";
  document.getElementById("winning").innerHTML+="<input type='button' class='PLAYMORE' id='submit' value='Žaisti dar' onclick='playMore(), divHide('winning')'></input>";
  divHide("winning");
}
function playMore() {
  document.getElementById('1').innerHTML = undefined;
  document.getElementById('2').innerHTML = undefined;
  document.getElementById('3').innerHTML = undefined;
  document.getElementById('4').innerHTML = undefined;
  document.getElementById('5').innerHTML = undefined;
  document.getElementById('6').innerHTML = undefined;
  document.getElementById('7').innerHTML = undefined;
  document.getElementById('8').innerHTML = undefined;
  document.getElementById('9').innerHTML = undefined;
}
divHide("registration");
divHide("fullGame");
divHide("winning");
divHide("stopped");
function divHide(variable) {
  var x = document.getElementById(variable);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function stopGame() {
  divHide("fullGame");
  divHide("stopped");
}
function playNew() {
  divHide("registration");
  divHide("stopped");
}