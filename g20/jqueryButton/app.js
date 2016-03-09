$(document).ready(function(){

  $("#addButton").click(function(){
    for(var i=0;i<11;i++){
      $("#containingDiv").append('<p>Tacos Rule</p>')
    }
  })

  $("#removeButton").click(function(){
      console.log($("#removeInput")[0].value)
    if(($("#removeInput")[0].value)==="delete"){
    $('#containingDiv').children('p').remove()
  }
});

 
})