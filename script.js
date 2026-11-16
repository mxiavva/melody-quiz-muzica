let scor = 0;
let indexCurent = 0;
let raspunsDat = false;

const butonStart = document.getElementById("start");
const butonUrmatorul = document.getElementById("urmatorul");
const zonaScor = document.getElementById("scor");
const textStart = document.getElementById("text-start");
const zonaNumar = document.getElementById("numar-intrebare");
const zonaIntrebare = document.getElementById("intrebare");
const zonaRaspunsuri = document.getElementById("raspunsuri");
const zonaMesaj = document.getElementById("mesaj");

const intrebari = [
  {
    text: "Câte note muzicale există în alfabetul muzical?",
    variante: ["5", "7", "12"],
    corect: 1
  },
  {
    text: "Care este prima notă din gama Do major?",
    variante: ["Sol", "La", "Do"],
    corect: 2
  },
  {
    text: "Ce cheie muzicală se folosește cel mai des pentru a scrie notele înalte (acute)?",
    variante: ["Cheia Sol", "Cheia Fa", "Cheia Do"],
    corect: 0
  },
  {
    text: "Pe ce linie a portativului începe să se deseneze Cheia Sol?",
    variante: ["Pe prima linie", "Pe a doua linie", "Pe a treia linie"],
    corect: 1
  },
  {
    text: "Ce indică cele două puncte puse înaintea unei bare verticale groase pe portativ?",
    variante: [
      "Că piesa s-a terminat",
      "Că fragmentul muzical trebuie repetat",
      "Că trebuie să faci o pauză lungă"
    ],
    corect: 1
  }
];

butonStart.addEventListener("click", function () {
  butonStart.style.display = "none";
  textStart.style.display = "none";
  afiseazaIntrebare();
});

butonUrmatorul.addEventListener("click", function () {
  indexCurent = indexCurent + 1;
  if (indexCurent < intrebari.length) {
    afiseazaIntrebare();
  } else {
    zonaNumar.textContent = "";
    zonaIntrebare.textContent = "Ai terminat!";
    zonaRaspunsuri.innerHTML = "";
    zonaMesaj.textContent = "Scor: " + scor + " din " + (intrebari.length * 10);
    butonUrmatorul.style.display = "none";
  }
});

function afiseazaIntrebare() {
  raspunsDat = false;
  zonaRaspunsuri.innerHTML = "";
  zonaMesaj.textContent = "";
  butonUrmatorul.style.display = "none";

  const intrebare = intrebari[indexCurent];
  zonaNumar.textContent = "Întrebarea " + (indexCurent + 1) + " din " + intrebari.length;
  zonaIntrebare.textContent = intrebare.text;

  for (let i = 0; i < intrebare.variante.length; i++) {
    const buton = document.createElement("button");
    buton.textContent = intrebare.variante[i];
    buton.addEventListener("click", function () {
      verifica(i, buton);
    });
    zonaRaspunsuri.appendChild(buton);
  }
}

function verifica(alegere, butonApasat) {
  if (raspunsDat) return;
  raspunsDat = true;

  const intrebare = intrebari[indexCurent];

  if (alegere === intrebare.corect) {
    scor = scor + 10;
    zonaMesaj.textContent = "Corect! +10 puncte";
    butonApasat.style.backgroundColor = "#c8f7c5";
    butonApasat.style.borderColor = "#2ecc71";
  } else {
    zonaMesaj.textContent = "Nu chiar. Răspunsul corect era: " +
      intrebare.variante[intrebare.corect];
    butonApasat.style.backgroundColor = "#f7c5c5";
    butonApasat.style.borderColor = "#e74c3c";
  }

  zonaScor.textContent = "⭐ Scor: " + scor;
  butonUrmatorul.style.display = "inline-block";
}
