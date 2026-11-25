# Aula: Matrizes (unidimensionais e bidimensionais)

> Fundamentos de Programação, TSI, UTFPR. Escrita no estilo das aulas do professor Maschio, para preparar as listas **Matrizes Unidimensionais (1)**, **(2)** e **Matrizes Bidimensionais**.
>
> Combinado: os exemplos aqui são **novos e curtos**, feitos só para ilustrar o conceito. Nenhum deles é a resposta de um exercício das listas. Onde um conceito encosta num exercício, a aula para na pergunta e deixa o caminho para você.

---

## 0. Antes de tudo: o vocabulário do professor

O professor chama de **matriz unidimensional** o que muita gente (e a documentação do TypeScript) chama de **array** ou **vetor**. E chama de **matriz bidimensional** o que é, na prática, um **array de arrays**.

| Nome na aula | Nome comum | Tipo em TypeScript |
|---|---|---|
| matriz unidimensional | array, vetor, lista | `number[]`, `string[]` |
| matriz bidimensional | matriz, tabela, array de arrays | `number[][]` |

Quando a lista disser "o retorno deve ser `number[]`", ela está pedindo uma matriz unidimensional. Quando disser `number[][]`, uma bidimensional.

---

## 1. O problema que a matriz resolve

Imagine que você precisa guardar a temperatura de cada dia da semana. Sem matriz:

```ts
let tempSeg: number = 21;
let tempTer: number = 19;
let tempQua: number = 23;
// ... mais 4 variáveis
```

Agora responda: como você faria um `for` que passa por todas elas? **Não dá.** Cada variável tem um nome diferente, e o `for` não sabe "trocar de nome". E se fossem 365 dias?

A matriz resolve isso dando **um nome só** para o conjunto e um **número (índice)** para cada posição:

```ts
let temperaturas: number[] = [21, 19, 23, 25, 22, 18, 20];
```

Agora "a temperatura do 3º dia" é `temperaturas[2]`, e o número entre colchetes **pode ser uma variável**. É isso que permite usar repetição. Guarde esta ideia, porque ela é o coração da aula inteira:

> **Matriz + índice variável + laço de repetição = processar muitos dados com pouco código.**

**Pergunte-se:** na lista E4 você fez `fibonacci()`, que devolvia *um* termo. Por que a versão `serieDeFibonacci()` da lista de matrizes precisa de uma matriz no retorno? O que um `number` sozinho não consegue representar?

---

## 2. Declaração e criação

```ts
let notas: number[] = [7.5, 8, 6];        // já com valores
let nomes: string[] = ["Ana", "Bruno"];   // de texto
let vazia: number[] = [];                 // vazia, para ir enchendo
```

O tipo `number[]` se lê "matriz de números". Ele garante que só entram números ali: tentar `notas[0] = "dez"` dá erro de compilação. Isso é uma proteção, não um incômodo.

### Matriz como atributo de classe

Como as listas pedem tudo em classes, a matriz normalmente vira **atributo**, e é preparada no **construtor**:

```ts
export default class Estante {
  private livros: string[];

  constructor() {
    this.livros = [];   // a estante começa vazia
  }
}
```

Por que criar no construtor? Porque o construtor é o lugar onde o objeto "nasce pronto para uso". Se você esquecer de inicializar, `this.livros` fica `undefined` e o primeiro `push` quebra o programa.

---

## 3. Índices: onde quase todo erro acontece

```
temperaturas:   [ 21 | 19 | 23 | 25 | 22 | 18 | 20 ]
índice:            0    1    2    3    4    5    6
```

Três regras que você precisa saber de cor:

1. **O primeiro índice é 0**, não 1.
2. **O último índice é `length - 1`**. Aqui, `length` é 7 e o último índice é 6.
3. Ler um índice que não existe (`temperaturas[7]`) **não dá erro** em TypeScript: devolve `undefined`. Isso é perigoso, porque o erro aparece depois, longe da causa.

### Lendo o código do próprio professor

Na resolução do professor para `serieDeFibonacci()` aparece esta linha:

```ts
for (let i = 3; i <= this.n; i++)
  termos[i-1] = termos[i-2] + termos[i-3];
```

Por que `i-1`, `i-2`, `i-3` e não `i`, `i-1`, `i-2`? Porque ele escolheu que `i` conta **o termo da série** (3º termo, 4º termo...) do jeito humano, começando em 1. Como a matriz começa em 0, o "3º termo" mora no índice 2, ou seja, `i-1`. Os dois anteriores moram em `i-2` e `i-3`.

