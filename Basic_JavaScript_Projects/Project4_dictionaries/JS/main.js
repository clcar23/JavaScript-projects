/*--created function called my_Dictionary--*/
function my_Dictionary() {
    var Jason_Voorhees = {  /*--first variable in the dictionary, this is the key--*/
        Age: 51,
        Height: "6'7",
        Weapon: "machete",
        Kills: 67,
    }
    var Michael_Myers = {
        Age: 59,            /*--these are the values of the second variable--*/
        Height: "6'3",
        Weapon: "knife",
        Kills: 59,
    }
    var Freddy_Krueger = {
        Age: 46,
        Height: "5'6",
        Weapon: "finger blades",
        Kills: 52,
    }
    delete Freddy_Krueger.Kills; /*--this is a delete statement that removes the kills value--*/
    document.getElementById("Dictionary").innerHTML = Freddy_Krueger.Weapon; /*--this will return 'finger blades'--*/
}