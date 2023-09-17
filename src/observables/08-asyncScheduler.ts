// una suscripción es el producto de un subscribe

import { async, asyncScheduler } from "rxjs";

// similar a estas funciones
// setTimeout(()=> {}, 3000)
// setInterval(()=> {}, 3000)

const saludar = () => console.log("Hola Mundo");
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// a lo setTimeout
// asyncScheduler.schedule(saludar, 2000);

// funcion, tiempo, state (parametro) (solo puede ser uno)
// asyncScheduler.schedule(saludar2, 2000, "Fernando");

// no puede ser un arrowfunction
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    // hasta acá es un setTimeout

    this.schedule(state + 1, 1000);
    // hasta acá es un setInterval
  },
  3000,
  0
);

// primera forma de anular la suscripcion
// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// segunda forma
asyncScheduler.schedule(() => {
  subs.unsubscribe();
}, 6000);
