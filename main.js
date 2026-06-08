// Team 1
/** @type {HTMLInputElement} */  let team1Name = document.getElementById('team1Name');
/** @type {HTMLInputElement} */ let team1Wins = document.getElementById('team1Wins');
/** @type {HTMLInputElement} */ let team1Draws = document.getElementById('team1Draws');
/** @type {HTMLInputElement} */ let team1Loses = document.getElementById('team1Loses');
/** @type {HTMLSpanElement} */ let team1WinsCounter = document.getElementById('team1WinsCounter');
/** @type {HTMLSpanElement} */ let team1DrawsCounter = document.getElementById('team1DrawsCounter');
/** @type {HTMLSpanElement} */ let team1LosesCounter = document.getElementById('team1LosesCounter');

// Team 2
/** @type {HTMLInputElement} */  let team2Name = document.getElementById('team2Name');
/** @type {HTMLInputElement} */ let team2Wins = document.getElementById('team2Wins');
/** @type {HTMLInputElement} */ let team2Draws = document.getElementById('team2Draws');
/** @type {HTMLInputElement} */ let team2Loses = document.getElementById('team2Loses');
/** @type {HTMLSpanElement} */ let team2WinsCounter = document.getElementById('team2WinsCounter');
/** @type {HTMLSpanElement} */ let team2DrawsCounter = document.getElementById('team2DrawsCounter');
/** @type {HTMLSpanElement} */ let team2LosesCounter = document.getElementById('team2LosesCounter');

// Other
/** @type {HTMLButtonElement} */ let submitButton = document.getElementById('submit');
/** @type {HTMLButtonElement} */ let resetButton = document.getElementById('reset');
/** @type {HTMLButtonElement} */ let closeDialog = document.getElementById('closeDialog');
/** @type {HTMLDialogElement} */ let winnerDialog = document.getElementById('winnerDialog');
/** @type {HTMLHeadingElement} */ let winnerTeam = document.getElementById('winnerTeam');
let team1WinPercentage, team2WinPercentage, winnerNumber, team1TotalMatch, team2TotalMatch

// Functions
function getWinPercentage(team){
    if (team == 'team1'){
        team1Wins = document.getElementById('team1Wins');
        team1Draws = document.getElementById('team1Draws');
        team1Loses = document.getElementById('team1Loses');
        if (team1Wins.value == '5' && team1Draws.value == '0' && team1Loses.value == '0' && team2Wins.value != '5'){
            team1WinPercentage = 99;
            team2WinPercentage = 1;
        } else {
            team1WinPercentage = parseInt(team1Wins.value)*20 + parseInt(team1Draws.value)*10 + parseInt(team1Loses.value)*0;
        }
        
    } else if (team == 'team2'){
        team2Wins = document.getElementById('team2Wins');
        team2Draws = document.getElementById('team2Draws');
        team2Loses = document.getElementById('team2Loses');
        if (team2Wins.value == '5' && team2Draws.value == '0' && team2Loses.value == '0' && team1Wins.value != '5'){
            team2WinPercentage = 99;
            team1WinPercentage = 1;
        } else {
            team2WinPercentage = parseInt(team2Wins.value)*20 + parseInt(team2Draws.value)*10 + parseInt(team2Loses.value)
        }
    } else {
        console.error("No se ha ingresado ningun valor o un valor incorrecto, ingrese entre comillas team1 o team2")
    }
}

function getWinner(){
    getWinPercentage('team1');
    getWinPercentage('team2');
    team1Name = document.getElementById("team1Name");
    team2Name = document.getElementById("team2Name");

    // Rules
    if (team1WinPercentage == team2WinPercentage){
        team1WinPercentage = 50;
        team2WinPercentage = 50;
    }

    if (team1WinPercentage > team2WinPercentage){
        team2WinPercentage = 100 - team1WinPercentage;
    } else if (team2WinPercentage > team1WinPercentage){
        team1WinPercentage = 100 - team2WinPercentage;
    }

    if (team1WinPercentage == 0 && team2WinPercentage != 0){
        team1WinPercentage = 1;
        team2WinPercentage = 99;
    } else if (team2WinPercentage == 0 && team1WinPercentage != 0){
        team1WinPercentage = 99;
        team2WinPercentage = 1;
    }

    // Getting Winner
    winnerNumber = Math.random()

    if (winnerNumber < team1WinPercentage/100){
        console.log("Gano "+ team1Name.value);
        winnerTeam.textContent = team1Name.value;
        winnerDialog.showModal()
    } else {
        console.log("Gano "+ team2Name.value);
        winnerTeam.textContent = team2Name.value;
        winnerDialog.showModal()
    }
}

function clearSpaces(){
    team1Name.value = ''
    team2Name.value = ''
    team1Wins.value = '0'
    team1Draws.value = '0'
    team1Loses.value = '0'
    team2Wins.value = '0'
    team2Draws.value = '0'
    team2Loses.value = '0'
    team1WinsCounter.textContent = '0/5'
    team1DrawsCounter.textContent = '0/5'
    team1LosesCounter.textContent = '0/5'
    team2WinsCounter.textContent = '0/5'
    team2DrawsCounter.textContent = '0/5'
    team2LosesCounter.textContent = '0/5'
}

