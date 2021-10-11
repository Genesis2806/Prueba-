function Sumar(){

    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1)+parseInt(num2);
    alert("La suma es de: " + resultado);

}

function Restar(){
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1)-parseInt(num2);
    alert("La resta es de: " + resultado);

}

function Division(){

    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1)/parseInt(num2);
    alert("La division es de: " + resultado);
}

function Multiplicacion (){


    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1)*parseInt(num2);
    alert("La multiplicacion es de: " + resultado);
}

function ver(){

    var dato= document.getElementById("Materia").value;
    switch (dato) {
        case "Programacion":
            alert("Ha seleccionado programacion");
            break;
    case "Soporte TI":
        alert("Ha seleccionado Soporte TI");
        break;

        case "TICS":
            alert("Ha seleccionado TICS");
            break;

            case "Diseño de Software":
                alert("Ha seleccionado Diseño de Software ");
                break;
     default:
            break;
    }
}



    
function calcular(){

    var Edad= document.getElementById("Edad").value;
     if("Edad>=18"){
         alert("Eres mayor de Edad");
         
     }

     else{
         alert("Eres menor de Edad")
     }
}
