let spaces = document.querySelectorAll('.space');
let turn = 'X';
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
    let winner = "";
    let scoreXElement = document.querySelector('div.score-X p.player-score');
    let scoreOElement = document.querySelector('div.score-O p.player-score');

    const checkWin = () =>{
        // console.log(scores[turn]);
        if (['a','d','g'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['b','e','h'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['c','f','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['a','b','c'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['d','e','f'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['g','h','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['a','e','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        } else if (['g','e','c'].every(value => scores[turn].includes(value)) == true){
            winner = turn;
            console.log(`The winner is ${winner}`);
            if (winner == 'X') {
                scoreXElement.innerHTML = parseInt(scoreXElement.innerHTML) + 1;
                console.log(scoreXElement.innerHTML)
                xWins();
            } else if (winner == 'O') {
                scoreOElement.innerHTML = parseInt(scoreOElement.innerHTML) + 1;
                oWins();
            } 
            return winner;
        }
    }
    element.addEventListener('click', ()=>{
    if (element.innerHTML.length == ""){
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


// console.log(['a','d','g'].every(value => scores[turn].includes(value)));
// console.log(['b','e','h'].every(value => scores[turn].includes(value)));
// console.log(['c','f','i'].every(value => scores[turn].includes(value)));
// console.log(['a','b','c'].every(value => scores[turn].includes(value)));
// console.log(['d','e','f'].every(value => scores[turn].includes(value)));
// console.log(['g','h','i'].every(value => scores[turn].includes(value)));
// console.log(['a','e','i'].every(value => scores[turn].includes(value)));
// console.log(['g','e','c'].every(value => scores[turn].includes(value)));