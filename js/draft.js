let memoriaInfo = 
[
    {
        name: "31-A",
        Ruka: ["SS0","SS1"],
        Yuki: ["SS1"],
        Tsukasa: ["SS1"],
        Karen: ["SS1"],
        Megumi: ["SS1"],
        Tama: ["SS1"]
    },
    {
        name: "31-B",
        Aoi: ["SS0","SS1"],
        Ichigo: ["SS1"],
        Sumono: ["SS1"],
        Seika: ["SS1"],
        Kozue: ["SS1"],
        Byakko: ["SS1"]
    },
    {
        name: "31-C",
        Wakki: ["SS0","SS1"],
        Seira: ["SS1"],
        Tenne: ["SS1"],
        Bungo: ["SS1"],
        Adel: ["SS1"],
        Mari: ["SS1"]
    },
    {
        name: "30-G",
        Yuina: ["SS0","SS1"],
        Monaka: ["SS1"],
        Miya: ["SS1"],
        Chie: ["SS1"],
        Hisame: ["SS1"],
        Kura: ["SS1"]
    },
    {
        name: "31-D",
        Misato: ["SS0","SS1"],
        Iroha: ["SS1"],
        Fubuki: ["SS1"],
        Risa: ["SS1"],
        Akari: ["SS1"],
        Aina: ["SS1"]
    },
    {
        name: "31-E",
        Ichiko: ["SS0","SS1"],
        Niina: ["SS1"],
        Minori: ["SS1"],
        Yotsuha: ["SS1"],
        Isuzu: ["SS1"],
        Muua: ["SS1"]
    },
    {
        name: "31-F",
        Yanagi: ["SS0","SS1"],
        Kanata: ["SS1"],
        Shiki: ["SS1"],
        Chiroru: ["SS1"],
        Inori: ["SS1"],
        Maki: ["SS1"]
    },
    {
        name: "31-X",
        Carole: ["SS0","SS1"],
        Yingxia: ["SS1"],
        Irene: ["SS1"],
        VB: ["SS1"],
        Maria: ["SS1"],
        Sharo: ["SS1"]
    },
    {
        name: "31-AB",
        Kanade: ["SS0","SS1"],
        Yuri: ["SS1"],
        Irie: ["SS1"]
    },
]
let test = document.getElementById("test");

for(let i = 0; i<memoriaInfo.length;i++){
let arrayobjectkey = Object.keys(memoriaInfo[i])
for(let j = 1; j<arrayobjectkey.length; j++){
    test.innerHTML += arrayobjectkey[j]
    for(let k = 0; k<memoriaInfo[i][arrayobjectkey[j]].length; k++){
        test.innerHTML += ` <li class="list-group-item">` + memoriaInfo[i][arrayobjectkey[j]][k] + `</li>`
    }
    test.innerHTML += "\n"
}
}
