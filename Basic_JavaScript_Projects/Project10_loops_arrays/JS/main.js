//example of a 'while' loop
function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//this will log the length of the string into the console
let H = "Hello there!";
let length = H.length;
console.log (length);

//a "for" loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

//example of an array
function cat_pics() {
    var Cat_Picture = []; //the local variable
    Cat_Picture[0] = "sleeping"; //elements in the array
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//my array
function array_Function() {
    var Color = [];
    Color[0] = "red";
    Color[1] = "blue";
    Color[2] = "yellow";
    Color[3] = "green";
    document.getElementById("Array").innerHTML = "One of my fave colors is " + Color[3] + ".";
}
//example of a constant, variables w/in the funct can be changed but the constant itself cant
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//my example of a constant
function my_const () {
    const red_Wine = {color:"red", year:"2019", location:"bathtub"};
    red_Wine.location = "Moab";
    document.getElementById("My_Const").innerHTML = "I drink massive amounts of " + red_Wine.color + " wine from " + red_Wine.year + " produced in " + red_Wine.location + "."; 
}

//creating an object with 'let' keyword
let cat = {
    breed: "Tabby",
    age: "8",
    color: "orange",
    skills: "vomiting",
    description : function() {
        return "This is an " + this.color + this.breed + " cat. " + "It is " + this.age + " years old and it's special skill is " + this.skills + ".";
    }
};
document.getElementById("cat_object").innerHTML = cat.description();

