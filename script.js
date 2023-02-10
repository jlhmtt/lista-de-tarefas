let coisas = [];

let tamanhoLista = coisas.length;

let input = document.getElementById("input");

let lista = document.getElementById("lista");

let contadorBotaoId = 0;

// função pra adicionar itens à lista
function adicionar() {
  // se a caixa de texto não estiver vazia,
  // adiciona o conteúdo ao fim da lista e apaga o texto da caixa
  // adiciona li ao ul
  // adiciona no fim de cada li um botão com uma id específica (criada por um contador)
  if (input.value != "") {
    contadorBotaoId++;
    coisas.push(input.value);
    lista.innerHTML += `<li id="li${contadorBotaoId}"> ${input.value}  <button onclick="remover(${contadorBotaoId})">X</button</li>`;
    input.value = "";
  }
}

// função pra adicionar itens à lista ao pressionar Enter no input
input.addEventListener("keyup", function remover(event) {
  // quando pressionar Enter dentro do input, chama a função adicionar()
  if (event.key == "Enter") {
    event.preventDefault();
    adicionar();
  }
});

// função pra remover itens da lista
function remover(id) {
  // a função usa como input a id adicionada a cada li
  // essa id é também o index do array coisas[], então é possível deletar o item do array e do HTML usando o mesmo index
  delete coisas[id];
  let li = document.getElementById(`li${id}`);
  li.remove();
}
