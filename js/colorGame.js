//variables
let mode = "hard";

//select elemts
let h1 = document.querySelector("h1");
let randomRGB = document.querySelector("#randomRGB");
let newColors = document.querySelector("#newColors");
let message = document.querySelector("#message");
let modeButtons = document.querySelectorAll(".mode");
let squares = document.querySelectorAll(".square");
let secondRow = document.querySelector("#secondRow");

//create initial grid
generateNewColors();

//manage click on button "newColors"
newColors.addEventListener("click", generateNewColors)

//manage click on mode buttons
for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "easy" ? mode = "easy" : mode = "hard";
        generateNewColors();
    })
}

//manage click on squares
for (let i = 0; i < squares.length; i++) {
    //add event listeners
    squares[i].addEventListener("click", function () {
        //save clicked color
        let pickedColor = this.style.backgroundColor;
        //correct or wrong color picked
        if (pickedColor === randomRGB.textContent) {
            //"correct" span appears
            message.textContent = "Correct !";
            //changing upper background color to picked square color
            h1.style.backgroundColor = pickedColor;
            //setting the background color of all squares to picked color
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;
            }
            //change display of newColor button
            newColors.textContent = "Play Again ?";
        } else {
            //change display of newColor button
            message.textContent = "Try Again"
            //setting color of clicked square to default background color --> square "disappears"
            this.style.backgroundColor = "#232323";
        }
    })
}

//Helper Functions

// Random Number Generator
function generateRandomNumber(maxPlusOneValue) {
    return Math.floor(Math.random() * maxPlusOneValue)
}
//Random Color Generator
function generateColor() {
    return "rgb(" + generateRandomNumber(256) + ", " + generateRandomNumber(256) + ", " + generateRandomNumber(256) + ")";
}

//Populates Grid 
function generateNewColors() {
    if (mode === "easy") {
        //hide second row
        secondRow.classList.add("hide");
        //populate first half of squares with random colors
        for (let i = 0; i < Math.floor(squares.length / 2); i++) {
            squares[i].style.backgroundColor = generateColor();
        }
        //picking color of one random square of those which were just generated
        randomRGB.textContent = squares[generateRandomNumber(Math.floor(squares.length / 2))].style.backgroundColor;
    } else {
        //show second row
        secondRow.classList.remove("hide")
        //populate all squares with random colors
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = generateColor();
        }
        //picking color of one random square of those which were just generated
        randomRGB.textContent = squares[generateRandomNumber(squares.length)].style.backgroundColor;
    }
    //set display of newColors button
    newColors.textContent = "NEW COLORS"
    //reset upper background color back to default
    h1.style.backgroundColor = "steelblue";
    //removing the "try again" or "correct" span
    message.textContent = "";
}








