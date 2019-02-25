function multiplication(){

        
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;
    
    let mul = multiply(a,b,c);
    alert("Average is : "+mul);
}

function multiply(x,y,z) {
    return (parseInt(x)+parseInt(y)+parseInt(z))/3;
}

