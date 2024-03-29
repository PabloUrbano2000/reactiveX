import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completado"),
};

// similar al interval
const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/**
 * 1 - Casteo múltiple
 * 2 - También es un observer
 * 3 - Next, error y complete
 * 4 - Mantiene el mismo valor entre los subscribers
 */

// CON EL SUBJECT PODEMOS MANTENER EL MISMO VALOR POR MAS RANDOMS QUE SEAN ENTRE 2 A VARIOS OBSERVABLES
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

intervalo$.subscribe(subject$);

// en este punto subs1 y subs2 van a emitir lo mismo
// const subs1 = intervalo$.subscribe((rng) => console.log("subs1", rng));
// const subs2 = intervalo$.subscribe((rng) => console.log("subs2", rng));
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  // cuando se ejecuta el timeout lo chancamos con este valor
  subject$.next(10);

  // ejecutamos la funcion complete
  subject$.complete();

  // recien aca llega el return del observable (obligatorio destruirlo xq hay un interval ejecutandose por detrás)
  subscription.unsubscribe();

  /* Cuando la data es producida por el observable en sí mismo, es
    considerado un "Cold Observable". Pero cuando la data es producida
    FUERA del observable es llamado "Hot Observable".
  */
}, 3500);
