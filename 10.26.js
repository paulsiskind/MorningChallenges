function remove(string){
    str = string.split('');
    return str.filter(function(num, index){
        return str.indexOf(num)==index;
    }).join('')
}

remove('aaaaaffffddddeededde')



function remove(string){
    result = '';
    for(var i=0; i<string.length; i++){
    if(result.toLowerCase().indexOf(string.charAt(i).toLowerCase())<0){
        result += string.charAt(i);
    }
}
console.log(result)
}
remove('wlllleeesssossosos')