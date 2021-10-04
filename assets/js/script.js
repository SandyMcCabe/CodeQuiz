const questions = [
    {Q: "Commonly used data types DO NOT include", 
    a1: "1. strings", 
    a2: "2. booleans",
    a3: "3. alerts",
    a4: "4. numbers",
    answer: "3"},
    
    {Q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    a1: "1. JavaScript", 
    a2: "2. terminal/bash",
    a3: "3. for loops",
    a4: "4. console.log",
    answer: "4"},

    {Q: "The condition with an if / else statement is enclosed with _____", 
    a1: "1. quotes",
    a2: "2. curly brackets",
    a3: "3. parenthesis",
    a4: "4. square brackets",
    answer: "3"},

    {Q: "Arrays in JavaScript can be used to store ___", 
    a1: "1. numbers and strings", 
    a2: "2. other arrays",
    a3: "3. booleans",
    a4: "4. all of the above",
    answer: "4"},
    
    {Q: "String values must be enclosed within ___ when being assigned to variables.", 
    a1: "1. commas", 
    a2: "2. curley brackets",
    a3: "3. quotes",
    a4: "4. parenthesis",
    answer: "3"},
]

const highScores = [
    //initials, score
]

//set the time for 2 minutes (120 seconds)
let time = 120;

function countdown() {
     
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // if the seconds are less than 10, add the leading 0
    seconds = seconds < 10 ? "0" + seconds : seconds;


    //set the counter to appear on the screen
    document.getElementById("timer").innerHTML = `${minutes}: ${seconds}`;
    time--
   
}
 

// var runQuiz = function (event) {
document.getElementById("startBtn").onclick = function runQuiz() {
    //on button click

    // call the countdown function every second
    setInterval(countdown, 1000);   
    
      // display the questions
    for (i = 0; i < questions.length; i++) {
    
        document.getElementById("question").innerHTML = questions[i].Q;
        document.getElementById("A1").innerHTML = questions[i].a1;
        document.getElementById("A2").innerHTML = questions[i].a2;
        document.getElementById("A3").innerHTML = questions[i].a3;
        document.getElementById("A4").innerHTML = questions[i].a4;
       
        //figure out what button they pushed 
        //check it against the answer
        //and update the time accordingly
    }
// }else {
    //you ran out of time
    // document.getElementById("question").innerHTML = "You Ran Out of Time!";
    // document.getElementById("A1").innerHTML = '';
    // document.getElementById("A2").innerHTML = "";
    // document.getElementById("A3").innerHTML = "";
    // document.getElementById("A4").innerHTML = "";
}


