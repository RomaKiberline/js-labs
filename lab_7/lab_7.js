// Завдання 1.1
function reverseNumbers() {
    const input = document.getElementById('numbers').value;
    const reversed = input.split(' ').reverse().join(' ');
    document.getElementById('reverseResult').textContent = reversed;
}

// Завдання 1.2
function removeZeros() {
    const input = document.getElementById('arrayWithZeros').value;
    const result = input.replace(/\b0\b/g, '').replace(/\s+/g, ' ').trim();
    document.getElementById('noZerosResult').textContent = result;
}

// Завдання 1.3
function reverseText() {
    const input = document.getElementById('textToReverse').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseTextResult').textContent = reversed;
}

// Завдання 1.4
function replaceWords() {
    const text = document.getElementById('originalText').value;
    const words = text.split(' ');
    [words[1], words[2]] = [words[2], words[1]];
    const replaced = words.join(',');
    document.getElementById('replaceWordsResult').textContent = replaced;
}

// Завдання 2.1
function compareStrings() {
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;
    let result;
    if (str1.length > str2.length) result = 1;
    else if (str1.length < str2.length) result = -1;
    else result = 0;
    document.getElementById('compareResult').textContent = result;
}

// Завдання 2.2
function findCharacter() {
    const str = document.getElementById('searchString').value;
    const char = document.getElementById('searchChar').value;
    const indices = [];
    let pos = str.indexOf(char);
    while (pos !== -1) {
        indices.push(pos);
        pos = str.indexOf(char, pos + 1);
    }
    const count = indices.length;
    document.getElementById('findCharResult').textContent = 
        `Індекси: ${indices.join(', ')}. Кількість входжень: ${count}`;
}

// Завдання 2.3
function capitalizeFirst() {
    const str = document.getElementById('capitalizeString').value;
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById('capitalizeResult').textContent = result;
}

// Завдання 2.4
function countVowels() {
    const str = document.getElementById('vowelString').value.toLowerCase();
    const vowels = 'аеєиіїоуюя';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    document.getElementById('vowelResult').textContent = `Кількість голосних: ${count}`;
}

// Завдання 2.5
function checkSpam() {
    const str = document.getElementById('spamString').value.toLowerCase();
    const spamWords = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте'];
    const isSpam = spamWords.some(word => str.includes(word.toLowerCase()));
    document.getElementById('spamResult').textContent = isSpam;
}

// Завдання 2.6
function truncateText() {
    const str = document.getElementById('truncateString').value;
    const maxLength = parseInt(document.getElementById('maxLength').value);
    let result = str;
    if (str.length > maxLength) {
        result = str.slice(0, maxLength - 3) + '...';
    }
    document.getElementById('truncateResult').textContent = result;
}

// Завдання 3.1
function convertToCamelCase() {
    const input = document.getElementById('snakeCase').value;
    const result = input.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    document.getElementById('camelCaseResult').textContent = result;
}

// Завдання 3.2
function convertToSnakeCase() {
    const input = document.getElementById('camelCase').value;
    const result = input.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    document.getElementById('snakeCaseResult').textContent = result;
}

// Завдання 3.3
function convertDates() {
    const input = document.getElementById('dateString').value;
    const result = input.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, '$3.$2.$1');
    document.getElementById('dateResult').textContent = result;
}