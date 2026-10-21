# Simulado de prova 2

Exercícios que o professor passou como simulado para a prova (aula de 21/10/2026). Transcrição do slide, com os enunciados originais das listas.

## Índice

| # | Exercício | Pasta |
| --- | --- | --- |
| 1 | Imposto de Renda (lista Expressões Booleanas e if-else, Ex. 8) | [`exerciseIncomeTax/`](exerciseIncomeTax/) |
| 2 | Números romanos até 100 (lista Estruturas Condicionais, Ex. 6) | [`exerciseRomanNumeralsToHundred/`](exerciseRomanNumeralsToHundred/) |
| 3 | Tempo de um evento | [`exerciseEventTime/`](exerciseEventTime/) |

## Slide do professor

> FAZER OS SEGUINTES EXERCÍCIOS COMO SIMULADO
>
> - Lista: Expressões Booleanas e Estrutura Condicional if-else
>   - Exercício 8: Imposto de Renda
>   - Depois de feito, revisar diante dos slides:
>     - Uso eficiente do return.
>     - Princípio da responsabilidade única
> - Lista: Estruturas Condicionais
>   - Exercício 6: Números romanos até 100
> - Tempo de um evento
>   - (a) Hora: 16h, 2h = 10h
>   - (b) Hora e minuto: 7h08, 9h10 = 2h02
>   - (c) Hora, minuto e segundo

---

## 1. Imposto de Renda

Fonte: lista *Exercícios: Expressões Booleanas e Estrutura Condicional if-else*, Exercício 8 (também em [`../07-if-else/lista-exercicios.md`](../07-if-else/lista-exercicios.md)).

IMPOSTO DE RENDA – As regras do IRPF do Brasil estão em constante debate e alteração. Sempre existem detalhes que adicionam complexidade ao cálculo do imposto devido. Uma forma para começar a entender (e implementar!) sobre o assunto pode ser modelar o imposto de países com regras mais simples. A Inglaterra, por exemplo, utiliza quatro faixas de alíquotas, que variam conforme o rendimento anual do contribuinte (CORTÊS, 2025), sendo:

| Faixa | Rendimentos Tributáveis | Taxa de Imposto |
| --- | --- | --- |
| Personal Allowance | Até £12.570 | 0% |
| Basic rate | De £12.571 a £50.270 | 20% |
| Higher rate | De £50.271 a £125.140 | 40% |
| Additional rate | Acima de £125.140 | 45% |

Conforme a tabela, uma pessoa com ganho anual de £100 mil pagará 40% de imposto de renda. Entretanto, os primeiros £12.570 de qualquer pessoa são isentos de imposto. Assim, o cálculo para uma pessoa solteira que tenha renda anual bruta de £18,2 mil e não recebe subsídios especiais será feito desta forma:

| | |
| --- | --- |
| Rendimento tributável anual total | £18.200 |
| Personal Allowance | (-) £12.570 |
| Valor da renda tributável | £5.630 |
| Cálculo da obrigação fiscal | £5.630 x 20% |
| Imposto devido | £1.124,20 |

Com base nessas regras, implemente uma classe para a qual seja informada a base de cálculo (anual) de um contribuinte. A classe deve prover métodos para retornar a alíquota e o valor do imposto devido. Revise a resolução diante do princípio da responsabilidade única.


**Depois de feito, revisar diante dos slides:**

- Uso eficiente do `return`.
- Princípio da responsabilidade única.

## 2. Números romanos até 100

Fonte: lista *Exercícios: Estruturas Condicionais*, Exercício 6 (também em [`../08-estruturas-condicionais/lista-exercicios.md`](../08-estruturas-condicionais/lista-exercicios.md)). O Exercício 6 amplia o 5, por isso os dois vão abaixo.

> **Importante (da lista):** Procure escolher a estrutura condicional mais adequada ao problema (e à resolução), entre o if-else e o switch-case.

**Exercício 5 (base):** Modele e implemente uma classe que resolva o problema de transformar um número, entre 1 e 10, em algarismos romanos. Caso o número fornecido esteja fora desse intervalo, retorne a mensagem: “Fora do intervalo”.

**Exercício 6:** Amplie solução anterior para atender a uma escala de 1 a 100. Considere que avaliar cada um dos 101 casos possíveis não consiste em uma boa solução.

## 3. Tempo de um evento

Enunciado do slide (sem texto extra do professor): calcular quanto tempo durou um evento, a partir do horário de início e do horário de fim.

**(a) Hora**

```
16h
2h
= 10h
```

**(b) Hora e minuto**

```
7h08
9h10
= 2h02
```

**(c) Hora, minuto e segundo**

(sem exemplo no slide)

## Referências

CORTÊS, Andrea. Imposto de Renda na Inglaterra: guia para declarar em 2025. 2025. Disponível em: https://www.eurodicas.com.br/imposto-de-renda-na-inglaterra/. Acesso em: 6 out. 2025.

MASCHIO, Eleandro. Exercícios: Estruturas Condicionais. Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
