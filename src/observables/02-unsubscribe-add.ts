import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  // Crear un contador 1,2,3,4,5...
  let count = 0;

  const interval = setInterval(() => {
    // cada segundo
    count++;
    subs.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {
  // complete no es lo mismo que unsubscribe()
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log("Completado timeout");
}, 6000);
