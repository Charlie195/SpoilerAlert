// Get the current time.

// Get the expiry date
// Store the expiry date
// Every time the website is opened, compare the stored expiry dates with the current date.
// Alert the user if the current time surpasses the expiry date. 

// Store the item name into a database.

// Make sure it runs in the background

// When item's time hits zero, send something back to the front-end.



// basic clock
function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

const currentTime = (new Date()).getTime();

const itemTime = 10000000000;

const countdownEL = document.getElementById('countdown');

countdownEL.innerHTML = `${currentTime}`;

if (currentTime >= itemTime) {
    countdownEL.innerHTML = `Expired`;
}

else if (currentTime >= (item - daysToMilliseconds(7))) {
    countdownEL.innerHTML = `Warning`;    
}

else {
    countdownEL.innerHTML = `Safe`;   
}
