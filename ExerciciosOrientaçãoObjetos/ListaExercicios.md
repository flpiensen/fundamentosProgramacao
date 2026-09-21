# Fundamentos de Programação — Conceitos de Programação Orientada a Objetos

## Exercício 1 — PARADIGMA

**O que é um paradigma em programação de computadores? Quais são os paradigmas mais conhecidos?**

Um paradigma de programação é uma forma de pensar e organizar a solução de um problema utilizando uma determinada maneira de programar.

Os paradigmas mais conhecidos são:

- **Programação Imperativa:** o programa é construído por meio de instruções e comandos que indicam ao computador o que deve ser feito e em qual ordem.
- **Programação Orientada a Objetos (POO):** o programa é organizado utilizando objetos, que possuem características e comportamentos.
- **Programação Funcional:** o programa é estruturado principalmente por meio de funções e transformação de dados.

Neste trabalho, o paradigma estudado é o **Paradigma Orientado a Objetos**.

---

## Exercício 2 — OBJETO

**O que é objeto?**

Um objeto é uma representação de alguma coisa do mundo real ou de um elemento do sistema.

Um objeto possui **características**, chamadas de atributos, e pode possuir **comportamentos**, representados pelos métodos.

Por exemplo, em um sistema de uma universidade, podemos ter o objeto `Aluno`.

Um aluno pode possuir:

- nome;
- idade;
- curso.

E pode realizar ações como:

- estudar;
- fazer uma prova;
- entregar um trabalho.

Em TypeScript, um objeto pode ser criado a partir de uma classe:

```typescript
const aluno1 = new Aluno();
```

Nesse exemplo, `aluno1` é um objeto.

---

## Exercício 3 — CLASSE

**O que é classe?**

Uma classe é um **modelo ou molde utilizado para criar objetos**.

Ela define quais atributos e métodos os objetos daquele tipo poderão possuir.

Por exemplo:

```typescript
class Aluno {
    nome: string;
    idade: number;
    curso: string;

    estudar(): void {
        console.log("O aluno está estudando.");
    }
}
```

Nesse exemplo, `Aluno` é uma classe.

Ela define que um aluno possui os atributos `nome`, `idade` e `curso`, além do método `estudar()`.

A classe não representa necessariamente um aluno específico, mas sim o **modelo de um aluno**.

---

## Exercício 4 — ATRIBUTO

**O que é atributo?**

Atributo é uma **característica ou informação que pertence a um objeto**.

Por exemplo:

```typescript
class Aluno {
    nome: string;
    idade: number;
    curso: string;
}
```

Os atributos são:

- `nome`
- `idade`
- `curso`

Podemos criar um objeto e definir seus valores:

```typescript
const aluno1 = new Aluno();

aluno1.nome = "João";
aluno1.idade = 20;
aluno1.curso = "TSI";
```

Nesse caso, o objeto `aluno1` possui os seguintes valores em seus atributos:

```text
nome = "João"
idade = 20
curso = "TSI"
```

---

## Exercício 5 — MÉTODO

**O que é método?**

Método é uma **ação ou comportamento que um objeto pode realizar**.

Por exemplo:

```typescript
class Aluno {
    estudar(): void {
        console.log("O aluno está estudando.");
    }
}
```

Nesse caso, `estudar()` é um método da classe `Aluno`.

Podemos executar o método através do objeto:

```typescript
const aluno1 = new Aluno();

aluno1.estudar();
```

O método representa, portanto, um comportamento que o objeto pode executar.

---

## Exercício 6 — INSTÂNCIA E ESTADO

**O que é instância e o que é estado?**

Uma **instância** é um objeto criado a partir de uma classe.

Por exemplo:

```typescript
class Aluno {
    nome: string;
}

const aluno1 = new Aluno();
```

Nesse exemplo, `Aluno` é a classe e `aluno1` é uma **instância** dessa classe.

Podemos criar várias instâncias da mesma classe:

```typescript
const aluno1 = new Aluno();
const aluno2 = new Aluno();
const aluno3 = new Aluno();
```

Já o **estado** representa os valores atuais dos atributos de um objeto.

Por exemplo:

```typescript
aluno1.nome = "João";
```

O estado atual de `aluno1` possui:

```text
nome = "João"
```

Se posteriormente fizermos:

```typescript
aluno1.nome = "Pedro";
```

o estado do objeto será alterado.

---

## Exercício 7 — ENCAPSULAMENTO

**O que é encapsulamento?**

Encapsulamento é o conceito de **proteger e controlar o acesso aos dados e comportamentos de um objeto**.

Em TypeScript, podemos utilizar `private` para impedir que um atributo seja acessado diretamente de fora da classe.

Por exemplo:

```typescript
class Conta {

    private saldo: number = 0;

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}
```

Nesse exemplo, o atributo `saldo` é privado:

```typescript
private saldo: number = 0;
```

Para modificar ou consultar o saldo, utilizamos os métodos:

```typescript
conta.depositar(1000);

conta.consultarSaldo();
```

Assim, o encapsulamento permite controlar como os dados do objeto podem ser acessados e modificados.

---

## Exercício 8 — DIFERENÇA

**Qual é a diferença entre modelar um problema em Programação Imperativa e em Programação Orientada a Objetos?**

Na **Programação Imperativa**, o problema é pensado principalmente como uma sequência de instruções que devem ser executadas pelo computador.

Por exemplo:

```typescript
let saldo = 1000;

saldo = saldo + 500;

console.log(saldo);
```

