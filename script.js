function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format time with leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // Check if it's 11:11 AM or 11:11 PM (23:11)
if ((hours === 11 && minutes === 11) || (hours === 23 && minutes === 11)) {
    clockElement.textContent = "Make a Wish!";
} else {
    clockElement.textContent = formattedTime;
}
}

// Update the clock every second
setInterval(updateClock, 1000);

