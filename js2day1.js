function vowelsAndConsonants(s) {
    var str1 = "";
    var str2 = "";
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' ||
           s.charAt(i) == 'o' || s.charAt(i) == 'u'){
            str1 += (s.charAt(i) + '\n');
                    
        } else {
            str2 += (s.charAt(i) + '\n');
                    
        }
            
    }

    console.log(str1 + str2);
    
}

var re = /^([aeiou]).*\1$/; //match start and end vowels