// Update Team 1
// Wins
team1Wins.addEventListener('change', () => {
    team1Wins = document.getElementById('team1Wins');
    console.log(team1Wins.value);
    if (team1Wins.value == "0") {
        team1WinsCounter.textContent = '0/5'
    } else if (team1Wins.value == "1"){
        team1WinsCounter.textContent = '1/5'
    } else if (team1Wins.value == "2"){
        team1WinsCounter.textContent = "2/5"
    } else if (team1Wins.value == "3"){
        team1WinsCounter.textContent = "3/5"
    } else if (team1Wins.value == "4"){
        team1WinsCounter.textContent = "4/5"
    } else if (team1Wins.value == "5"){
        team1WinsCounter.textContent = "5/5"
    }
})

//Draw
team1Draws.addEventListener('change', () => {
    team1Draws = document.getElementById('team1Draws');
    console.log(team1Draws.value);
    if (team1Draws.value == "0") {
        team1DrawsCounter.textContent = '0/5'
    } else if (team1Draws.value == "1"){
        team1DrawsCounter.textContent = '1/5'
    } else if (team1Draws.value == "2"){
        team1DrawsCounter.textContent = "2/5"
    } else if (team1Draws.value == "3"){
        team1DrawsCounter.textContent = "3/5"
    } else if (team1Draws.value == "4"){
        team1DrawsCounter.textContent = "4/5"
    } else if (team1Draws.value == "5"){
        team1DrawsCounter.textContent = "5/5"
    }
})

//Loses
team1Loses.addEventListener('change', () => {
    team1Loses = document.getElementById('team1Loses');
    console.log(team1Loses.value);
    if (team1Loses.value == "0") {
        team1LosesCounter.textContent = '0/5'
    } else if (team1Loses.value == "1"){
        team1LosesCounter.textContent = '1/5'
    } else if (team1Loses.value == "2"){
        team1LosesCounter.textContent = "2/5"
    } else if (team1Loses.value == "3"){
        team1LosesCounter.textContent = "3/5"
    } else if (team1Loses.value == "4"){
        team1LosesCounter.textContent = "4/5"
    } else if (team1Loses.value == "5"){
        team1LosesCounter.textContent = "5/5"
    }
})

// Update Team 2
// Wins
team2Wins.addEventListener('change', () => {
    team2Wins = document.getElementById('team2Wins');
    console.log(team2Wins.value);
    if (team2Wins.value == "0") {
        team2WinsCounter.textContent = '0/5'
    } else if (team2Wins.value == "1"){
        team2WinsCounter.textContent = '1/5'
    } else if (team2Wins.value == "2"){
        team2WinsCounter.textContent = "2/5"
    } else if (team2Wins.value == "3"){
        team2WinsCounter.textContent = "3/5"
    } else if (team2Wins.value == "4"){
        team2WinsCounter.textContent = "4/5"
    } else if (team2Wins.value == "5"){
        team2WinsCounter.textContent = "5/5"
    }
})

//Draw
team2Draws.addEventListener('change', () => {
    team2Draws = document.getElementById('team2Draws');
    console.log(team2Draws.value);
    if (team2Draws.value == "0") {
        team2DrawsCounter.textContent = '0/5'
    } else if (team2Draws.value == "1"){
        team2DrawsCounter.textContent = '1/5'
    } else if (team2Draws.value == "2"){
        team2DrawsCounter.textContent = "2/5"
    } else if (team2Draws.value == "3"){
        team2DrawsCounter.textContent = "3/5"
    } else if (team2Draws.value == "4"){
        team2DrawsCounter.textContent = "4/5"
    } else if (team2Draws.value == "5"){
        team2DrawsCounter.textContent = "5/5"
    }
})

//Loses
team2Loses.addEventListener('change', () => {
    team2Loses = document.getElementById('team2Loses');
    console.log(team2Loses.value);
    if (team2Loses.value == "0") {
        team2LosesCounter.textContent = '0/5'
    } else if (team2Loses.value == "1"){
        team2LosesCounter.textContent = '1/5'
    } else if (team2Loses.value == "2"){
        team2LosesCounter.textContent = "2/5"
    } else if (team2Loses.value == "3"){
        team2LosesCounter.textContent = "3/5"
    } else if (team2Loses.value == "4"){
        team2LosesCounter.textContent = "4/5"
    } else if (team2Loses.value == "5"){
        team2LosesCounter.textContent = "5/5"
    }
})

// Button Events

submitButton.addEventListener('click', () => {
        team1Name = document.getElementById("team1Name");
        team2Name = document.getElementById("team2Name");
        team1Wins = document.getElementById('team1Wins');
        team1Draws = document.getElementById('team1Draws');
        team1Loses = document.getElementById('team1Loses');
        team2Wins = document.getElementById('team2Wins');
        team2Draws = document.getElementById('team2Draws');
        team2Loses = document.getElementById('team2Loses');
        team1TotalMatch = parseInt(team1Wins.value) + parseInt(team1Draws.value) + parseInt(team1Loses.value);
        team2TotalMatch = parseInt(team2Wins.value) + parseInt(team2Draws.value) + parseInt(team2Loses.value);
    if (team1Name.value != '' && team2Name.value != ''){
        if (team1TotalMatch === 5 && team2TotalMatch === 5){
            getWinner()
        } else {
            alert('Error 124: Ingresaste menos o mas numeros de lo requerido. Son 5 partidos');
        }
    } else {
        alert('Error 125: No ingresaste el nombre de los equipos')
    }
})

resetButton.addEventListener('click', () => {
    clearSpaces()
})

closeDialog.addEventListener('click', () => {
    winnerDialog.close()
})