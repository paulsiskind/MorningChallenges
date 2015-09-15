function checker(str){
  var rules={
      '(':1,
      ')':-1
  };
  var stack = [];
  for(var i =0, j=str.charAt(i); i<str.length; i++, j=str.charAt(i)){
     if(rules[j]>0){
         stack.push(-rules[j]);
     }
     else if(stack.length ==0 || rules[j] !== stack.pop()){
         return false;
     }

  }
  return stack.length == 0;
}

checker(")(")