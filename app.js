window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var countdown = 20;

    var interval = setInterval(function() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            countdownElement.textContent = "OK";
        }
    }, 1000);
};

