let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

function add1home() {
    homeScore += 1
    homeScoreEl.innerHTML =  homeScore
}

function add2home() {
    homeScore += 2
    homeScoreEl.textContent =  homeScore
}

function add3home() {
    homeScore += 3
    homeScoreEl.textContent =  homeScore
}

function add1guest() {
    guestScore += 1
    guestScoreEl.textContent =  guestScore
}

function add2guest() {
    guestScore += 2
    guestScoreEl.textContent =  guestScore
}

function add3guest() {
    guestScore += 3
    guestScoreEl.textContent =  guestScore
}

function newgame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent =  homeScore
    guestScoreEl.textContent =  guestScore
}