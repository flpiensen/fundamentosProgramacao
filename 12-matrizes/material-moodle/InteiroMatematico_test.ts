// Executar no terminal:
// deno test InteiroMatematico_test.ts

import { expect } from "jsr:@std/expect";
import InteiroMatematico from "./InteiroMatematico.ts";

// Testes com n = 0
// - - - - - - - - - - - - - - - - - - - - - - - 
const zero: InteiroMatematico = new InteiroMatematico(0);

Deno.test("Divisores de 0", () => {
  expect(zero.getDivisores()).toEqual([1]);
});

Deno.test("Primeiros 0 números da sequência de Fibonacci", () => {
  expect(zero.serieDeFibonacci()).toEqual([]);
});

Deno.test("Primeiros 0 números da sequência de Tribonacci", () => {
  expect(zero.serieDeTribonacci()).toEqual([]);
});

Deno.test("Primeiros 0 números primos", () => {
  expect(zero.getPrimos()).toEqual([]);
});


// Testes com n = 1
// - - - - - - - - - - - - - - - - - - - - - - - 
const um: InteiroMatematico = new InteiroMatematico(1);

Deno.test("Divisores de 1", () => {
  expect(um.getDivisores()).toEqual([1]);
});

Deno.test("Primeiro número da sequência de Fibonacci", () => {
  expect(um.serieDeFibonacci()).toEqual([1]);
});

Deno.test("Primeiros número da sequência de Tribonacci", () => {
  expect(um.serieDeTribonacci()).toEqual([1]);
});

Deno.test("Primeiros números primos", () => {
  expect(um.getPrimos()).toEqual([2]);
});


// Testes com n = 2
// - - - - - - - - - - - - - - - - - - - - - - - 
const dois: InteiroMatematico = new InteiroMatematico(2);

Deno.test("Divisores de 2", () => {
  expect(dois.getDivisores()).toEqual([1, 2]);
});

Deno.test("Primeiros 2 números da sequência de Fibonacci", () => {
  expect(dois.serieDeFibonacci()).toEqual([1, 1]);
});

Deno.test("Primeiros 2 números da sequência de Tribonacci", () => {
  expect(dois.serieDeTribonacci()).toEqual([1, 1]);
});

Deno.test("Primeiros 2 números primos", () => {
  expect(dois.getPrimos()).toEqual([2, 3]);
});


// Testes com n = 3
// - - - - - - - - - - - - - - - - - - - - - - - 
const tres: InteiroMatematico = new InteiroMatematico(3);

Deno.test("Divisores de 3", () => {
  expect(tres.getDivisores()).toEqual([1, 3]);
});

Deno.test("Primeiros 3 números da sequência de Fibonacci", () => {
  expect(tres.serieDeFibonacci()).toEqual([1, 1, 2]);
});

Deno.test("Primeiros 3 números da sequência de Tribonacci", () => {
  expect(tres.serieDeTribonacci()).toEqual([1, 1, 2]);
});

Deno.test("Primeiros 3 números primos", () => {
  expect(tres.getPrimos()).toEqual([2, 3, 5]);
});


// Testes com n = 5
// - - - - - - - - - - - - - - - - - - - - - - - 
const cinco: InteiroMatematico = new InteiroMatematico(5);

Deno.test("Divisores de 5", () => {
  expect(cinco.getDivisores()).toEqual([1, 5]);
});

Deno.test("Primeiros 5 números da sequência de Fibonacci", () => {
  expect(cinco.serieDeFibonacci()).toEqual([1, 1, 2, 3, 5]);
});

Deno.test("Primeiros 5 números da sequência de Tribonacci", () => {
  expect(cinco.serieDeTribonacci()).toEqual([1, 1, 2, 4, 7]);
});

Deno.test("Primeiros 5 números primos", () => {
  expect(cinco.getPrimos()).toEqual([2, 3, 5, 7, 11]);
});


// Testes com n = 8
// - - - - - - - - - - - - - - - - - - - - - - - 
const oito: InteiroMatematico = new InteiroMatematico(8);

Deno.test("Divisores de 8", () => {
  expect(oito.getDivisores()).toEqual([1, 2, 4, 8]);
});

Deno.test("Primeiros 8 números da sequência de Fibonacci", () => {
  expect(oito.serieDeFibonacci()).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
});

Deno.test("Primeiros 8 números da sequência de Tribonacci", () => {
  expect(oito.serieDeTribonacci()).toEqual([1, 1, 2, 4, 7, 13, 24, 44]);
});

Deno.test("Primeiros 8 números primos", () => {
  expect(oito.getPrimos()).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});