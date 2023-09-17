import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  map,
  asyncScheduler,
} from "rxjs";

const click$ = fromEvent(document, "click");

// se dispara en la primera emisión e ignora las demás
// hasta que pase los [segundos] y luego se vuelve a ejecutar
click$.pipe(throttleTime(3000)).subscribe(console.log);

// Ejemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    // esperate 1 segundo...
    throttleTime(1000, asyncScheduler, {
      // trae lo primero escrito
      leading: true,
      // y lo ultimo escrito dentro de ese segundo
      trailing: true,
    }),
    // filtramos por value
    map<any, string>((x) => x?.target?.value),
    // el value anterior es igual al actual?...
    distinctUntilChanged()
  )
  .subscribe(console.log);
