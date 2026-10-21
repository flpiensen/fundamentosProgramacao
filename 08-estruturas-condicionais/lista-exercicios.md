Universidade Tecnológica Federal do Paraná  
Campus Guarapuava  
Curso de Sistemas para Internet  
Professor Eleandro Maschio  
Fundamentos de Programação

# Exercícios: Estruturas Condicionais

## Importante

Procure escolher a estrutura condicional mais adequada ao problema (e à resolução), entre o if-else e o switch-case.

Nas implementações, igualmente às listas anteriores, enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de saída deve ser utilizada nas classes de modelagem.

## Exercício 1

Modele e implemente uma classe que resolva o problema de transformar a nota de um aluno, numérica e na escala de 0 a 10, em um conceito alfabético.

Use a seguinte equivalência:

- A: maior ou igual a 9,0;
- B: entre 8,0 e 9,0;
- C: entre 7,0 e 8,0;
- D: entre 6,0 e 7,0;
- E: menor do que 6,0.

## Exercício 2

Implemente um método que determine se três valores reais formam um triângulo. Considere que, para formar um triângulo, soma dos dois lados menores deve ultrapassar o lado maior.

## Exercício 3

Resolva o problema de calcular o peso de uma pessoa, caso estivesse em outro planeta do Sistema Solar. O método deve receber um número inteiro que representa o planeta escolhido (conforme ordem abaixo). O retorno é o peso, em quilos, da pessoa nesse planeta.

Um quilo na Terra equivale, em outros planetas, a:

1. Mercúrio: 0,37 kg;
2. Vênus: 0,88 kg;
3. Terra: 1,00 kg;
4. Marte: 0,38 kg;
5. Júpiter: 2,64 kg;
6. Saturno: 1,15 kg;
7. Urano: 1,17 kg;
8. Netuno: 1,18 kg;
9. Plutão: 0,11 kg (como foi rebaixado a planeta-anão, é facultativo).

Assim, uma pessoa de 60kg, por exemplo, pesaria 22,2 kg em Mercúrio. Isso é igual a 60 kg x 0,37. Caso um planeta inválido seja escolhido, retorne o próprio peso da pessoa na Terra.

## Exercício 4

Modele e implemente uma calculadora que retorne quantos caracteres uma pessoa digita por minuto. A quantidade de caracteres e o tempo transcorrido em segundos, ambos inteiros, são atributos da classe. Se uma pessoa demora 120 segundos para digitar 300 caracteres, a velocidade de digitação é de 150 caracteres por minuto.

Ofereça dois construtores, sendo um para inicializar os atributos com zero e outro para fornecer os respectivos valores. Realize um teste, pedindo para que seja retornada a velocidade de digitação para um objeto recém criado, considerando o construtor sem parâmetros. Altere a implementação para que o retorno, nesse caso, seja zero.

## Exercício 5

Modele e implemente uma classe que resolva o problema de transformar um número, entre 1 e 10, em algarismos romanos. Caso o número fornecido esteja fora desse intervalo, retorne a mensagem: “Fora do intervalo”.

## Exercício 6

Amplie solução anterior para atender a uma escala de 1 a 100. Considere que avaliar cada um dos 101 casos possíveis não consiste em uma boa solução.

## Exercício 7

Implemente um trecho de código que ordene três variáveis inteiras, denominadas a, b e c, de modo que, ao final: a ≤ b ≤ c. Três estruturas condicionais if (todas sem else) são suficientes.

## Exercício 8

Modele e implemente uma classe que consiga retornar se um CPF é válido. O CPF é representado por dois atributos inteiros: o primeiro, com nove dígitos, é o número do CPF propriamente dito; e o segundo são os dois dígitos verificadores. O método de validação deve retornar true ou false.

## Como Citar

Todos os exercícios desta lista são autorais.

MASCHIO, Eleandro. Exercícios: Estruturas Condicionais. Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
