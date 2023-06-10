const repeatString = function(string, num) {
    var repeat = "";
    if (num == 'random'){
     num = Math.floor(Math.random()*100)
    }
    while (num > 0){
        repeat += string;
        --num;
    }
    if (num < 0) {
        return "ERROR";
    }

    return repeat;
};

repeatString('hey', 3);
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)
repeatString('hey', 'random')
repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
