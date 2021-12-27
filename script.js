let spaces = document.querySelectorAll('.space');
let turn = 'X';
let scores = {
        X:[],
        O:[]
    }
spaces.forEach((element) => {
    element.innerHTML = "";
    let winner = "";
    const checkWin = () =>{
        // console.log(scores[turn]);
        if (['a','d','g'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['b','e','h'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['c','f','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['a','b','c'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['d','e','f'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['g','h','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['a','e','i'].every(value => scores[turn].includes(value)) == true) {
            winner = turn;
            console.log(`The winner is ${winner}`);
            return winner;
        } else if (['g','e','c'].every(value => scores[turn].includes(value)) == true){
            winner = turn;
            console.log(`The winner is ${winner}`);
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
        } else if (turn === 'O'){
            scores[turn].push(element.id);
            element.innerHTML = 'O';
            if (scores[turn].length >= 3){checkWin()};
            turn = 'X'
        }
    }
});
});
const resetBtn = document.querySelector('.reset');
const reset = () => {
    turn = 'X';
    spaces.forEach(element => element.innerHTML = "");
    winner = "";
    scores['X'] = [];
    scores['O'] = [];
}
resetBtn.addEventListener('click', reset)


// console.log(['a','d','g'].every(value => scores[turn].includes(value)));
// console.log(['b','e','h'].every(value => scores[turn].includes(value)));
// console.log(['c','f','i'].every(value => scores[turn].includes(value)));
// console.log(['a','b','c'].every(value => scores[turn].includes(value)));
// console.log(['d','e','f'].every(value => scores[turn].includes(value)));
// console.log(['g','h','i'].every(value => scores[turn].includes(value)));
// console.log(['a','e','i'].every(value => scores[turn].includes(value)));
// console.log(['g','e','c'].every(value => scores[turn].includes(value)));