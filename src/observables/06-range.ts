import { of, range, asyncScheduler, observeOn } from "rxjs";

/**
 * of como range son sincronos
 */

// const src$ = of(1, 2, 3, 4, 5);
// const src$ = range(1, 100); // 100 es el nro de emisiones: 1 a 100
// const src$ = range(-5,8) // -5 a 3 aprox

// const src$ = range(1, 5, asyncScheduler); // forma antigua
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
