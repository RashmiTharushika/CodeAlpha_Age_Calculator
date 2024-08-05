document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const birthDay = parseInt(document.getElementById('birth-day').value);
    const birthMonth = parseInt(document.getElementById('birth-month').value);
    const birthYear = parseInt(document.getElementById('birth-year').value);

    const currentDay = parseInt(document.getElementById('current-day').value);
    const currentMonth = parseInt(document.getElementById('current-month').value);
    const currentYear = parseInt(document.getElementById('current-year').value);

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    // Adjust if the day is negative
    if (days < 0) {
        months--;
        days += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    // Adjust if the month is negative
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});