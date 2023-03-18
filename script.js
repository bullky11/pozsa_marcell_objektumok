window.addEventListener("load", init);
const KUTYAK = [
  {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassag: 52,
    nem: "non-binary",
    kor: 13,
  },
  {
    nev: "KIRA",
    fajta: "yorki",
    lab: 4,
    marmagassag: 30,
    nem: "non-binary",
    kor: 5,
  },
  {
    nev: "Bolhás",
    fajta: "tacskó",
    lab: 2,
    marmagassag: 22,
    nem: "kan",
    kor: 11,
  },
  {
    nev: "Lejla",
    fajta: "Németjuhász",
    lab: 4,
    marmagassag: 62,
    nem: "Nőstény",
    kor: 12,
  },
];

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
  ART.innerHTML = "<button> Kutya </button>";
  let txt = osszeallit();
  let tabl =tablazat();
  ART.innerHTML = txt;
  ART.innerHTML+=tabl;
  const gomb = document.querySelector("button");
  gomb.addEventListener("click", function () {
    megnyom(ART, kutyaLista);
  });
  osszeallit();
  tablazat();
  function osszeallit() {
    let txt = "";
    for (let index = 0; index < KUTYAK.length; index++) {
    txt+="<div>  <button>Töröl</button>"
      for (const key in KUTYAK[index]) {
        key, KUTYAK[index][key];
        txt += `
      <p>
      ${key} : ${KUTYAK[index][key]}
      </p>
      
      `;
      }
      txt+=" </div>"
    }
    console.log(txt);
    return txt;
  }
  function tablazat() {
    let txt = "";
    for (let index = 0; index < KUTYAK.length; index++) {
    txt+="<table>  "
      for (const key in KUTYAK[index]) {
        key, KUTYAK[index][key];
        txt += `
      <tr><th>
      ${key} : ${KUTYAK[index][key]}
      </th> </tr>
      
      `;
      }
      txt+=" </table>"
    }
    console.log(txt);
    return txt;
  }
}
function megnyom(ART, kutyaLista) {
    for (let index = 0; index < KUTYAK.length; index++) {
        const ART2 = document.querySelectorAll("div")[index];
        ART2.innerHTML += kutyaLista[index];        
    }
 

}
