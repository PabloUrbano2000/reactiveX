import { catchError, map, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://api.github.com/usersxxx?per_page=5";

// const manejaErrores = (res: Response) => {
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return res;
// };

const atrapaError = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of([]);
};

// const fetchPromesa = fetch(url);

// fetchPromesa
//   // de esta manera podemos controlar el error
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then(console.log)
//   .catch((err) => console.warn("error en users", err));

// con ajax defrente lo parsea a lo que se espera
ajax(url)
  .pipe(
    map((res) => res.response),
    // captura defrente el error
    catchError(atrapaError)
  )
  .subscribe((users) => console.log("usuarios:", users));
