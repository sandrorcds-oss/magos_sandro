
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

function atacar1(){
    if (jugador1ataca()== true){
        pasar_turno12()
    }else{

    }
}


function atacar2(){ 
    if (jugador2ataca()== true){
        pasar_turno23()
    }else{

    }
}

function atacar3(){
    if (jugador3ataca()== true){
        pasar_turno31()
    }else{

    }
}

function pasar1(){
    pasar_turno12()
}

function pasar2(){
    pasar_turno23()
}

function pasar3(){
    pasar_turno31()
}


function jugador1ataca() {
    let seleccionado = document.getElementById("aquien1").value;
    if(seleccionado == "JUGADOR 2" && document.getElementById("vida2").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 2 muerto")
        return false
    }else if(seleccionado == "JUGADOR 3" && document.getElementById("vida3").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 3 muerto")
        return false
    } else{
        let p = document.getElementById("porcentaje1").value;
        p = parseFloat(p) / 100;
        if (Math.random() <= p) {
            if (seleccionado == "JUGADOR 2" && document.getElementById("vida2").innerHTML == "VIVO") {
                console.log("estoy atacando jugador 2")
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = false;
                document.getElementById("vida2").innerHTML = "MUERTO";
                document.getElementById("bloqueo2").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }
            } else if (seleccionado == "JUGADOR 3" && document.getElementById("vida3").innerHTML == "VIVO") {
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = false;
                document.getElementById("vida3").innerHTML = "MUERTO";
                document.getElementById("bloqueo3").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }

            }
        } else {
            console.log("vivo");  
        } return true
    } 
     
    
}

function jugador2ataca() {
    let seleccionado = document.getElementById("aquien2").value;
    if(seleccionado == "JUGADOR 3" && document.getElementById("vida3").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 3 muerto")
        return false
    }else if(seleccionado == "JUGADOR 1" && document.getElementById("vida1").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 1 muerto")
        return false
    } else{
        let h = document.getElementById("porcentaje2").value;
        h = parseFloat(h) / 100;
        if (Math.random() <= h) {
            if (seleccionado == "JUGADOR 3" && document.getElementById("vida3").innerHTML == "VIVO") {
                console.log("estoy atacando jugador 3")
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = false;
                document.getElementById("vida3").innerHTML = "MUERTO";
                document.getElementById("bloqueo3").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }

            } else if (seleccionado == "JUGADOR 1" && document.getElementById("vida1").innerHTML == "VIVO") {
                document.getElementById("atacar1").disabled = true;
                document.getElementById("pasar1").disabled = false;
                document.getElementById("vida1").innerHTML = "MUERTO";
                document.getElementById("bloqueo1").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }


            }
        } else {
            console.log("vivo");  
        } return true
    } 
     
    
}

function jugador3ataca() {
    let seleccionado = document.getElementById("aquien3").value;
    if(seleccionado == "JUGADOR 1" && document.getElementById("vida1").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 1 muerto")
        return false
    }else if(seleccionado == "JUGADOR 2" && document.getElementById("vida2").innerHTML == "MUERTO"){
        console.log("estas atacando a jugador 2 muerto")
        return false
    } else{
        console.log("el jugador al que atacas esta vivo")
        let z = document.getElementById("porcentaje3").value;
        z = parseFloat(z) / 100;
        if (Math.random() <= z) {
            if (seleccionado == "JUGADOR 1" && document.getElementById("vida1").innerHTML == "VIVO") {
                console.log("estoy atacando jugador 1")
                document.getElementById("atacar1").disabled = true;
                document.getElementById("pasar1").disabled = false;
                document.getElementById("vida1").innerHTML = "MUERTO";
                document.getElementById("bloqueo1").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }

            } else if (seleccionado == "JUGADOR 2" && document.getElementById("vida2").innerHTML == "VIVO") {
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = false;
                document.getElementById("vida2").innerHTML = "MUERTO";
                document.getElementById("bloqueo2").disabled =true;
                contador_vida ++
                if (contador_vida == 3){
                    console.log("You are a winner")
                    fin_juego()
                }


            }
        } else {
            console.log("vivo");  
        } return true
    } 
     
}


function pasar_turno12(){
    if( document.getElementById("vida2").innerHTML == "MUERTO"){
        document.getElementById("atacar2").disabled =true;
        document.getElementById("pasar2").disabled =false;
        document.getElementById("aquien2").disabled =true;
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar1").disabled =true;
    }else{
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar1").disabled =true;
        document.getElementById("aquien1").disabled =true;
        document.getElementById("atacar2").disabled =false;
        document.getElementById("pasar2").disabled =false;
        document.getElementById("aquien2").disabled =false;
        document.getElementById("atacar3").disabled =true;
        document.getElementById("pasar3").disabled =true;
        document.getElementById("aquien3").disabled =true;  
    }}




function pasar_turno23(){
    if( document.getElementById("vida3").innerHTML == "MUERTO"){
        document.getElementById("atacar3").disabled =true;
        document.getElementById("pasar3").disabled =false;
        document.getElementById("aquien3").disabled =true;
        document.getElementById("atacar3").disabled =true;
        document.getElementById("pasar2").disabled =true;
    }else{
        document.getElementById("atacar2").disabled =true;
        document.getElementById("pasar2").disabled =true;
        document.getElementById("aquien2").disabled =true;
        document.getElementById("atacar3").disabled =false;
        document.getElementById("pasar3").disabled =false;
        document.getElementById("aquien3").disabled =false;
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar1").disabled =true;
        document.getElementById("aquien1").disabled =true;  
    } 
}

function pasar_turno31(){
    if( document.getElementById("vida1").innerHTML == "MUERTO"){
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar1").disabled =false;
        document.getElementById("aquien1").disabled =true;
        document.getElementById("atacar1").disabled =true;
        document.getElementById("pasar3").disabled =true;
    }else{
        document.getElementById("atacar3").disabled =true;
        document.getElementById("pasar3").disabled =true;
        document.getElementById("aquien3").disabled =true;
        document.getElementById("atacar1").disabled =false;
        document.getElementById("pasar1").disabled =false;
        document.getElementById("aquien1").disabled =false;
        document.getElementById("atacar2").disabled =true;
        document.getElementById("pasar2").disabled =true;
        document.getElementById("aquien2").disabled =true;  
    } } 


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
    

