import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

// first sirve para obtener el primer evento o primera ves que cumpla la condicion
click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
