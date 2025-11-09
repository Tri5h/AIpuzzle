// This file contains the JavaScript logic for the game. It generates five random numbers, calculates their sum, and determines if the sum is even or odd. It also handles the button click events to check user answers.

const generateRandomNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 9) + 1); // Generate random numbers between 1 and 9
    }
    return numbers;
};

const calculateSum = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};

const isEven = (num) => {
    return num % 2 === 0;
};

const updateGame = () => {
    const numbers = generateRandomNumbers();
    const sum = calculateSum(numbers);
    const sumIsEven = isEven(sum);
    
    document.getElementById('number-display').textContent = `Numbers: ${numbers.join(', ')} | Sum: ${sum}`;
    
    return sumIsEven;
};

const resultElement = document.getElementById('result');
if (userAnswer === correctAnswer) {
    resultElement.textContent = 'Correct!';
    resultElement.style.color = 'green';
} else {
    resultElement.textContent = 'Wrong! Try again.';
    resultElement.style.color = 'red';
}
};

document.addEventListener('DOMContentLoaded', () => {
    const evenButton = document.getElementById('even-button');
    const oddButton = document.getElementById('odd-button');

    evenButton.addEventListener('click', () => checkAnswer(true));
    oddButton.addEventListener('click', () => checkAnswer(false));

    updateGame(); // Initialize the game on load
};
