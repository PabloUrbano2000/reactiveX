import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

// lo que va hacer el concat map es concatenar los observables
// en el orden que llegaron, esperará que finalice uno para continuar
// con el siguiente
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
