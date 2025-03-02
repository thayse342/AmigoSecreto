//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [Ana,Bea,Rafael,Paulo,Toni,Suzane,Vithor,Viviane];


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    let novoItem = document.createElement("li");
    novoItem.textContent = amigos[i];
    listaAmigos.appendChild(novoItem);
    }
}
atualizarListaAmigos();

function adicionarAmigo() {
    let novoAmigo = document.getElementById("amigo").value.trim();
    if (novoAmigo !== "") {
    amigos.push(novoAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
    } else {
    alert("Por favor, digite um nome válido.");
    }
}
