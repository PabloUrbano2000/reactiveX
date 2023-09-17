import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// obtiene defrente el objeto a esperar
const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  "mi-token": "ABC123",
});

obs$.subscribe((data) => console.log("data", data));
