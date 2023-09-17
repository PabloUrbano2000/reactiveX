import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// cada 1000 milisegundos ejecuta un next
const interval$ = interval(1000);

// cuando llegue a los 2 mil milisegundos, ejecuta el next y luego complete
// const timer$ = timer(2000)

// ejecuta en el segundo cero segun la pila de cb's
// const timer$ = timer(0)

// de esta forma inicia en el segundo 2 y luego 1 segundo
// const timer$ = timer(2000, 1000);

// sirve para programar en tal dia mes año o segundo ejecuta tal....
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
