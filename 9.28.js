var list = ['milk', 'butter', 'cheese'];

function lister(array){
    for(var i =0; i<array.length; i++){
        console.log(array[i]);
    }
}lister(list);

function firstandLast(array){
    console.log(array.shift())
    console.log(array.pop())
}
firstandLast(list);

function toupperCase(array){
    var result = [];
    for(var i in array){
      result.push(array[i].toUpperCase())
    }
    console.log(result);
}
toupperCase(list);

var list = ['RED', 'GREEN', 'BLUE'];

function toLower(array){
    var result = [];
    for(var i in array){
        result.push(array[i].toLowerCase())
    }
    console.log(result);
}
toLower(list);


var list = [
  {width: 20, color: 'red'},
  {width: 50, color: 'blue'},
  {width: 10, color: 'purple'}
];

function getColor(array){
   return array.map(function(elem){
    return elem.color;
 })
}
getColor(list);


var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 543}
]
function getStrongest(array){
   var large = 0;
   for(var i =0; i<array.length; i++){
     if(array[i].strength > large){
        large = array[i];
     }  
   }
  console.log(large);
}

function getSmallest(array){debugger
  var value = array[0].strength;
  for(var i=0; i<array.length; i++){
      if(array[i].strength<value){
          value=array[i]
      }
  }
  console.log(value)
  }
  getSmallest(orcs);
      
  function getStrongestWeapons(array){ 
   return array.filter(function(elem){
    return Math.max.apply(null,elem.strength)
    }).map(function(elem){
        return elem.weapons
    })
}
