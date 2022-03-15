$(document).ready(function(){

    $("#introContainer").on( "swipe", swipeHandler );


    function swipeHandler( event ){
        alert("I am an alert box!");
      }

});

$(document).on('swipeleft swiperight', function () {
    alert("I am an alert box!");
});