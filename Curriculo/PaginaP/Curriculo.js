const Linguagem = document.getElementById("id1");
const pt = document.getElementById("id2");
const eng = document.getElementById("Eng");

Linguagem.addEventListener("click", () => {

    pt.classList.toggle("escondido");
    eng.classList.toggle("escondido");

});