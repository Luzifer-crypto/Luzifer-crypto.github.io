//Language switch button

let english = document.getElementById("en");
let german = document.getElementById("de");
let baseBox = document.getElementById("baseBlock");
let smallBox = document.getElementById("smallBlock");

function switchEnglish(){
    english.style.color = "#333";
    baseBox.style.backgroundColor = "#FFC107";
    german.style.color = "#FAFAFA";
    smallBox.style.backgroundColor = "#333";
}

function switchGerman(){
    english.style.color = "#FAFAFA";
    baseBox.style.backgroundColor = "#333";
    german.style.color = "#333";
    smallBox.style.backgroundColor = "#FFC107";
}

english.addEventListener("click", switchEnglish);
german.addEventListener("click", switchGerman);
    //actual language switch tbd