import { fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

// el merge es una funcion que combinará
// las emisiones de los observables pasados
// como parametro
merge(
  keyup$.pipe(map((ev) => ev["type"])),
  click$.pipe(map((ev) => ev["type"]))
).subscribe(console.log);
