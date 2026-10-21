# Resumo da lista · Estruturas de Repetição (E2)

> Este arquivo é um resumo de estudo, separado da lista. Ele explica do que tratam os exercícios e traz perguntas para guiar o raciocínio. Não traz respostas. O enunciado original está em [`lista-exercicios.md`](lista-exercicios.md).

## Do que se trata

Até a lista D4, cada linha do programa rodava no máximo uma vez: o `if` só escolhia **se** um trecho rodava. Agora entra a **repetição**: um mesmo bloco roda várias vezes enquanto uma condição for verdadeira. É isso que permite "contar de 1 até 10" sem escrever dez `console.log`.

A lista inteira é **uma classe só**, a `PainelContador`. O exercício 1 descreve a classe e os exercícios 2 a 7 são os métodos dela. Por isso há uma pasta só: [`exerciseCounterPanel/`](exerciseCounterPanel/).

## O que muda em relação às listas anteriores

- **Esta classe pode imprimir.** Nas listas de POO, a classe de modelagem nunca usava `console.log`. Aqui o enunciado diz que `PainelContador` é uma **classe de interface**, então os métodos de contagem mostram os números na tela. Repare nessa diferença: é de propósito.
- **Validação centralizada.** O item (d) pede um método **privado** que confere se o limite superior é menor que o inferior e, se for, troca os dois. Todo caminho que muda os limites (o construtor e os `set`) tem que passar por ele.

## As três estruturas (aula E1)

| Estrutura | Quando testa a condição | Quantas vezes pode rodar | Use quando… |
| --- | --- | --- | --- |
| `while` | antes de rodar (pré-teste) | de 0 a n vezes | pode ser que o bloco não precise rodar nenhuma vez |
| `do-while` | depois de rodar (pós-teste) | de 1 a n vezes | o bloco precisa rodar pelo menos uma vez |
| `for` | antes de rodar, com início e incremento na mesma linha | de 0 a n vezes | o número de repetições é conhecido ou pode ser previsto |

Toda repetição tem três partes: **onde começa** (inicialização), **até quando vai** (condição) e **como avança** (incremento). Se faltar o avanço, a condição nunca fica falsa e o programa trava num laço infinito.

O PDF pede para explorar as três estruturas no mesmo exercício. Vale tentar resolver pelo menos um método com cada uma e comparar qual ficou mais legível.

## Exercício por exercício

| Nº | Método | Ideia central | Pergunta para guiar |
| --- | --- | --- | --- |
| 1 | a classe | atributos, construtor, `get`/`set` e validação privada | Se alguém criar `new PainelContador(10, 1)`, o que o objeto deve guardar? |
| 2 | `contagem()` | contar do inferior ao superior | Qual valor a variável de contagem tem antes da primeira volta? E qual é a condição para continuar? |
| 3 | `contagemDecrescente()` | contar ao contrário | Quais das três partes da repetição mudam em relação ao exercício 2? |
| 4 | `contagemPares()` | só os pares | Dá para resolver de dois jeitos: testando cada número ou pulando de dois em dois. Qual faz menos voltas? E se o limite inferior for ímpar? |
| 5 | `contagemImpares()` | só os ímpares | Que ajuste do exercício 4 resolve este? |
| 6 | `contagemPasso()` | avançar de um valor qualquer | O passo vem por parâmetro. Onde ele entra: na inicialização, na condição ou no incremento? |
| 7 | `contagemOmitindo()` | trocar múltiplos por `*` | Como saber se um número é múltiplo de outro? (O operador já apareceu no `isEven` da lista D2.) |

## Para testar

No `index.ts`, crie alguns painéis com limites diferentes (inclusive com os limites invertidos) e chame cada método. Confira se a saída bate com os exemplos do enunciado.
