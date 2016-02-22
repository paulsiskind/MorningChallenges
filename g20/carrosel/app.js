$(document).ready(function(){
    var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];
    var pictureCount = 0;

    $(".fa-arrow-circle-o-left").click(function(){
      pictureCount--
      if(pictureCount === -1){
        pictureCount = 2;
      }
       $('.slider').html("<img src="+pictureArr[pictureCount]+">")
    });

     $(".fa-arrow-circle-o-right").click(function(){
      pictureCount++
       if(pictureCount === 3){
        pictureCount = 0;
      }
       $('.slider').html("<img src="+pictureArr[pictureCount]+">")
    });


});