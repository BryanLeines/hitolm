fetch('alumnos.json')
.then(datos=>datos.json())
.then(datos=>procesar(datos));

function procesar(datos) {
    let contenido = document.getElementById("not");
    let tabla=` 
    <table>
    <thead>
    <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>BD</th>
    <th>LM</th>
    <th>SI</th>
    <th>Entornos</th>
    <th>Programación</th>
    <th>FOL</th>
    <th>Media</th>
    </tr>
    </thead>
    <tbody>`;
    
    let alumnos=Object.keys(datos.items).length;
    
    let notas=[];
    for (let i = 0; i < alumnos; i++) {
        notas.push(datos.items[i].calificaciones);
        
    }

    let media = notaMedia(notas,alumnos);
    for (let i = 0; i < alumnos; i++) {
        tabla +=`
        <tr>
        <td>${datos.items[i].id}</td>
        <td>${datos.items[i].nombre}</td>
        <td>${datos.items[i].calificaciones.bd} ${notasTexto(datos.items[i].calificaciones.bd)}</td>
        <td>${datos.items[i].calificaciones.lm} ${notasTexto(datos.items[i].calificaciones.lm)}</td>
        <td>${datos.items[i].calificaciones.si} ${notasTexto(datos.items[i].calificaciones.si)}</td>
        <td>${datos.items[i].calificaciones.entornos} ${notasTexto(datos.items[i].calificaciones.entornos)}</td>
        <td>${datos.items[i].calificaciones.programacion} ${notasTexto(datos.items[i].calificaciones.programacion)}</td>
        <td>${datos.items[i].calificaciones.fol} ${notasTexto(datos.items[i].calificaciones.fol)}</td>
        <td>${media[i]+" ("+notasTexto(media[i])+")"}</td>
        </tr>`;
        
        
    }
    tabla+=`</tbody>
    </table>`

    contenido.innerHTML=tabla;

  

let botonBuscarAlumno=document.getElementById("btn");
 let contenidoBuscarAlumno= document.getElementById("contenidoBuscar");

 botonBuscarAlumno.addEventListener("click",()=>{
    let textoBuscarAlumno= document.getElementById("inputBuscar").value;
 
    let tabla=` 
    <table>
    <thead>
    <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>BD</th>
    <th>LM</th>
    <th>SI</th>
    <th>Entornos</th>
    <th>Programación</th>
    <th>FOL</th>
    <th>Media</th>
    </tr>
    </thead>
    <tbody>`;
    for(let i=0;i<alumnos;i++){
       
        if(datos.items[i].nombre==textoBuscarAlumno ){
            tabla +=`
            <tr>
            <td>${datos.items[i].id}</td>
            <td>${datos.items[i].nombre}</td>
            <td>${datos.items[i].calificaciones.bd} ${notasTexto(datos.items[i].calificaciones.bd)}</td>
            <td>${datos.items[i].calificaciones.lm} ${notasTexto(datos.items[i].calificaciones.lm)}</td>
            <td>${datos.items[i].calificaciones.si} ${notasTexto(datos.items[i].calificaciones.si)}</td>
            <td>${datos.items[i].calificaciones.entornos} ${notasTexto(datos.items[i].calificaciones.entornos)}</td>
            <td>${datos.items[i].calificaciones.programacion} ${notasTexto(datos.items[i].calificaciones.programacion)}</td>
            <td>${datos.items[i].calificaciones.fol} ${notasTexto(datos.items[i].calificaciones.fol)}</td>
            <td>${media[i]+" ("+notasTexto(media[i])+")"}</td>
            </tr>`;
       
       
        }
}
        tabla+=` </tbody>
                </table>`;
                contenidoBuscarAlumno.innerHTML= tabla;
});

    function notasTexto(nota) {
        if (nota<5 && nota>=0) {
            return "Insuficiente";
        } else if (nota<7) {
            return "Aprobado";
        } else if (nota<=9) {
            return "Notable";
        } else if (nota==10) {
            return "Sobresaliente";
        } else {
            return "Error";
        }
    }

    function notaMedia(notas,alumnos) {
        let media=[];
        for (let i = 0; i < alumnos; i++) {
            media.push((notas[i].bd + notas[i].lm + notas[i].si + notas[i].entornos + notas[i].programacion + notas[i].fol)/6);
            
        }
        console.log(media);
        return media;
    }
}
  