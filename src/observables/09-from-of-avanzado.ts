import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
};

// imprime uno por uno
// const source$ = from([1, 2, 3, 4, 5]);

// imprime todo el arreglo en una sola cadena
// const source$ = of([1, 2, 3, 4, 5]);

// imprime uno por uno como el from
// const source$ = of(...[1, 2, 3, 4, 5]);

// imprime letra por letra
// const source$ = from("FERNANDO");

// source$.subscribe(observer);

// const source$ = from(fetch("https://api.github.com/users/klerith"));
// source$.subscribe(async(resp)=> {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })

// Generadores
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (let id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);
