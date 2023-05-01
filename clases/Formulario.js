import { Preguntas } from "./Preguntas.js";

export class Formulario {
  indicePregunta = 0;
  contador = 0;

  constructor(preguntasArreglo) {
    this.preguntasArreglo = preguntasArreglo;
  }
  /**
   *
   * @returns {Preguntas}
   */
  obtenerPregunta() {
    return this.preguntasArreglo[this.indicePregunta];
  }
  terminado(){
    return this.preguntasArreglo.length === this.indicePregunta
  }
  adivinar(respuestaDepregunta){
    console.log(respuestaDepregunta)
    if(this.obtenerPregunta().validacionRespuesta(respuestaDepregunta)){
        this.contador++
    }
    this.indicePregunta++
  }
}
