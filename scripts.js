
$(document).ready(function(){
   
    $('#bot p').delay(3000).fadeOut(500, function() {

        $(this).text("Bloom helps people to track and achieve small to medium goals everyday and medium to large goals every week.").fadeIn(500);
        $("#bot img").attr("src","img/progress2.png");
        $("#yoga").attr("src","img/yoga2.png");


        $('#bot p').delay(4000).fadeOut(500, function() {

            $(this).text("By doing so we aim to promote health and productivity for our users. Interested in blooming?").fadeIn(500);
            $("#bot img").attr("src","img/progress3.png");
            $('#accountReg').delay(2000).animate({bottom: '30%'});
            $('#signIn').delay(3000).animate({bottom: '0%'});
            $('#logo').fadeIn();
           
          });
      


      });

     

  });