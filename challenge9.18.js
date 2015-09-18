function zip(arr, arr1){
    var result = [];
    for(var i=0; i<arr.length;i++){
        result+=arr[i];
            
            result+=arr1[i];
        
    }
    console.log(result);
}
zip([1,3,5],[2,4,6])


function zip(arr, arr1){
    var result = [];
    result = arr.map(function(a,elem){
       return [arr[elem],arr1[elem]]
    })
    console.log(result.join(','))
}
zip([1,3,5],[2,4,6])