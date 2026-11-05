# magos_sandro
# el merjo juego del mundo
este juego de magos esta hecho con todo el cariño del mundo
para mi profesor david, a ver si me pone un 10 de nota, te amo.
# Para la parte de HTML:
Este código es básicamente la estructura de un juego de 3 jugadores.
Cada uno puede atacar a otro jugador o pasar su turno. En la pantalla aparecen los tres jugadores con sus porcentajes, 
<img width="1867" height="930" alt="image" src="https://github.com/user-attachments/assets/d138f052-f92b-4c58-85ea-9b30848b3311" />

los botones para atacar y pasar y una opción para elegir a quién quieres atacar. También aparece si cada jugador sigue vivo o ha sido eliminado. Arriba está el botón START para empezar el juego. Luego, con el CSS se le da forma y color a la página, puse el fondo negro, lo botones con colores, basicos y el botón de start amarillo, arriba a la izquierda. Las posiciones de todas las tablas estan puestas en el css, estructurado asi, para poder que hacer que funcione he puesto varios class: 
``` css
.juego {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-collapse: collapse;
    width: 480px;
}

th, td {
    border: 1px solid black;
    text-align: center;
    width: 600px;
}
```

# Para la parte de JavaScript
Este código es el que hace funcionar el juego. Primero, todos los botones están desactivados y, al pulsar START, 
empieza la partida.
``` java

let contador_vida=1
document.getElementById("atacar1").disabled =true;
document.getElementById("pasar1").disabled =true;
document.getElementById("aquien1").disabled =true;
document.getElementById("atacar2").disabled =true;
document.getElementById("pasar2").disabled =true;
document.getElementById("aquien2").disabled =true;
document.getElementById("atacar3").disabled =true;
document.getElementById("pasar3").disabled =true;
document.getElementById("aquien3").disabled =true;
document.getElementById("vida1").innerHTML = "VIVO"
document.getElementById("vida2").innerHTML = "VIVO"
document.getElementById("vida3").innerHTML = "VIVO"


function empezar(){
    console.log("Holi, que tal ese mewing");
    document.getElementById("atacar1").disabled =false;
    document.getElementById("pasar1").disabled =false;
    document.getElementById("aquien1").disabled =false;
    document.getElementById("atacar2").disabled =true;
    document.getElementById("pasar2").disabled =true;
    document.getElementById("aquien2").disabled =true;
    document.getElementById("atacar3").disabled =true;
    document.getElementById("pasar3").disabled =true;
    document.getElementById("aquien3").disabled =true;
    document.getElementById("bloqueo1").disabled =false;
    document.getElementById("bloqueo2").disabled =false;
    document.getElementById("bloqueo3").disabled =false;
    document.getElementById("vida1").innerHTML = "VIVO"
    document.getElementById("vida2").innerHTML = "VIVO"
    document.getElementById("vida3").innerHTML = "VIVO"
    contador_vida = 1
}
```
Los jugadores van pasando los turnos y pueden atacar o pasar. Los ataques tienen una probabilidad de salir bien 
según el porcentaje de cada jugador. Si un ataque funciona, el jugador atacado queda eliminado. lo que hace es que el porcentaje que ha cogido lo divide entre 100 y saca con  un math.random un numero del 1 al 0, y saca el porcentaje de daño. Cuando el juego detecta que dos personas  han muerto y añade al contador 1 cuando alguien muere cuando llega a 3 se para el juego. Cuando solo queda uno vivo, el juego termina y se desactivan todos los botones.
``` java

    function fin_juego(){
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar1").disabled =true;
        document.getElementById("aquien1").disabled =true;
        document.getElementById("atacar2").disabled =true;
        document.getElementById("pasar2").disabled =true;
        document.getElementById("aquien2").disabled =true;
        document.getElementById("atacar3").disabled =true;
        document.getElementById("pasar3").disabled =true;
        document.getElementById("aquien3").disabled =true;
    }
    

```
