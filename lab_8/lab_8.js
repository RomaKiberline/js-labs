let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

function displayTime() {
    const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
    document.getElementById('timeDisplay').innerText = `Поточний час: ${formattedTime}`;
}

function changeBySeconds() {
    const seconds = parseInt(document.getElementById('seconds').value);
    if (!isNaN(seconds)) {
        time.seconds += seconds;
        normalizeTime();
        displayTime();
    }
}

function changeByMinutes() {
    const minutes = parseInt(document.getElementById('minutes').value);
    if (!isNaN(minutes)) {
        time.minutes += minutes;
        normalizeTime();
        displayTime();
    }
}

function changeByHours() {
    const hours = parseInt(document.getElementById('hours').value);
    if (!isNaN(hours)) {
        time.hours += hours;
        normalizeTime();
        displayTime();
    }
}

function normalizeTime() {
    while (time.seconds >= 60) {
        time.seconds -= 60;
        time.minutes += 1;
    }
    while (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours += 1;
    }
    time.hours %= 24;
    while (time.seconds < 0) {
        time.seconds += 60;
        time.minutes -= 1;
    }
    while (time.minutes < 0) {
        time.minutes += 60;
        time.hours -= 1;
    }
    if (time.hours < 0) {
        time.hours += 24;
    }
}

displayTime();

// Завдання 2.1
function displayCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dayNames = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
    document.getElementById('currentDateOutput').innerText = `Дата: ${now.toLocaleDateString('uk-UA', options)}\nДень тижня: ${dayNames[now.getDay()]}\nЧас: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
}

// Завдання 2.2
function displayDayInfo() {
    const now = new Date();
    const dayInfo = getDayInfo(now);
    document.getElementById('dayInfoOutput').innerText = `Номер тижня: ${dayInfo.dayNumber}\nНазва дня тижня: ${dayInfo.dayName}`;
}

function getDayInfo(date) {
    const dayNames = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
    return {
        dayNumber: date.getDay() === 0 ? 7 : date.getDay(),
        dayName: dayNames[date.getDay()]
    };
}

// Завдання 2.3
function calculateDate() {
    const days = parseInt(document.getElementById('daysInput').value);
    if (isNaN(days)) {
        document.getElementById('calculateDateOutput').innerText = 'Будь ласка, введіть коректне число';
        return;
    }
    const now = new Date();
    now.setDate(now.getDate() + days);
    document.getElementById('calculateDateOutput').innerText = `Дата через ${days} днів: ${now.toLocaleDateString('uk-UA')}`;
}

// Завдання 2.4
function findLastDayOfMonth() {
    const year = parseInt(document.getElementById('yearInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        document.getElementById('lastDayOutput').innerText = 'Будь ласка, введіть коректні рік та місяць';
        return;
    }
    const lastDay = new Date(year, month, 0).getDate();
    document.getElementById('lastDayOutput').innerText = `Останній день місяця: ${lastDay}`;
}

// Завдання 2.5
function getSecondsInfo() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const secondsPassed = Math.floor((now - startOfDay) / 1000);
    const secondsToNextDay = Math.floor((endOfDay - now) / 1000);
    document.getElementById('secondsInfoOutput').innerText = `Кількість секунд від початку дня: ${secondsPassed}\nКількість секунд до початку наступного дня: ${secondsToNextDay}`;
}

// Завдання 2.6
function getTimeDifference() {
    const input = document.getElementById('dateTimeInput').value;
    const [datePart, timePart] = input.split(' ');
    if (!datePart || !timePart) {
        document.getElementById('timeDifferenceOutput').innerText = 'Будь ласка, введіть коректну дату і час';
        return;
    }
    const [day, month, year] = datePart.split('.').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    if (
        isNaN(day) || isNaN(month) || isNaN(year) ||
        isNaN(hour) || isNaN(minute) ||
        day < 1 || day > 31 || month < 1 || month > 12 ||
        hour < 0 || hour > 23 || minute < 0 || minute > 59
    ) {
        document.getElementById('timeDifferenceOutput').innerText = 'Будь ласка, введіть коректну дату і час';
        return;
    }
    const inputDate = new Date(year, month - 1, day, hour, minute);
    const now = new Date();
    const diffInSeconds = Math.floor((now - inputDate) / 1000);

    let output;
    if (diffInSeconds < 60) {
        output = `${diffInSeconds} сек. назад`;
    } else if (diffInSeconds < 3600) {
        output = `${Math.floor(diffInSeconds / 60)} хв. назад`;
    } else {
        output = `Дата: ${inputDate.toLocaleDateString('uk-UA')} Час: ${String(inputDate.getHours()).padStart(2, '0')}:${String(inputDate.getMinutes()).padStart(2, '0')}`;
    }
    document.getElementById('timeDifferenceOutput').innerText = output;
}
