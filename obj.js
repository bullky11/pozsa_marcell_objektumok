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
];
console.log(KUTYAK);
function init() {
  /* OBJEKTUM
    kulcs érték párok*/

  console.log(KUTYAK[0]);
  console.log(KUTYAK[1]);
  console.log(KUTYAK[0]);
  KUTYAK[0].nev = "Béla";
  console.log(KUTYAK[0]);
  KUTYAK[0].oltas = "van";
  console.log(KUTYAK[0]);
  delete KUTYAK[0].lab;
  console.log(KUTYAK[0]);
  /* OBJEKTUMOK BEJÁRÁSA*/
  for (let i = 0; i < KUTYAK.length; i++) {
    for (const key in KUTYAK[i]) {
      console.log(key, KUTYAK[i][key]);
    }
  }
}
