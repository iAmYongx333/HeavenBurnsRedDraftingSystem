let memoriaInfo = 
[
    {
        name: "31-A",
        Ruka: ["SS0","SS1", 'SS2', "SS3"],
        Yuki: ["SS1", 'SS2', "SS3", "SS4"],
        Tsukasa: ["SS1", 'SS2', "SS3"],
        Karen: ["SS1", 'SS2', "SS3"],
        Megumi: ["SS1", 'SS2', "SS3", "SS4"],
        Tama: ["SS1", 'SS2', "SS3","SS4", "SS5"]
    },
    {
        name: "31-B",
        Aoi: ["SS1", 'SS2', "SS3"],
        Ichigo: ["SS1", "SS2"],
        Sumono: ["SS1", "SS2"],
        Seika: ["SS1", "SS2"],
        Kozue: ["SS1", "SS2"],
        Byakko: ["SS1", "SS2"]
    },
    {
        name: "31-C",
        Wakki: ["SS1", "SS2"],
        Seira: ["SS1", "SS2"],
        Tenne: ["SS1", "SS2", "SS3"],
        Bungo: ["SS1", "SS2", "SS3"],
        Adel: ["SS1", "SS2"],
        Mari: ["SS1", "SS2", "SS3"]
    },
    {
        name: "30-G",
        Yuina: ["SS1", 'SS2', "SS3"],
        Monaka: ["SS1", "SS2"],
        Miya: ["SS1", "SS2"],
        Chie: ["SS1", "SS2"],
        Hisame: ["SS1", 'SS2', "SS3"],
        Kura: ["SS1", "SS2"]
    },
    {
        name: "31-D",
        Misato: ["SS1", "SS2"],
        Iroha: ["SS1"],
        Fubuki: ["SS1"],
        Risa: ["SS1", 'SS2'],
        Akari: ["SS1", "SS2"],
        Aina: ["SS1"]
    },
    {
        name: "31-E",
        Ichiko: ["SS1", "SS2"],
        Niina: ["SS1", 'SS2'],
        Minori: ["SS1"],
        Yotsuha: ["SS1"],
        Isuzu: ["SS1", 'SS2'],
        Muua: ["SS1"]
    },
    {
        name: "31-F",
        Yanagi: ["SS1", "SS2"],
        Kanata: ["SS1"],
        Shiki: ["SS1"],
        Chiroru: ["SS1"],
        Inori: ["SS1", "SS2"],
        Maki: ["SS1"]
    },
    {
        name: "31-X",
        Carole: ["SS1"],
        Yingxia: ["SS1"],
        Irene: ["SS1"],
        VB: ["SS1"],
        Maria: ["SS1", "SS2"],
        Sharo: ["SS1", "SS2"]
    },
    {
        name: "31-AB",
        Kanade: ["SS1"],
        Yuri: ["SS1"]
    },
]
let draft = document.getElementById("draft");
let input = '';
//input += `<ul class="list-group list-group-horizontal">`
for(let i = 0; i<memoriaInfo.length;i++){
    
let arrayobjectkey = Object.keys(memoriaInfo[i])
for(let j = 1; j<arrayobjectkey.length; j++){
    //input = ''
    //input += `<ul class="list-group list-group-horizontal">`
    // input += arrayobjectkey[j]
    for(let k = 0; k<memoriaInfo[i][arrayobjectkey[j]].length; k++){
        
        //input += ` <li class="list-group-item"> <img src="../images/` + arrayobjectkey[j] + memoriaInfo[i][arrayobjectkey[j]][k] + `.png" class="img-fluid" alt="` + memoriaInfo[i][arrayobjectkey[j]][k]  + `">`+ `</li>`
        input += `<div class="col-1"><button onclick="selectMemoria('${arrayobjectkey[j]}', '${memoriaInfo[i][arrayobjectkey[j]][k]}')" id="button${arrayobjectkey[j]}${memoriaInfo[i][arrayobjectkey[j]][k]}"><img src="../images/` + arrayobjectkey[j] + memoriaInfo[i][arrayobjectkey[j]][k] + `.webp" class="img-fluid" alt="` + memoriaInfo[i][arrayobjectkey[j]][k]  + `" id="img${arrayobjectkey[j]}${memoriaInfo[i][arrayobjectkey[j]][k]}"></button></div>`

    }
//  input += `</ul>`
//     draft.innerHTML += input
}
}
 // input += `</ul>`
    draft.innerHTML += input


let ban1Text = document.getElementById("ban#1text");
let ban1Img = document.getElementById("ban#1img");
let selectText = document.getElementById("selectiontext");
let selectImg = document.getElementById("selectionimg");
let selectionbutton = document.getElementById("selectionbutton");

let selectedCharacter = null;
let selectedStyle = null;
function selectMemoria(character, style){
    selectedCharacter = character;
    selectedStyle = style;
    const imagePath = `../images/${character}${style}.webp`;
    const label = `${character}${style}`;
     if (selectImg) {
        selectImg.src = imagePath;
        selectImg.alt = style;
    }

    if (selectText) {
        selectText.textContent = label;
    }
}

let draftStep = 0;

