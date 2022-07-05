function agregar(){
    var nombre=document.getElementById("nombre").Value;
    var materia=document.getElementById("materia").value;
    var apellido=document.getElementById("apellido").value;
    var agr="<tr><td class='codigo'>"+nombre+"<td class='materia'>"+materia+"<td class='apellido'>"+apellido+"</tr>";
    document.getElementById("contenido").innerHTML += agr;   
    document.getElementById("nombre").value="";
    materia=document.getElementById("materia").value="";
    apellido=document.getElementById("apellido").value="";
}

function borrar(){
    document.getElementById("contenido").innerHTML="";
}