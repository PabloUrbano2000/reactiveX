import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
  tap(console.log),
  // con take limitamos el numero de emisiones
  take(3)
);

numeros$.subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
