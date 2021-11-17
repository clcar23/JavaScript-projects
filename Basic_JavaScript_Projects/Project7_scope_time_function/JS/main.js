/*-this is an example of a global scope variable, written outside the function-*/
var x = 11;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


/*-this is an example of a variable with local scope, written inside the fucntion-*/
function Add_numbers_3() {
    var y = 12;
    document.write(20 + y + "<br>");
}
/*-this one won't print because the y value was written inside a different function. will show an error in the console-*/
function Add_numbers_4() {
    document.write(y + 100); /*-this line will cause an error in the console-*/
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Clock").innerHTML = "Maybe you should go to bed.";
    }
} 
/*-My If/Else statement-*/
function emptyGlass() {
    volume = document.getElementById("how_full").value;
    if (volume == "yes") {
        Result = "Time for another drink!";
    }
    else {
        Result = "Chug it you wimp!";
    }
    document.getElementById("Drink").innerHTML = Result;
}
/*-Time function-*/
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}