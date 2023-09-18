import { interval, map, take } from "rxjs";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const inicio = 7;
  const countdown$ = interval(400).pipe(
    take(8),
    // Usar los operadores necesarios
    // para realizar la cuenta regresiva
    map((val) => Math.abs((val - inicio) * -1))
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();
