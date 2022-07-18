/* Exercício 1
var idade = 16
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 67) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
*/

/*Exercício 2

//var agora = new Date()
//var hora = agora.getHours() (Hora de onde está rodando o script)

var hora = 0

if (hora > 0 && hora < 12) {
    console.log(`Bom dia! Agora são ${hora} horas`)
} else if (hora <= 18 && hora != 0) {
    console.log(`Boa tarde! Agora são ${hora} horas`)
} else if (hora <= 24 || hora == 0){
    console.log('Tenha uma boa noite!')
} else {
    console.log('Digite um valor válido de horas')
}
*/

/*Exercício 3
O dia através da função abaixo é mostra de 0 a 6, onde o 0 é domingo e o 6 é sábado
*/

var dia = new Date()
var diaSemana = dia.getDay()

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}

