/**
 * Jogo do Jokenpow TESTE COM DU WHITLE
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//Importaçao de Biblioteca
const input = require('readline-sync')
const colors = require('colors')

//Variaveis
let resultado1, resultado2, confirma

//Console
console.clear()
console.log("   ___  _____ _   __ _____ _   _ ______ _____  _    _ ".blue.bold)
console.log("  |_  ||  _  | | / /|  ___| \\ | || ___ \\  _  || |  | |".blue.bold)
console.log("    | || | | | |/ / | |__ |  \\| || |_/ / | | || |  | |".blue.bold)
console.log("    | || | | |    \\ |  __|| . ` ||  __/| | | || |/\\| |".blue.bold)
console.log("/\\__/ /\\ \\_/ / |\\  \\| |___| |\\  || |   \\ \\_/ /\\  /\\  /".blue.bold)
console.log("\\____/  \\___/\\_| \\_/\\____/\\_| \\_/\\_|    \\___/  \\/  \\/ ".blue.bold)


do {
    console.log("1. Pedra")
    console.log("2. Papel")
    console.log("3. Tesoura")
    resultado1 = Number(input.question("Digite a opcao desejada: ".italic.bold))
    switch (resultado1) {
        case 1:
            console.log("Jogador escolheu Pedra".cyan)
            break
        case 2:
            console.log("Jogador escolheu Papel".cyan)
            break
        case 3:
            console.log("Jogador escolheu Tesoura".cyan)
            break
        default:
            console.log("Numero Invalido".cyan)
    }
    resultado2 = Math.floor(Math.random() * 3 + 1)
    switch (resultado2) {
        case 1:
            console.log("Computador escolheu Pedra".red)
            break
        case 2:
            console.log("Computador escolheu Papel".red)
            break
        case 3:
            console.log("Computador escolheu Tesoura".red)
    }

    if (resultado1 === resultado2) {
        console.log("Empate".yellow)
    } else if (resultado1 === 1 && resultado2 === 3 || (resultado1 === 2 && resultado2 === 1 || (resultado1 === 3 && resultado2 === 2))) {
        console.log("🧑Jogador Ganhou🧑".green)
    } else {
        console.log("💻Computador Ganhou💻".green)
    }
    confirma = input.question("Deseja jogar Novamente(s/n): ")
} while (confirma === "s")