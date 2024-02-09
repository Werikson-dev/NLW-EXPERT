const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos converte uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "Number()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof([]));",
      respostas: [
        "array",
        "object",
        "array/object",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara os valores",
        "Compara os tipos e os valores",
        "Compara os tipos",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama o processo de combinar dois ou mais arrays em um só em JavaScript?",
      respostas: [
        "Concatenação",
        "Combinação",
        "União",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        "Iterar sobre os elementos de um array",
        "Criar um novo array",
        "Remover elementos de um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '||' faz em JavaScript?",
      respostas: [
        "E",
        "Ou",
        "Negação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos retorna o número de elementos em um array?",
      respostas: [
        "length()",
        "count()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template') 
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de'+ totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let respostas of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf (respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }  
    
    
     quizItem.querySelector('dl').appendChild(dt)
   }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild (quizItem)
  
  }