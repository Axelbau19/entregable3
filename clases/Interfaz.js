export class Interfaz{
    constructor(){

    }

    mostrarPreguntas(textoRenderizado){
        const preguntaH3 = document.getElementById('pregunta')
        preguntaH3.innerText = textoRenderizado;
    }
    //hacemos la utilización del metodo callback para llamarla posterior esa misma funcion 
    /**
     * 
     * @param {string[]} opciones Aqui van las opciones 
     */
    mostrarOpciones(opciones, callback){
        const opcionesContenedor = document.getElementById('cajaRespuesta')
        opcionesContenedor.innerHTML = ' '
        //iteracion de las opciones
        for(let i = 0; i < opciones.length; i++){ 
            const boton = document.createElement('button')
            boton.innerText = opciones[i]
            boton.className = 'respuestas'
            boton.addEventListener('click', () => callback(opciones[i]))
            opcionesContenedor.append(boton)
            
        }
    }
    
    /**
     * 
     * @param {number} indiceActual 
     * @param {number} total 
     */
    mostrarProgreso(indiceActual, total){
        const progreso = document.getElementById('progreso')
        progreso.innerHTML = `Pregunta: ${indiceActual} de ${total}`
    }


     /**
      * 
      * @param {number} contador 
      */
    mostrarPuntuacion(contador){
        const popUpFinal = `
        <h1>Resultado</h1>
        <h2 id="contador">Tu puntuaje: ${contador}</h2>
        `
        const elemento = document.getElementById('cuestionario')
        elemento.innerHTML = popUpFinal
    }
}