**Pergunte-se:** reescreva mentalmente esse laço começando com `let i = 2` e usando `termos[i]`. Que expressões ficariam no lugar de `i-2` e `i-3`? E qual seria a condição de parada no lugar de `i <= this.n`? (Faça o teste de mesa com n = 5 para conferir.)

---

## 4. Percorrendo uma matriz

Existem duas formas principais, e cada uma serve para uma coisa.

### 4.1 `for` clássico, quando você precisa do índice

```ts
let precos: number[] = [10, 25, 8];

for (let i = 0; i < precos.length; i++)
  console.log(`Item ${i + 1}: R$ ${precos[i]}`);
```

Repare nos detalhes:

- `i = 0` porque o primeiro índice é 0.
- `i < precos.length` (menor, **não** menor ou igual). Com `<=`, o laço tentaria ler `precos[3]`, que não existe.
- `precos.length` em vez de `3` escrito à mão: se a matriz crescer, o laço continua certo.
- `i + 1` só na hora de **mostrar** para o usuário, que conta a partir de 1.

### 4.2 `for...of`, quando você só precisa do valor

```ts
for (let preco of precos)
  console.log(preco);
```

Mais limpo, sem chance de errar o índice. Mas você **não sabe em que posição está**, e **não consegue alterar** a matriz por ele (mudar `preco` muda só a variável local, não a posição).

### Como escolher

| Preciso de... | Use |
|---|---|
| só ler cada valor | `for...of` |
| saber a posição (para numerar, devolver o índice, comparar vizinhos) | `for` clássico |
| alterar os valores dentro da matriz | `for` clássico |
| percorrer só uma parte (ex.: do meio em diante) | `for` clássico |

**Pergunte-se:** num método que devolve uma "listagem numerada", qual dos dois você usaria? E se a numeração começasse em 1, onde entraria o `+ 1`?

---

## 5. Padrões que aparecem em toda lista

Quase todo método com matriz é uma combinação de quatro padrões. Se você reconhecer o padrão, metade do exercício está feita. Os exemplos abaixo usam situações **diferentes** das listas, de propósito.

### 5.1 Acumulador

Uma variável que **começa num valor neutro** e vai sendo atualizada a cada volta.

```ts
// Junta todas as palavras numa frase
let palavras: string[] = ["bom", "dia", "turma"];
let frase: string = "";            // neutro da concatenação
for (let p of palavras)
  frase += p + " ";
```

Por que começar com `""`? Porque juntar `""` com qualquer coisa não altera nada. **Pergunte-se:** qual seria o valor neutro se o acumulador fosse uma **soma**? E se fosse um **produto**? O que acontece se você começar o produto com 0?

### 5.2 Contador

Um caso especial de acumulador que soma 1 quando uma condição é verdadeira.

```ts
// Quantos dias fizeram frio (abaixo de 15 °C)?
let dias: number[] = [12, 18, 9, 22, 14];
let frios: number = 0;
for (let t of dias)
  if (t < 15)
    frios++;
```

### 5.3 Busca

Percorre até achar o que procura. O ponto importante é **o que fazer quando acha** e **o que fazer quando não acha**.

```ts
// Existe alguma senha vazia?
public temSenhaVazia(senhas: string[]): boolean {
  for (let s of senhas)
    if (s == "")
      return true;   // achou: não precisa olhar o resto

  return false;      // só chega aqui se percorreu tudo sem achar
}
```

Repare no `return false` **fora** do laço. Esse é um dos erros mais comuns da disciplina:

```ts
// ERRADO
for (let s of senhas)
  if (s == "")
    return true;
  else
    return false;   // devolve na primeira volta, sem olhar as outras!
```

**Pergunte-se:** com a matriz `["abc", "", "x"]`, o que a versão errada devolve? Faça o teste de mesa. Esse é o tipo de "uso eficiente do return" que o professor comenta nos slides.

### 5.4 Construir uma matriz nova (filtro / transformação)

Começa com `[]` e vai fazendo `push` do que interessa.

```ts
// Só os nomes com mais de 4 letras
let nomes: string[] = ["Ana", "Roberto", "Lia", "Camila"];
let longos: string[] = [];
for (let nome of nomes)
  if (nome.length > 4)
    longos.push(nome);
// longos = ["Roberto", "Camila"]
```

