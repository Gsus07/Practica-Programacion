function calcularPulsacion(sexo, edad) {
    var pulsacion = 0;
    if (sexo === "Masculino") {
        pulsacion = (210 - edad) / 10;
    }
    else {
        pulsacion = (220 - edad) / 10;
    }
    document.getElementById("pulsacion").value = pulsacion;
    return pulsacion;
}

function guardarPersona(Persona) {
    let personas = [];
    var Persona = ArmarJSON();
    if (localStorage.getItem('BDLocal') != null) {personas = JSON.parse(localStorage.getItem('BDLocal'));}
    personas.push(Persona);
    localStorage.setItem('BDLocal', JSON.stringify(personas));
}
function ArmarJSON() {
    var e = document.getElementById("Sexo");
    var sexo = e.options[e.selectedIndex].value;
    var identificacion = document.getElementById("Identificacion").value
    var nombre = document.getElementById("Nombre").value;
    var edad = document.getElementById("Edad").value;
    var pulsacion = calcularPulsacion(sexo, edad);

    var Persona = {
        "Identificacion": identificacion,
        "Nombre": nombre,
        "Sexo": sexo,
        "Edad": edad,
        "Pulsacion": pulsacion,
    }
    return Persona;
}
/*function consultarDatos() {
    var personas = []; 
    if (localStorage.getItem('BDLocal') != null) {
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    }
    personas.forEach(item => {
        document.getElementById("tbodypulsacion").innerHTML=
        '<tr>' +
            '<td >' + item.Identificacion + '</td>' +
            '<td align="center" style="dislay: none;">' + item.Sexo+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.Edad+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.pulsacion+ '</td>' + '</tr>';
    });
   }*/

   function consultarDatos(){
    var cadenaPersonas = "";
    var personas = []; 
    if (localStorage.getItem('BDLocal') != null) {
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    for (i = 0; i < personas.length; i++){
        cadenaPersonas +=
        '<tr>' +
            '<td >' + personas[i].identificacion + '</td>' +
            '<td>' + personas[i].nombre+ '</td>' +
            '<td>' + personas[i].edad+ '</td>' +
            '<td>' + personas[i].sexo+ '</td>' +
            '<td>' + personas[i].pulsacion+ '</td>' + '</tr>';
    }
    document.getElementById("tdPulsaciones").innerHTML= cadenaPersonas;
   }

