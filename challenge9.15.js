var isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
};

function translate(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i]) && string[i] !== " ") {
            newString += string[i] + "o" + string[i];
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}
console.log(translate('In order to understand recursion, one must first understand recursion.'))

function nonSenseRec(string){
    var vowels = ['a','e','i','o','u','A','E','I','O','U', " "],
        stringtest = string,
        output = '';
    
    function go(string){
        if(string.length == 0) return output;
        output += vowels.indexOf(string[0]) == -1 ?  string[0] + 'o' + string[0] : string[0];
        return go(string.slice(1))
    }
    return go(stringtest)
}

nonSenseRec('this is fun')

var vowels = { 
   'a': true,
   'o': true,
   'i': true,
   'e': true,
   'u': true,
   ' ': true
}

function check(letter){
    str = letter.split('')
    var result = '';
    for(var i in letter){
     if(vowels[str[i]]){
         result += str[i]
     }
     else{
         result += str[i] + 'o' + str[i];
     }
}
console.log(result)
}
check('Thr rbrt tacs ff ptr')