let estudiantes =
JSON.parse(localStorage.getItem("estudiantes"))|| [];
let editando = -1;
mostrar();
function guardar(){
    alert("Entró a guardar}");
    
     let nombre =
    document.getElementById("nombre").value;
    let nota1 =
    Number(document.getElementById("nota1").value);
    let nota2 =
    Number(document.getElementById("nota2").value);
    let nota3 =
    Number(document.getElementById("nota3").value);
    if(nombre=="" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert("complete todos los datos");
        return;
    }
    let promedio=((nota1+nota2+nota3)/3).toFixed(2);
    let estado = promedio >= 51 ? "Aprobado" :"Reprobado";
    let estudiante={
        nombre,
        nota1,
        nota2,
        nota3,
        promedio,
        estado
    };
    if(editando==-1){
        estudiantes.push(estudiante);
    }else{
        estudiantes[editando]=estudiante;
        editando=-1;
    }
    localStorage.setItem("estudiantes"
    ,JSON.stringify(estudiantes));

    limpiar();

    mostrar();

}

function mostrar(){     
    let
    tabla =
    document.getElementById("tabla");

    tabla.innerHTML="";

    estudiantes.forEach((e,i)=>{

        tabla.innerHTML+=`

        <tr>

            <td>${e.nombre}</td>
            <td>${e.nota1}</td>
            <td>${e.nota2}</td>
            <td>${e.nota3}</td>
            <td>${e.promedio}</td>

            <td>

                <span class="${e.estado=="Aprobado" ?
                    "aprobado" : "reprobado"}">
                     ${e.estado}
           
                </span>
            </td>
             <td>
            
            <button class="editar"
            onclick="editar(${i})">Editar</button>

            <button class="eliminar"
            onclick="eliminar(${i})">Eliminar</button>

            </td>
        </tr>
      
         `;

}  )  ;

} 

function editar(i){

    document.getElementById("nombre").
    value=estudiantes[i].nombre;

    document.getElementById("nota1").
    value=estudiantes[i].nota1;

    document.getElementById("nota2").
    value=estudiantes[i].nota2;

    document.getElementById("nota3").
    value=estudiantes[i].nota3;

    editando = i;
}

function eliminar(i){
    if(confirm("¿eliminar estudiante?")){

        estudiantes.splice(i,1);

        localStorage.setItem("estudiantes"
        , JSON.stringify(estudiantes));

        mostrar();

    }

}

function limpiar(){

    document.getElementById("nombre").
    value="";

    document.getElementById("nota1").
    value=""

    document.getElementById("nota2").
    value="";
    
    document.getElementById("nota3").
    value="";
}
