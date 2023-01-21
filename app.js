// HOME SCORE
let homeScoreBtnOne = document.getElementById('home-score-btn-1');
let homeScoreBtnTwo = document.getElementById('home-score-btn-2');
let homeScoreBtnThree = document.getElementById('home-score-btn-3');

// GUEST SCORE
let guestScoreBtnOne = document.getElementById('guest-score-btn1');

let guestScoreBtnTwo = document.getElementById('guest-score-btn2');

let guestScoreBtnThree = document.getElementById('guest-score-btn3');

// HOME SCORE
let homeScoreEl = document.getElementById('homeScore');
let homeScore = 0;

// GUEST SCORE
let guestScoreEl = document.getElementById('guestScore');
let guestScore = 0;

// HOME SCORE
function addScore1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function addScore2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addScore3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// GUEST SCORE
function addOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
