let notaMatematica="0";
let notaLengua="0";
let notaEfsi="0";
let promedio="0";
let mayorNota="0";
let materiaMayorNota="0";


function calcularpromedio() {
notaMatematica = parseFloat(document.getElementById("notaMatematica").value);
notaLengua = parseFloat(document.getElementById("notaLengua").value);
notaEfsi = parseFloat(document.getElementById("notaEFSI").value);

promedio = (notaMatematica + notaLengua + notaEfsi) / 3;
promedioRedondeadoa2decimales = promedio.toFixed(2);
const promediocolor = document.getElementById("verresultado");
    

if (!notaMatematica || !notaLengua || !notaEfsi) {
  alert("Por favor, complete todos los campos con notas númericas.");
  return;
}

if (promedio >= 6) {
  promediocolor.style.color = 'green';
} else {
    promediocolor.style.color = 'red';
}
  document.getElementById("verresultado").innerHTML = "El promedio del alumno es: " + promedioRedondeadoa2decimales;

}

function Materiaconmayornota() {
  notaMatematica = parseFloat(document.getElementById("notaMatematica").value);
  notaLengua = parseFloat(document.getElementById("notaLengua").value);
  notaEfsi = parseFloat(document.getElementById("notaEFSI").value);
  
  mayorNota = Math.max(notaMatematica, notaLengua, notaEfsi);

  let materias = "";
  if (notaMatematica === mayorNota) {
    materias += "Matemática, ";

  }
  if (notaLengua === mayorNota) {
    materias += "Lengua, ";

  }
  if (notaEfsi === mayorNota) {
    materias += "EFSI, ";

  }
  
  materias = materias.slice(0, -2); 
  document.getElementById("verresultado").innerHTML = "La(s) materia(s) con la mayor nota es(son): " + materias;
  document.getElementById("verresultado").style.color = 'blue';

  if (isNaN(notaMatematica) || isNaN(notaLengua) || isNaN(notaEfsi)) {
    alert("Por favor, complete todos los campos con notas numéricas.");
    return; 
  }
}



function validarNota(e) {
  if (e.target.value > 10 || e.target.value < 1) {
      e.target.style.color = 'red';
  } else {
      e.target.style.color = 'green';
  }
}

document.getElementById("notaMatematica").onkeyup = validarNota;
document.getElementById("notaLengua").onkeyup = validarNota;
document.getElementById("notaEFSI").onkeyup = validarNota;

const inputsValidos = () => {
  return notaMate.value.length && notaLengua.value.length && notaEfsi.value.length;
} 


