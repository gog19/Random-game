var elForm = document.querySelector('.form-game');
var elInput = document.querySelector('.form-input');
var elItarations = document.querySelector('.game-span');
var random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
var result = document.querySelector('.game-result');
var elRound = document.querySelector('.round');
var totalNumber = [];
var decrement = document.querySelector('.decrement');
var raqam = 6;
decrement.textContent = raqam;

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var resultInNumber = Number(elInput.value);
    
    decrement.textContent = --raqam;
    
    if (raqam === 0) {
        result.textContent = 'Yutqizdingiz!';
        return;
    }
    
    
    totalNumber.push(resultInNumber);
    elItarations.textContent = totalNumber.join(', ');
    elInput.value = '';

    if (random === resultInNumber) {
        result.textContent = 'Ureeee';
    }
    else if (random > resultInNumber) {
        result.textContent = `Raqam kichikroq!`;
    }
    else if (random < resultInNumber) {
        result.textContent = `Raqam kattaroq!`;
    }
})

elRound.addEventListener('click', function () {
    if (raqam === 0) {
        raqam = 6;
        decrement.textContent = raqam;
        totalNumber = [];
        elItarations.textContent = '';
    }
})