/*this demonstrates the concatenate method, joining variables together */
function full_sentence() {
    var part_1 = "I ";
    var part_2 = "pity ";
    var part_3 = "da ";
    var part_4 = "fool!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("fav_quote").innerHTML = whole_sentence;
}
//this demonstrates the slice method, 'slices out a portion of a string
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//he is my own version of the slice method, i didnt bother to have it print
function slice_Method2() {
    var Sentence = "Man that is one big ugly baby!";
    var Section = Sentence.slice(20,24);
    document.getElementById("Slice").innerHTML = Section;
}
//here is the toUpperCase method, it does what you think it might
function up_Yours() {
    var Sentence = "i want to shout this message really loud";
    var upper_case = Sentence.toUpperCase();
    document.getElementById("Loud").innerHTML = upper_case;
}
//this srting_Method changes a number to a string
function string_Method() {
    var X =666;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//precision_Method lets you shorten a number to a specified length
function precision_Method() {
    var Y = 3.14151592653269387;
    document.getElementById("Numbers_to_Precision").innerHTML = Y.toPrecision(7);
}
//valueOf_Method will return the value of a string.
function valueOf_Method() {
    var Z = "Let's see what this does!"
    document.getElementById("Value_Of_Method").innerHTML = Z.valueOf();
}
//toFixed will convert a number to a string and then round to a certain decimal point
function toFixed_Method() {
    var num = 123.456;
    var n = num.toFixed(2);
    document.getElementById("Numbers_to_Fixed").innerHTML = n

}