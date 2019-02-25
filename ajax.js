$(document).ready(function(){
    $("button").click(function(){
        var a = $('#num1').val();
        var b = $('#num2').val();
        var c = $('#num3').val();
        
let mul = multiply(a,b);
alert("Average is :"+mul);

    });
  });


function multiply(x,y,z) {
    return (parseInt(x)+parseInt(y)+parseInt(z))/3;
}