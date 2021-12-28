let spaces = document.querySelectorAll('.space');
let turn = 'X';
let winner = "";
let scores = {
        X:[],
        O:[]
    }
let xWins = () => {
    document.querySelector('.score-O').style.backgroundColor = 'red';
    document.querySelector('.score-X').style.backgroundColor = 'green';
}
let oWins = () => {
    document.querySelector('.score-O').style.backgroundColor = 'green';
    document.querySelector('.score-X').style.backgroundColor = 'red';
}
spaces.forEach((element) => {

    element.innerHTML = "";
    
    let scoreXElement = document.querySelector('div.score-X p.player-score');
    let scoreOElement = document.querySelector('div.score-O p.player-score');

    const checkWin = () =>{
        // console.log(scores[turn]);
        if (['a','d','g'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#d').style.backgroundColor = 'green';
                document.querySelector('#g').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#d').style.backgroundColor = 'green';
                document.querySelector('#g').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['b','e','h'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#b').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#h').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#b').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#h').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['c','f','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#c').style.backgroundColor = 'green';
                document.querySelector('#f').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#c').style.backgroundColor = 'green';
                document.querySelector('#f').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['a','b','c'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#b').style.backgroundColor = 'green';
                document.querySelector('#c').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#b').style.backgroundColor = 'green';
                document.querySelector('#c').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['d','e','f'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#d').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#f').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#d').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#f').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['g','h','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#g').style.backgroundColor = 'green';
                document.querySelector('#h').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#g').style.backgroundColor = 'green';
                document.querySelector('#h').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['a','e','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#a').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#i').style.backgroundColor = 'green';
            } 
            return winner;
        } else if (['g','e','c'].every(value => scores[turn].includes(value)) == true){
            winner = turn;
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                xWins();
                document.querySelector('#g').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#c').style.backgroundColor = 'green';
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
                document.querySelector('#g').style.backgroundColor = 'green';
                document.querySelector('#e').style.backgroundColor = 'green';
                document.querySelector('#c').style.backgroundColor = 'green';
            } 
            return winner;
        }
    }
    element.addEventListener('click', ()=>{
        if (element.innerHTML.length == 0 && winner.length == 0){
            if (turn === 'X'){
                scores[turn].push(element.id);
                element.innerHTML = 'X';
                if (scores[turn].length >= 3){checkWin()};
                turn = 'O';
                if (winner.length == 0){
                    document.querySelector('.score-X').style.backgroundColor = 'white';
                    document.querySelector('.score-O').style.backgroundColor = 'yellow';
                }
                
            } else if (turn === 'O'){
                scores[turn].push(element.id);
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
const resetGameBtn = document.querySelector('.reset-game');
const resetGame = () => {
    document.querySelectorAll('.space').forEach(space => space.style.backgroundColor = 'white');
    document.querySelector('.score-O').style.backgroundColor = 'white';
    document.querySelector('.score-X').style.backgroundColor = 'yellow';
    turn = 'X';
    spaces.forEach(element => element.innerHTML = "");
    winner = "";
    scores['X'] = [];
    scores['O'] = [];
}
resetGameBtn.addEventListener('click', resetGame)
const resetScoresBtn = document.querySelector('.reset-score');
const resetScores = () => {
    let scoreXElement = document.querySelector('div.score-X p.player-score');
    let scoreOElement = document.querySelector('div.score-O p.player-score');
    scoreXElement.innerHTML = 0;
    scoreOElement.innerHTML = 0;
}
resetScoresBtn.addEventListener('click', resetScores)