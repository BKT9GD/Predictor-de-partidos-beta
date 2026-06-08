console.log("Script iniciado")
let local
let visitante
let glocal
let gvisitante
function predecir(){
    local = prompt("¿Cual es equipo local?")
    if (local == null){
        alert("Se cancelo la operacion.")
        return
    }
    visitante = prompt("¿Cual es el equipo visitante?")
    if (visitante == null){
        alert("Se cancelo la operacion.")
        return
    }
    glocal = Math.floor(Math.random() * 10)
    gvisitante = Math.floor(Math.random() * 10)

    if (glocal > gvisitante){
        alert("¡Gano "+local+"!")
        alert(local+" "+glocal+"-"+gvisitante+" "+visitante)
    } else if (glocal < gvisitante){
        alert("¡Gano "+visitante+"!")
        alert(local+" "+glocal+"-"+gvisitante+" "+visitante)
    } else{
        alert("Quedo en empate")
        alert(local+" "+glocal+"-"+gvisitante+" "+visitante)
    }
}