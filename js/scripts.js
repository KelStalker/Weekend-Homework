
//------- WHW Assignment 1.1 - Array Of Multitudes -------

//console.log("Hello World!")
// two variables for user number and user exponent
// create an array for the output to exist in

var AOM = [];

// takes two arguments (above) and calculates as 'x to the power of y'
function calculateAOM() {

    var x = document.getElementById("userNumber").value;
    var y = document.getElementById("userExponent").value;

console.log(x, y);

    // for each iteration, multiply the current value of I with the userNumber
    // var i;  -> relpaced this line using 'let'
    for (var i = 0; i <= y; i++) {

        // store each iteration consecutively in the reslut array created above
        AOM.push(x * i);
    }
    // console.log(AOM);

    document.getElementById("displayArrayElements").innerHTML = AOM;
    return AOM;
}