`push` coloca no final e aumenta o `length` sozinho. A alternativa é atribuir por índice (`longos[longos.length] = nome`), que faz a mesma coisa. O professor usa as duas formas na resolução de Fibonacci (uma comentada), então ambas são aceitas.

### Valor de erro com matriz vazia

Nas listas, o professor pede: "utilize o retorno de matriz unidimensional vazia, ou seja `[]`, como indicativo de erro". A ideia é que **o tipo do retorno não muda** (continua `number[]`), mas quem chamou consegue testar `resultado.length == 0` e saber que não havia o que devolver. Repare como a resolução dele trata isso **logo no início** do método, antes de qualquer laço. **Pergunte-se:** por que tratar o caso especial primeiro deixa o resto do método mais simples?

---

## 6. Matriz de objetos

Nos exercícios do Jardim de Infância e dos Carros Superesportivos, cada posição guarda mais de uma informação (nome do modelo **e** velocidade). Há dois caminhos:

**Caminho A: duas matrizes paralelas**, onde o mesmo índice liga as duas.

```ts
let produtos: string[] = ["Caneta", "Caderno"];
let estoque: number[]  = [120, 35];
// produtos[1] tem estoque[1] unidades
```

**Caminho B: uma matriz de objetos de uma classe**, que é o caminho mais orientado a objetos.

```ts
let livros: Livro[] = [];
livros.push(new Livro("Dom Casmurro", 256));

for (let livro of livros)
  console.log(livro.getTitulo());
```

O tipo `Livro[]` funciona igual a `number[]`, só que cada posição guarda um objeto e você usa os métodos dele.

**Pergunte-se:** no caminho A, o que acontece se alguém fizer `push` em uma matriz e esquecer a outra? O caminho B tem esse risco? Isso ajuda a decidir qual modelar.

---

## 7. Matrizes bidimensionais

### 7.1 O conceito: matriz de matrizes

Uma matriz bidimensional é uma matriz **cujas posições são outras matrizes**. Cada matriz interna é uma **linha**.

```ts
let assentos: number[][] = [
  [1, 0, 1, 1],   // linha 0
  [0, 0, 1, 0],   // linha 1
  [1, 1, 1, 0]    // linha 2
];
```

Para chegar num elemento são **dois índices**: primeiro a linha, depois a coluna.

```ts
assentos[1][2]   // linha 1, coluna 2 → 1
assentos[1]      // a linha 1 inteira → [0, 0, 1, 0]
```

Leia `assentos[1][2]` em duas etapas: `assentos[1]` dá a linha; daquela linha, `[2]` dá a coluna. Entender isso evita muita confusão.

### 7.2 Dimensões

```ts
assentos.length      // número de LINHAS → 3
assentos[0].length   // número de COLUNAS (tamanho da linha 0) → 4
```

**Pergunte-se:** por que o número de colunas é `assentos[0].length` e não `assentos.length`? E por que é seguro usar a linha 0 para isso? (Dica: em que situação a linha 0 não existiria?)

### 7.3 Criando uma matriz com tamanho decidido em tempo de execução

Na lista bidimensional, o construtor recebe `l` e `c`. Então você não pode escrever a matriz literal como acima: precisa **construí-la** com laços. O raciocínio em passos (sem o código pronto, que é parte do exercício):

1. Comece com a matriz externa vazia.
2. Para cada linha que você quer criar: crie uma **linha nova vazia**.
3. Encha essa linha com `c` valores.
4. Coloque a linha pronta dentro da matriz externa.

O passo 2 é o que todo mundo esquece. Veja a armadilha:

```ts
// ARMADILHA: todas as linhas são a MESMA matriz
let linha: number[] = [0, 0, 0];
let tab: number[][] = [linha, linha, linha];
tab[0][0] = 9;
console.log(tab);   // [[9,0,0],[9,0,0],[9,0,0]]  ← mudou nas três!
```

Por que mudou nas três? Porque matriz em TypeScript é guardada **por referência**: `tab` tem três "setas" apontando para a mesma linha. Por isso cada linha precisa ser criada **dentro** do laço, uma nova a cada volta. O mesmo acontece com `new Array(3).fill([])`, que também repete a mesma referência.

### 7.4 Percorrendo: laços aninhados

Para visitar todos os elementos, um laço passa pelas linhas e, **dentro dele**, outro passa pelas colunas:

```ts
for (let i = 0; i < assentos.length; i++) {          // linhas
  for (let j = 0; j < assentos[i].length; j++) {     // colunas
    // aqui você está em assentos[i][j]
  }
}
```

