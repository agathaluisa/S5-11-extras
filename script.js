//FUNÇÃO CALCULADORA DE SALÁRIO
function calculateSalary(salario, vendas){
    let calculo = 0
    if(vendas <= 1200){
      calculo = vendas * 0.03
      return salario += calculo
    } else if (vendas > 1200){
      calculo = vendas * 0.05
      return salario += calculo
    }
  }
  
console.log(calculateSalary(1200,1200))


//FUNÇÃO QUE CALCULA NOTAS DE DINHEIRO E SALDO FINAL

function cashMachine(saque, salario, vendas){
  let cedulas = {
    '200' : 0,
    '100': 0,
    '50' : 0,
    '20' : 0,
    '10' : 0,
    '5' : 0,
    '2' : 0,
    '1' : 0
  
  }

  let salarioFinal = calculateSalary(salario, vendas)
  let saldoFinal = salarioFinal - saque

  while(saque > 0){
    if(saque >= 200){
      saque -= 200
      cedulas['200']++
    }
    else if(saque >= 100){
      saque -= 100
      cedulas['100']++
    }
    else if(saque >= 50){
      saque -= 50
      cedulas['50']++
    }
    else if(saque >= 20){
      saque -= 20
      cedulas['20']++
    }
    else if(saque >= 10){
      saque -= 10
      cedulas['10']++
    }
    else if(saque >= 5){
      saque -= 5
      cedulas['5']++
    }
    else if(saque >= 2){
      saque -= 2
      cedulas['2']++
    }
    else if(saque >= 1){
      saque -= 1
      cedulas['1']++
    }
  }
  let arrayCedulas = Object.entries(cedulas)
  let stringRetorno = `Notas sacadas: `

  for(let i = 0; i < arrayCedulas.length; i++){
    if(arrayCedulas[i][1] > 0){
      stringRetorno += `${arrayCedulas[i][1]} nota(s) de R$${arrayCedulas[i][0]}, `
    }
  }
  
 
 return `${stringRetorno} Resta: R$${saldoFinal}`
}
console.log(cashMachine(552, 1200, 1200))


//FUNÇÃO CALCULADORA DE IDADE EM DIAS, SEMANAS, MESES E ANOS
function calculateAge(anoNascimento, anoAtual){
    let calculoAnual = anoAtual - anoNascimento
    let calculoMensal = calculoAnual * 12
    let calculoSemanal = calculoAnual * 48
    let calculoDiario = calculoAnual * 365
  
    return `Você tem ${calculoAnual} anos,ou ${calculoMensal} meses, ou ${calculoSemanal} semanas ou ${calculoDiario} dias.`
  }
  
console.log(calculateAge(1993, 2022))


//FUNÇÃO CALCULADORA DE ESTOQUE
function calculateStock(atual, maxima, minima){
    let media = (maxima + minima) / 2
    if(atual >= media){
      return "Não efetuar compra"
    } else {
      return "Efetuar compra"
    }
  }
  
console.log(calculateStock(300, 700, 100))
  

//FUNÇÃO QUE PEGA A DIAGONAL DE UM ARRAY MÚLTIPLO 
function getDiagonal (arr){
  let vetor = []
  for(let i = 0; i < arr.length; i++){
    vetor.push(arr[i][i])
  }
  return vetor
}
console.log(getDiagonal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))