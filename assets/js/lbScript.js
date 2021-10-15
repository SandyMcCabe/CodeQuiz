//initials, score
let scoresArr;

let load = function() {
    scoresArr = JSON.parse(localStorage.getItem("Scores"));
   
    // if it's empty,
    if (!scoresArr) {
        const heading = "There are no high scores"
                document.getElementById(1).innerHTML = heading;   
    }else {
        for(i=0; i < scoresArr.length; i++) {
            let rank = i + 1;
            let score = scoresArr[i].score;
            let initials = scoresArr[i].initials;

            let scoreLine = rank + ": " + score + " / " + initials;
            
            document.getElementById(rank).innerHTML = scoreLine       
        }
    }
};

document.getElementById("clearBtn").onclick = function Start() {
    scoresArr = [];
    localStorage.setItem("Scores", JSON.stringify(scoresArr));
    load();
}

load();