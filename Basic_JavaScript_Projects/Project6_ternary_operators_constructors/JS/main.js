/*-these are functions needing input from user-*/
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; /*-this has a ternary operator, Can_ride is dependant upon the input by the user in parathesis, one of the two statements will print. -*/
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; /*-another ternary(conditional) operator.-*/
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


/*-this is a object constructor function using 'this' keywords-*/
function Vehicle(Make, Model, Year, Color) { /*-this is our function with defined parameters-*/
    this.Vehicle_Make = Make; /*-here the 'this' keyword refers back to the Vehicle function name-*/
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
/*-here are variables using the 'new' keyword that creates new objects-*/
var Kai = new Vehicle("Mazda", "Miata", 1996, "Red");
var Cliff = new Vehicle("BMW", "Z8", "2021", "Blue");
var Andy = new Vehicle("Ford", "Fiesta", "1997", "Pink");
var Kenda = new Vehicle("Kenworth", "Dumptruck", "2002", "Brown");
function my_Function() { /*- this function will combine data from our Vehicle function with a sentence-*/
document.getElementById("Keywords_and_Constructors").innerHTML = "Kai drives a " + Kai.Vehicle_Color + "-colored " + Kai.Vehicle_Model + " manufactured in " + Kai.Vehicle_Year;
}
/*-another function using the 'this' keyword-*/
function Person(first, last, eye, hair) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
    this.hairColor = hair;

} 
/*-this is a function with a nested functions-*/
function countdown() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { /*-nested funtion-*/
    var starting_Number = 10;
    function Minus_one() {starting_Number -= 1;} /*-another nested function-*/
    Minus_one();
    return starting_Number;
    }
}