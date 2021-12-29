const spaces = document.querySelectorAll('.space');
let turn = 'X';
let winner = "";
let scores = {
        X:[],
        O:[]
    }
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
    if (winningConditions[i].every(value => scores[turn].includes(value))){
        winner = turn;
        winner == 'X' ? xWins():oWins;
        document.querySelector(`#${winningConditions[i][0]}`).style.backgroundColor = 'green';
        document.querySelector(`#${winningConditions[i][1]}`).style.backgroundColor = 'green';
        document.querySelector(`#${winningConditions[i][2]}`).style.backgroundColor = 'green';
    }
}
let xWins = () => {
    let scoreXElement = document.querySelector('div.score-X p.player-score');
    scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    document.querySelector('.score-O').style.backgroundColor = 'red';
    document.querySelector('.score-X').style.backgroundColor = 'green';
}
let oWins = () => {
    let scoreOElement = document.querySelector('div.score-O p.player-score');
    scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    document.querySelector('.score-O').style.backgroundColor = 'green';
    document.querySelector('.score-X').style.backgroundColor = 'red';
}
const checkWin = () =>{
    // let scoreXElement = document.querySelector('div.score-X p.player-score');
    // let scoreOElement = document.querySelector('div.score-O p.player-score');
    // console.log(scores[turn]);
    //// if (['a','d','g'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#d').style.backgroundColor = 'green';
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#d').style.backgroundColor = 'green';
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['b','e','h'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#b').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#h').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#b').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#h').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['c','f','i'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //         document.querySelector('#f').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //         document.querySelector('#f').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['a','b','c'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#b').style.backgroundColor = 'green';
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#b').style.backgroundColor = 'green';
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['d','e','f'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#d').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#f').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#d').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#f').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['g','h','i'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //         document.querySelector('#h').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //         document.querySelector('#h').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['a','e','i'].every(value => scores[turn].includes(value))) {
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#a').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#i').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    // } else if (['g','e','c'].every(value => scores[turn].includes(value))){
    //     winner = turn;
    //     if (winner == 'X') {
    //         scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
    //         xWins();
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //     } else if (winner == 'O') {
    //         scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
    //         oWins();
    //         document.querySelector('#g').style.backgroundColor = 'green';
    //         document.querySelector('#e').style.backgroundColor = 'green';
    //         document.querySelector('#c').style.backgroundColor = 'green';
    //     } 
    //     return winner;
    //// }
    
    for (let i = 0; i < winningConditions.length; i++){
        if (winningConditions[i].every(value => scores[turn].includes(value))){
            winner = turn;
            winner == 'X' ? xWins():oWins;
            document.querySelector(`#${winningConditions[i][0]}`).style.backgroundColor = 'green';
            document.querySelector(`#${winningConditions[i][1]}`).style.backgroundColor = 'green';
            document.querySelector(`#${winningConditions[i][2]}`).style.backgroundColor = 'green';
        }
    }
}
spaces.forEach((element) => {
    element.innerHTML = "";
    element.addEventListener('click', ()=>{
        if (element.innerHTML.length == 0 && winner.length == 0){
            if (turn === 'X'){
                scores[turn].push(element.id);
                console.log(scores);
                element.innerHTML = 'X';
                if (scores[turn].length >= 3){checkWin()};
                turn = 'O';
                if (winner.length == 0){
                    document.querySelector('.score-X').style.backgroundColor = 'white';
                    document.querySelector('.score-O').style.backgroundColor = 'yellow';
                }
                
            } else if (turn === 'O'){
                scores[turn].push(element.id);
                console.log(scores);
                element.innerHTML = 'O';
                if (scores[turn].length >= 3){checkWin()};
                turn = 'X'
                if (winner.length == 0){
                    document.querySelector('.score-O').style.backgroundColor = 'white';
                    document.querySelector('.score-X').style.backgroundColor = 'yellow';
                }
                
            }
        }
});
});

const resetGameBtn = document.querySelector('.reset-game');     //Starts the variable that contains the button "Reset Game"
const resetGame = () => {
    document.querySelectorAll('.space').forEach(space => space.style.backgroundColor = 'white');    //Makes every space of the board back to white color.
    document.querySelector('.score-O').style.backgroundColor = 'white';                             //Clears backgorund color of the O div that indicates the turn back to white.
    document.querySelector('.score-X').style.backgroundColor = 'yellow';                            //Sets the background color of the X div that indicates the first turn back to yellow.
    turn = 'X';                                                                                     //Restarts the first turn back to the X marker.
    spaces.forEach(element => element.innerHTML = "");                                              //Clears the markers on the board.
    winner = "";                                                                                    //Clears winner variable.
    scores['X'] = [];                                                                               //Empties the array containing the value of the positions of the X markers on the board.
    scores['O'] = [];                                                                               //Empties the array containing the value of the positions of the O markers on the board.
}
resetGameBtn.addEventListener('click', resetGame)       //This event listener calls the function "resetGame" when "Reset Game" buttons gets clicked.

// This variable contains the button "Reset Scores"
const resetScoresBtn = document.querySelector('.reset-score');
// This function resets the scoreboard points, it does not clears the board.
const resetScores = () => {
    let scoreXElement = document.querySelector('div.score-X p.player-score');   //Defines the p element containing the X points on the scoreboard.
    let scoreOElement = document.querySelector('div.score-O p.player-score');   //Defines the p element containing the O points on the scoreboard.
    scoreXElement.innerHTML = 0;                                                // Set the X points on the scoreboard to 0
    scoreOElement.innerHTML = 0;                                                // Set the O points on the scoreboard to 0
}
// This event listener calls the function resetScores when you click the Reset Scores button.
resetScoresBtn.addEventListener('click', resetScores)