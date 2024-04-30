// let num1 = parseInt( prompt("Ingrese primer numero"));
// let num2 = parseInt( prompt("Ingrese segundo numero"));

// if(num1>num2) {
//   alert(`el numero ${num1} es mayor`);
// }else if(num2>num1  ){
//   alert(`el numero ${num2} es mayor`);
// }else {
//   alert(`el numero ${num1} y el numero ${num2} son iguales `)
// }
// let acuF = 0;
// let acuM = 0;
// let acuC = 0;
// let acuS = 0;
// let para = 0;
// let detener=0;

// while(para<3){
//   console.log(`hola${para}`);
//   para++;
// }

//   do {
//     let a = prompt("ingrese su nombre");
//     let sexo = parseInt(prompt("1:femenino 2:masculino "));
//     let estadoCivil = parseInt(prompt("1:casado 2:soltero "));

//     sexo===1?(acuF++):(acuM++);
//     estadoCivil ===1?( acuC++):(acuS++);
//     para++;
//     let detner=parseInt(prompt("desea seguir la encuesta? 1:seguir |5 terminar"));

//   } while (detener===1);

// alert(`Femenino : ${acuF} | Masculino : ${acuM} `);

// if (acuC > acuS) {
//   alert(`casado : ${acuC} | soltero : ${acuS} : casado es mayor`);
// } else if (acuC < acuS) {
//   alert(`casado : ${acuC} | soltero : ${acuS} : soltero es mayor`);
// } else {
//   ("tienen la misma cantidad");
// }
let detener = 0;
let ed = 0;
do {
  let nom = prompt("ingrese su nombre");
  let edad = parseFloat(prompt("ingrese su edad"));
  if (edad <= 10) {
    alert(` ${nom} eres un niño`);
  } else if ((edad > 10) & (edad < 19)) {
    alert(` ${nom} eres adolencente`);
  } else if (edad > 18 && edad < 37) {
    alert(`${nom} eres adulto`);
  } else if (edad > 35 && edad < 61) {
    alert(`${nom} eres maduro `);
  } else {
    alert(`${nom} eres anciano`);
  }
  ed++;
  let det = parseInt(prompt("desea seguir la encuesta? 1:seguir |5 terminar"));
} while (detener != 5);
