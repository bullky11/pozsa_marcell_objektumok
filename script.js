window.addEventListener("load", init);

function init() {
  const kutyaLista = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
  ];
  const ART = document.querySelector("article");
  ART.innerHTML = "<button> Kutya </button>"
  const gomb = document.querySelector("button");
  gomb.addEventListener("click", function(){
    megnyom(ART,kutyaLista)
  });
}
function megnyom(ART,kutyaLista) {
    ART.innerHTML+=kutyaLista[2];
}
