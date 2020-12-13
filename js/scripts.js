var elForm = document.querySelector('.form-game');
var elInput = document.querySelector('.form-input');
var elItarations = document.querySelector('.game-span');
var random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
var randomLevel = Math.floor(Math.random() * (500 - 1 + 1) + 1);
var result = document.querySelector('.game-result');
var elRound = document.querySelector('.round');
var elNext = document.querySelector('.next');
var elLevel = document.querySelector('.levels');
var numberLevel = document.querySelector('.number-level');
var elSection = document.querySelector('.section');
var elStart = document.querySelector('.start');
var elementStart = document.querySelector('.start-wrapper');
var order = document.querySelector('.order');
var level = 1;
elLevel.textContent = level;
var totalNumber = [];
var decrement = document.querySelector('.decrement');
var raqam = 6;
decrement.textContent = raqam;

var starter = function () {
    elStart.addEventListener('click', function () {
        elementStart.classList.add('d-flex');
        elForm.classList.remove('mb-5');
        elInput.classList.remove('disabled');
        order.textContent = '';
        order.classList.remove('mb-4');
    })
}

starter();


if (level == 1) {
    document.body.style.backgroundColor = '#deff4b';
}

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var resultInNumber = Number(elInput.value);


    if (raqam === 0) {
        result.textContent = 'Yutqizdingiz!';
        result.style.color = 'red';
        return;
    }

    if (raqam) {
        raqam--;
        decrement.textContent = raqam;
    }

    totalNumber.push(resultInNumber);
    elItarations.textContent = totalNumber.join(', ');
    elInput.value = '';


    if (level === 1) {
        if (resultInNumber === random) {
            result.textContent = 'Winner';
            result.style.color = 'green';
            elInput.classList.add('disabled');
        }
        else if (resultInNumber > random) {
            result.textContent = `Siz kiritgan raqam katta!`;
            result.style.color = 'orange';
        }
        else if (resultInNumber < random) {
            result.textContent = `Siz kiritgan raqam kichik!`;
            result.style.color = 'orange';
        }
    }
    else if (level === 2) {
        if (resultInNumber === randomLevel) {
            result.textContent = 'Winner';
            result.style.color = 'green';
            elInput.classList.add('disabled');
        }
        else if (resultInNumber > randomLevel) {
            result.textContent = `Siz kiritgan raqam katta!`;
            result.style.color = 'orange';
        }
        else if (resultInNumber < randomLevel) {
            result.textContent = `Siz kiritgan raqam kichik!`;
            result.style.color = 'orange';
        }
    }

});

elRound.addEventListener('click', function () {
    if (raqam === 0) {
        raqam = 6;
        decrement.textContent = raqam;
        totalNumber = [];
        elItarations.textContent = '';
    }
})


elNext.addEventListener('click', function () {

    if (result.textContent === 'Winner') {
        level += 1;
        elLevel.textContent = level;
        numberLevel.textContent = '1 va 500 orasidagi sonni kiriting';
        result.textContent = '';
        document.body.style.backgroundColor = 'lightblue';
        elementStart.classList.remove('d-flex');
        elForm.classList.add('mb-5');
        elInput.classList.add('disabled');
        order.textContent = 'Boshlash uchun Startni bosing!';
        order.classList.add('mb-4');
    }


    starter();

    raqam = 10;
    decrement.textContent = raqam;
    totalNumber = [];
    elItarations.textContent = '';
});


