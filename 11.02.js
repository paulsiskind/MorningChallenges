function getRandom(min, max) {debugger
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  do{
  var i=random
  if(i%3==0){  
      console.log(i/3)
  }
  if((i+1)%3==0){
      console.log((i+1)/3)

  }
  if((i-1)%3==0){
      console.log((i-1)/3)
  }
  else((i == 1)){
      console.log(i);
  }
}while(i>1)
}
getRandom(80,200)