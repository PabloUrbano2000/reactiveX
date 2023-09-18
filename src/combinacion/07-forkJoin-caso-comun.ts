import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUBB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "klerith";

forkJoin({
  usuario: ajax.getJSON(`${GITHUBB_API_URL}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUBB_API_URL}/${GITHUB_USER}/repos`)
    .pipe
    // de esta forma capturamos el error de forma independiente
    // catchError((err) => of([]))
    (),
  gists: ajax.getJSON(`${GITHUBB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(
    // de esta forma controlamos el error de manera general
    catchError((err) => of(err.message))
  )
  .subscribe(console.log);
