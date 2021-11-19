function countdown() {
    var seconds = document.getElementById("seconds").value; //creates function, links to html, takes user input value

    function tick() { //creates tick function
        seconds = seconds - 1; //this is the countdown
        timer.innerHTML = seconds; //displays countdown number for user
        var time = setTimeout(tick, 1000); //1000 ms = 1 sec
        if (seconds == -1) { //this if tells program what to do when time reaches 0
            alert("Time's up!");
            clearTimeout(time); //clears the time/r
            timer.innerHTML = "";
        }
    }
    tick();
}