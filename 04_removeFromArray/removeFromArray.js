const removeFromArray = function() {
    var array = arguments[0];
    for(var i = 0; i < arguments.length; i++){
    var index = array.indexOf(arguments[i]);
        if(index > -1){
            array.splice(index, 1)
        }
    }
    return array;
};

removeFromArray([1, 2, 3, 4], 3); 
removeFromArray([1, 2, 3, 4], 3,2); 
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
