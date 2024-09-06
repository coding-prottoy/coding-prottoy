'use strict';

let buttEasy = document.querySelector('.easy')
let buttMedium = document.querySelector('.medium')
let buttHard = document.querySelector('.hard')
let selectDificulty = document.querySelector('h2');
let inputLabel = document.querySelector('label');
let inputBar = document.querySelector('input');
let submitButton = document.querySelector('#submit');
let attempsLeft = document.querySelector('#attempsLeft');
let correctGuessedResult = document.querySelector('#correctResult');
let incorrectGuessedResult = document.querySelector('#incorrectResult');
let playAgain = document.querySelector('#playAgain');
let Attemps = 0;

// function initialGame(){
//     pass
// }

buttEasy.addEventListener('click', () => {
    Attemps = 5;
    let guessedNumber = Math.floor((Math.random()*10)+1);
    selectDificulty.textContent='You are in easy mode';
    inputBar.placeholder='Number between 1-10';
    attempsLeft.textContent=`Attemps left: ${Attemps}`;
    console.log(guessedNumber);

    submitButton.addEventListener('click', () => {
        if(parseInt(inputBar.value)===guessedNumber){
            selectDificulty.style.display='none';
            inputLabel.style.display='none';
            inputBar.style.display='none';
            submitButton.style.display='none';
            attempsLeft.style.display='none';
            correctGuessedResult.textContent='Hurray! You have   guessed the right number';
            correctGuessedResult.style.color='green';
            incorrectGuessedResult.style.display='none';
            // playAgain.style.display='initial';
            // playAgain.textContent='Click to play again';
        } else if (parseInt(inputBar.value)>guessedNumber) {
            incorrectGuessedResult.textContent='Sorry your input number is too high. Please try again';
            incorrectGuessedResult.style.color='red';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        } else {
            incorrectGuessedResult.textContent='Sorry your input number is too low. Please try again';
            incorrectGuessedResult.style.color='orange';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.style.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        }
    })
})

buttMedium.addEventListener('click', () => {
    Attemps = 7;
    let guessedNumber = Math.floor((Math.random()*100)+1);
    selectDificulty.textContent='You are in medium mode';
    inputBar.placeholder='Number between 1-100';
    attempsLeft.textContent=`Attemps left: ${Attemps}`;
    console.log(guessedNumber);

    submitButton.addEventListener('click', () => {
        if(parseInt(inputBar.value)===guessedNumber){
            selectDificulty.style.display='none';
            inputLabel.style.display='none';
            inputBar.style.display='none';
            submitButton.style.display='none';
            attempsLeft.style.display='none';
            correctGuessedResult.textContent='Hurray! You have   guessed the right number';
            correctGuessedResult.style.color='green';
            incorrectGuessedResult.style.display='none';
            // playAgain.style.display='initial';
            // playAgain.textContent='Click to play again';
        } else if (parseInt(inputBar.value)>guessedNumber) {
            incorrectGuessedResult.textContent='Sorry your input number is too high. Please try again';
            incorrectGuessedResult.style.color='red';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        } else {
            incorrectGuessedResult.textContent='Sorry your input number is too low. Please try again';
            incorrectGuessedResult.style.color='orange';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.style.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        }
    })
})

buttHard.addEventListener('click', () => {
    Attemps = 10;
    let guessedNumber = Math.floor((Math.random()*10)+1);
    selectDificulty.textContent='You are in hard mode';
    inputBar.placeholder='Number between 1-1000';
    attempsLeft.textContent=`Attemps left: ${Attemps}`;
    console.log(guessedNumber);

    submitButton.addEventListener('click', () => {
        if(parseInt(inputBar.value)===guessedNumber){
            selectDificulty.style.display='none';
            inputLabel.style.display='none';
            inputBar.style.display='none';
            submitButton.style.display='none';
            attempsLeft.style.display='none';
            correctGuessedResult.textContent='Hurray! You have   guessed the right number';
            correctGuessedResult.style.color='green';
            incorrectGuessedResult.style.display='none';
            // playAgain.style.display='initial';
            // playAgain.textContent='Click to play again';
        } else if (parseInt(inputBar.value)>guessedNumber) {
            incorrectGuessedResult.textContent='Sorry your input number is too high. Please try again';
            incorrectGuessedResult.style.color='red';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        } else {
            incorrectGuessedResult.textContent='Sorry your input number is too low. Please try again';
            incorrectGuessedResult.style.color='orange';
            Attemps--;
            attempsLeft.textContent=`Attemps left: ${Attemps}`;
            if(Attemps===0){
                incorrectGuessedResult.textContent='Sorry you have no attemps left to try...';
                incorrectGuessedResult.style.color='blue';
                selectDificulty.style.display='none';
                inputLabel.style.display='none';
                inputBar.style.display='none';
                submitButton.style.display='none';
                attempsLeft.style.display='none';
            };
        }
    })
})

