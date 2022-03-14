$(document).ready(function(){

  // universal scripts for all pages 

  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("homeNav");

  var sticky = navbar.offsetTop;

  function myFunction() {

    if (window.pageYOffset >= sticky) {

      navbar.classList.add("sticky")
      $(".navH2").css('display', 'flex');

    } else {

      navbar.classList.remove("sticky");
      $(".navH2").css('display', 'none');
      
    }

  }

    $("header").slideDown();(300)

    $( "#navBtn" ).click(function(){
   
        $("#navMenu").slideToggle();

        $("#navArrow").toggleClass('turn180');
    
      });

  // scripts for home page
  
  $("#billCalculator").hover(function(){
    
    $("#billCalculatorInner").fadeIn();
    $("#billCalculator .cardInner").css('display', 'flex');
   
  }, function(){

    $("#billCalculatorInner").fadeOut();

  });

  $( "#billCalculator" ).click(function() {
    window.location.href = "bill.html";
  });

  $("#foodAlerts").hover(function(){
    
    $("#foodAlertsInner").fadeIn();
    $("#foodAlerts .cardInner").css('display', 'flex');
   
  }, function(){

    $("#foodAlertsInner").fadeOut();

  });

  $( "#foodAlerts" ).click(function() {
    window.location.href = "alert.html";
  });

  $("#order").hover(function(){

    $("#orderInner").fadeIn();
    $("#order .cardInner").css('display', 'flex');
   
  }, function(){

    $("#orderInner").fadeOut();

  });

  $( "#order" ).click(function() {
    window.location.href = "order.html";
  });

// scripts for bill calculator



});

