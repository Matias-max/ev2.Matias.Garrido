export default{

    puntajes: [{alumno:"Pablo Rojas",puntaje:9,resultado:"BUENO"}], 
    Data: `
        <h1>Autor: Matias Garrido</h1>
        alumno<br/>
        <input id="alumno" type="text"><br/>
        <select id="puntaje">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select><br/>
        <br/><br/><br/>
        <button onclick="registrar()">registrar<button><br>
        <div id="salida"></div>

    `,
    cargar: function(){
        var salida= document.getElementById("salida");
        var tabla = ` 
            <table>
                <tr>
                    <th>alumno</th>
                    <th>puntaje</th>
                    <th>resultado</th>
                </tr>   
        `;
        this.puntajes.forEach((item) => {
            tabla +=`
                <tr>
                    <th>${item.alumno}</th>
                    <th>${item.puntaje}</th>
                    <th>${item.resultado}</th>
                </tr>
        `
        });
        tabla += "</table>";
        salida.innerHTML = tabla;
    },
    registrar: function(){
        var alumno = document.getElementById("alumno").value;
        var puntaje = document.getElementById("puntaje").value;
        var resultado = document.getElementById("resultado");

        if(alumno.Value == "" ||puntaje== ""){
            alert("vacio")
        }

        if(alumno.Value <= 0 && puntaje >= 3){
            resultado="MALO";
        }
        if(alumno.Value <= 4 && puntaje >= 7){
            resultado="REGULAR";
        }
        if(alumno.Value <= 8 && puntaje >= 9){
            resultado="BUENO";
        }

        if(alumno.Value == 10){
            resultado="MASTER";
        }
        var obj={
        alumno:alumno.value,
        puntaje:puntaje.value,
        resultado:resultado.value,
        };
        this.puntajes.push(obj);
        this.cargar();

    }
}