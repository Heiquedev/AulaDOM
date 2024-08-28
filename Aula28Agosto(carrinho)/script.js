/*
let produto = class {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }

  };

  let carrinho = class {
    constructor(produto, valor) {
      
      this.produto = produto;
      this.valor = valor + this.preco;
    }

    total(valor){
      let produtu = new produto()
      let carrinhu = new carrinho()
      return valor = produto.preco + carrinhu.valor

    }

    addCarrinho(preco) {
    
        
    }

  };
*/

document.addEventListener('DOMContentLoaded', () =>{

    const adicionarBotoes = document.querySelectorAll('.adicionar')
    const listaProdutos = document.querySelector('.lista_produtos')
    const totalElement = document.querySelector('.total')
    let total = 0
    
    adicionarBotoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produtoElemento = botao.parentElement
        //Compatível com : SELECT nome FROM produto
        const nomeProduto = produtoElemento.querySelector('h3').textContent
        //Compatível com : SELECT preco FROM produto
        const precoProdutoTexto = produtoElemento.querySelector('p').textContent
        const precoProduto = parseFloat(precoProdutoTexto.replace('Preço: R$ ','').replace(',','.'))

        //Adicionar o produto á lista do carrinho

        const itemCarrinho = document.createElement('li')
        itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.',',')}`
        listaProdutos.appendChild(itemCarrinho)

        //Atualizar o valor do Carrinho

        total += precoProduto  
        totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.',',')}`

    })

    })
})