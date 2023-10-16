let player = "o";
const div1 = document.querySelector("#um");
const div2 = document.querySelector("#dois");
const div3 = document.querySelector("#tres");
const div4 = document.querySelector("#quatro");
const div5 = document.querySelector("#cinco");
const div6 = document.querySelector("#seis");
const div7 = document.querySelector("#sete");
const div8 = document.querySelector("#oito");
const div9 = document.querySelector("#nove");
const btn = document.querySelector("#btn");
let cont = 0;
btn.addEventListener("click",function(){
    window.location.reload();
})
div1.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div2.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div3.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div4.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div5.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div6.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div7.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div8.addEventListener("click", function () {
    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")


});
div9.addEventListener("click", function () {

    if (this.textContent == null || this.textContent == "") {
        this.innerHTML = player;
        this.classList.add("pecas");
        nextPlayer();
        addCont();

    }
    else alert("Escolha outra casa!")

});




function nextPlayer() {
    var check = checkWinner();

    if (player == "o" && check != true) {

        return player = "x";
    }
    if (player == "x" && check != true) {

        return player = "o";
    }
}
function checkWinner() {
    if ((div1.textContent == div2.textContent) && (div2.textContent == div3.textContent) && div1.innerHTML != "" && div2.innerHTML != "" && div3.innerHTML != "") {
        alert("Vencdor é o player " + div1.textContent);
        return true
    }

    if ((div4.textContent == div5.textContent) && (div5.textContent == div6.textContent) && div4.innerHTML != "" && div5.innerHTML != "" && div6.innerHTML != "") {
        alert("Vencdor é o player " + div4.textContent);
        return true
    }

    if ((div7.textContent == div8.textContent) && (div8.textContent == div9.textContent) && div7.innerHTML != "" && div8.innerHTML != "" && div9.innerHTML != "") {
        alert("Vencdor é o player " + div7.textContent);
        return true
    }

    if ((div1.textContent == div5.textContent) && (div5.textContent == div9.textContent) && div1.innerHTML != "" && div5.innerHTML != "" && div9.innerHTML != "") {
        alert("Vencdor é o player " + div1.textContent);
        return true
    }

    if ((div3.textContent == div5.textContent) && (div5.textContent == div7.textContent) && div3.innerHTML != "" && div5.innerHTML != "" && div7.innerHTML != "") {
        alert("Vencdor é o player " + div3.textContent);
        return true
    }
    if ((div1.textContent == div4.textContent) && (div4.textContent == div7.textContent) && div1.innerHTML != "" && div4.innerHTML != "" && div7.innerHTML != "") {
        alert("Vencdor é o player " + div1.textContent);
        return true
    }
    if ((div2.textContent == div5.textContent) && (div5.textContent == div8.textContent) && div2.innerHTML != "" && div5.innerHTML != "" && div8.innerHTML != "") {
        alert("Vencdor é o player " + div2.textContent);
        return true
    }
    if ((div3.textContent == div6.textContent) && (div6.textContent == div9.textContent) && div3.innerHTML != "" && div6.innerHTML != "" && div9.innerHTML != "") {
        alert("Vencdor é o player " + div3.textContent);
        return true
    }



}
function checkVelha() {
    if (div1.textContent != "" && div2.textContent != "" && div2.textContent != "" && div3.textContent != "" && div4.textContent != "" && div5.textContent != "" && div6.textContent != "" && div7.textContent != "" && div8.textContent != "" && div9.textContent != "") {
        alert("Deu velha!"),
            window.location.reload();
    }
}
function addCont() {
    cont += 1;

    if (cont == 9 && check != true) {
        checkVelha();
    }
}