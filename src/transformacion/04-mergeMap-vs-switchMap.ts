import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

// esto puedo ser un problema de memoria
// sin embargo mantiene varias suscripciones activas
// corriendo
click$.pipe(mergeMap(() => interval$)).subscribe(console.log);


//con este mantiene una suscripcion activa
click$.pipe(switchMap(() => interval$)).subscribe(console.log);
