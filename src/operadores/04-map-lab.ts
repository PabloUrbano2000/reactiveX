import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie accumsan iaculis. In hendrerit velit id ex ullamcorper congue. Praesent felis purus, consectetur non convallis quis, blandit consectetur ante. Donec quam odio, accumsan vitae accumsan vel, pretium ut mauris. Vestibulum pharetra neque eu sodales tristique. Etiam dictum enim sapien, nec tincidunt metus fringilla sit amet. Nulla nibh nunc, dignissim nec eleifend a, placerat vitae odio. Morbi dui tortor, ornare at nunc vitae, pulvinar dapibus lectus. Integer congue, erat vitae semper laoreet, erat dolor semper dui, quis placerat tortor ex eu odio.
<br />
<br/>
Nam viverra fringilla leo, vitae lacinia turpis tristique nec. Morbi ultricies velit risus. Aenean fringilla non eros in semper. Vestibulum pretium lobortis suscipit. In luctus, orci ac vulputate vulputate, dui elit ullamcorper arcu, sit amet aliquam tellus nisi nec turpis. Fusce sed lacus orci. Proin et nisi vitae tellus rhoncus rutrum. Phasellus vulputate at felis sed condimentum. Integer vitae lectus massa. Pellentesque dolor enim, posuere sit amet tristique quis, rutrum id nisi. Sed ac elit sit amet felis finibus hendrerit. Pellentesque faucibus tempor urna, et mattis nibh cursus vel.
<br />
<br/>
Nunc bibendum eleifend tristique. Aliquam elit nibh, volutpat at vestibulum quis, eleifend ut justo. Vestibulum tempus urna vitae diam vehicula, at dapibus ex malesuada. Aliquam et pulvinar neque. In pretium massa eu felis malesuada fermentum. Sed tincidunt enim arcu, at tincidunt orci gravida tincidunt. Pellentesque aliquam aliquet mauris a accumsan. Integer elementum rhoncus nibh, eget fermentum massa accumsan mattis. Nam rutrum urna commodo erat commodo efficitur. Pellentesque facilisis gravida vehicula. Suspendisse id tellus in libero vestibulum tempus nec eu ex. Cras lacus sapien, tristique eget tempus scelerisque, iaculis a dui. Pellentesque vel ipsum sit amet nibh rutrum mattis ut vitae odio. Donec et ornare odio, id auctor erat. Vestibulum sed libero nunc.
<br />
<br/>
Nam vitae efficitur magna, ac scelerisque erat. Ut iaculis ipsum sapien, ut gravida ipsum congue eu. Aenean eget diam eleifend ipsum sagittis interdum. Fusce leo ex, bibendum eu convallis quis, convallis sit amet elit. Aliquam nisi neque, euismod sed mauris sed, dapibus vestibulum turpis. Cras pellentesque malesuada ex nec bibendum. In vitae gravida ipsum. Suspendisse potenti. Donec dictum pellentesque eros, at egestas sem hendrerit id.
<br />
<br/>
Nulla et mi nec nisi aliquam feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dapibus sit amet lorem quis dignissim. Nam tristique, risus ut sodales molestie, nunc mi vulputate purus, sed dictum lectus nisl sit amet risus. Aenean fermentum mi massa, tempus eleifend enim aliquet eu. Aliquam eget euismod risus, sed venenatis mi. Etiam non ligula ante. Duis eget dolor et nibh hendrerit vulputate. Mauris aliquam enim tortor. Suspendisse id tellus faucibus, semper elit sed, suscipit sapien. In vel molestie nulla. Etiam eget nulla a odio fringilla facilisis ac at orci. Phasellus eu volutpat mauris.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
