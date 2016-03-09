var fs = require("fs");

  // handle a command line argument for the filename
  var filename = process.argv[0];

  fs.readFile('log.log','utf8', function(err, data) {
    if (err) throw err;

    // what gets logged in each case?
    var str = data.split('\n');

    // str.map(function(elem){
    //   if(elem === "D"){

    //   }
    // })
    
   var arr = {}
   var array = 0;
   var largest

   // str.map(function(elem){
   //  if(elem === 'D'){
   //    arr.push(elem)
   //  }
   //  console.log(arr)
   // })

   // console.log(str)
  // console.log(str[3].slice(4,14))
  


   for(var i=0; i<str.length;i++){
    if(arr[str[i].slice(4,14)]){
      arr[str[i].slice(4,14)]++
    }else{
      arr[str[i].slice(4,14)]=1;
    }
   }
   for(keys in arr){
    if(arr[keys]>= array){
      array = arr[keys]
      largest = keys
  
    }
   }
    console.log(largest)
    console.log(array)
 
 console.log(arr)
 // console.log("From "+arr[0][0] +" till "+arr[0][arr.length])


// fs.writeFile('message.txt'+".copy", function(err, data) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });
  }); 
