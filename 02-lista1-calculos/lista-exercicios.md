# Lista 1 · Entrada, Saída e Atribuição

**Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e Atribuição**
Universidade Tecnológica Federal do Paraná · Campus Guarapuava · Sistemas para Internet
Fundamentos de Programação · Professor Eleandro Maschio · Material da aula B2 (`prog-aula-B2 - Exercícios.pdf`)

> **Como ler este arquivo:** em cada exercício, o bloco **Enunciado** é a transcrição fiel do PDF. O bloco **Contexto** foi acrescentado para estudo: o que o exercício quer ensinar, os conceitos envolvidos, o que entra e o que sai, e perguntas para guiar o raciocínio. O contexto não traz a resposta: as perguntas são para você responder antes de programar.

> **Importante (do PDF):** Cada exercício corresponde a um código TypeScript distinto.

## Índice

| Nº | Exercício | Conceitos principais | Sua resolução |
| --- | --- | --- | --- |
| 1 | [Gotas](#exercício-1--gotas) | leitura de número real, conversão de unidade | [`contaGotas.ts`](contaGotas.ts) |
| 2 | [Média ponderada](#exercício-2--média-ponderada) | várias leituras, precedência de operadores | [`mediaPonderada.ts`](mediaPonderada.ts) |
| 3 | [Carga-horária](#exercício-3--carga-horária) | conversão por proporção | [`cargaHoraria.ts`](cargaHoraria.ts) |
| 4 | [Percentual de leitura](#exercício-4--percentual-de-leitura) | razão e porcentagem | [`percentualLeitura.ts`](percentualLeitura.ts) |
| 5 | [Desconto](#exercício-5--desconto) | porcentagem sobre um valor | [`descontoValor.ts`](descontoValor.ts) |
| 6 | [Aumento](#exercício-6--aumento) | porcentagem sobre um valor | [`aumentoSalarial.ts`](aumentoSalarial.ts) |
| 7 | [Troca de valores](#exercício-7--troca-de-valores) | atribuição, variável auxiliar | [`trocaValores.ts`](trocaValores.ts) |
| 8 | [Quadrado](#exercício-8--quadrado) | leitura de inteiro, multiplicação | [`aoQuadrado.ts`](aoQuadrado.ts) |
| 9 | [MCDU](#exercício-9--mcdu) | divisão inteira e resto (`%`) | [`mcdc.ts`](mcdc.ts) |
| 10 | [Dígito verificador](#exercício-10--dígito-verificador) | decomposição de dígitos, algoritmo passo a passo | [`digitoVerificador.ts`](digitoVerificador.ts) |

**Base comum da lista:** todos os exercícios leem dados do teclado (no repositório, com a biblioteca `readline-sync`), fazem um cálculo e mostram o resultado com `console.log`. O foco é praticar o ciclo **entrada → processamento → saída** e o uso de variáveis com tipo (`number`, `string`).

---

## Exercício 1 · GOTAS

### Enunciado

> **GOTAS** – Leia a quantidade de uma solução em mililitros. Converta e exiba essa mesma quantidade em gotas. Para essa solução, assuma que uma gota equivale a 0,05ml (ou seja, 1ml corresponde a 20 gotas).

### Contexto

- **Objetivo de aprendizagem:** fazer o primeiro programa completo de entrada, cálculo e saída, convertendo uma unidade em outra.
- **Conceitos:** leitura de número real (`questionFloat`), variável `number`, multiplicação ou divisão, `console.log`.
- **Entrada:** quantidade em mililitros (pode ter casas decimais).
- **Saída:** a mesma quantidade expressa em gotas.
- **Perguntas para guiar:**
  - O enunciado dá duas formas da mesma relação (0,05 ml por gota e 20 gotas por ml). Qual delas deixa a conta mais simples de escrever?
  - Se você usar a relação "0,05 ml por gota", deve multiplicar ou dividir? Teste com 1 ml: o resultado precisa dar 20.
  - O valor 0,05 muda durante o programa? Faz sentido guardá-lo numa `const`?

---

## Exercício 2 · MÉDIA PONDERADA

### Enunciado

> **MÉDIA PONDERADA** – Leia as notas de quatro avaliações e calcule a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.

### Contexto

- **Objetivo de aprendizagem:** combinar várias entradas numa única expressão e entender a ordem em que os operadores são calculados.
- **Conceitos:** várias leituras de `number`, operadores `*`, `+` e `/`, precedência de operadores e uso de parênteses.
- **Entrada:** quatro notas.
- **Saída:** a média ponderada.
- **Perguntas para guiar:**
  - Qual a diferença entre média aritmética e média ponderada? Por que a soma dos pesos importa?
  - Em `a + b / c`, qual operação o TypeScript faz primeiro? Isso é o que você quer na sua fórmula?
  - Se as quatro notas forem iguais, qual deve ser a média? Use isso para testar seu código.

---

## Exercício 3 · CARGA-HORÁRIA

### Enunciado

> **CARGA-HORÁRIA** – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos). Calcule e exiba a carga-horária em horas-relógio (60 minutos).

### Contexto

- **Objetivo de aprendizagem:** converter entre duas unidades que têm "tamanhos" diferentes, passando por uma unidade comum.
- **Conceitos:** proporção, multiplicação e divisão, números reais no resultado.
- **Entrada:** quantidade de horas-aula.
- **Saída:** quantidade equivalente em horas-relógio.
- **Perguntas para guiar:**
  - Quantos minutos existem em X horas-aula? E quantas horas-relógio cabem nesses minutos?
  - O resultado em horas-relógio deve ser maior ou menor que o número de horas-aula? Por quê?
  - O resultado pode ter casas decimais? Como ele aparece na tela?

---

## Exercício 4 · PERCENTUAL DE LEITURA

### Enunciado

> **PERCENTUAL DE LEITURA** – Leia a página atual e a quantidade de páginas de um livro. Calcule e exiba o percentual de leitura concluído.

### Contexto

- **Objetivo de aprendizagem:** transformar uma razão (parte sobre o todo) em porcentagem.
- **Conceitos:** divisão, porcentagem, ordem das operações.
- **Entrada:** página atual e total de páginas.
- **Saída:** percentual já lido.
- **Perguntas para guiar:**
  - Qual fração do livro já foi lida? Como uma fração vira porcentagem?
  - Se a página atual for igual ao total, qual percentual deve aparecer? E se for metade do total?
  - O que acontece se o total de páginas digitado for zero? (Não precisa tratar, mas vale testar e entender.)

---

## Exercício 5 · DESCONTO

### Enunciado

> **DESCONTO** – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de 35%.

### Contexto

- **Objetivo de aprendizagem:** aplicar uma porcentagem para reduzir um valor.
- **Conceitos:** porcentagem como número decimal, multiplicação, subtração, constantes.
- **Entrada:** preço do produto.
- **Saída:** preço final, já com o desconto.
- **Perguntas para guiar:**
  - Como 35% é escrito como número decimal?
  - O valor final é o desconto ou o que sobra depois dele? Existe mais de um jeito de chegar no valor final?
  - O 35% deveria ficar "solto" no meio da conta ou numa `const` com nome claro?

---

## Exercício 6 · AUMENTO

### Enunciado

> **AUMENTO** – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de 12,5%.

### Contexto

- **Objetivo de aprendizagem:** aplicar uma porcentagem para aumentar um valor (o espelho do exercício 5).
- **Conceitos:** porcentagem, multiplicação, soma, constantes.
- **Entrada:** salário atual.
- **Saída:** salário reajustado.
- **Perguntas para guiar:**
  - Compare com o exercício 5: o que muda na conta quando é aumento em vez de desconto?
  - "Exiba-o reajustado" pede o valor do aumento ou o salário novo?
  - Como você confere se o resultado está certo fazendo a conta à mão com um salário redondo?

---

## Exercício 7 · TROCA DE VALORES

### Enunciado

> **TROCA DE VALORES** – Leia dois números inteiros, a e b, e faça com que eles troquem os valores entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição.

### Contexto

- **Objetivo de aprendizagem:** entender que a atribuição (`=`) **substitui** o valor antigo da variável.
- **Conceitos:** atribuição, ordem das instruções, variável auxiliar, `let` (a variável precisa poder mudar).
- **Entrada:** dois números inteiros, `a` e `b`.
- **Saída:** os valores de `a` e `b` depois da troca.
- **Perguntas para guiar:**
  - Se você escrever `a = b;` logo de início, para onde vai o valor que estava em `a`?
  - Pense em trocar o conteúdo de dois copos cheios. O que você precisaria a mais?
  - Por que o enunciado proíbe só inverter a ordem do `console.log`? O que o professor quer ver na memória do programa?

---

## Exercício 8 · QUADRADO

### Enunciado

> **QUADRADO** – Leia um número inteiro, calcule e exiba o seu quadrado.

### Contexto

- **Objetivo de aprendizagem:** praticar a leitura de inteiro e uma operação simples.
- **Conceitos:** leitura de inteiro (`questionInt`), multiplicação, operador de potência `**` ou `Math.pow`.
- **Entrada:** um número inteiro.
- **Saída:** o quadrado desse número.
- **Perguntas para guiar:**
  - Quais são as formas de elevar ao quadrado em TypeScript? Alguma é mais legível?
  - O quadrado de um número negativo é negativo ou positivo? Teste.

---

## Exercício 9 · MCDU

### Enunciado

> **MCDU** – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum número maior, ou negativo, será digitado.

### Contexto

- **Objetivo de aprendizagem:** separar os dígitos de um número usando só aritmética, sem tratar o número como texto.
- **Conceitos:** divisão, divisão inteira (`Math.floor` ou `Math.trunc`), resto da divisão (`%`).
- **Entrada:** um inteiro de 0 a 9999.
- **Saída:** quatro linhas: unidades de milhar, centenas, dezenas e unidades.
- **Perguntas para guiar:**
  - Em TypeScript, `7 / 2` dá `3` ou `3.5`? Como ficar só com a parte inteira?
  - O que o operador `%` devolve? Experimente `% 10`, `% 100` e `% 1000` com um número de quatro dígitos e observe.
  - Se o número tiver só dois dígitos (por exemplo, 42), o que deve aparecer para milhar e centena?

---

## Exercício 10 · DÍGITO VERIFICADOR

### Enunciado

> **DÍGITO VERIFICADOR** – Leia o número de uma conta corrente, que tem até seis dígitos (desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o seguinte algoritmo:
>
> - Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
> - Some os resultados das multiplicações;
> - Calcule o resto da divisão dessa soma por 10;
> - Subtraia esse valor de 10.
> - Assuma o resultado como dígito verificador da conta.
>
> Exemplo para a conta 789123:
>
> ```text
>  7     8      9       1     2      3   = número da conta
>  |     |      |       |     |      |
> x1    x2     x3      x4    x5     x6
>  |     |      |       |     |      |
> =7   =16    =27      =4   =10    =18  -> soma = 82
>                                          resto da divisão de 82 por 10 = 2
>                                          dígito verificador = (10 – 2) = 8
> ```
>
> A conta, com o dígito verificador, será: 789123-8.

### Contexto

- **Objetivo de aprendizagem:** transformar um algoritmo descrito em português numa sequência de instruções, reaproveitando a técnica do exercício 9.
- **Conceitos:** separação de dígitos com `/` e `%`, soma acumulada, resto da divisão, concatenação de texto na saída.
- **Entrada:** número da conta, com até seis dígitos.
- **Saída:** a conta seguida do dígito verificador, no formato `789123-8`.
- **Perguntas para guiar:**
  - A técnica que você usou para separar milhar, centena, dezena e unidade funciona para seis dígitos?
  - O primeiro dígito da esquerda é o que tem posição 1. Quando o número tem menos de seis dígitos, qual dígito fica na posição 1?
  - Siga o exemplo do enunciado (789123) no seu programa: ele chega em 82, depois em 2, depois em 8?
  - Se o resto da divisão der 0, quanto vale "10 – 0"? Isso ainda é um único dígito? (O enunciado não pede para tratar, mas vale perceber.)

---

## Referência

LOPES, Anita; GARCIA, Guto. Variável, Expressões, Funções, Atribuição, Entrada e Saída. In: ______. *Introdução à Programação: 500 algoritmos resolvidos.* Rio de Janeiro: Elsevier, 2002. Cap. 2. p. 6-59.

## Como citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. **Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e Atribuição.** Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
