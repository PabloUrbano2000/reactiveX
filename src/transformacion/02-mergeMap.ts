import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsers } from "../interfaces/github-users.interface";
import { GithubUser } from "../interfaces/github-user.interface";

// referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = "";
  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + "");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    // esperate 500 mili desde el ultimo llamado del evento y emite
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, Observable<GithubUsers>>(({ target }) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${target["value"]}`)
    ),
    // se suscribe y emite lo que se espera
    mergeAll<Observable<GithubUsers>>(),
    // cuando mergeAll termine devolverá el valor
    map<GithubUsers, GithubUser[]>((ev) => ev.items)
  )
  .subscribe(mostrarUsuarios);
