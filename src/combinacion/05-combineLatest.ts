import { combineLatest, fromEvent, map } from "rxjs";

// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");

// combineLatest(
//   keyup$.pipe(map((ev) => ev["type"])),
//   click$.pipe(map((ev) => ev["type"]))
// ).subscribe(console.log);

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";

input2.placeholder = "********";
input2.type = "password";

document.querySelector("body").append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elem, "keyup").pipe(
    map(({ target }) => target["value"])
  );
};

// el combineLastest combinará las ultimas 2 emisiones
// de dos observables en un arreglo, ojo que va esperar que haya respuesta de ambos
// para mostrar un resultado, quiere decir que si ejecuto uno
// no se va mostrar hasta que ejecute el otro
combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
