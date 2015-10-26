


var Camera = function(){
  this.loaded = false
  this.cartridge = 0;
  this.speed = 18;
}

Camera.prototype.isEmpty = function(){
  if(this.loaded === false){
    return true
  }else return false
};

Camera.prototype.addFilm = function(){
  this.loaded = true
  this.cartridge = 3600
 
}

Camera.prototype.fast = function(){
  this.speed = 9;
  if(this.cartridge==0){
    console.log('Please add film');
  }else{
    for(var i=3600; i>=0;i-=9){
      console.log(i);
    }
  }
}

Camera.prototype.slow = function(){
  this.speed = 36;
  if(this.cartridge==0){
    console.log('Please add film')
  }else{
    for(var i=3600;i>=0;i-=36){
      console.log(i);
    }
  }
}




module.exports = Camera;