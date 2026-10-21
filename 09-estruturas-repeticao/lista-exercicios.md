Universidade Tecnológica Federal do Paraná  
Campus Guarapuava  
Curso de Sistemas para Internet  
Professor Eleandro Maschio  
Fundamentos de Programação

# Exercícios: Estruturas de Repetição

## Importante

Explore diferentes estruturas de repetição para resolver um mesmo exercício: **`while`**, **`do-while`** e **`for`**. É possível usar qualquer uma das estruturas de repetição para resolver os exercícios. A qualidade da solução varia com isso.

## Exercício 1

Defina a classe **`PainelContador`**:

(a) Objetos desta classe possuem, como atributos, os limites inferior e superior (inteiros), de um intervalo fechado de contagem;  
(b) Os atributos são obrigatoriamente fornecidos ao construtor;  
(c) Métodos acessadores e modificadores dos atributos devem ser implementados;  
(d) Qualquer modificação nesses atributos precisa passar por um método privado de validação, que troca os valores caso o limite superior seja menor do que o limite inferior;  
(e) A implementação dos demais métodos é descrita na sequência;  
(f) **`PainelContador`** é uma **classe de interface**. Portanto, imprime mensagens na tela.

## Exercício 2

**`contagem()`**

Realiza a contagem, em ordem crescente, do limite inferior até o superior. Por exemplo, caso os limites sejam 1 e 10, a contagem será:

```text
1
2
3
4
5
6
7
8
9
10
```

## Exercício 3

**`contagemDecrescente()`**

Idem, mas realizando a contagem decrescente, como:

```text
10
9
8
7
6
5
4
3
2
1
```

## Exercício 4

**`contagemPares()`**

Passa apenas pelos números pares da contagem:

```text
2
4
6
8
10
```

## Exercício 5

**`contagemImpares()`**

Idem para os ímpares:

```text
1
3
5
7
9
```

## Exercício 6

**`contagemPasso()`**

Faz a contagem incrementando, a cada iteração, o valor referente ao passo. Trata-se de um inteiro passado como parâmetro ao método. Supondo que o passo fosse 3, teria-se a contagem:

```text
1
4
7
10
```

O próximo número, caso não ultrapassasse o limite superior, seria 13.

## Exercício 7

**`contagemOmitindo()`**

A contagem é realizada omitindo os múltiplos de um número inteiro passado como parâmetro ao método. Por exemplo, se o número informado fosse o 3, teria-se a contagem:

```text
1
2
*
4
5
*
7
8
*
10
```

## Como Citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. Exercícios: Estruturas de Repetição. Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
