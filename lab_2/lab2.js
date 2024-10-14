function clock() {
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    
    let datetimeStr = `${year}:${month < 10 ? '0' : ''}${month}:${date < 10 ? '0' : ''}${date}:` +
                      `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    document.clock.datetime.value = datetimeStr;
    
    setTimeout(clock, 1000);
}

function addToDisplay(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        document.calc.display.value = 'Error';
    }
}

function generateTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ''; 

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Введіть коректні значення для рядків і стовпців.");
        return;
    }

    let table = document.createElement("table");
    let columnSum = 0;

    for (let i = 1; i <= rows; i++) {
        let row = document.createElement("tr");
        for (let j = 1; j <= cols; j++) {
            let cell = document.createElement("td");
            let value = 3 * i - 2 * j;
            cell.textContent = value;
            row.appendChild(cell);

            if (j === 3) {
                columnSum += value;
            }
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);

    document.getElementById("columnSum").textContent = columnSum;
}

function runConsoleLogTests() {
    let num1 = 17;
    let num2 = 5;
    let remainder = num1 % num2;
    console.log("Остача від ділення " + num1 + " на " + num2 + " дорівнює: ", remainder);

    let isDivisible = (remainder === 0);
    console.log("Чи ділиться " + num1 + " на " + num2 + " без остачі? ", isDivisible);

    let array = [10, 20, 30, 40, 50];
    console.log("Масив значень: %d, %d, %d, %d, %d", array[0], array[1], array[2], array[3], array[4]);

    let name = "Роман";
    let age = 18;
    console.log("Користувач: %s, вік: %d", name, age);

    console.log("Початок виведення з другого елементу: %s, %s", array[1], array[2]);
}

function runConsoleMethodsTests() {
    console.info("Це повідомлення info для відображення загальної інформації");

    console.warn("Це попередження, що може вказувати на потенційну проблему");

    console.error("Це помилка, яка може вимагати негайної уваги!");

    let user = {name: "Роман", age: 18, profession: "Студент"};
    console.dir(user);

    let element = document.querySelector('h3');
    console.dirxml(element);

    console.time("Таймер виконання циклу");
    for (let i = 0; i < 1000000; i++) {}
    console.timeEnd("Таймер виконання циклу");

    console.profile("Профіль обчислень");
    for (let i = 0; i < 100000; i++) {
        let x = i * 2;
    }
    console.profileEnd("Профіль обчислень");

    let value = 5;
    console.assert(value > 10, "Значення має бути більше за 10");

    console.log("Тести методів завершені");
}