 function factorial(n, result) {
    if(n==0){
      return 1;
    }

    if(n===1){
      return 1;
    }else{
    
    return n * factorial(n-1) 
    }
  }

  factorial(2)
  factorial(3)
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5))