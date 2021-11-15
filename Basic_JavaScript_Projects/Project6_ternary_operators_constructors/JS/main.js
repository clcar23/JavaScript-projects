function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Kai = new Vehicle("Mazda", "Miata", 1996, "Red");
var Cliff = new Vehicle("BMW", "Z8", "2021", "Blue");
var Andy = new Vehicle("Ford", "Fiesta", "1997", "Pink");
var Kenda = new Vehicle("Kenworth", "Dumptruck", "2002", "Brown");
document.getElementById("Keywords_and_Constructors").innerHTML = `Kai drives a ${Kai.Vehicle_Color}-colored ${Kai.Vehicle_Model}manufactured in ${Kai.Vehicle_Year}`;