const countdownDisplay = document.getElementById('countdown-display');

function renderCountdown() {
  const christmas = 25;

  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let remainingDays = christmas - day;
  countdownDisplay.textContent = remainingDays;
}

renderCountdown()
