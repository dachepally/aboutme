var regex=/^[0-9]+$/;
$(document).ready(function(){
    $("button").click(function(){
        var a = $('#num1').val();
        var b = $('#num2').val();
        var c = $('#num3').val();
        
let mul = multiply(a,b,c);
alert("Average is :"+mul);

    });
  });


function multiply(x,y,z) {
    return (parseInt(x)+parseInt(y)+parseInt(z))/3;
}
function mouseHOver() {
    const xhttp = new XMLHttpRequest();
    $.ajax({
      type: 'GET',
      url: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4',
      success: function (data) {
        $("#mouseOverExamp").html(data[1].quote);
      }
    });
  }
  
  function mouseOut() {
    $("#mouseOverExamp").html("Hey, place the cursor on me");
  }
  