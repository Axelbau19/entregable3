import {Preguntas} from '../clases/Preguntas.js';
import {datosArreglo} from './Datos.js';

//Iteración del arreglo (crear un arreglo de objetos)
//Aqui uso la funcion map que me permite iterar un arreglo , ademas lo voy usar con una programación ES6

export const arregloDePreguntas = datosArreglo.map(preguntita => new Preguntas(preguntita.preguntas, preguntita.opciones, preguntita.respuestas))
