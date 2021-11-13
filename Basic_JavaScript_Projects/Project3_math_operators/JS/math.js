/*--function of addition, variable called addition, then linked to html id "addmath"--*/
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addMath").innerHTML = "2 + 2 = " + addition;
};
/*--subtraction--*/
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subMath").innerHTML = "5 - 2 = " + subtraction;
};
/*--multiplication*/
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math; 
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math1").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math2").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math3").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {   
var x = 10;
document.getElementById("Math4").innerHTML = -x;
}

function increment() {
    var y = 5;
    y++;
    document.write(y);
}

function decrement() {
    var z = 3;
    z--;
    document.write(z);
}

window.alert(Math.random());

window.alert(Math.random()* 100);

/*--Math.power metho--*/
let pow = Math.pow(5, 3);
console.log(pow);

/*--Math.floor--*/
let floor = Math.floor(5.8);
console.log(floor);

/*--Math.round--*/
let round = Math.round(7.8);
console.log(round);

