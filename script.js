

//Bubble making Function//

function makeBubble() {
    let clutter = "";

    for (i = 1; i <= 130; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter = clutter + `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

//timer countdown function//

let timer = 30;
function runTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    }, 1000);
}

//Get new hit //

let hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    //originally it was `let rn = Math.floor(Math.random() * 10);` but , we need to change it , because we need to compare this hit value with Clicked value , but rn will not work out side function ...so we are taking `let hitrn = 0` outside and storing hit value in hitrn outside so that we can use it//
    document.querySelector("#hitVal").textContent = hitrn;
}

// save score //

let score = 0;
function saveScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

// bubble click function & Game Function //

document.querySelector("#pbtm").addEventListener("click", function (details) {
    let Clickednum = Number(details.target.textContent);
    if (Clickednum === hitrn) {
        saveScore();
        makeBubble();
        getNewHit();

    }
});





runTimer();
makeBubble();
getNewHit();

