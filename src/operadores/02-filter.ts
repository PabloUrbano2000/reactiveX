import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// filtra por un criterio de verdadero o falso
range(1, 10)
  .pipe(
    filter((val, index) => {
      console.log("index", index);
      return val % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  { tipo: "heroe", nombre: "batman" },
  { tipo: "villano", nombre: "el pinguino" },
  { tipo: "heroe", nombre: "robin" },
];

// obligado para utilizar un subscribe pasarlo por un operador
from(personajes)
  .pipe(filter((val) => val.tipo === "heroe"))
  .subscribe(console.log);

// se puede combinar los eventos dentro de pipe
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // recibe un KeyboardEvent, sale string
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
