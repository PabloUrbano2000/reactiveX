import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log("total arr", total);

// esperate un segundo
interval(1000)
  .pipe(
    // el take sirve para tener un arreglo rapido de numeros ordenados menores al numero puesto
    take(4),
    tap(console.log),
    // el reduce espera a que se complete todas las demas llamadas
    // para finalmente llegar al subscribe
    reduce(totalReducer, 5)
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