const draftOrder = [
  { team: "A", type: "ban", slot: 1 },
  { team: "B", type: "ban", slot: 1 },
  { team: "B", type: "ban", slot: 2 },
  { team: "A", type: "ban", slot: 2 },
  { team: "A", type: "ban", slot: 3 },
  { team: "B", type: "ban", slot: 3 },
  { team: "A", type: "pick", slot: 1 },
  { team: "B", type: "pick", slot: 1 },
  { team: "B", type: "pick", slot: 2 },
  { team: "A", type: "pick", slot: 2 },
  { team: "A", type: "pick", slot: 3 },
  { team: "B", type: "pick", slot: 3 },
  { team: "B", type: "ban", slot: 4 },
  { team: "A", type: "ban", slot: 4 },
  { team: "A", type: "ban", slot: 5 },
  { team: "B", type: "ban", slot: 5 },
  { team: "B", type: "ban", slot: 6 },
  { team: "A", type: "ban", slot: 6 },
  { team: "B", type: "pick", slot: 4 },
  { team: "A", type: "pick", slot: 4 },
  { team: "A", type: "pick", slot: 5 },
  { team: "B", type: "pick", slot: 5 },
  { team: "B", type: "pick", slot: 6 },
  { team: "A", type: "pick", slot: 6 }
];

const selectedMemoria = new Set();

function lockIn() {
    if (!selectedCharacter || !selectedStyle) return;

  const memoriaKey = selectedCharacter + selectedStyle;

  if (selectedMemoria.has(memoriaKey)) {
    alert("This memoria has already been selected or banned.");
    return;
  }

  const step = draftOrder[draftStep];
  const name = `${selectedCharacter} ${selectedStyle}`;

  if (step.team === "A" && step.type === "ban") {
    document.getElementById(`banA${step.slot}card`).classList.remove("border-warning")
    document.getElementById(`banA${step.slot}card`).classList.add("border-danger")
    let imageHTML = `<img src="../images/${selectedCharacter}${selectedStyle}.webp" class="img-fluid" alt="${selectedStyle}" width="66px" height="66px" style="filter:grayscale(100%)">`;
    document.getElementById(`banA${step.slot}img`).innerHTML = imageHTML;
    document.getElementById(`banA${step.slot}text`).textContent = name;
  } else if (step.team === "B" && step.type === "ban") {
    document.getElementById(`banB${step.slot}card`).classList.remove("border-warning")
    document.getElementById(`banB${step.slot}card`).classList.add("border-danger")
    let imageHTML = `<img src="../images/${selectedCharacter}${selectedStyle}.webp" class="img-fluid" alt="${selectedStyle}" width="66px" height="66px" style="filter:grayscale(100%)">`;
    document.getElementById(`banB${step.slot}img`).innerHTML = imageHTML;
    document.getElementById(`banB${step.slot}text`).textContent = name;
  } else if (step.team === "A" && step.type === "pick") {
    document.getElementById(`pickA${step.slot}card`).classList.remove("border-warning")
    document.getElementById(`pickA${step.slot}card`).classList.add("border-success")
    let imageHTML = `<img src="../images/${selectedCharacter}${selectedStyle}.webp" class="img-fluid" alt="${selectedStyle}" width="66px" height="66px">`;
    document.getElementById(`pickA${step.slot}img`).innerHTML = imageHTML;
    document.getElementById(`pickA${step.slot}text`).textContent = name;
  } else if (step.team === "B" && step.type === "pick") {
    document.getElementById(`pickB${step.slot}card`).classList.remove("border-warning")
    document.getElementById(`pickB${step.slot}card`).classList.add("border-success")
    let imageHTML = `<img src="../images/${selectedCharacter}${selectedStyle}.webp" class="img-fluid" alt="${selectedStyle}" width="66px" height="66px">`;
    document.getElementById(`pickB${step.slot}img`).innerHTML = imageHTML;
    document.getElementById(`pickB${step.slot}text`).textContent = name;
  }
  
  document.getElementById(`button${selectedCharacter}${selectedStyle}`).disabled = true;
  document.getElementById(`img${selectedCharacter}${selectedStyle}`).style.filter = "grayscale(100%)";

  selectedMemoria.add(memoriaKey);
  // Continue for pick steps...

  draftStep++;
  selectedCharacter = null;
  selectedStyle = null;
  document.getElementById(`${draftOrder[draftStep].type}${draftOrder[draftStep].team}${draftOrder[draftStep].slot}card`).classList.remove("border-dark")
  document.getElementById(`${draftOrder[draftStep].type}${draftOrder[draftStep].team}${draftOrder[draftStep].slot}card`).classList.add("border-warning")
  let textBanPick = draftOrder[draftStep].type.charAt(0).toUpperCase() + draftOrder[draftStep].type.slice(1);
  document.getElementById(`announcement`).innerHTML = `Team ${draftOrder[draftStep].team} ${textBanPick} #${draftOrder[draftStep].slot}`;
  document.getElementById("selectionimg").src = "";
  document.getElementById("selectionimg").alt = "";
  document.getElementById("selectiontext").textContent = "";

  if (draftStep >= draftOrder.length) {
    alert("Draft complete!");
  }
}