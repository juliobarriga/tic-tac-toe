let spaces = document.querySelectorAll('.space');
let turn = 'X';
spaces.forEach((element) => {
    element.innerHTML = "";
    element.addEventListener('click', ()=>{
    if (element.innerHTML.length == ""){
        if (turn === 'X'){
        element.innerHTML = 'X';
        turn = 'O';
        } else if (turn === 'O'){
        element.innerHTML = 'O';
        turn = 'X'
        }
    }
});
});
const resetBtn = document.querySelector('.reset');
const reset = () => {
    turn = 'X';
    spaces.forEach(element => element.innerHTML = "");
}
resetBtn.addEventListener('click', reset)