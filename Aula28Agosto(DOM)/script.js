//Criando um novo elemento
const newParagraph = document.createElement("p")
newParagraph.textContent = "Este é um novo parágrofo"

//Adicionando o novo elemento ao corpo da página
//(appendChild) insere na estrutura da página escolhida
document.body.appendChild(newParagraph)

//Adicionando um eventListener funcão para ouvir (ler) um evento do "html"
const button = document.getElementById("myButton")
button.addEventListener("click", () => {
    alert("Você clicou no botão")
    
})
