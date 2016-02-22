$(document).ready(function(){
    $( "#toggleImage" ).click(function() {
      console.log('First Fuck')
  $("#imageToToggle").toggle();
  });

  //    $( "#toggleImage" ).click(function() {
  // $("#imageToToggle").show();
  // });

$( "#mainInput" ).keyup(function() {
  var tacos = $(this).val().toUpperCase();
  $('p').text(tacos)
});

});