import { endWith, of, startWith } from "rxjs";

// el of por naturaleza es sincrono
const numeros$ = of(1, 2, 3).pipe(
  // como el of es sincrono, el startWith
  // la emisión emepzará con el valor que se
  // pasa por la funcion
  startWith(6, "a", "b"),

  // el endwith completará la suscripción
  // cuando se emita la ultima suscriçion
  endWith("x", "y", "23")
);

numeros$.subscribe(console.log);
