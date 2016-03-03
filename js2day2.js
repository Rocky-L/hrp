function processData(my_string) {
    //Enter your code here
    try {
        var reverse = my_string.split('').reverse().join('');
        console.log('Reversed string is : ' + reverse);
            
    } catch (err) {
        console.log('Error : ' + err.message);
            
    } finally {
        console.log('Type of my_string is : ' + Object.prototype.toString.call(my_string).slice(8, -1).toLowerCase());
            
    }
    
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    
});

process.stdin.on("end", function () {
    processData(eval(_input));
    
});

/*----------------------------------------------*/

function processData(my_height) {
    //Enter your code here
    try {
        if (isNaN(my_height)) {
            throw new Error ("notANumberError");
                    
        } else if (my_height > 10) {
            throw new Error ("hugeHeightError");
                    
        } else if (my_height < 4) {
            throw new Error ("tinyHeightError");
                    
        }

        console.log(my_height);
            
    } catch (err) {
        console.log(err.message);
            
    }
    
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    
});

process.stdin.on("end", function () {
    processData(_input);
    
});