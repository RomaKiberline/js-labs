function calculateResult() {
    const form = document.getElementById('testForm');
    let totalScore = 0;
    let results = [];

    for (let q = 1; q <= 2; q++) {
        let radios = form[`radio${q}`];
        let selectedValue = 0;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = parseFloat(radios[i].value);
                break;
            }
        }

        totalScore += selectedValue;
        results.push({ question: `Запитання ${q}`, answer: `Вибрано: ${selectedValue}`, score: selectedValue });
    }

    for (let q = 3; q <= 4; q++) {
        let checkboxes = form[`checkbox${q}`];
        let selectedValues = [];
        let score = 0;
        let correctCount = 0;

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedValues.push(checkboxes[i].value);
                if (checkboxes[i].value.startsWith("correct")) {
                    correctCount++;
                }
            }
        }

        if (correctCount === 2) {
            score = 2; 
        } else if (correctCount === 1) {
            score = 1; 
        } else {
            score = 0; 
        }
        
        if (selectedValues.length !== 2) score = 0; 

        totalScore += score;
        results.push({ question: `Запитання ${q}`, answer: `Вибрано: ${selectedValues.join(", ")}`, score: score });
    }

    let selectSingle = form.select1.value;
    let selectSingleScore = selectSingle === "correct" ? 1 : 0;
    totalScore += selectSingleScore;
    results.push({ question: "Запитання 5", answer: `Вибрано: ${selectSingle}`, score: selectSingleScore });

    let selectMultiple = form.select2;
    let selectedMultiple = [];
    let multipleScore = 0;
    let correctCountMulti = 0;

    for (let i = 0; i < selectMultiple.options.length; i++) {
        if (selectMultiple.options[i].selected) {
            selectedMultiple.push(selectMultiple.options[i].value);
            if (selectMultiple.options[i].value === "correct") {
                correctCountMulti++;
            }
        }
    }

    if (correctCountMulti === 2 && selectedMultiple.length === 2) {
        multipleScore = 2; 
    } else if (correctCountMulti === 1) {
        multipleScore = 1; 
    } else {
        multipleScore = 0; 
    }

    totalScore += multipleScore;
    results.push({ question: "Запитання 6", answer: `Вибрано: ${selectedMultiple.join(", ")}`, score: multipleScore });

    let textAnswer = form.textAnswer.value.toLowerCase();
    let textScore = textAnswer.includes("ol") ? 1 : 0; 
    totalScore += textScore;
    results.push({ question: "Запитання 7", answer: `Введено: ${textAnswer}`, score: textScore });

    displayResults(results, totalScore);
}

function displayResults(results, totalScore) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Результати тестування</h2><table>
        <tr>
            <th>Запитання</th>
            <th>Відповідь</th>
            <th>Бали</th>
        </tr>
        ${results.map(result => `
        <tr>
            <td>${result.question}</td>
            <td>${result.answer}</td>
            <td>${result.score}</td>
        </tr>`).join("")}
        <tr>
            <td colspan="2"><strong>Загальний бал</strong></td>
            <td>${totalScore}</td>
        </tr>
    </table>`;
}