Convenção: `i` para linha, `j` para coluna. Siga sempre a mesma, porque trocar as duas sem querer é um erro difícil de enxergar.

Teste de mesa da ordem de visita numa matriz 2×3:

| volta | i | j | visita |
|---|---|---|---|
| 1 | 0 | 0 | [0][0] |
| 2 | 0 | 1 | [0][1] |
| 3 | 0 | 2 | [0][2] |
| 4 | 1 | 0 | [1][0] |
| 5 | 1 | 1 | [1][1] |
| 6 | 1 | 2 | [1][2] |

O laço de dentro dá a volta completa **para cada** volta do laço de fora. Por isso o total de visitas é linhas × colunas.

**Pergunte-se:** se você trocar a ordem dos laços (o de fora percorre colunas, o de dentro percorre linhas), os mesmos elementos são visitados? Em que ordem? Em que situação isso faria diferença no resultado?

### 7.5 Mostrando a matriz como texto (e o `toString()`)

Para montar uma string com a matriz, o padrão é o **acumulador de texto** (seção 5.1) dentro dos laços aninhados, com uma quebra de linha `"\n"` **ao final de cada linha**.

**Pergunte-se:** o `"\n"` vai dentro do laço de `j` ou fora dele (mas dentro do de `i`)? O que aparece na tela em cada caso?

Sobre o `toString()`, o professor pede que você pesquise. Uma pista para a pesquisa: todo objeto em TypeScript/JavaScript já tem um `toString()` herdado, que devolve algo pouco útil como `"[object Object]"`. Quando você escreve o seu na classe, o seu **substitui** o herdado. Teste no Deno: faça `console.log("" + objeto)` antes e depois de criar o método e compare.

---

## 8. Mapa de posições: a ferramenta para diagonais e triângulos

Boa parte da lista bidimensional (diagonais, triângulos, transposta) não é sobre laço: é sobre **descobrir a relação entre `i` e `j`**. O jeito de professor de fazer isso é desenhar o mapa de índices e olhar.

Matriz quadrada 4×4, cada célula mostra `i,j`:

```
        j=0   j=1   j=2   j=3
i=0    0,0   0,1   0,2   0,3
i=1    1,0   1,1   1,2   1,3
i=2    2,0   2,1   2,2   2,3
i=3    3,0   3,1   3,2   3,3
```

A **diagonal principal** vai do canto superior esquerdo ao inferior direito. A **secundária**, do superior direito ao inferior esquerdo.

Exercício de observação (não é da lista, é para treinar o olho):

1. Pinte no papel as células da diagonal principal. Escreva os pares `i,j` delas. Que relação entre `i` e `j` todas elas têm, e que nenhuma outra célula tem?
2. Agora as células **acima** dessa diagonal. Que comparação entre `i` e `j` vale para todas elas?
3. Faça o mesmo com a diagonal secundária. Dica: some `i + j` em cada célula dela. O que aparece? Como esse número se relaciona com o tamanho 4?
4. A lista diz "evite passos desnecessários e observe que é fácil incorrer neles" na diagonal. Se você já sabe a relação entre `i` e `j` na diagonal, você **precisa** de dois laços para percorrê-la? Quantas células você visitaria com dois laços numa matriz 100×100, e quantas realmente pertencem à diagonal?

Essa pergunta 4 é exatamente o tipo de reflexão que o professor quer ver. Pense nela antes de codar.

### Matriz de mesma ordem

Quando a lista diz "matriz de **mesma ordem**", quer dizer **mesmo número de linhas e colunas** que a original. Se você precisa devolver uma matriz nova assim, ela tem que ser criada (seção 7.3) com as mesmas dimensões, e não pode ser a própria matriz do atributo (lembra da referência?).

**Pergunte-se:** se um método deve "retornar" uma matriz nova e você altera `this.matriz` e devolve ela, o que acontece com o objeto depois? Compare com o exercício que diz "**altera** a matriz" e o que diz "**retorna** o resultado". O verbo do enunciado decide.

### Operações entre duas matrizes

Quando um método recebe outra matriz como parâmetro (soma, multiplicação), sempre se pergunte primeiro: **as dimensões permitem a operação?** Na matemática, a soma exige ordens iguais, e a multiplicação exige uma relação específica entre colunas de uma e linhas da outra (revise qual é). O enunciado da multiplicação pede explicitamente que você **proponha** um tratamento de erro, e você já viu uma estratégia que o professor usa nesta mesma disciplina: devolver uma matriz vazia.

