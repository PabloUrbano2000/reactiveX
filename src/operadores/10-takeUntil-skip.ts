import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, "click");

// con skip (con el skip me salto el takeUntil n veces y a la ves n+1 se muere el proceso)
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("antes de skip")),
  skip(2),
  tap(() => console.log("tap despues del skip"))
);

// detiene el proceso de otros observable cuando
// el observable emite su valor
counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
