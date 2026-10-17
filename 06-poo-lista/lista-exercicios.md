# Lista de POO · Programação Orientada a Objetos

**Exercícios: Programação Orientada a Objetos**
Universidade Tecnológica Federal do Paraná · Campus Guarapuava · Sistemas para Internet
Fundamentos de Programação · Professor Eleandro Maschio · Material da aula C3 (`prog-aula-C3 - Exercícios.pdf`)

> **Como ler este arquivo:** em cada exercício, o bloco **Enunciado** é a transcrição fiel do PDF. O bloco **Contexto** foi acrescentado para estudo: o que o exercício quer ensinar, os conceitos envolvidos, o que entra e o que sai, e perguntas para guiar o raciocínio. O contexto não traz a resposta: as perguntas são para você responder antes de programar.

> **Importante (do PDF):** Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de saída deve ser utilizada nas classes de modelagem.

## Índice

| Nº | Exercício | Conceitos principais | Sua resolução |
| --- | --- | --- | --- |
| 1 | [Etiqueta de produto](#exercício-1--etiqueta-de-produto) | atributos, método que retorna `string`, formatação | [`exercicio01/`](exercicio01/) |
| 2 | [Automóvel e tanque](#exercício-2--automóvel-e-tanque) | `readonly`, estado inicial, dois métodos de abastecer, `toString` | [`exercicio02/`](exercicio02/) |
| 3 | [Cumprimento entre pessoas](#exercício-3--cumprimento-entre-pessoas) | objeto como parâmetro, sobrecarga / parâmetro opcional | [`exercicio03/`](exercicio03/) |
| 4 | [Ponteiros do relógio](#exercício-4--ponteiros-do-relógio) | métodos de cálculo, proporção em graus | [`exercicio04/`](exercicio04/) |
| 5 | [Dado de n faces](#exercício-5--dado-de-n-faces) | atributo imutável, `Math.random`, estado da última rolagem | ainda não está no repositório |
| 6 | [Densidade populacional](#exercício-6--densidade-populacional) | abstração: escolher atributos e métodos | ainda não está no repositório |
| 7 | [Preço de venda com taxa](#exercício-7--preço-de-venda-com-taxa) | modelar um problema de porcentagem "ao contrário" | ainda não está no repositório |

**Base comum da lista:** a partir daqui, o programa se divide em duas partes. A **classe** modela o objeto (atributos e métodos) e **não** usa `console.log`: ela devolve valores com `return`. O **`index.ts`** cria os objetos, chama os métodos e mostra os resultados. Essa separação é o que o professor chama de "interação com a interface dos objetos".

**Outros arquivos da pasta:** `conceitos.md` traz as suas respostas às perguntas de conceitos de POO (paradigma, objeto, classe, atributo, método, instância e estado). Elas não fazem parte deste PDF.

---

## Exercício 1 · Etiqueta de produto

### Enunciado

> Modele e implemente um objeto que retorne uma cadeia de caracteres com a etiqueta eletrônica de um produto, contendo o valor do quilo, para ser fixada em prateleiras de um supermercado. Essa informação é útil a fim de que o consumidor possa comparar preços, quando as embalagens dos produtos possuem pesos diferentes. São atributos do produto: descrição, peso em quilos e preço.
>
> Exemplos de etiquetas geradas:
>
> ```text
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> Barra de Chocolate Diamante Negro
> Peso: 0,090 kg
> Preço: R$ 5,99
> Preço do quilo: R$ 66,56
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> Ovo de Páscoa Diamante Negro
> Peso: 0,176 kg
> Preço: R$ 29,90
> Preço do quilo: R$ 169,89
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> ```
>
> Lembre-se que a quebra de linha em uma cadeia de caracteres é feita por meio da sequência de escape `"\n"` no texto, assim:
>
> ```typescript
> texto: string = "Pula uma linha\n";
> outroTexto: string = texto + "Pula mais duas linhas\n\n\";
> ```
>
> Com essa abordagem, de retornar uma cadeia de caracteres ao invés de utilizar uma instrução de saída, reforçam-se os princípios da Programação Orientada a Objetos. Dessa forma, ocorre a divisão de responsabilidades, onde a classe em questão se concentra apenas em modelar o objeto.

*Nota de transcrição:* a barra invertida antes das aspas no final de `"Pula mais duas linhas\n\n\"` está assim no PDF e parece erro de digitação: do jeito que está, o TypeScript entende `\"` como uma aspa dentro do texto e a string não fecha.

### Contexto

- **Objetivo de aprendizagem:** criar a primeira classe com atributos e um método que **retorna** um texto pronto, em vez de imprimir.
- **Conceitos:** classe, atributos, construtor, método com retorno `string`, `\n`, formatação de números (`toFixed`, vírgula decimal).
- **Entrada:** descrição, peso em kg e preço (passados ao criar o objeto, no `index.ts`).
- **Saída:** um método que devolve a etiqueta completa, no formato dos exemplos; o `index.ts` é quem mostra.
- **Perguntas para guiar:**
  - O "preço do quilo" é um atributo ou algo calculado a partir dos outros atributos? Por que guardar ou não guardar esse valor?
  - Como sair de `0.09` para `0,090`? Que método fixa o número de casas e que método troca o ponto pela vírgula?
  - Se a classe não pode usar `console.log`, como o texto da etiqueta chega até a tela?
  - Monte os dois produtos do exemplo no `index.ts`. As etiquetas saem idênticas às do enunciado, inclusive o preço do quilo?

---

## Exercício 2 · Automóvel e tanque

### Enunciado

> Modele um objeto que implemente um automóvel, com abstração focada nas informações básicas de abastecimento. Cada automóvel tem um tanque de combustível com determinada capacidade em litros. Essa capacidade não sofre alterações ao longo da existência do modelo.
>
> O tanque de combustível inicia vazio e há duas formas de abastecer o veículo. Na primeira forma, o tanque é completado até o máximo da capacidade. Na outra, deve-se informar quantos litros de combustível serão colocados (obviamente, não excedendo a capacidade do tanque).
>
> A representação textual do objeto fornece uma cadeia de caracteres que contém: a quantidade de combustível, a capacidade do tanque e, percentualmente, quanto o tanque está cheio.

### Contexto

- **Objetivo de aprendizagem:** modelar o **estado** de um objeto que muda com o tempo e proteger uma informação que não pode mudar.
- **Conceitos:** atributo `readonly` (ou `private` sem `set`), estado inicial definido no construtor, métodos que alteram o estado, limite de valores, `toString()`.
- **Entrada:** capacidade do tanque (na criação); litros a abastecer (num dos métodos).
- **Saída:** a representação textual com combustível atual, capacidade e percentual cheio.
- **Perguntas para guiar:**
  - Quais atributos o automóvel precisa? Qual deles começa sempre com o mesmo valor, e qual vem de fora?
  - Como garantir em TypeScript que a capacidade não seja alterada depois que o objeto existe?
  - Se o tanque tem 50 L, já está com 40 L e alguém pede para colocar 20 L, o que o seu método faz? O enunciado diz o que deve acontecer?
  - Os dois jeitos de abastecer precisam de nomes diferentes ou podem ser o mesmo método? O que o TypeScript permite?
  - Por que o método se chama `toString` e não `mostrar`? Experimente usar o objeto dentro de um texto com `+` e veja o que aparece.

---

## Exercício 3 · Cumprimento entre pessoas

### Enunciado

> Modele a interação de pessoas cumprimentando-se. Cada pessoa é representada unicamente pelo primeiro nome. Em termos de modelagem e implementação, uma pessoa pode cumprimentar outra de três maneiras: sem saber o nome; sabendo apenas nome (passado como parâmetro); ou conhecendo a outra pessoa (tendo outro objeto passado como parâmetro). No primeiro caso, o cumprimento será apenas "Olá!", enquanto os outros dois incluem o nome da outra pessoa no cumprimento: "Olá, Tony Stark!".

### Contexto

- **Objetivo de aprendizagem:** fazer dois objetos interagirem, passando um objeto como parâmetro para o método de outro.
- **Conceitos:** objeto como parâmetro, tipos `string` e tipo da própria classe, parâmetro opcional, sobrecarga de método ou tipo união (`string | Pessoa`).
- **Entrada:** o primeiro nome de cada pessoa (na criação); nada, um nome ou outra pessoa (no cumprimento).
- **Saída:** o texto do cumprimento, retornado pelo método.
- **Perguntas para guiar:**
  - Quais são os três "jeitos" de chamar o cumprimento? Escreva as três chamadas no `index.ts` antes de escrever a classe.
  - Quando você recebe outra pessoa como parâmetro, como lê o nome dela de dentro do seu método?
  - TypeScript permite três métodos com o mesmo nome e parâmetros diferentes, como em Java? Se não, que alternativas existem?
  - O exemplo diz "Tony Stark", mas a pessoa é representada só pelo primeiro nome. O que isso diz sobre o caso "sabendo apenas o nome"?

---

## Exercício 4 · Ponteiros do relógio

### Enunciado

> Considere um relógio que marca horas e minutos. Coube-lhe a tarefa de fornecer informações para uma interface gráfica de um relógio analógico. Disponha de métodos que retornem a posição de cada ponteiro do relógio, em graus. Considere doze horas como a posição inicial, ou seja, 0º. Não julgue a resolução como correta sem comparar o resultado com um relógio real.

### Contexto

- **Objetivo de aprendizagem:** modelar uma classe que fornece dados para outra parte do sistema (a "interface gráfica") e validar o modelo contra a realidade.
- **Conceitos:** atributos hora e minuto, métodos que calculam e retornam `number`, proporção (regra de três), resto da divisão.
- **Entrada:** hora e minuto.
- **Saída:** dois métodos: posição do ponteiro das horas e posição do ponteiro dos minutos, em graus.
- **Perguntas para guiar:**
  - Uma volta completa tem 360º. Quantas "marcas" o ponteiro dos minutos percorre numa volta? E o das horas?
  - Às 3h30 num relógio real, o ponteiro das horas está exatamente em cima do 3? O seu cálculo considera isso?
  - E se a hora for 15 (formato 24 h)? O ponteiro deve estar no mesmo lugar que às 3?
  - Escolha três horários (por exemplo 12h00, 3h30 e 9h45), desenhe ou olhe um relógio e compare com o que seus métodos retornam.

---

## Exercício 5 · Dado de n faces

### Enunciado

> Modele e implemente a rolagem de um dado com n faces. O número de faces deve ser informado na criação do objeto e não pode ser alterado. Ofereça métodos para rolar o dado e para observar o número da última rolagem. Para isso, pesquise como fazer a geração de números aleatórios na linguagem.

### Contexto

- **Objetivo de aprendizagem:** combinar um atributo imutável com um atributo que guarda o estado da última ação.
- **Conceitos:** `readonly`, `Math.random`, `Math.floor`, intervalo de números inteiros, separação entre "fazer" (rolar) e "consultar" (observar).
- **Entrada:** número de faces (na criação).
- **Saída:** o método de rolar e o método de observar a última rolagem.
- **Perguntas para guiar:**
  - Que valores `Math.random()` pode devolver? O 1 está incluído?
  - Como transformar esse número em um inteiro de 1 até n, sem nunca dar 0 nem n + 1?
  - O método de observar deve rolar de novo? Onde o valor da última rolagem fica guardado?
  - Antes da primeira rolagem, o que "observar" deveria retornar?
  - Role o dado muitas vezes no `index.ts`. Todos os valores de 1 a n aparecem? Algum valor fora disso aparece?

---

## Exercício 6 · Densidade populacional

### Enunciado

> Modele computacionalmente o problema de calcular a densidade populacional de uma cidade. Abstraia atributos e métodos para essa modelagem e implemente-a.

### Contexto

- **Objetivo de aprendizagem:** praticar a **abstração**: aqui o enunciado não diz quais atributos e métodos usar, você decide.
- **Conceitos:** escolha de atributos, método calculado, nomes claros, unidades de medida.
- **Entrada:** os dados que você decidir que uma cidade precisa ter para esse cálculo.
- **Saída:** a densidade populacional, retornada por um método.
- **Perguntas para guiar:**
  - O que é densidade populacional? De quais informações da cidade ela depende?
  - A densidade deve ser um atributo ou um método? O que acontece com ela se a população mudar?
  - Em que unidade a área deve estar? Como deixar isso claro no nome do atributo?
  - Que outro atributo (por exemplo, o nome da cidade) deixaria o objeto mais útil sem fugir do problema?

---

## Exercício 7 · Preço de venda com taxa

### Enunciado

> Resolva o problema de estipular o preço de venda de um produto. Considere que o vendedor sabe o quanto ele quer pelo produto, mas que o veículo de divulgação cobra uma taxa percentual sobre o valor anunciado. Com isso, determine quanto deve ser pedido pelo produto para que, mesmo com o desconto dessa taxa, ainda reste o valor inicialmente pretendido pelo vendedor.

### Contexto

- **Objetivo de aprendizagem:** perceber que "somar a porcentagem" nem sempre desfaz "descontar a porcentagem", e modelar isso numa classe.
- **Conceitos:** porcentagem, equação simples, atributos (valor pretendido e taxa), método calculado.
- **Entrada:** valor que o vendedor quer receber e taxa percentual do veículo de divulgação.
- **Saída:** preço que deve ser anunciado.
- **Perguntas para guiar:**
  - Sobre qual valor a taxa é cobrada: o pretendido ou o anunciado? Releia o enunciado.
  - Teste a ideia "pretendido + taxa%" com 100 e 10%: anuncie esse valor, desconte 10% dele e veja se sobra 100.
  - Se a taxa é cobrada sobre o anunciado, o vendedor fica com que fração do anunciado? Como escrever isso como equação?
  - Que nomes de classe e de método deixam claro o que está sendo calculado?

---

## Como citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. **Exercícios: Programação Orientada a Objetos.** Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
