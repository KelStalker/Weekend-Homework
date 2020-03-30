
//------- WHW Assignment 1.1 - Array Of Multitudes -------

//console.log("Hello World!")


// two variables for user number and user exponent
var x = document.getElementById("userNumber")
var y = document.getElementById("userExponent")

// create an array for the output to exist in
var AOM = []

// takes two arguments (above) and calculates as 'x to the power of y'
function calculateAOM(x, y) {

    // for each iteration, multiply the current value of I with the userNumber
    // var i;  -> relpaced this line using 'let'
    for (var i=0; i <= y; i++) {

        // store each iteration consecutively in the reslut array created above
        AOM.push(x * i);
        return AOM;
    }

    document.getElementById("displayArrayElements").innerHTML = AOM;
}
