import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/sdds";

const manejaError = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url);
// .pipe(catchError(manejaError));

const obs2$ = ajax(url);
// .pipe(catchError(manejaError));

// obs$.subscribe((data) => console.log("getJSON:", data));
// obs2$.subscribe((data) => console.log("ajax:", data));

// al no controlar el error emite el "error"
// obs$.subscribe({
//   next: (val) => console.log("next", val),
//   error: (err) => console.warn("error en subs:", err),
//   complete: () => console.log("complete"),
// });

// al controlarlo se completa
obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log("next", val),
  error: (err) => console.warn("error en subs:", err),
  complete: () => console.log("complete"),
});