---

## 9. Erros típicos e o porquê de cada um

| Erro | Sintoma | Por que acontece |
|---|---|---|
| `i <= m.length` | aparece `undefined` ou `NaN` no fim | o último índice é `length - 1` |
| começar em `i = 1` | o primeiro elemento some | o primeiro índice é 0 |
| `return false` dentro do laço com `else` | a busca só olha o primeiro elemento | o `return` encerra o método na primeira volta |
| acumulador declarado **dentro** do laço | o resultado é só o último valor | a variável é recriada a cada volta |
| esquecer de inicializar a matriz no construtor | erro ao fazer `push` em `undefined` | atributo declarado não é atributo criado |
| reaproveitar a mesma linha em todas as linhas | alterar uma posição altera a coluna inteira | matrizes são referências |
| trocar `i` e `j` | resultado "espelhado" ou erro em matriz não quadrada | `m[i][j]` é linha, coluna, nessa ordem |
| usar `m.length` como número de colunas | funciona em quadradas, quebra nas retangulares | `m.length` conta linhas |
| alterar o valor no `for...of` | a matriz não muda | a variável do `for...of` é uma cópia do valor |
| alterar `this.matriz` quando o método deveria só retornar | o objeto fica diferente depois da chamada | o enunciado pedia uma matriz nova |

Repare que **testar com matrizes não quadradas** (por exemplo 2×3) pega metade desses erros. Matriz quadrada esconde troca de `i` e `j`.

---

## 10. Como testar (do jeito que o professor testa)

O professor usa `deno test` com `expect(...).toEqual(...)`, como no `InteiroMatematico_test.ts`. Repare que ele sempre testa os **casos de borda primeiro**: n = 0, n = 1, n = 2. Faça o mesmo com matrizes:

- matriz vazia ou de tamanho 0;
- matriz com um elemento só;
- matriz 1×N e N×1 (uma linha só, uma coluna só);
- matriz não quadrada;
- o valor procurado na primeira posição, na última, e ausente.

Para a matriz aleatória da lista bidimensional, o teste com valores aleatórios é difícil de prever. **Pergunte-se:** como você poderia testar `multiplicaPor()` ou `transposta()` se não sabe quais números o construtor sorteou? (Dica: o teste pode comparar a matriz antes e depois, em vez de comparar com números fixos.)

---

## 11. Checklist antes de entregar um método com matriz

1. O tipo de retorno bate com o enunciado (`number`, `boolean`, `string`, `number[]`, `number[][]`)?
2. O verbo do enunciado é "altera" ou "retorna"? Meu método faz o que o verbo diz?
3. Os laços vão de `0` até `< length`?
4. Em matriz bidimensional: `i` é linha, `j` é coluna, e uso `m[i].length` para colunas?
5. Acumuladores e contadores estão declarados **antes** do laço, com o valor neutro certo?
6. Em buscas, o "não achei" está **depois** do laço?
7. Tratei o caso especial (vazio, zero, dimensões incompatíveis) logo no início?
8. Visito só as células necessárias, ou estou percorrendo a matriz inteira à toa?
9. Fiz teste de mesa com uma matriz pequena e **não quadrada**?

---

## Para fixar: perguntas de revisão

Responda sem olhar o texto. Se travar, volte na seção indicada.

1. Qual é o índice do último elemento de uma matriz com 12 posições? (seção 3)
2. Por que `for...of` não serve para dobrar todos os valores de uma matriz? (seção 4)
3. Qual o valor inicial de um acumulador de soma, de produto e de texto? (seção 5.1)
4. Numa matriz `m` de 3 linhas e 5 colunas, quanto vale `m.length`? E `m[2].length`? (seção 7.2)
5. Por que criar a linha **fora** do laço de linhas gera uma matriz com todas as linhas iguais? (seção 7.3)
6. Quantas vezes o corpo de dois laços aninhados executa numa matriz 4×6? (seção 7.4)
7. Que relação entre `i` e `j` define as células acima da diagonal principal? (seção 8, descubra no mapa)
8. Qual a diferença entre um método que **altera** a matriz e um que **retorna** uma matriz? (seção 8)

Quando quiser, me mande sua tentativa de qualquer exercício das listas que eu reviso, aponto o que está errado e explico o porquê. Se quiser o gabarito destas perguntas de revisão, é só pedir.
