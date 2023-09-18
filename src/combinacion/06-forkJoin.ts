import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3)); // 0..1..2
const letras$ = of("a", "b", "c").pipe(delay(3500));

// muestra la ultima emision de cada observable todo junto en un arreglo
// forkJoin(numeros$, intervalo$, letras$).subscribe(console.log);

// forkJoin(numeros$, intervalo$, letras$).subscribe((resp) => {
//   console.log("numeros", resp[0]);
//   console.log("numeros", resp[1]);
//   console.log("numeros", resp[2]);
// });

// podemos devolverlo como objeto
// forkJoin({ numeros$, intervalo$, letras$ }).subscribe((resp) => {
//   console.log(resp);
// });

forkJoin({
  num: numeros$,
  int: intervalo$,
  let: letras$,
}).subscribe((resp) => {
  console.log(resp);
});
