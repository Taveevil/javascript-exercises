const sumAll = function(min, max) {
 var min; //variable for the smallest value
 var max; //variable for the biggest value 
    if(!Number.isInteger(min) || !Number.isInteger(max)){ //check if the min value OR the max value are not integers 
        return "ERROR";
    }
    if(min < 0 || max < 0){ //check if either values are less then 0, if so return error
        return "ERROR";
    }

    if (min > max){ //if the smaller value is greater than the max value 
        let temp = min; //create a temporary variable that stores the minimum value 
        min = max; //the minimum value becomes the max value
        max = temp; //and the max value becomes the min value, basically switching it over
    } 
    
    let sum =0;//create a let variable that store the total sum
    for (var i = min; i < max + 1; i++){ //i is equal to the minimum value, and while i is smaller than the max value + 1, increment i by 1
        sum += i; //each time add the i value everytime to our total sum
    }

    return sum;
};

sumAll(1, 4);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
