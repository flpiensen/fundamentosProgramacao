# Resumo da lista · Estruturas de Repetição (2) (E4)

> Este arquivo é um resumo de estudo, separado da lista. Ele explica do que tratam os exercícios e traz perguntas para guiar o raciocínio. Não traz respostas. O enunciado original está em [`lista-exercicios.md`](lista-exercicios.md).

## Do que se trata

É a continuação da lista E2, agora aplicando repetição a **problemas de matemática**. A lista inteira é **uma classe só**, a `InteiroMatematico`, que guarda um número inteiro *n*. O exercício 1 descreve a classe e os exercícios 2 a 25 são métodos dela. Por isso há uma pasta só: [`exerciseMathInteger/`](exerciseMathInteger/).

## Regras que valem para a lista toda

- **Volta a regra de modelagem:** os métodos **retornam** valores (até a `tabuada()` retorna uma `string`). Quem imprime é o `index.ts`.
- **Sem classes externas:** nada de `Math.pow`, `Math.sqrt` e parecidos. O objetivo é você construir cada cálculo com repetição.
- **Parâmetros e retorno você deduz:** o enunciado não diz o tipo. Para cada método, decida o que entra e o que sai antes de programar.
- **|n|:** a classe sempre guarda o valor absoluto de *n*. Isso vale no construtor e no `set`.
- **Reaproveite métodos:** vários exercícios ficam mais fáceis usando um método que você já fez (por exemplo, o 17 cita o `mdc`, o 19 cita o número de divisores e o 23 usa fatorial).

## Os dois padrões que mais aparecem

- **Acumulador:** uma variável que começa num valor neutro e vai somando ou multiplicando a cada volta. Pergunta-chave: qual é o valor inicial certo para uma soma? E para um produto?
- **Contador:** uma variável que conta quantas vezes algo aconteceu (por exemplo, quantos divisores *n* tem).

## Grupos de exercícios

| Grupo | Exercícios | Ideia central | Pergunta para guiar |
| --- | --- | --- | --- |
| A classe | 1 | atributo *n*, construtor, `get`/`set` com módulo | Como garantir o módulo sem `Math.abs`? |
| Repetição contada | 2, 4, 5, 6 | `tabuada`, produto por somas, potência, fatorial | Quantas vezes o laço roda em cada um? Esse número é conhecido antes de começar? |
| Séries | 7, 23, 24, 25 | série harmônica, número *e*, seno | Como cada termo se relaciona com o anterior? Dá para calcular o termo novo a partir do anterior, sem recomeçar do zero? |
| Sequências | 8, 9 | Fibonacci e Tribonacci | Quantos valores anteriores você precisa guardar a cada passo? Como "andar" com eles? |
| Divisores | 3, 10, 12, 13, 18, 19, 20 | número de divisores, primo, perfeito, maior e menor divisor | Até onde vale a pena procurar divisores? Precisa ir até *n*? |
| MDC e MMC | 14, 15, 16, 17 | máximo divisor comum e mínimo múltiplo comum | Na tabela do 15, de onde vêm o *a* e o *b* da linha seguinte? Quando o laço para? |
| Laço sem fim previsível | 11, 21, 22 | soma dos quadrados, raiz exata, sequência 3n+1 | Você sabe quantas voltas o laço vai dar antes de começar? Isso indica `for` ou `while`? |

## Eficiência

A lista insiste em evitar **passos desnecessários** (exercícios 4, 10, 19 e 24). Um algoritmo pode estar certo e mesmo assim ser lento. Depois de cada método funcionar, pergunte-se: o laço pode parar antes? Dá para pular valores que nunca vão servir?

## Atenção

- A partir do exercício 15, o próprio PDF avisa que os enunciados já foram questões de atividades avaliativas.
- O exercício 19 é marcado como **importantíssimo**.
- Confira os casos especiais que o enunciado define: *n* = 0 no Fibonacci (8), expoente ≤ 0 (5), *n* fora de 1.000 a 9.999 (11), *n* = 0 ou 1 nos divisores (12 e 13).
