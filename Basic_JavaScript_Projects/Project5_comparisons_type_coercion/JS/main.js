function my_Function() {
    document.write(3E310); /*-this value will return infinity-*/
    document.write(-3E310); /*-this value will return a negative infinity-*/
    document.write(10>2); /*-this value will return true-*/
    console.log(5 * 5); /*-this will return 25 to the console-*/
    console.log(5 == 7); /*-this will return FALSE to the console-*/
    document.write(7 == 13); /*-this will return FALSE-*/
}

function my_Function2() {
    document.write(10 === (2 * 5)); /*-this will return TRUE-*/
    document.write(10 === 'dime'); /*-this will return FALSE-*/
    document.write('five' === 5); /*-this will return FALSE-*/
    document.write(3 === (2 + 2)); /*-this will return FALSE-*/
    document.write(5 > 3 && 7 < 12); /*-this will return TRUE, both are TRUE-*/
    document.write(3 < 5 && 12 > 4); /*-this will return FALSE bc one value in FALSE-*/
    document.write(3 < 6 || 8 > 4); /*-this will return TRUE bc one value is TRUE-*/
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(30 > 10); /*- this line will return FALSE-*/
    document.getElementById("Not").innerHTML = !(4 > 11); /*-combined with the first line, this will return TRUE bc it is a double negative -*/
}

function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

document.write("This is a string with a number for my buddy Ryan he's number.." + 1);