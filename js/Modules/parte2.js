export default{

    data: html`

    <h1> Marcador</h1>
    <div class="equipo A">
        equipo A <br/>
        <input id= "equipo1" type="text"><br/>
         puntos<br/>
         <button onclick="">+1</button>
    <div>

    <div class="equipo B">
        equipo B <br/>
        <input id= "equipo2" type="text"><br/>
        puntos<br/>
        <button onclick="">+1</button>
    <div>
    <button>ganador</button>
    <div id="salida"></div>
    `,
    grupos: function(){
        var equipo1  = document.getElementById("equipo1");
        var equipo2 = document.getElementById("equipo2");


    },
    gana:function(){

    }
}
