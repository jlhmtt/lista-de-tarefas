let coisas = []


let tamanhoLista = coisas.length;

let textoAdicionar = document.getElementById('textoAdicionar')

let lista = document.getElementById('lista')

let contadorBotaoId = 0

// função pra adicionar itens à lista
function adicionar() {

  // se a caixa de texto não estiver vazia,
  // adiciona o conteúdo ao fim da lista e apaga o texto da caixa
  // adiciona li ao ul
  // adiciona no fim de cada li um botão com uma id específica (criada por um contador)
  if (textoAdicionar.value != "") {
    contadorBotaoId++;
    coisas.push(textoAdicionar.value);
    lista.innerHTML += `<li id="li${contadorBotaoId}"> ${textoAdicionar.value}  <button onclick="remover(${contadorBotaoId})">X</button</li>`
    textoAdicionar.value = "";
  }
}

// função pra remover itens da lista
function remover(id) {

  // a função usa como input a id adicionada a cada li
  // essa id é também o index do array coisas[], então é possível deletar o item do array e do HTML usando o mesmo index 
  delete coisas[id]
  let li = document.getElementById(`li${id}`)
  li.remove()
}
