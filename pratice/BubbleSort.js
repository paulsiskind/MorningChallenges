
function bubbleSort(array){
    var temp =0;
    for(var i=0; i <array.length;i++){
        for(var j=0;j<array.length-1;j++){
            if(array[j+1]<array[j]){
                temp = array[j]
                array[j]=array[j+1]
                array[j+1] = temp
            }
        }
    }
console.log(array)
   
}
bubbleSort([33,44,22,334,44,55,77,5,4,5,5,87])



var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log(a);