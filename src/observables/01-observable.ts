import { Observable } from "rxjs";
import { Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("Compleado [obs]"),
};

const obs$ = new Observable<string>((subs) => {
  // el next emite el valor a las personas que estén suscritas en el
  subs.next("Hola");
  subs.next("Mundo");
  subs.next("Hola");

  // Forzar un error
  // let a = undefined;
  // a.pe= "nombre";

  subs.complete();

  // las líneas de aqui para abajo ya no se van a leer
  subs.next("Perro");
  subs.next("No llegó");
});

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error:", error),
//   () => console.log("Completado")
// );

obs$.subscribe(observer);
