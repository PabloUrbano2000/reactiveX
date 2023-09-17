import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, "click");

interval$
  .pipe(
    // obtiene la muestra del obserbable
    // al ejecutar el evento del observable interno
    sample(click$)
  )
  .subscribe(console.log);
