let totalPrice = 8.075


decimalRounding(8.075, 2);
decimalRounding(8.07458, 2);


// console.log(8.075 * 1000 === Math.round(8.075 * 1000))

function decimalRounding(value, numberOfDecimals) {
    let remainingValue = Math.trunc(value)
    let truncatedValue = value - remainingValue
    console.log("Truncated value is " + truncatedValue)



    let calculation = truncatedValue * Math.pow(10, (numberOfDecimals + 1))
    console.log("Math power value is " +calculation)

   
    if (calculation.toString().indexOf('.99999') > -1 ) {
        console.log("I have lots of nines!")
        calculation = Math.round(calculation)
        console.log("I have rounded the value to " + calculation)
    }

    if (calculation % 10 === 5) {
        calculation += 5;
        calculation /= 1000

    } else {
        calculation /= 10;
        calculation = Math.round(calculation);
        calculation /= 100;
    }
        calculation += remainingValue
        console.log("The final value is " + calculation)

    
    
    
    /*
    if (calculation % 10 === 5) {
        calculation += 5;
        calculation / Math.pow(10, (numberOfDecimals + 1))
        console.log("End result is " + (calculation + truncatedValue))
    } else {
        calculation = Math.round(calculation / 10)
        console.log("End result is " + calculation / Math.pow(10, (numberOfDecimals)))
    }
    */

    //return calculation / e^(numberOfDecimals+1);

};