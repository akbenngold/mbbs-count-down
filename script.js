// Set the graduation date
const graduationDate = new Date("August 17, 2025 00:00:00").getTime();

// // Update the countdown every second
const countdown = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = graduationDate - now;

  //   // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display the countdown
  const countdownElement = document.getElementById("time-left");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "GRADUATION DAY!";
  }
}, 1000);
