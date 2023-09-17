import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => ({ x })),
    tap((val) => console.log("tap", val)),
    // emite el ultimo valor emitido desde que inicio
    // el primer observable dentro de los 2 segundos
    auditTime(2000)
  )
  .subscribe(console.log);
