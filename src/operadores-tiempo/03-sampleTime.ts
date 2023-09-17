import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    // ni bien se da el primer evneto, si dentro de ese tiempo
    // se ejecuta mas eventos se mostrará el ultimo resultado
    // por ende el primer evento se mostrará
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )

  .subscribe(console.log);
