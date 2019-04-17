/**
 * Estudo da estrutura switch case
 * @author MurilloRamos
 */

// a linha abaixo gera um numero aleatorio entre 0 e 5
// match.floor (converte para numero inteiro)
let face = Math.floor(Math.random() * 6) + 1

switch (face) {
    case 1:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face1.png"
        break
    case 2:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face2.png"
        break
    case 3:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face3.png"
        break
    case 4:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face4.png"
        break
    case 5:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face5.png"
        break
    case 6:
        //a lionha abaixo "captura" o id do documento .html (DOM)
        document.getElementById("dado").src = "face6.png"
        break
}