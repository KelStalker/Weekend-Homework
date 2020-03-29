
//------- WHW Assignment 1.1 - Array Of Multitudes -------

//console.log("Hello World!")

var x = document.getElementById("userNumber")
var y = document.getElementById("userExponent")

// takes two arguments (above) and calculates as 'x to the power of y'
function calculateAOM(x, y) {

    // create an array for the output to exist in
    var result = []

    // for each iteration, multiply the current value of I with the userNumber
    for (i = 1; i <= y; i++) {

        // store each iteration consecutively in the reslut array created above
        result.push(x * i)
        console.log(result[i]);
    }

}
