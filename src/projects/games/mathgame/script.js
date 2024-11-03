let score = 0;
let currentQuestion;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() < 0.5 ? '+' : '-';

    currentQuestion = {
        question: `${num1} ${operation} ${num2}`,
        answer: operation === '+' ? num1 + num2 : num1 - num2
    };

    document.getElementById('question').innerText = currentQuestion.question;
}

document.getElementById('submit').onclick = function () {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const ResultBox = document.getElementById('result');
    if (userAnswer === currentQuestion.answer) {
        score++;
        ResultBox.innerText = 'Correct!';
        ResultBox.classList.remove('text-red-500');
        ResultBox.classList.add('text-green-500');
    } else {
        ResultBox.innerText = 'Wrong! The correct answer was ' + currentQuestion.answer;
        ResultBox.classList.remove('text-green-500');
        ResultBox.classList.add('text-red-500');
    }
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('answer').value = '';
    generateQuestion();
};

generateQuestion();
