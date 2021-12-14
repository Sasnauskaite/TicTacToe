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
  var text = "<h2>" + score1 + ':' + score2 + "</h2>";
  document.getElementById("playerWins").innerHTML = text;
  player1=document.getElementById("player111").value;
  player2=document.getElementById("player222").value;
  text = "<h2>" + player1 + "</h2>";
  document.getElementById("player100").innerHTML=text;
  text = "<h2>" + player2 + "</h2>";
  document.getElementById("player200").innerHTML=text;
}
function move(val) {
  document.getElementById(val).innerHTML="<h1>"+plr[player_]+"</h1>";
  document.getElementById(val).value="<h1>"+plr[player_]+"</h1>";
  if(check()) {
    winner();
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
    var text = "<h2>" + score1 + ':' + score2 + "</h2>";
    document.getElementById("playerWins").innerHTML = text;
    document.getElementById("board").innerHTML="<h1>Laimėjo "+ winnerName+ "!</h1><br>";
    document.getElementById("board").innerHTML+="<input type='submit' class='PLAYMORE' id='submit' value='Žaisti toliau' onclick='playMore()'></input>"
  }
  else if(winnerName==player2) {
    score2+=1;
    text = "<h2>" + score1 + ':' + score2 + "</h2>";
    document.getElementById("playerWins").innerHTML = text;
    document.getElementById("board").innerHTML="<h1>Laimėjo "+ winnerName+ "!</h1><br>";
    document.getElementById("board").innerHTML+="<input type='button' class='PLAYMORE' id='submit' value='Žaisti toliau' onclick='playMore()'></input>"
  }
}
function playMore() {
  document.getElementById('board').innerHTML = 
        "<table>"+
            "<tr>"+
                "<td class='place game7' value='' id='7' onclick='move('7')'></td>"+
                "<td class='place game8' value='' id='8' onclick='move('8')'></td>"+
                "<td class='place game9' value='' id='9' onclick='move('9')'></td>"+
            "</tr>"+
            "<tr>"+
                "<td class='place game4' value='' id='4' onclick='move('4')'></td>"+
                "<td class='place game5' value='' id='5' onclick='move('5')'></td>"+
                "<td class='place game6' value='' id='6' onclick='move('6')'></td>"+
            "</tr>"+
            "<tr>"+
                "<td class='place game1' value='' id='1' onclick='move('1')'></td>"+
                "<td class='place game2' value='' id='2' onclick='move('2')'></td>"+
                "<td class='place game3' value='' id='3' onclick='move('3')'></td>"+
            "</tr>"+
        "</table>";
}
divHide("registration");
divHide("fullGame");
function divHide(variable) {
  var x = document.getElementById(variable);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}