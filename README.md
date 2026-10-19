# Fundamentos de Programação

Resoluções das atividades da disciplina de Fundamentos de Programação do curso de Tecnologia em Sistemas para Internet (TSI) da UTFPR, feitas em TypeScript.

## Como rodar um exercício

Na primeira vez, instale as dependências:

```bash
npm install
```

Depois, rode o arquivo do exercício:

```bash
npx tsx 02-lista1-calculos/contaGotas.ts
```

Nos exercícios de orientação a objetos, rode o `index.ts` da pasta:

```bash
npx tsx 06-poo-lista/exerciseProductLabel/index.ts
```

## Pastas

| Pasta | Conteúdo |
| --- | --- |
| `01-introducao` | Primeiros exemplos (`adicao.ts`, `Greet.ts`) |
| `02-lista1-calculos` | Lista 1 de exercícios: cálculos com entrada do teclado |
| `03-lista2-calculos` | Lista 2 de exercícios e o estudo dos métodos `Math` |
| `04-simulado-prova` | Exercícios do simulado de prova |
| `05-poo-exemplos` | Exemplos de aula de POO: as versões da classe `Produto` e o `Dosador` |
| `06-poo-lista` | Lista de exercícios de POO e as respostas de conceitos (`conceitos.md`) |
| `07-if-else` | Lista D2: expressões booleanas e `if-else` |

Cada pasta de lista tem um `lista-exercicios.md` com os enunciados transcritos do PDF, um índice e, em cada exercício, o objetivo, os conceitos, as entradas e saídas e perguntas para guiar a resolução (sem a resposta).

## Como adicionar um exercício novo

- Exercícios de um arquivo só ficam direto na pasta da lista, com nome em camelCase (ex.: `mediaPonderada.ts`).
- Cada exercício com classes fica numa pasta própria `exerciseNomeEmIngles/` (ex.: `exerciseProductLabel/`), com o `index.ts` e um arquivo por classe (ex.: `Produto.ts`).
- Uma lista nova ganha uma pasta nova com o próximo número (ex.: `07-...`).
