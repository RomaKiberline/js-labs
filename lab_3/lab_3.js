// Завдання 1
document.getElementById('calculateButton').addEventListener('click', calculateArea);

function calculateArea() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const d = parseFloat(document.getElementById('sideD').value);
    const angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(angle)) {
        document.getElementById('area').innerText = "Будь ласка, введіть всі параметри коректно.";
        return;
    }

    const angleInRadians = angle * (Math.PI / 180);

    const area = 0.5 * (a + c) * b * Math.sin(angleInRadians);

    document.getElementById('area').innerText = area.toFixed(2);
}


// Завдання 2
const lettersUa = ['а', 'б', 'в', 'г', 'д', 'е', 'є', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];
const lettersEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let currentLayout = 'ua';
const keyboardDiv = document.getElementById('keyboard');
const output = document.getElementById('output');

function renderKeyboard() {
    keyboardDiv.innerHTML = '';
    const letters = currentLayout === 'ua' ? lettersUa : lettersEn;

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => output.value += i;
        keyboardDiv.appendChild(button);
    }

    letters.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => output.value += letter;
        keyboardDiv.appendChild(button);
    });
}

function clearOutput() {
    output.value = '';
}

function toggleLayout() {
    currentLayout = currentLayout === 'ua' ? 'en' : 'ua';
    renderKeyboard();
}

renderKeyboard();


// Завдання 4
const images = ['./img/img_one.jpg', './img/img_two.jpg', './img/img_three.jpg', './img/img_four.jpg'];
let currentIndex = 0;

function displayImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
}

displayImage();

// Завдання 5
let correctAnswers = 0;
let totalQuestions = 0;
let currentAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    currentAnswer = eval(`${num1} ${operation} ${num2}`);
    document.getElementById('question').textContent = `${num1} ${operation} ${num2} = `;
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    totalQuestions++;
    if (userAnswer === currentAnswer) {
        correctAnswers++;
        document.getElementById('result').textContent = "Правильно";
    } else {
        document.getElementById('result').textContent = `Помилка, правильна відповідь «${currentAnswer}»`;
    }
    updateScore();
}

function nextQuestion() {
    generateQuestion();
}

function updateScore() {
    document.getElementById('score').textContent = `Загальний рахунок: ${((correctAnswers / totalQuestions) * 100).toFixed(2)}% (${correctAnswers} правильних відповідей з ${totalQuestions})`;
}

generateQuestion();

// Завдання 6
const data = {
    "fruits": ["apple", "pineapple", "apricot", "pear", "lemon"],
    "vegetables": ["potatoes", "beetroot", "carrots", "pear"]
};

const hierarchy = document.getElementById('hierarchy');

function createTree(data) {
    const ul = document.createElement('ul');

    for (const key in data) {
        const li = document.createElement('li');
        li.textContent = key;

        const subList = createTreeItems(data[key]);
        li.appendChild(subList);

        li.onclick = function (event) {
            event.stopPropagation(); 
            subList.classList.toggle('hidden');
        };

        ul.appendChild(li);
    }

    return ul;
}

function createTreeItems(items) {
    const ul = document.createElement('ul');
    ul.classList.add('hidden'); 

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    return ul;
}

hierarchy.appendChild(createTree(data));
