import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

// el tap nos ayuda para depurar
numeros$
  .pipe(
    tap((x) => {
      console.log("antes", x);
      // esto no afecta en nada
      return 100;
    }),
    map((val) => val * 10),
    // usandolo de una foto 
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("Se terminó todo"),
    })
  )
  .subscribe((val) => console.log("subs", val));
