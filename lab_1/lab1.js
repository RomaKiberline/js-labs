function calculation() {
    let x = 12;
    let y = 5;
    let z = 3;

    let F = 21 * x * y - x * z + x * y * z;

    alert("Результат: " + F);
}

function Click_on_form() {
    document.getElementById("secondField").value = "Ви натиснули на перше поле!";
}

function hoverMouse() {
    document.getElementById("secondField").value = "Ви навели курсор на перше поле!";
}

function calculateF() {
    let x = parseFloat(document.getElementById("inputX").value);
    let y = parseFloat(document.getElementById("inputY").value);
    let F;

    if (x < 10 || y !== 3) {
        F = 2 * Math.pow(x, 2) - 3 * Math.pow(y, 2);
    } else if (x !== 2) {
        F = (2 * x - 3 * y) / (x + Math.pow(x, 2));
    } else {    
        F = Math.pow(x, 3) + 3 * x * y;
    }
    document.getElementById("result").value = F;
}

function calculateSum(x, y) {
    let result = 0;
    const constant = -2 * x + Math.pow(y, 2);

    for (let i = 6; i <= 12; i++) {
        const term = (constant / factorial(i)) * Math.pow(-1, i);
        result += term;
    }

    return result;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function calculateSeriesSum() {
    let x = parseFloat(document.getElementById("inputXSeries").value);
    let y = parseFloat(document.getElementById("inputYSeries").value);
    const sum = calculateSum(x, y);
    document.getElementById("seriesResult").value = sum;
}

const x = 10;
const y = 3;

const sum = calculateSum(x, y);
console.log("Сума:", sum);