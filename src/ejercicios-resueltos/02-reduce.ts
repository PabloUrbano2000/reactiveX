import { filter, from, reduce } from "rxjs";

/**
 * Ejercicio:
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 *
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() => {
  const datos = [1, 2, "foo", 3, 5, 6, "bar", 7, 8];

  from(datos)
    .pipe(
      // Trabajar aquí

      // forma 1
      // reduce(
      //   (acc, cur) => (isNaN(Number(cur)) ? 0 + acc : acc + Number(cur)),
      //   0
      // )

      // forma 2
      filter<any>((val) => !isNaN(val)),
      reduce((acc: number, cur: number) => acc + cur, 0)
    )
    .subscribe(console.log); // La salida debe de ser 32
})();
