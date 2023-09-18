import { catchError, exhaustMap, fromEvent, map, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((res) => res?.response["token"]),
    catchError((err) => of(err))
  );

// creando un form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const inputBtn = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

inputBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, inputBtn);

document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  // el tap también sirve como efecto secundario
  // sirve para depurar y ejecutar funciones secundarias
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
