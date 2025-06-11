let memoriaInfo = 
[
    {
        name: "31-A",
        Ruka: ["SS0","SS1", 'SS2', "SS3"],
        Yuki: ["SS1", 'SS2', "SS3"],
        Tsukasa: ["SS1", 'SS2', "SS3"],
        Karen: ["SS1", 'SS2', "SS3"],
        Megumi: ["SS1", 'SS2', "SS3"],
        Tama: ["SS1", 'SS2', "SS3","SS4"]
    },
    {
        name: "31-B",
        Aoi: ["SS1", 'SS2'],
        Ichigo: ["SS1"],
        Sumono: ["SS1", "SS2"],
        Seika: ["SS1", "SS2"],
        Kozue: ["SS1", "SS2"],
        Byakko: ["SS1", "SS2"]
    },
    {
        name: "31-C",
        Wakki: ["SS1", "SS2"],
        Seira: ["SS1", "SS2"],
        Tenne: ["SS1", "SS2"],
        Bungo: ["SS1", "SS2"],
        Adel: ["SS1", "SS2"],
        Mari: ["SS1", "SS2"]
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
        Misato: ["SS1"],
        Iroha: ["SS1"],
        Fubuki: ["SS1"],
        Risa: ["SS1", 'SS2'],
        Akari: ["SS1"],
        Aina: ["SS1"]
    },
    {
        name: "31-E",
        Ichiko: ["SS1"],
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
        Maria: ["SS1"],
        Sharo: ["SS1"]
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
        input += `<div class="col-1">  <img src="../images/` + arrayobjectkey[j] + memoriaInfo[i][arrayobjectkey[j]][k] + `.webp" class="img-fluid" alt="` + memoriaInfo[i][arrayobjectkey[j]][k]  + `" width = "184px" height = "184px"> </div>`
    }
//  input += `</ul>`
//     draft.innerHTML += input
}
}
 // input += `</ul>`
    draft.innerHTML += input
