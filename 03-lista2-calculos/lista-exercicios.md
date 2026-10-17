# Lista 2 · Entrada, Saída e Atribuição (2)

**Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e Atribuição (2)**
Universidade Tecnológica Federal do Paraná · Campus Guarapuava · Sistemas para Internet
Fundamentos de Programação · Professor Eleandro Maschio · Material da aula B3 (`prog-aula-B3 - Exercícios.pdf`)

> **Como ler este arquivo:** em cada exercício, o bloco **Enunciado** é a transcrição fiel do PDF. O bloco **Contexto** foi acrescentado para estudo: o que o exercício quer ensinar, os conceitos envolvidos, o que entra e o que sai, e perguntas para guiar o raciocínio. O contexto não traz a resposta: as perguntas são para você responder antes de programar.

> **Importante (do PDF):** Cada exercício corresponde a um código TypeScript distinto.

## Índice

| Nº | Exercício | Conceitos principais | Sua resolução |
| --- | --- | --- | --- |
| 1 | [Refrigerantes](#exercício-1--refrigerantes) | constantes, conversão de unidade, arredondar para cima | [`quantidadeRefrigerantes.ts`](quantidadeRefrigerantes.ts) |
| 2 | [Caixa eletrônico](#exercício-2--caixa-eletrônico) | divisão inteira e resto em sequência | [`caixaEletronico.ts`](caixaEletronico.ts) |
| 3 | [Caixa eletrônico com centavos](#exercício-3--caixa-eletrônico-com-centavos) | números reais, imprecisão, `toFixed()` | [`caixaEletronicoMoedas.ts`](caixaEletronicoMoedas.ts) |
| 4 | [Ângulo](#exercício-4--ângulo) | resto da divisão, `Math.PI`, trigonometria | [`calculoAngulo.ts`](calculoAngulo.ts) |
| 5 | [Piscina](#exercício-5--piscina) | volume do cilindro, conversão m³ → litros, `Math.ceil` | [`aguaPiscina.ts`](aguaPiscina.ts) |
| 6 | [Torneio](#exercício-6--torneio) | maior e menor valor, `Math.max` / `Math.min` | [`pontosTorneio.ts`](pontosTorneio.ts), [`torneioOrdenacao.ts`](torneioOrdenacao.ts) |
| 7 | [Escada](#exercício-7--escada) | geometria, raiz quadrada | [`tamanhoEscada.ts`](tamanhoEscada.ts) |
| 8 | [Juros compostos](#exercício-8--juros-compostos) | potência, porcentagem, `toFixed()` | [`jurosComposto.ts`](jurosComposto.ts) |
| 9 | [Arredondamento](#exercício-9--arredondamento) | `Math.ceil`, `floor`, `round`, `trunc` | [`estudoMetodosMath.md`](estudoMetodosMath.md) |
| 10 | [Velocidade média](#exercício-10--velocidade-média) | divisão, divisão por zero, `Infinity` e `NaN` | [`velocidadeMedia.ts`](velocidadeMedia.ts) |

**Base comum da lista:** continua o ciclo **entrada → processamento → saída** da Lista 1, agora com mais uso dos métodos prontos de `Math` e de `Number`, e com atenção a constantes, arredondamento e formatação da saída.

---

## Exercício 1 · REFRIGERANTES

### Enunciado

> **REFRIGERANTES** – Leia a quantidade de pessoas que confirmaram presença em uma confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas garrafas devem ser compradas.

### Contexto

- **Objetivo de aprendizagem:** separar o que é dado do problema (constante) do que é lido do usuário (variável), e perceber quando o resultado precisa ser arredondado.
- **Conceitos:** `const`, conversão entre ml e litros, multiplicação e divisão, `Math.ceil`.
- **Entrada:** quantidade de pessoas.
- **Saída:** quantidade de garrafas a comprar.
- **Perguntas para guiar:**
  - Quais números do enunciado nunca mudam, não importa quantas pessoas venham? Que nomes você daria a eles?
  - 300 ml e 2 l estão na mesma unidade? O que acontece se você misturar as duas na conta?
  - Dá para comprar um pedaço de garrafa? Se a conta der 4,2 garrafas, quantas você compra?

---

## Exercício 2 · CAIXA ELETRÔNICO

### Enunciado

> **CAIXA ELETRÔNICO** – Leia um número inteiro referente ao valor de um saque em reais (R$). Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
>
> ```text
> Digite o valor do saque: 383 <enter>
>
> Dinheiro retirado:
> 3 nota(s) de R$ 100
> 1 nota(s) de R$ 50
> 1 nota(s) de R$ 20
> 1 nota(s) de R$ 10
> 0 nota(s) de R$ 5
> 1 nota(s) de R$ 2
> 1 moeda(s) de R$ 1
> ```

### Contexto

- **Objetivo de aprendizagem:** resolver um problema "guloso" (sempre a maior nota primeiro) usando só divisão inteira e resto, sem estruturas condicionais.
- **Conceitos:** leitura de inteiro, divisão inteira (`Math.floor` / `Math.trunc`), resto (`%`), atualização de variável, saída formatada exatamente como pedida.
- **Entrada:** valor inteiro do saque.
- **Saída:** a mesma sequência de linhas do exemplo, com a quantidade de cada nota (100, 50, 20, 10, 5, 2) e da moeda de 1.
- **Perguntas para guiar:**
  - Quantas notas de 100 cabem em 383? E quanto sobra depois de tirá-las?
  - O "quanto sobra" vira a entrada do passo seguinte. Como guardar esse valor que vai diminuindo?
  - Repare que a nota de 5 aparece com 0. Seu programa mostra a linha mesmo quando a quantidade é zero?
  - Rode com 383 e compare sua saída com o exemplo, linha por linha (inclusive "nota(s)" e "moeda(s)").

---

## Exercício 3 · CAIXA ELETRÔNICO COM CENTAVOS

### Enunciado

> **CAIXA ELETRÔNICO COM CENTAVOS** – Idem ao anterior, mas considere que o valor lido será um número real com duas casas decimais. Estude o método `Number.toFixed()`.

### Contexto

- **Objetivo de aprendizagem:** perceber que números reais no computador nem sempre são exatos, e lidar com isso.
- **Conceitos:** leitura de número real, imprecisão de ponto flutuante, `toFixed()`, conversão de reais para centavos.
- **Entrada:** valor do saque com duas casas decimais.
- **Saída:** como no exercício 2, acrescentando as moedas de centavos.
- **Perguntas para guiar:**
  - Quais moedas de centavos existem no real? Em que ordem elas entram?
  - Rode `console.log(0.1 + 0.2)` e veja o resultado. O que isso pode causar nas suas divisões e restos?
  - O que `toFixed()` devolve: um `number` ou uma `string`? Isso muda o que você pode fazer com o valor depois?
  - Trabalhar em centavos (números inteiros) em vez de reais evitaria o problema? Por quê?

---

## Exercício 4 · ÂNGULO

### Enunciado

> **ÂNGULO** – Leia um número real que denota um ângulo (em graus). Feito isso, calcule e exiba:
>
> - (a) O ângulo correspondente menor que 360º. Por exemplo, o ângulo de 1.090º perfaz três voltas completas e corresponde ao ângulo de 10º;
> - (b) O ângulo em radianos. Use a constante PI predefinida; e
> - (c) O seno, o cosseno e a tangente desse ângulo.

### Contexto

- **Objetivo de aprendizagem:** usar o resto da divisão fora do contexto de números inteiros e conhecer as funções trigonométricas de `Math`.
- **Conceitos:** `%` com números reais, `Math.PI`, conversão graus → radianos, `Math.sin`, `Math.cos`, `Math.tan`.
- **Entrada:** um ângulo em graus.
- **Saída:** (a) o ângulo reduzido a menos de 360º; (b) o ângulo em radianos; (c) seno, cosseno e tangente.
- **Perguntas para guiar:**
  - Tirar as "voltas completas" de um ângulo lembra qual operador que você já usou na Lista 1?
  - Uma volta completa vale 360º e também vale quantos radianos? Como montar a regra de três a partir disso?
  - As funções `Math.sin`, `Math.cos` e `Math.tan` esperam o ângulo em graus ou em radianos?
  - Teste com 90º: o cosseno sai exatamente 0? Por que não?

---

## Exercício 5 · PISCINA

### Enunciado

> **PISCINA** – Leia a altura e o raio (ambos em metros) de uma piscina redonda. Calcule e mostre a quantidade de água (em litros) necessária para encher essa piscina completamente. Arredonde o valor para cima.

### Contexto

- **Objetivo de aprendizagem:** traduzir uma fórmula geométrica para código e converter a unidade do resultado.
- **Conceitos:** volume do cilindro, `Math.PI`, potência, conversão de m³ para litros, `Math.ceil`.
- **Entrada:** altura e raio, em metros.
- **Saída:** litros de água necessários, arredondados para cima.
- **Perguntas para guiar:**
  - Que sólido geométrico é uma piscina redonda? Qual a fórmula do volume dele?
  - O volume sai em m³. Quantos litros cabem em 1 m³?
  - Entre os métodos `ceil`, `floor`, `round` e `trunc`, qual arredonda sempre para cima?

---

## Exercício 6 · TORNEIO

### Enunciado

> **TORNEIO** – Leia a pontuação dos cinco finalistas de um torneio de videogame (números inteiros e não estarão em ordem). Apresente a pontuação do primeiro e do último colocado.

### Contexto

- **Objetivo de aprendizagem:** encontrar o maior e o menor entre vários valores.
- **Conceitos:** cinco leituras de inteiro, `Math.max` e `Math.min` com vários argumentos.
- **Entrada:** cinco pontuações inteiras, fora de ordem.
- **Saída:** a pontuação do primeiro colocado e a do último.
- **Perguntas para guiar:**
  - "Primeiro colocado" corresponde à maior ou à menor pontuação?
  - `Math.max` aceita só dois números ou vários de uma vez? Teste.
  - Você precisa ordenar os cinco valores para responder ao que o enunciado pede, ou basta achar dois deles?

---

## Exercício 7 · ESCADA

### Enunciado

> **ESCADA** – Conforme o exemplo da figura abaixo, leia a altura do prédio e a distância de afastamento da escada. Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do prédio.
>
> *Figura (descrita em texto):* uma escada encostada na parede de um prédio. A altura do prédio está marcada como **12**, a distância no chão entre o pé da escada e o prédio está marcada como **5** e o comprimento da escada está marcado como **x**.

### Contexto

- **Objetivo de aprendizagem:** reconhecer um modelo matemático conhecido num problema do dia a dia e usar a raiz quadrada.
- **Conceitos:** triângulo retângulo, potência, `Math.sqrt` (ou `Math.hypot`).
- **Entrada:** altura do prédio e distância do pé da escada até o prédio.
- **Saída:** comprimento mínimo da escada.
- **Perguntas para guiar:**
  - Que figura geométrica o chão, a parede e a escada formam? Onde fica o ângulo reto?
  - Nessa figura, a escada é qual dos lados? Que teorema relaciona os três lados?
  - Use os valores da figura para testar: o resultado que seu programa mostra é um número "redondo"?

---

## Exercício 8 · JUROS COMPOSTOS

### Enunciado

> **JUROS COMPOSTOS** – Leia o valor investido em uma aplicação, a taxa de juros (ao mês, em percentual) e a quantidade de meses transcorridos. Exiba o montante depois de transcorrido o tempo, considerando duas casas decimais depois da vírgula. Use o método `Number.toFixed()`.

### Contexto

- **Objetivo de aprendizagem:** aplicar uma fórmula com potência e formatar o resultado financeiro.
- **Conceitos:** fórmula de juros compostos, taxa em percentual convertida para decimal, `**` ou `Math.pow`, `toFixed(2)`.
- **Entrada:** valor investido, taxa mensal em % e número de meses.
- **Saída:** montante final com duas casas decimais.
- **Perguntas para guiar:**
  - Qual a diferença entre juros simples e juros compostos? Qual fórmula representa o "juros sobre juros"?
  - O usuário digita a taxa como `2` para 2%. Que número entra de fato na fórmula?
  - O montante inclui o valor investido ou é só o rendimento?

---

## Exercício 9 · ARREDONDAMENTO

### Enunciado

> **ARREDONDAMENTO** – Pesquise, teste e diferencie os métodos de `Math`: `ceil()`, `floor()`, `round()` e `trunc()`.

### Contexto

- **Objetivo de aprendizagem:** conhecer as diferenças entre as formas de arredondar, que aparecem em vários exercícios desta lista.
- **Conceitos:** `Math.ceil`, `Math.floor`, `Math.round`, `Math.trunc`, números negativos.
- **Entrada:** valores de teste que você escolher.
- **Saída:** um quadro comparando o resultado de cada método (no repositório, em `estudoMetodosMath.md`).
- **Perguntas para guiar:**
  - Com números positivos, `floor` e `trunc` dão o mesmo resultado? E com números negativos, como `-2.7`?
  - O que `round` faz com valores terminados em `.5`, como `2.5` e `-2.5`?
  - Em qual exercício desta lista cada um desses métodos seria o certo?

---

## Exercício 10 · VELOCIDADE MÉDIA

### Enunciado

> **VELOCIDADE MÉDIA** - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas). Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero.

### Contexto

- **Objetivo de aprendizagem:** observar como a linguagem se comporta numa operação matematicamente indefinida e saber explicar.
- **Conceitos:** divisão, divisão por zero, os valores especiais `Infinity` e `NaN` em TypeScript/JavaScript.
- **Entrada:** distância em km e tempo em horas.
- **Saída:** velocidade média em km/h, mais a justificativa do caso "tempo zero".
- **Perguntas para guiar:**
  - Rode o programa com tempo 0. O programa trava, dá erro ou mostra algum valor?
  - E se a distância também for 0? O resultado é o mesmo do caso anterior?
  - Por que, no mundo real, não faz sentido falar em velocidade média com tempo zero? Como você escreveria isso na justificativa?

---

## Referência

LOPES, Anita; GARCIA, Guto. Variável, Expressões, Funções, Atribuição, Entrada e Saída. In: ______. *Introdução à Programação: 500 algoritmos resolvidos.* Rio de Janeiro: Elsevier, 2002. Cap. 2. p. 6-59.

## Como citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. **Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e Atribuição (2).** Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
