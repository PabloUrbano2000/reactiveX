import { concat, interval, take } from "rxjs";

const interval$ = interval(1000);

// concat es una funcion y lo que hará
// es unir los observables y emitirlos
// en el orden dado
concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1, 2, 3, 4]
).subscribe(console.log);
