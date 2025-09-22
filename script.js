
let botoes = document.querySelectorAll('.produtos-botao')




    botoes.forEach(button => {
        button.addEventListener('click', (event) => {
            let container = event.target.closest('.produtos-card')

            let tituloProduto = container.querySelector('.produtos-titulo').textContent
            let precoProduto = container.querySelector('.produtos-preco').textContent
            let imagemProduto = container.querySelector('.produtos-img').src
        
            let produto = {
                titulo: tituloProduto,
                preco: precoProduto,
                imagem: imagemProduto
            }

            sessionStorage.setItem('produtoSelecionado', JSON.stringify(produto))
            alert(`${tituloProduto} adicionado ao carrinho`)
            window.location.href = 'carrinho.html'

        })
    })


    window.addEventListener('DOMContentLoaded', () => {
        let produtoInfo = sessionStorage.getItem('produtoSelecionado')

        if (produtoInfo) {
            let produto = JSON.parse(produtoInfo)
            let carrinhoProduto = document.querySelector('.carrinho-produto')

            if (carrinhoProduto) {
                carrinhoProduto.innerHTML = `
                <img src="${produto.imagem}" alt="">
                <div class="carrinho-conteudo">
                <div>
                <h1>${produto.titulo}</h1>
                <p>${produto.preco}</p>
                </div>
                <button>Finalizar Compra</button>
                </div>

            `
            } 
        }
    })


