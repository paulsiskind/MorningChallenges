// function ninety(arr){
//     if(arr===0){
//         console.log('You are Drunk!')
//     }
//     else{
//         console.log(arr+' bottles of beer on the wall,'+arr+' bottles of beer on the wall!')
//         arr--
//         ninety(arr)
//     }
// }
// ninety(99)



// function ninety(n){
//   function go(num){
//     if(num===0){

//     }
// //     return go(--num);
// //   }
// //   return go(n)
// // }


// var a = [1,1,1,1]
// var b = [1,1,1,2]


// function all(array, n){
//   if(array.length===0)return false;
//   if(array.length===1 && array[0]===n) return true;
//   return array[0]===n && all(array.slice(1),n);
// }

// console.log(all(a,1));
// console.log(all(b,1));


function palindrome(word){
  if(word.length <=1)return true;
  if(word[0] !== word[word.length-1]) return false;
  return palindrome(word.slice(1, word.length-1))

}
palindrome('rotor')
console.log("Rotors is palindrome", palindrome('rotors'))