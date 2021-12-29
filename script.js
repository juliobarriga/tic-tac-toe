const spaces = document.querySelectorAll('.space');     // Selects all cells of the board and storest them in an array called spaces.
let turn = 'X';     // Defines the turn, starting the game with X going first.
let winner = "";    // Stores the winner, if there is no winner the variable stays empty.
let scores = {      // Defined object with the positions of the X and O markers.
    X:[],
    O:[]
}
// These functions plays the winning sound and adds a point to the scoreboard as well as changes the color to green for the winner and red for the looser.
const xWins = () => {
    const scoreXElement = document.querySelector('div.score-X p.player-score');
    scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    document.querySelector("h2").innerHTML = "X Wins!"
    document.querySelector('.score-O').style.backgroundColor = 'red';
    document.querySelector('.score-X').style.backgroundColor = 'green';
    winSound.play();
}
const oWins = () => {
    const scoreOElement = document.querySelector('div.score-O p.player-score');
    scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    document.querySelector("h2").innerHTML = "O Wins!"
    document.querySelector('.score-O').style.backgroundColor = 'green';
    document.querySelector('.score-X').style.backgroundColor = 'red';
    winSound.play();
}
// This functions plays the sound and assign backgound color orange to the score board when there is a draw.
const tieDraw = () => {
    document.querySelector("h2").innerHTML = "It's a draw!"
    document.querySelector('.score-O').style.backgroundColor = 'orange';
    document.querySelector('.score-X').style.backgroundColor = 'orange';
    tieSound.play();
}
// The sound variables and their files are defined.
const winSound = new Audio("./sounds/win.mp3");
winSound.volume = 0.10;
const clickSound = new Audio("./sounds/click.mp3");
clickSound.volume = 0.20;
const tieSound = new Audio("./sounds/tie.mp3");
tieSound.volume = 0.20;
// This function checks for the winner comparing the object "scores" to the array "winningConditions"
const checkWin = () =>{
    const winningConditions = [
        ['a','d','g'],
        ['b','e','h'],
        ['c','f','i'],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['a','e','i'],
        ['g','e','c']
    ]
    for (let i = 0; i < winningConditions.length; i++){
        if (winningConditions[i].every(value => scores[turn].includes(value))){     // If there is a winning match do the next.
            winner = turn;      // Assigns a value to the winner variable
            winner == 'X' ? xWins(): winner == 'O' ? oWins(): null;     // Runs the corresponding winning function for the winner.
            document.querySelector(`#${winningConditions[i][0]}`).style.backgroundColor = 'green'       // Makes the first cell green.
            setTimeout(() => {document.querySelector(`#${winningConditions[i][1]}`).style.backgroundColor = 'green'}, 400);     // Adds a delay of 400ms when setting the background color of the second cell
            setTimeout(() => {document.querySelector(`#${winningConditions[i][2]}`).style.backgroundColor = 'green'}, 800);     // Adds a delay of 800ms when setting the background color of the third cell
            break;      // Once there is a winning match it stops checking for more winning matches.
        }
    }
}
spaces.forEach((element) => {       // For each cell in the board will do the following...
    element.innerHTML = "";         // Clear the innerHTML text if there is any.
    element.addEventListener('click', ()=>{     // Will add an Event Listener only if the following criteria is true...
        if (element.innerHTML.length == 0 && winner.length == 0){       // If the cell is empty and if there is not a winner yet.
            clickSound.play();          // Plays the click sound when placing the marker.
            if (turn === 'X'){          // If is X's turn
                scores[turn].push(element.id);      // Will push the value of the id of the cell that the player selected and will store is in the X array of the "scores" object.
                element.innerHTML = 'X';            // Will write the X onto the cell.
                if (scores[turn].length >= 3){checkWin()};      // Only if there is already 3 markers on the board will start checking for a winner.
                if (winner.length == 0){        // If there is not a winner yet, will chenge the turn and the colors on the scoreboard to indicate who is next.
                    turn = 'O';     // Once the marker is placed it will change the turn to O.
                    document.querySelector("h2").innerHTML = "Turn -> O"
                    document.querySelector('.score-X').style.backgroundColor = 'white';
                    document.querySelector('.score-O').style.backgroundColor = 'yellow';
                }
            } else if (turn === 'O'){               // Same as before but for the O marker.
                scores[turn].push(element.id);
                element.innerHTML = 'O';
                if (scores[turn].length >= 3){checkWin()};
                if (winner.length == 0){
                    turn = 'X'
                    document.querySelector("h2").innerHTML = "Turn -> X"
                    document.querySelector('.score-O').style.backgroundColor = 'white';
                    document.querySelector('.score-X').style.backgroundColor = 'yellow';
                }
                
            }
        }
        if (winner.length == 0 && scores['X'].length == 5 && document.querySelector("h2").innerHTML !== "It's a draw!") {   // If all cells are filled and there is not a winner yet it will consider it a draw.
            tieDraw();      // Runs the tieDraw function.
        }
});
});
const resetGameBtn = document.querySelector('.reset-game');     //Starts the variable that contains the button "Reset Game"
// This function resets the scoreboard points, it does not clears the board.
const resetGame = () => {
    document.querySelectorAll('.space').forEach(space => space.style.backgroundColor = 'white');    //Makes every space of the board back to white color.
    document.querySelector('.score-O').style.backgroundColor = 'white';                             //Clears backgorund color of the O div that indicates the turn back to white.
    document.querySelector('.score-X').style.backgroundColor = 'yellow';                            //Sets the background color of the X div that indicates the first turn back to yellow.
    document.querySelector("h2").innerHTML = "Turn -> X"
    turn = 'X';                                                                                     //Restarts the first turn back to the X marker.
    spaces.forEach(element => element.innerHTML = "");                                              //Clears the markers on the board.
    winner = "";                                                                                    //Clears winner variable.
    scores['X'] = [];                                                                               //Empties the array containing the value of the positions of the X markers on the board.
    scores['O'] = [];                                                                               //Empties the array containing the value of the positions of the O markers on the board.
}
resetGameBtn.addEventListener('click', resetGame)       //This event listener calls the function "resetGame" when "Reset Game" buttons gets clicked.


const resetScoresBtn = document.querySelector('.reset-score');                  // This variable contains the button "Reset Scores"
// This function resets the scoreboard points, it does not clears the board.
const resetScores = () => {
    let scoreXElement = document.querySelector('div.score-X p.player-score');   //Defines the p element containing the X points on the scoreboard.
    let scoreOElement = document.querySelector('div.score-O p.player-score');   //Defines the p element containing the O points on the scoreboard.
    scoreXElement.innerHTML = 0;                                                // Set the X points on the scoreboard to 0
    scoreOElement.innerHTML = 0;                                                // Set the O points on the scoreboard to 0
}

resetScoresBtn.addEventListener('click', resetScores)   // This event listener calls the function resetScores when you click the Reset Scores button.