# Resumo do simulado 2

> Este arquivo é um resumo de estudo, separado da lista. Ele explica do que trata cada exercício e traz perguntas para guiar o raciocínio. Não traz respostas. Os enunciados estão em [`lista-exercicios.md`](lista-exercicios.md).

## Como usar como simulado

- Faça como se fosse a prova: sem consultar resoluções antigas e, se possível, com tempo marcado.
- Antes de programar, escreva em papel: quais atributos a classe tem, quais métodos, o que cada método recebe e o que retorna.
- Lembre da regra das listas: a classe de modelagem **não imprime nada**. Quem mostra os resultados é o `index.ts`.
- Teste com os exemplos do próprio enunciado. Se o seu programa não bate com eles, o erro está no seu código, não no exemplo.

## 1. Imposto de Renda

**Conceitos:** `if-else` encadeado em faixas, retorno de valores, responsabilidade única.

Perguntas para guiar:

- O que a classe precisa guardar? Só a base de cálculo, ou mais alguma coisa?
- O enunciado pede **dois** métodos. Qual é a responsabilidade de cada um? Um deles pode usar o outro?
- Ao testar uma faixa no `if-else`, você precisa repetir o limite de baixo se a faixa anterior já foi descartada? (Pense no que significa "chegar no `else`".)
- Refaça a conta do exemplo de £18.200 à mão. De onde sai o £5.630? O 20% é aplicado sobre o quê?
- E para uma renda de £100 mil? O texto diz que a pessoa "pagará 40%", mas também diz que os primeiros £12.570 são isentos. Leia com atenção e decida: o que, exatamente, a sua fórmula vai fazer nesse caso? Anote a sua interpretação.

**Revisão depois de pronto (pedido do professor):**

- **Uso eficiente do `return`:** existe algum `else` depois de um `return` que não precisa existir? Alguma variável temporária só serve para ser retornada logo em seguida? Compare com o Exercício 10 da lista 07.
- **Responsabilidade única:** cada método faz uma coisa só? Se a tabela de faixas mudar, quantos lugares do código você teria que alterar?

## 2. Números romanos até 100

**Conceitos:** escolha entre `if-else` e `switch-case`, decomposição do número, concatenação de `string`.

Perguntas para guiar:

- Reveja a sua solução do Exercício 5 (1 a 10). O que dela dá para reaproveitar?
- O enunciado proíbe tratar os 101 casos um a um. Como o número 47 se divide em partes? E como cada parte vira romano?
- Quais operadores separam a dezena da unidade de um número inteiro?
- As dezenas (10, 20, …, 90) seguem o mesmo "desenho" das unidades (1, 2, …, 9)? Compare IV com XL, e IX com XC.
- Onde entram os casos especiais: 100 e os números fora do intervalo? O que deve ser retornado para 0 ou 101?
- Para cada pedaço do problema, qual estrutura é mais adequada: `if-else` ou `switch-case`? Por quê?

## 3. Tempo de um evento

**Conceitos:** aritmética com unidades de tempo, `%` e divisão inteira, `if` para casos especiais.

O slide só traz exemplos, então você mesmo precisa definir a classe: o que ela guarda e o que retorna.

Perguntas para guiar:

- **(a)** Os exemplos são início 16h e fim 2h, resultado 10h. Por que não dá 14h? O que aconteceu entre 16h e 2h?
- Então como o seu programa percebe que o evento "passou da meia-noite"? E o que muda na conta nesse caso?
- **(b)** Em 7h08 até 9h10, o resultado é 2h02. Agora pense em 7h50 até 9h10: o que acontece se você subtrair hora com hora e minuto com minuto separadamente?
- Existe uma unidade comum em que a subtração fica simples? Depois de subtrair nessa unidade, como voltar para horas e minutos?
- **(c)** Se a ideia do item (b) for boa, quanto da solução muda ao acrescentar os segundos?
- Que entradas são inválidas (hora 25, minuto 60)? O enunciado pede que você trate isso? Decida e anote.
- Como você vai devolver o resultado: um número, várias partes, uma `string` formatada como `2h02`? Quem deve formatar, a classe ou o `index.ts`?

## Atenção

Se travar em algum ponto, escreva o que você tentou e onde parou. A revisão vai apontar o erro e explicar o porquê, sem entregar a resposta pronta.
