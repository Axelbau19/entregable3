//importar las preguntas
import { arregloDePreguntas } from "./data/preguntasAlmacen.js";
import { Formulario } from "./clases/Formulario.js";
import { Interfaz } from "./clases/Interfaz.js";
import { datosArreglo } from "./data/Datos.js";

/**
 *
 * @param {Formulario} quiz creamos el objeto de tipo Formulario
 * @param {Interfaz} ui  creamos el objeto de tipo interfaz
 */
const refrescarPagina = (quiz, ui) => {
  if (quiz.terminado()) {
    console.log("Finalizo");
    ui.mostrarPuntuacion(quiz.contador)
  } else {
    ui.mostrarProgreso(quiz.indicePregunta + 1, datosArreglo.length)
    ui.mostrarPreguntas(quiz.obtenerPregunta().contenidoPregunta);
    ui.mostrarOpciones(
      quiz.obtenerPregunta().opcionesRespuestas,
      (actualOpciones) => {
        quiz.adivinar(actualOpciones);
        refrescarPagina(quiz, ui);
      }
    );
  }
};

function main() {
  const quiz = new Formulario(arregloDePreguntas);
  const ui = new Interfaz();
  refrescarPagina(quiz, ui);
}

main();
