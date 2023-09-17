import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, "click");

// se dispara despues de que en cierto tiempo
// no se realiza una accion despues de haber realizado
// una (en este caso un click)
click$.pipe(debounceTime(3000));
//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    // esperate 1 segundo...
    debounceTime(1000),
    // filtramos por value
    map<any, string>((x) => x?.target?.value),
    // el value anterior es igual al actual?...
    distinctUntilChanged()
  )
  .subscribe(console.log);
