let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

function addhome(points) {
    homeScore += points
    homeScoreEl.innerHTML =  homeScore
}

function addguest(points) {
    guestScore += points
    guestScoreEl.textContent =  guestScore
}

function newgame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent =  homeScore
    guestScoreEl.textContent =  guestScore
}
