import { exhaustMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

// lo que va hacer el exhaustMap es trabajar con la primera
// suscripción que llegó (activa), si se vuelve a ejecutar otra
// ejecución el exhaustMap lo va ignorar hasta que la
// primera peticion termine, una ves esté libre se puede volver a ejecutar
click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
