//decimalRounding(8.075, 2);
decimalRounding(8.07458, 2);
//decimalRounding(8.074586815, 8);


// The arguments are the number you want rounded and to how many decimals you want to round
function decimalRounding(value, decimals) {
    console.log("Initial value is " + value)
    let decimalCounting = Math.pow(10, (decimals + 1))
    let truncatedValue = Math.trunc(value)
    let remainingValue = value - truncatedValue
    console.log("Only the decimal value is " + remainingValue)

    let calculation = remainingValue * decimalCounting
    console.log("Math power value is " + calculation)

   
    if (calculation.toString().indexOf('.99999') > -1 ) {
        calculation = Math.round(calculation)
        console.log("Since there are lots of nines, I have rounded the value to " + calculation)
    }

    if (calculation % 10 === 5) {
        calculation += 5;
        console.log("I manually added 5 to the value, resulting in " + calculation)
        calculation /= decimalCounting

    } else {
        calculation /= 10;
        calculation = Math.round(calculation);
        console.log(calculation)
        calculation /= decimalCounting / 10;
    }
        console.log("The value before readding the truncated value is " + calculation)
        calculation += truncatedValue
        console.log("The final value is " + calculation)

    
    
    
    /*
    if (calculation % 10 === 5) {
        calculation += 5;
        calculation / Math.pow(10, (numberOfDecimals + 1))
        console.log("End result is " + (calculation + remainingValue))
    } else {
        calculation = Math.round(calculation / 10)
        console.log("End result is " + calculation / Math.pow(10, (numberOfDecimals)))
    }
    */

    // console.log(8.075 * 1000 === Math.round(8.075 * 1000))
    // return calculation / e^(numberOfDecimals+1);

};