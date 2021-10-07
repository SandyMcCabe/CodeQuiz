const questArr = [
    {
        Q: "Commonly used data types DO NOT include",
        a1: "1. strings",
        a2: "2. booleans",
        a3: "3. alerts",
        a4: "4. numbers",
        answer: "A3"
    },
    {
        Q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "1. JavaScript",
        a2: "2. terminal/bash",
        a3: "3. for loops",
        a4: "4. console.log",
        answer: "A4"
    },
    {
        Q: "The condition with an if / else statement is enclosed with _____",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
        answer: "A3"
    },
    {
        Q: "Arrays in JavaScript can be used to store ___",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
        answer: "A4"
    },
    {
        Q: "String values must be enclosed within ___ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curley brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
        answer: "A3"
    },
]

const highScores = [
    //initials, score
]

let gameActive = "";

// simple counter for the game questArr
let questCount= 0;

//set the time for 2 minutes (120 seconds)
let time = 120;


function countdown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // if the seconds are less than 10, add the leading 0
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (time >= 0 && gameActive) {
        //set the counter to appear on the screen
        document.getElementById("timer").innerHTML = `${minutes}: ${seconds}`;
        time--
    } else if (time < 0 && gameActive) {
        //you ran out of time
        document.getElementById("question").innerHTML = "You Ran Out of Time!";
        hideButtons();
    }
    return;
}

function ansClick(btnID) {

    //deduct points if they clicked the wrong answer
    if (btnID != questArr[questCount].answer) {
        document.getElementById("correct").innerHTML = "Incorrect"
        time = time - 10;
                console.log(time);
    }else {
        document.getElementById("correct").innerHTML = "Correct" 
    }

    //advance to the next question
    questCount++;

    //call the function to display the next question
    if (questCount< questArr.length) {
        runQuiz();
    } else {
        // or, set the status to ended, stop the clock
        //and call the function to deal with the score part
        gameActive = false;
        clearInterval(countdown);
        score = time;
        endGame();
    }

}

var endGame = function () {
    
    let score = time;
    console.log(score);

    document.getElementById("question").innerHTML = "Great Job!  Your final score is " + score;
    hideButtons();
}

var runQuiz = function () {

    //populate the questArr and answers from the array
    if (questCount< questArr.length) {
        document.getElementById("question").innerHTML = questArr[questCount].Q;
        document.getElementById("A1").innerHTML = questArr[questCount].a1;
        document.getElementById("A2").innerHTML = questArr[questCount].a2;
        document.getElementById("A3").innerHTML = questArr[questCount].a3;
        document.getElementById("A4").innerHTML = questArr[questCount].a4;
    }
}

//hide the buttons to prevent erroneous clicks
let hideButtons = function () {
    document.getElementById("A1").style.visibility = 'hidden';
    document.getElementById("A2").style.visibility = 'hidden';
    document.getElementById("A3").style.visibility = 'hidden';
    document.getElementById("A4").style.visibility = 'hidden';
    document.getElementById("timer").style.visibility = 'hidden';
    document.getElementById("correct").style.visibility = 'hidden';
}


document.getElementById("startBtn").onclick = function Start() {
    //on button click
    //start at the first question
    questCount= 0;

        // activate the quiz
        gameActive = true;

    // set the timer for 2 minutes, and refresh every second
    time = 120;
    setInterval(countdown, 1000);

    //show the buttons
    document.getElementById("A1").style.visibility = 'visible';
    document.getElementById("A2").style.visibility = 'visible';
    document.getElementById("A3").style.visibility = 'visible';
    document.getElementById("A4").style.visibility = 'visible';
    document.getElementById("timer").style.visibility = 'visible';
    document.getElementById("correct").style.visibility = 'visible';

    //  then display the questArr
    runQuiz()
};

hideButtons();
