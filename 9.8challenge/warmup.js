module.exports ={

nested: function(arr){

var obj = arr.reduce(function(prev, curr, i) {
  prev[i] = curr;
  return prev;
}, {});
}

}