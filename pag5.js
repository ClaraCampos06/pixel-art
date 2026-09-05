const personagem = localStorage.getItem("personagem");
const lugar = localStorage.getItem("lugar");
const filha = localStorage.getItem("filha");
const pet = localStorage.getItem("pet");

//PERSONAGEM==============================================================================
// FOTOS DOS PERSONAGENS
const fotoPersonagem = {
    clarets: "personagens/oi-removebg-preview.png",
    nay: "personagens/nay.png"
};


//DADOS DO PERSONAGEM
const dadosPersonagem = {

    clarets: {
        classe: "BOTTOM",
        hp: "1800",
        level: "20",
        xp: "1800"
    },

    nay: {
        classe: "TOP",
        hp: "1500",
        level: "28",
        xp: "2100"
    }

};

//NOME DO PERSONAGEM
const nomePersonagem = {
    clarets: "CLARETS",
    nay: "NAY",
};



//PET========================================================================================
// FOTOS DOS PETS
const fotoPet = {
    tico: "tela-4/gato1.png",
    bob: "tela-4/gato2.png",
    duck: "tela-4/gato3.png"
};


//DADOS DO PET
const dadosPet = {
    tico: {
        classe: "CAÇADOR",
        hp: "110",
        poder: "150"
    },
    bob: {
        classe: "PROTETOR",
        hp: "140",
        poder: "120"
    },
    duck: {
        classe: "PROTETOR",
        hp: "100",
        poder: "190"
    }};


// NOME DOS PETS
const nomePet = {
    tico: "TICO",
    bob: "BOB",
    duck: "DUCK"
};





//FILHA==========================================================================================
// FOTO DA FILHA
const fotoFilha = {
    lia: "tela-3/filhos/bb1.png",
    ji: "tela-3/filhos/bb2.png",
    kay: "tela-3/filhos/bb3.png"
};

//DADOS DA FILHA
const dadosFilha = {
    lia: {
        classe: "EXPLORADORA",
        persona: "CURIOSA",
        tipo: "NÔMADE"
    },

    ji: {
        classe: "NERD",
        persona: "TÍMIDA",
        tipo: "RURAL"
    },

    kay: {
        classe: "ATLETA",
        persona: "FORTE",
        tipo: "URBANO"
    }
};


//NOME DA FILHA
const nomeFilha = {
    lia: "LIA",
    ji: "JI",
    kay: "KAY"
};




//LUGAR=========================================================================================
//FOTO DO LUGAR
const fotoLugar = {
    irlanda: "tela-2/foto1.jfif",
    japao: "tela-2/lugares/jap.jfif",
    italia: "tela-2/lugares/italia.jfif"
};


//DADOS DO LUGAR-----------------------------
const dadosLugar = {

    irlanda: {
        nome: "IRLANDA",
        missao: "EXPLORAR OS PENHASCOS",
        local: "COUNTY CLARE",
        recompensa: "100 HP",
        item: "CAJADO"
    },

    japao: {
        nome: "JAPÃO",
        missao: "VISITAR O TEMPLO DOURADO",
        local: "KINKAKU-JI",
        recompensa: "CHÁ DE CURA",
        item: "KAIKEN"
    },

    italia: {
        nome: "ITÁLIA",
        missao: "EXPLORAR O LIDO",
        local: "LIDO DI VENEZIA",
        recompensa: "1500 XP",
        item: "BERETTA SUB"
    }

};


//NOME DO LUGAR--------------------------------





//PERSONAGEM============================================================================================
// MOSTRAR FOTO PERSONAGEM
document.getElementById("fotoPersonagem").src =
    fotoPersonagem[personagem];

// MOSTRAR NOME
document.getElementById("personagem").textContent =
    nomePersonagem[personagem];

// MOSTRAR DADOS
document.getElementById("classePersonagem").textContent =
    dadosPersonagem[personagem].classe;

document.getElementById("hpPersonagem").textContent =
    dadosPersonagem[personagem].hp;

document.getElementById("levelPersonagem").textContent =
    dadosPersonagem[personagem].level;

document.getElementById("xpPersonagem").textContent =
    dadosPersonagem[personagem].xp;



//MOSTRAT NOME DO PERSONAGEM






//PET========================================================================================================
// MOSTRAR FOTO PET
document.getElementById("fotoPet").src = fotoPet[pet];


//MOSTRAR DADOS PET
document.getElementById("classePet").textContent = dadosPet[pet].classe;
document.getElementById("hpPet").textContent = dadosPet[pet].hp;
document.getElementById("poderPet").textContent = dadosPet[pet].poder;


//MOSTRAR NOME PET
document.getElementById("nomePet").textContent = nomePet[pet];




//FILHA=====================================================================================
//MOSTRAR FOTO FILHA
document.getElementById("fotoFilha").src = fotoFilha[filha];

//MOSTRAR DADOS FILHA----------------------------------
document.getElementById("classeFilha").textContent =
    dadosFilha[filha].classe;

document.getElementById("personaFilha").textContent =
    dadosFilha[filha].persona;

document.getElementById("tipoFilha").textContent =
    dadosFilha[filha].tipo;

//MOSTRAR NOME FILHA
document.getElementById("filha").textContent = nomeFilha[filha];



//LUGAR=====================================================================================
//MOSTRAR FOTO DO LUGAR
document.getElementById("fotoLugar").src = fotoLugar[lugar];




//MOSTRAR DADOS DO LUGAR
document.getElementById("lugar").textContent = dadosLugar[lugar].nome;
document.getElementById("missaoLugar").textContent = dadosLugar[lugar].missao;
document.getElementById("localLugar").textContent = dadosLugar[lugar].local;
document.getElementById("itemLugar").textContent = dadosLugar[lugar].item;
document.getElementById("recompensaLugar").textContent = dadosLugar[lugar].recompensa;


//MOSTRAR NOME DO LUGAR


