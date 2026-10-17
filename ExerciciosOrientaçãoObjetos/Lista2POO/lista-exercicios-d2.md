# Lista D2 · Expressões Booleanas e Estrutura Condicional `if-else`

**Exercícios: Expressões Booleanas e Estrutura Condicional *if-else***
Universidade Tecnológica Federal do Paraná · Campus Guarapuava · Sistemas para Internet
Fundamentos de Programação · Professor Eleandro Maschio · Material da aula D2 (`prog-aula-D2 - Exercícios.pdf`)

> **Como ler este arquivo:** em cada exercício, o bloco **Enunciado** é a transcrição fiel do PDF. O bloco **Contexto** foi acrescentado para estudo: o que o exercício quer ensinar, os conceitos envolvidos, o que entra e o que sai, e perguntas para guiar o raciocínio. O contexto não traz a resposta: as perguntas são para você responder antes de programar.

> **Importante (do PDF):** Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de saída deve ser utilizada nas classes de modelagem. Os exercícios 1 e 6 são teóricos.

## Índice

| Nº | Exercício | Tipo | Conceitos principais |
| --- | --- | --- | --- |
| 1 | [Expressões](#exercício-1--expressões) | teórico | `!`, `&&`, `\|\|`, `==`, precedência |
| 2 | [Maioridade](#exercício-2--maioridade) | classe | método que retorna `boolean` |
| 3 | [Eleitor](#exercício-3--eleitor) | classe | `if-else` encadeado, faixas de idade |
| 4 | [Aluno](#exercício-4--aluno) | classe | comparação sem `Math.max()` |
| 5 | [Acadêmico](#exercício-5--acadêmico) | classe | condições compostas, ordem dos testes |
| 6 | [Teste de mesa](#exercício-6--teste-de-mesa) | teórico | execução passo a passo, blocos aninhados |
| 7 | [Caixa secreta](#exercício-7--caixa-secreta) | classe | encapsulamento (`private`), sem `get`/`set` |
| 8 | [Imposto de renda](#exercício-8--imposto-de-renda) | classe | faixas de valores, responsabilidade única |
| 9 | [Gentílico](#exercício-9--gentílico) | classe | muitos casos, `toUpperCase()` |
| 10 | [`return` em uma linha](#exercício-10--return-em-uma-linha) | refatoração | expressão booleana como valor |
| ★ | [Bônus](#bônus) | tirinha | — |

**Base comum da lista:** é a primeira lista com **decisões**. O programa deixa de executar sempre as mesmas linhas e passa a escolher o caminho conforme uma condição (`true` ou `false`). Continua valendo a regra das listas de POO: a classe decide e **retorna**; quem mostra o resultado é o `index.ts`.

---

## Exercício 1 · EXPRESSÕES

### Enunciado

> **EXPRESSÕES** – Dê o resultado das expressões booleanas abaixo (`true` ou `false`):
>
> - (a) `!(numerador == denominador)`
> - (b) `!(senha.length == 0)`
> - (c) `(senha == confirmacao) && !(senha.length == 0)`
> - (d) `nota >= 6.0 && percentualFaltas <= 0.25`
> - (e) `cotacaoDolar < cotacaoEuro || cotacaoLibra < cotacaoEuro`
> - (f) `(qtde < qtdeMaxima) && (saldo > 0 || credito > 0)`
>
> Considere:
>
> - `numerador = 2`
> - `denominador = 4`
> - `senha = "abc"`
> - `confirmacao = "123"`
> - `nota = 9.0`
> - `percentualFaltas = 0.05`
> - `cotacaoDolar = 6.0`
> - `cotacaoEuro = 7.0`
> - `cotacaoLibra = 8.0`
> - `qtde = 0`
> - `qtdeMaxima = 10`
> - `saldo = 0.0`
> - `credito = 999.0`
>
> As expressões podem ser testadas na linguagem e o resultado impresso.

### Contexto

- **Objetivo de aprendizagem:** avaliar expressões booleanas à mão, entendendo cada operador lógico.
- **Conceitos:** operadores relacionais (`==`, `<`, `>=`, `<=`), operadores lógicos (`!` não, `&&` e, `||` ou), parênteses, `length` de `string`.
- **Entrada:** os valores do quadro "Considere".
- **Saída:** `true` ou `false` para cada letra.
- **Perguntas para guiar:**
  - Resolva de dentro para fora: primeiro o que está entre parênteses, depois o `!`, depois `&&` e `||`.
  - Para `&&` dar `true`, o que precisa acontecer com os dois lados? E para `||`?
  - Quanto vale `"abc".length`?
  - Depois de responder no papel, crie as variáveis num arquivo e imprima cada expressão para conferir. Onde você errou, qual passo foi diferente?

---

## Exercício 2 · MAIORIDADE

### Enunciado

> **MAIORIDADE** – Modele uma classe que represente um indivíduo. Implemente um método que determine se a maioridade já foi atingida.

### Contexto

- **Objetivo de aprendizagem:** escrever o primeiro método que responde "sim ou não" sobre o estado de um objeto.
- **Conceitos:** atributo idade (ou data de nascimento), método com retorno `boolean`, operador relacional.
- **Entrada:** os dados do indivíduo que você escolher (na criação do objeto).
- **Saída:** `true` se já atingiu a maioridade, `false` se não.
- **Perguntas para guiar:**
  - Que informação do indivíduo é necessária para responder à pergunta? Idade ou ano de nascimento: qual é mais simples? Qual fica certa por mais tempo?
  - Maioridade no Brasil começa em qual idade? A pessoa com exatamente essa idade já é maior?
  - O método precisa mesmo de um `if`? Releia o exercício 10 depois de resolver este.

---

## Exercício 3 · ELEITOR

### Enunciado

> **ELEITOR** – Modele uma classe que represente um eleitor. Implemente um método que determine se o voto é: obrigatório, facultativo ou não permitido.

### Contexto

- **Objetivo de aprendizagem:** escolher entre **três** resultados possíveis, usando `if-else` encadeado.
- **Conceitos:** `if` / `else if` / `else`, faixas de idade, condições com `&&` ou `||`, retorno `string`.
- **Entrada:** idade do eleitor.
- **Saída:** "obrigatório", "facultativo" ou "não permitido".
- **Perguntas para guiar:**
  - Pesquise as regras do voto no Brasil: a partir de que idade se pode votar? Quando é obrigatório? Quando volta a ser facultativo?
  - O voto facultativo acontece em uma ou em duas faixas de idade?
  - Desenhe uma linha do tempo de idades e marque as faixas. Em que ordem é mais fácil testar as condições?
  - Teste com as idades exatamente nas fronteiras de cada faixa. Cada uma cai no resultado certo?

---

## Exercício 4 · ALUNO

### Enunciado

> **ALUNO** – Considere um objeto que represente um aluno de Ensino Médio, abstraindo as notas de dois semestres e da avaliação de exame. Implemente métodos que retornem (proibido `Math.max()`):
>
> - (a) a maior nota, considerando os dois semestres;
> - (b) a maior nota, considerando também a avaliação de exame.

### Contexto

- **Objetivo de aprendizagem:** construir com `if` a lógica que `Math.max()` faz por você.
- **Conceitos:** atributos numéricos, comparação, `if-else`, reaproveitar um método dentro de outro.
- **Entrada:** nota do 1º semestre, nota do 2º semestre e nota do exame.
- **Saída:** (a) a maior entre as duas notas semestrais; (b) a maior entre as três.
- **Perguntas para guiar:**
  - Para achar o maior de dois números, quantas comparações bastam?
  - Para três números, você precisa comparar tudo de novo, ou pode partir do resultado do item (a)?
  - O que seu método retorna se duas notas forem iguais? Isso está certo?

---

## Exercício 5 · ACADÊMICO

### Enunciado

> **ACADÊMICO** – Implemente uma classe que abstraia um acadêmico, considerando a nota final e a frequência, obrigatoriamente informados no construtor. A frequência é um número real entre 0,0 e 1,0 (onde 0,8 corresponde a uma frequência de 80%).
>
> Disponha de um método que retorne a situação desse aluno (em termos de "Aprovado", "Reprovado" e "Sem Presença Obrigatória"), diante dos requisitos:
>
> - Para aprovação: nota maior ou igual a 6,0 e frequência mínima de 75%;
> - Para cursar a disciplina sem presença obrigatória: reprovado com nota maior ou igual a 4,0 e com frequência mínima de 75%.

### Contexto

- **Objetivo de aprendizagem:** combinar duas condições e perceber que a **ordem** dos testes muda o resultado.
- **Conceitos:** construtor com parâmetros obrigatórios, `&&`, `if` / `else if` / `else`, frequência como decimal.
- **Entrada:** nota final e frequência (0,0 a 1,0).
- **Saída:** "Aprovado", "Reprovado" ou "Sem Presença Obrigatória".
- **Perguntas para guiar:**
  - 75% de frequência vira qual número, já que a frequência vai de 0,0 a 1,0?
  - Um aluno com nota 7 e frequência 0,8 cumpre a regra de aprovação. Ele também cumpre "nota maior ou igual a 4,0 e frequência mínima de 75%"? Então qual teste deve vir primeiro?
  - O que acontece com um aluno de nota 9 e frequência 0,5? Em qual situação ele cai?
  - Monte uma tabela com alguns casos (nota alta e baixa, frequência alta e baixa) antes de programar.

---

## Exercício 6 · TESTE DE MESA

### Enunciado

> **TESTE DE MESA** – Considere o seguinte trecho de código, implementado em TypeScript. Qual é o valor de `aux` ao final da execução?
>
> ```typescript
> let a = 8, b = 16, c = 4, aux = 0;
> if (a > b)
> {
> aux = a;
> a = b;
> b = aux;
> }
> if (b > c)
> {
> aux = b;
> b = c;
> c = aux;
> if (a > b)
> {
> aux = a;
> a = b;
> b = aux;
> }
> }
> ```
>
> - (a) 0
> - (b) 4
> - (c) 8
> - (d) 16
> - (e) ocorre erro de compilação

### Contexto

- **Objetivo de aprendizagem:** simular a execução de um código linha por linha, sem rodar no computador.
- **Conceitos:** teste de mesa, blocos `{ }` aninhados, troca de valores com variável auxiliar (a mesma ideia do exercício 7 da Lista 1).
- **Entrada:** os valores iniciais da primeira linha.
- **Saída:** o valor final de `aux` (uma das alternativas).
- **Perguntas para guiar:**
  - Faça uma tabela com uma coluna para cada variável (`a`, `b`, `c`, `aux`) e uma linha para cada instrução executada.
  - Antes de cada `if`, calcule a condição com os valores **atuais**, não com os iniciais.
  - O terceiro `if` está dentro ou fora do segundo? O que isso muda?
  - Depois de chegar à sua resposta, rode o código e confira. O que esse trecho faz com `a`, `b` e `c` no final?

---

## Exercício 7 · CAIXA SECRETA

### Enunciado

> **CAIXA SECRETA** – Modele uma classe que represente uma caixa secreta. Para a instanciação de um objeto, a classe dispõe de um único construtor que requer, como parâmetros, uma senha alfanumérica e um segredo a ser guardado (ambos são cadeias de caracteres). Tanto a senha quanto o segredo não podem ser alterados (`set`) e nem recuperados (`get`) pela interface do objeto. Entretanto, deve ser provido um método que tente abrir a caixa, por meio de outra senha informada como parâmetro. Caso as duas senhas sejam iguais, a caixa deve retornar o segredo. Do contrário, a mensagem "Tente novamente!" deve ser retornada.

### Contexto

- **Objetivo de aprendizagem:** usar o encapsulamento para proteger dados de verdade, deixando só um caminho controlado de acesso.
- **Conceitos:** `private`, ausência de `get`/`set`, comparação de `string`, `if-else` com retorno.
- **Entrada:** senha e segredo (na criação); uma tentativa de senha (no método de abrir).
- **Saída:** o segredo, se a senha bater; "Tente novamente!", se não.
- **Perguntas para guiar:**
  - O que impede o `index.ts` de escrever `caixa.senha` e ler a senha? Teste isso no seu código.
  - O método de abrir precisa receber o segredo como parâmetro? Por quê?
  - "abc" e "ABC" devem abrir a mesma caixa? O que o enunciado diz?

---

## Exercício 8 · IMPOSTO DE RENDA

### Enunciado

> **IMPOSTO DE RENDA** – As regras do IRPF do Brasil estão em constante debate e alteração. Sempre existem detalhes que adicionam complexidade ao cálculo do imposto devido. Uma forma para começar a entender (e implementar!) sobre o assunto pode ser modelar o imposto de países com regras mais simples. A Inglaterra, por exemplo, utiliza quatro faixas de alíquotas, que variam conforme o rendimento anual do contribuinte (CORTÊS, 2025), sendo:
>
> | Faixa | Rendimentos Tributáveis | Taxa de Imposto |
> |---|---|---|
> | Personal Allowance | Até £12.570 | 0% |
> | Basic rate | De £12.571 a £50.270 | 20% |
> | Higher rate | De £50.271 a £125.140 | 40% |
> | Additional rate | Acima de £125.140 | 45% |
>
> Conforme a tabela, uma pessoa com ganho anual de £100 mil pagará 40% de imposto de renda. Entretanto, os primeiros £12.570 de qualquer pessoa são isentos de imposto. Assim, o cálculo para uma pessoa solteira que tenha renda anual bruta de £18,2 mil e não recebe subsídios especiais será feito desta forma:
>
> | Item | Valor |
> |---|---|
> | Rendimento tributável anual total | £18.200 |
> | Personal Allowance | (-) £12.570 |
> | Valor da renda tributável | £5.630 |
> | Cálculo da obrigação fiscal | £5.630 x 20% |
> | Imposto devido | £1.124,20 |
>
> Com base nessas regras, implemente uma classe para a qual seja informada a base de cálculo (anual) de um contribuinte. A classe deve prover métodos para retornar a alíquota e o valor do imposto devido. Revise a resolução diante do **princípio da responsabilidade única**.

*Nota de transcrição:* no exemplo do PDF, a conta "£5.630 x 20%" não resulta em £1.124,20. Refaça essa multiplicação à mão antes de usar o exemplo para conferir o seu programa, para não achar que o seu código está errado por causa do exemplo.

### Contexto

- **Objetivo de aprendizagem:** transformar uma tabela de faixas em `if-else` e dividir o problema em métodos com uma responsabilidade cada.
- **Conceitos:** `if` / `else if` com faixas, ordem dos testes, método que usa outro método, princípio da responsabilidade única.
- **Entrada:** base de cálculo anual do contribuinte.
- **Saída:** um método que retorna a alíquota e outro que retorna o imposto devido.
- **Perguntas para guiar:**
  - As faixas não se sobrepõem. Se você testar da maior para a menor (ou da menor para a maior), precisa escrever os dois limites de cada faixa?
  - O método do imposto precisa repetir os `if` das faixas, ou pode perguntar a alíquota ao outro método?
  - No exemplo, a alíquota é aplicada sobre o rendimento inteiro ou só sobre o que passa de £12.570?
  - "Responsabilidade única": cada método deve fazer uma coisa só. Releia os seus. Algum está fazendo duas?

---

## Exercício 9 · GENTÍLICO

### Enunciado

> **GENTÍLICO** – Modele e implemente uma classe que resolva o problema de retornar o gentílico de um estado a partir da respectiva sigla de unidade federativa (UF). Por exemplo, para "PR" deve-se retornar "paranaense". Considere todos os estados brasileiros, além de possíveis variações entre minúsculas e maiúsculas.

### Contexto

- **Objetivo de aprendizagem:** lidar com muitos casos fixos e preparar o terreno para o `switch-case` (aula D4).
- **Conceitos:** `if-else` encadeado ou `switch-case`, comparação de `string`, `toUpperCase()` / `toLowerCase()`.
- **Entrada:** sigla da UF, em qualquer combinação de maiúsculas e minúsculas.
- **Saída:** o gentílico do estado.
- **Perguntas para guiar:**
  - Quantas UFs o Brasil tem (contando o Distrito Federal)? Sua classe cobre todas?
  - "pr", "Pr" e "PR" devem dar o mesmo resultado. Em vez de testar as três formas, o que você pode fazer com a sigla antes de comparar?
  - O que o método deve retornar para uma sigla que não existe, como "XX"?
  - Compare a versão com `if-else` e a versão com `switch-case`: qual fica mais fácil de ler?

---

## Exercício 10 · `return` em uma linha

### Enunciado

> Aprimore o uso do `return` no seguinte método. É possível manter a legibilidade e resumir o bloco de instruções a uma única linha.
>
> ```typescript
> public isEven(): boolean {
>   if (this.n % 2 == 0) {
>     return true;
>   } else {
>     return false;
>   }
> }
> ```

### Contexto

- **Objetivo de aprendizagem:** entender que uma expressão booleana já **é** um valor, e pode ser retornada diretamente.
- **Conceitos:** expressão booleana, tipo `boolean`, `return`.
- **Entrada:** o atributo `n` do objeto.
- **Saída:** o mesmo método, com o mesmo comportamento, em uma linha.
- **Perguntas para guiar:**
  - Que tipo de valor a expressão dentro dos parênteses do `if` produz?
  - Quando a condição é verdadeira, o método retorna `true`. Quando é falsa, retorna `false`. O que isso diz sobre a relação entre a condição e o retorno?
  - Onde mais nesta lista (exercícios 2 e 4, por exemplo) você escreveu um `if` que só retorna `true` ou `false`?

---

## Bônus!

![Tirinha Vida de Programador #25: lógica de programação](tirinha-bonus.png)

*Fonte: Noel (2011).*

---

## Referências

- CORTÊS, Andrea. *Imposto de Renda na Inglaterra: guia para declarar em 2025.* 2025. Disponível em: <https://www.eurodicas.com.br/imposto-de-renda-na-inglaterra/>. Acesso em: 6 out. 2025.
- NOEL, André. *Vida de Programador: lógica de programação.* 2011. Disponível em: <https://vidadeprogramador.com.br/2011/03/22/logica-de-programacao/>. Acesso em: 19 mar. 2021.

## Como citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. **Exercícios: Expressões Booleanas e Estrutura Condicional *if-else*.** Guarapuava: Universidade Tecnológica Federal do Paraná, 2025. 4 p. Material didático da disciplina de Fundamentos de Programação.