Nesse caso, estamos trabalhando diretamente com variáveis e instruções para modificar seus valores.

Na **Programação Orientada a Objetos**, o problema é modelado identificando objetos, suas características e seus comportamentos.

Por exemplo:

```typescript
class Conta {

    saldo: number = 0;

    depositar(valor: number): void {
        this.saldo += valor;
    }
}
```

Nesse caso, o saldo e o comportamento de depositar estão relacionados ao objeto `Conta`.

Portanto, a principal diferença é a forma de **modelar e organizar a solução do problema**: na programação imperativa, o foco está nas instruções e alterações de dados; na orientação a objetos, o foco está nos objetos, seus atributos e seus comportamentos.

---

## Exercício 9 — EXEMPLOS

**Por meio de três problemas, exemplifique os conceitos de objeto, classe, atributo, método e instância.**

### Exemplo 1 — Aluno

Podemos representar um aluno de uma universidade.

**Classe:**

```text
Aluno
```

**Atributos:**

```text
nome
idade
curso
```

**Métodos:**

```text
estudar()
fazerProva()
```

**Objetos/instâncias:**

```text
aluno1
aluno2
```

Por exemplo:

```text
aluno1
nome = João
idade = 20
curso = TSI
```

### Exemplo 2 — Carro

Podemos representar um carro.

**Classe:**

```text
Carro
```

**Atributos:**

```text
marca
modelo
velocidade
```

**Métodos:**

```text
acelerar()
frear()
```

**Objetos/instâncias:**

```text
carro1
carro2
```

Por exemplo:

```text
carro1
marca = Toyota
modelo = Corolla
velocidade = 50
```

### Exemplo 3 — Conta Bancária

Podemos representar uma conta bancária.

**Classe:**

```text
ContaBancaria
```

**Atributos:**

```text
numero
titular
saldo
```

**Métodos:**

```text
depositar()
sacar()
consultarSaldo()
```

**Objetos/instâncias:**

```text
conta1
conta2
```

Por exemplo:

```text
conta1
numero = 12345
titular = João
saldo = 1000
```

---

# Exercício 10 — IMPLEMENTAÇÃO

**Modele e implemente três exemplos das listas de exercícios anteriores em TypeScript, considerando o Paradigma Orientado a Objetos.**

## 1. Refrigerantes

O problema consiste em ler a quantidade de pessoas que confirmaram presença em uma confraternização. Cada pessoa consome, em média, 300 ml de refrigerante e cada garrafa possui 2 litros. A partir dessas informações, deve-se calcular a quantidade de garrafas necessárias.

```typescript
class Refrigerante {
    quantidadePessoas: number;
    consumoPorPessoa: number = 300;
    capacidadeGarrafa: number = 2000;

    calcularGarrafas(): number {
        const consumoTotal = this.quantidadePessoas * this.consumoPorPessoa;
        return Math.ceil(consumoTotal / this.capacidadeGarrafa);
    }
}

const refrigerante = new Refrigerante();

refrigerante.quantidadePessoas = 10;

console.log(`Garrafas necessárias: ${refrigerante.calcularGarrafas()}`);
```

Nesse exemplo:

- `Refrigerante` é a **classe**;
- `refrigerante` é o **objeto/instância**;
- `quantidadePessoas`, `consumoPorPessoa` e `capacidadeGarrafa` são **atributos**;
- `calcularGarrafas()` é o **método**.

## 2. Piscina

O problema consiste em ler a altura e o raio de uma piscina redonda e calcular a quantidade de água necessária para enchê-la completamente, considerando a medida em litros e arredondando o resultado para cima.

```typescript
class Piscina {
    altura: number;
    raio: number;

    calcularVolume(): number {
        const volume = Math.PI * this.raio ** 2 * this.altura;
        const litros = volume * 1000;

        return Math.ceil(litros);
    }
}

const piscina = new Piscina();

piscina.altura = 1.5;
piscina.raio = 2;

console.log(`Quantidade de água: ${piscina.calcularVolume()} litros`);
```

Nesse exemplo:

- `Piscina` é a **classe**;
- `piscina` é o **objeto/instância**;
- `altura` e `raio` são **atributos**;
- `calcularVolume()` é o **método**.

O método utiliza a fórmula do volume de um cilindro e depois converte o resultado de metros cúbicos para litros.

## 3. Velocidade Média

O problema consiste em ler uma distância em quilômetros e o tempo transcorrido em horas e calcular a velocidade média atingida. Também é necessário considerar o caso em que o tempo informado seja zero.

```typescript
class VelocidadeMedia {
    distancia: number;
    tempo: number;

    calcular(): number {
        if (this.tempo === 0) {
            throw new Error("O tempo não pode ser zero.");
        }

        return this.distancia / this.tempo;
    }
}

const velocidade = new VelocidadeMedia();

velocidade.distancia = 120;
velocidade.tempo = 2;

console.log(`Velocidade média: ${velocidade.calcular()} km/h`);
```

Nesse exemplo:

- `VelocidadeMedia` é a **classe**;
- `velocidade` é o **objeto/instância**;
- `distancia` e `tempo` são **atributos**;
- `calcular()` é o **método**.

A verificação `this.tempo === 0` foi utilizada porque não é possível realizar uma divisão por zero.

## Conclusão

Nos três exemplos, os problemas originalmente trabalhados por meio de entrada, processamento e saída foram modelados utilizando Programação Orientada a Objetos. Cada classe representa um problema, seus atributos armazenam os dados necessários e seus métodos representam os comportamentos ou cálculos que podem ser realizados.
