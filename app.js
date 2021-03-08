const monthandyear = document.querySelector('h2')
const date = new Date();
currentMonth = date.getMonth();
currentYear = date.getFullYear();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function showCalendar(currentMonth, currentYear) {
    monthandyear.innerText = `${months[currentMonth]} ${currentYear}`
    const tbody = document.querySelector('tbody')
    let firstDay = (new Date(currentYear, currentMonth)).getDay();
    tbody.innerHTML = ''
    let date = 1
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr')

        for (let j = 0; j < 7; j++) {

            if (i === 0 && j < firstDay) {
                cell = document.createElement('td')
                cellText = document.createTextNode('')
                cell.appendChild(cellText)
                row.appendChild(cell)
            } else if (date > daysInMonth(currentMonth, currentYear)) {
                break
            } else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

        }
        tbody.appendChild(row)
    }
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12
    showCalendar(currentMonth, currentYear)
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

showCalendar(currentMonth, currentYear)