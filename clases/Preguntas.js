export class Preguntas {
  
  
    /**
   *
   * @param {string} contenidoPregunta Esto es la pregunta
   * @param {string[]} opcionesRespuestas Son las opciones que presenta la pregunta
   * @param {string} respuestaReal La respuesta real
   */


  constructor(contenidoPregunta, opcionesRespuestas, respuestaReal) {
    this.contenidoPregunta = contenidoPregunta;
    this.opcionesRespuestas = opcionesRespuestas;
    this.respuestaReal = respuestaReal;
  }

  validacionRespuesta(respuestaPregunta) {
    return respuestaPregunta === this.respuestaReal;
  }
  
}
