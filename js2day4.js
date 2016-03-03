function myFilter(my_array, callback){
    //Enter your code here
    var arr = [];
    for(var i in my_array){
        if(callback(my_array[i]) == true){
            arr.push(my_array[i]);
                    
        }
            
    }
    return arr;
    
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray,
                         function (x) {
                             if(x%2 === 0){return true;}
                             else{return false;}
                                     
                         }
                        ));
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    
});

process.stdin.on("end", function () {
    processData(_input.split(' ').map(num => Number(num)));
    
});

/*-----------------------------------------------------*/

function processData(input) {

    "use strict"
    let pressure = (gravity) => (mass) => (height) => gravity * mass * height;
    let m = input[0];   //m : stores value of mass.
    let g = input[1];   //g : stores value of gravity.
    let h = input[2];   //h : stores value of height.

    let accelerationDueToGravity = pressure(g);//________    //Blank should be replaced by a function which takes a single argument.
    let particleMass = accelerationDueToGravity(m);//________                //Blank should be replaced by a function which takes a single argument.
    let particleHeight = particleMass(h);//________              //Blank should be replaced by a function which takes a single argument.

    let totalPressure = particleHeight;

    console.log(totalPressure);

    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    
});

process.stdin.on("end", function () {
    processData(_input.split(' ').map(num =>Number(num)));
    
});

/*-----------------------------------------------------*/

var captcha_check =(function(){
    var actual_captcha = Math.floor(Math.random(100)*Math.pow(10, 5));

    return{
        check: function(guess){
            if(guess === actual_captcha){
                console.log("You have written it correctly.");
                            
            } else {
                console.log("You have written it incorrectly.");
                            
            }
                    
        }
            
    };
    
})();

//Do not edit below this line.
var bot = captcha_check.actual_captcha;
captcha_check.check(bot);
console.log(bot);