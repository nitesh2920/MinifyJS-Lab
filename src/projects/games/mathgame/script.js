let score = 0;
let currentQuestion;

function startTimer() {
    let timeLeft = 15; 
    document.getElementById('timer').innerText = `Timer: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Timer: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            const ResultBox = document.getElementById('result');
            ResultBox.classList.remove('text-green-500');
            ResultBox.classList.add('text-red-500');
            ResultBox.innerText = 'Game Over' + "\n correct answer is " + `( ${currentQuestion.answer} ) \n please refresh to restart the game`;
            document.getElementById('score').innerText = 'Score: ' + score;
            document.getElementById('submit').disabled = true;
            document.getElementById('submit').classList.add('bg-gray-500');
        }
    }, 1000);
}

function selectOperation() {
    const rand = Math.random() * 10;
    let operation;

    if (rand < 4) {
        operation = '*';  
    } else if (rand < 6) {
        operation = '+';  
    } else {
        operation = '-';  
    }

    return operation;
}


function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = selectOperation();
    currentQuestion = {
        question: `${num1} ${operation} ${num2}`,
        answer: operation === '*' ? num1 * num2 : operation === '-' ?  num1 - num2 : num1 + num2 
    };

    document.getElementById('question').innerText = currentQuestion.question;
    startTimer()
}

document.getElementById('submit').onclick = function () {
    clearInterval(timer)
    const userAnswer = parseInt(document.getElementById('answer').value);
    const ResultBox = document.getElementById('result');
    if (userAnswer === currentQuestion.answer) {
        score+=2;
        ResultBox.innerText = 'Correct!';
        ResultBox.classList.remove('text-red-500');
        ResultBox.classList.add('text-green-500');
    } else {
        score-=1;
        ResultBox.innerText = 'Wrong! The correct answer was ' + currentQuestion.answer;
        ResultBox.classList.remove('text-green-500');
        ResultBox.classList.add('text-red-500');
    }
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('answer').value = '';
    generateQuestion();
};

generateQuestion();
