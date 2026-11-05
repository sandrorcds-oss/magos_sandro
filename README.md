# magos_sandro
# el merjo juego del mundo
este juego de magos esta hecho con todo el cariño del mundo
para mi profesor david, a ver si me pone un 10 de nota, te amo.
# Para la parte de HTML:
Este código es básicamente la estructura de un juego de 3 jugadores.
Cada uno puede atacar a otro jugador o pasar su turno. En la pantalla aparecen los tres jugadores con sus porcentajes, 
<img width="1867" height="930" alt="image" src="https://github.com/user-attachments/assets/d138f052-f92b-4c58-85ea-9b30848b3311" />

los botones para atacar y pasar y una opción para elegir a quién quieres atacar. También aparece si cada jugador sigue vivo o ha sido eliminado. Arriba está el botón START para empezar el juego. Luego, con el CSS se le da forma y color a la página, puse el fondo negro, lo botones con colores, basicos y el botón de start amarillo, arriba a la izquierda. Las posiciones de todas las tablas estan puestas en el css, estructurado asi, para poder que hacer que funcione he puesto varios class: 
<img width="445" height="315" alt="image" src="https://github.com/user-attachments/assets/4fc1eb54-4b5a-4827-b275-213972e2fea2" />

# Para la parte de Java
Este código es el que hace funcionar el juego. Primero, todos los botones están desactivados y, al pulsar START, 
empieza la partida. Los jugadores van pasando los turnos y pueden atacar o pasar. Los ataques tienen una probabilidad de salir bien 
según el porcentaje de cada jugador. Si un ataque funciona, el jugador atacado queda eliminado. Cuando solo queda uno vivo, el juego termina y se desactivan todos los botones.
