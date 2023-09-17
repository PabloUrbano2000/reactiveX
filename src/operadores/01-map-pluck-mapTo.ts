import { fromEvent, range } from "rxjs";
import {
  map,
  mapTo,
  // , pluck
} from "rxjs/operators";

// generar un arreglo del 1 al 5 y proceda...
// range(1, 5).subscribe(console.log);

// retornar un valor convertido de number a string
// range(1, 5)
//   .pipe(
//     // tipado entra number sale un number
//     map<number, string>((val) => (val * 10).toString())
//   )
//   .subscribe(console.log);

// fromEvent captura eventos del navegador
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));
keyupCode$.subscribe((code) => console.log("map", code));

// decapritado el pluck pero se usa para extraer datos de objetos
// const keyupPluck$= keyup$.pipe(
//     pluck('target', baseURI)
// );
// keyupPluck$.subscribe((code) => console.log("pluck", code));

// decapritado  el mapTo pero transforma la entrada en una salida especifica
// const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));
// keyupMapTo$.subscribe((code) => console.log("mapto", code));
