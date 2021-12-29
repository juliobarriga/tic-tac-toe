# Tic-Tac-Toe

## Technologies Used
The technologies used for this project are:
- HTML
- CSS
- Javascript

## MVP requirements
- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- You can use GitHub Pages for deploying your project
- Use semantic markup for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

## Extra Features
- Keep track of multiple game rounds with a win, lose and tie counter
- Involve Audio in your game
- Make your site fully responsive so that it is playable from a mobile phone
- Get inventive with your styling e.g. use hover effects or animations

## User Stories
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page
### - Extra
- As a user, I should be able to see the scoreboard with the points of each player
- as a user, I should be able to clear the board by clicking a button
- As a user, I should be able to clear the scoreboard points
- As a user, I should be able to hear a sound when I win or there is a draw

## Wireframe
![wireframe_tictactoe](https://user-images.githubusercontent.com/48302995/147678111-9a032fae-463c-47f6-a897-d6914574439c.png)

## File Structure
```
.
├── sounds
│   ├── click.mp3
│   ├── tie.mp3
│   └── win.mp3
│
├── index.html
├── style.css
├── script.js
└── README.md
```
## Development
### HTML
The HTML file is divided into 3 main elements:
- The board
- The scoreboard
- The reset buttons
#### The board
The board is made of 1 div with 9 child div elements to represent each cell.
Each child div, has a unique id to indicate the position of the cell:
``` html
<div class="board">
    <div class="space top left" id="a">
    </div>  
    <div class="space top center-column" id="b">
    </div>
    <div class="space top right" id="c">
    </div>  
    <div class="space center-row left" id="d">
    </div>
    <div class="space center-row center-column" id="e">
    </div>
    <div class="space center-row right" id="f">
    </div>
    <div class="space bottom left" id="g">
    </div> 
    <div class="space bottom center-column" id="h">
    </div>
    <div class="space bottom right" id="i">
    </div>
</div>
```
#### The scoreboard
The scoreboard is made of 1 div containing 2 child div elements to represent the X and the O score
```html
<div class="scoreboard">
    <div class="score score-X">
        <h3 class="player">X</h2>
        <p class="player-score">0</p>
    </div>
    <div class="score score-O">
        <h3 class="player">O</h2>
        <p class="player-score">0</p>
    </div>
</div>
```
#### The reset buttons
The reset buttons are contained within a parent div for easy costumation within the css.
```html
<div class="reset-buttons">
    <button class="reset-game" type="button">Reset Game</button>
    <button class="reset-score" type="button">Reset Scores</button>
</div>
```
### CSS
To arrange the board in the correct position and centered I used grid, and flexbox for each space div, this way every content of the cells would be centered. The same was done for the score board.
Finally, for the reset buttons only flexbox was used to keep them centered.

![css_layout](https://user-images.githubusercontent.com/48302995/147681312-7755c58d-3f71-40d7-a3e9-31c160cc0755.png)

### Javascript
#### Winning conditions
The way the program checks for the winner is by comparing two arrays, 1 of the winning combination that contains the id's that we set up in the html section; the second array is either the X or O position saver array.
```javascript
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
```
#### Event listeners
The event listeners for each cell space are created depending if there is a winner or not as well as if there is already a marker on the cell or not, to do that we used the following code:
```javascript
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
```

# Usage
- To play the game, the X will always go first, when you first load up the game, it will show you that the "X goes first"and a yellow indicator on the scoreboard.

![first_turn](https://user-images.githubusercontent.com/48302995/147682563-6ab94c02-0ddc-4e36-a799-cb4cacd34830.png)

- To place a marker you have to click on the desired cell, if there is already a marker on the cell the game wont tell you place a marker again.
- Once the first player placed their marker, the turn indicator will change to indicate whose turn is next, the color indicator will change as well.

![second-turn](https://user-images.githubusercontent.com/48302995/147682812-55d049d8-ac8f-4534-8891-2fe04796bc5c.png)

- When there is a winner (there are three consecutive markers either horizontally. vertically or in diagonal) the winning cells will turn green, the scoreboard will ad a point to the winner marker and the background color of the scoreboard will change to green for the winner and red for the looser.

![winner](https://user-images.githubusercontent.com/48302995/147683092-ba6525c5-7f9f-4d65-b32b-7969b71360a0.png)

- If all the cells are filled up and there is not a winner, the scoreboard will turn orange and it will indicate that it's a draw.

![draw](https://user-images.githubusercontent.com/48302995/147683246-412527f2-746d-45d8-a950-e1472f0b99b0.png)

- To clear the board and start a new round you need to click the "Reset Game" button.
- If you want to clear the scoreboard points you need to click the "Reset Scores"button.
