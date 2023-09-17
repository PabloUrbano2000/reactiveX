import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),

    // imprime siempre y cuando cumpla la condición antes de que muera
    // el proceso, en caso se ponga true se imprime también
    // la última petición a pesar que no concuerde con el criterio
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
