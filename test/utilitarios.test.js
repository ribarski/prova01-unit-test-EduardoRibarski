const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  describe("Métodos de String", () => {
    test("inverterString: deve inverter uma string comum", () => {
      expect(utilitarios.inverterString("abcde")).toBe("edcba");
    });

    test("inverterString: deve retornar uma string vazia se a entrada for vazia", () => {
      expect(utilitarios.inverterString("")).toBe("");
    });

    test("inverterString: deve inverter corretamente strings com números e símbolos", () => {
      expect(utilitarios.inverterString("a1b2@c3")).toBe("3c@2b1a");
    });

    test("contarCaracteres: deve contar os caracteres de uma string", () => {
      expect(utilitarios.contarCaracteres("teste")).toBe(5);
    });

    test("contarCaracteres: deve retornar 0 para uma string vazia", () => {
      expect(utilitarios.contarCaracteres("")).toBe(0);
    });

    test("paraMaiusculas: deve converter uma string em minúsculas para maiúsculas", () => {
      expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
    });

    test("paraMaiusculas: deve manter uma string que já está em maiúsculas", () => {
      expect(utilitarios.paraMaiusculas("TESTE")).toBe("TESTE");
    });

    test("paraMinusculas: deve converter uma string em maiúsculas para minúsculas", () => {
      expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    });

    test("paraMinusculas: deve manter uma string que já está em minúsculas", () => {
      expect(utilitarios.paraMinusculas("teste")).toBe("teste");
    });

    test("primeiraLetraMaiuscula: deve capitalizar o primeiro caractere de uma string", () => {
      expect(utilitarios.primeiraLetraMaiuscula("teste")).toBe("Teste");
    });

    test("primeiraLetraMaiuscula: deve manter o primeiro caractere se já for maiúsculo", () => {
      expect(utilitarios.primeiraLetraMaiuscula("Teste")).toBe("Teste");
    });
  });

  describe("Funções Matemáticas", () => {
    test("somar: deve somar dois números", () => {
      expect(utilitarios.somar(5, 10)).toBe(15);
    });

    test("subtrair: deve subtrair dois números", () => {
      expect(utilitarios.subtrair(10, 5)).toBe(5);
    });

    test("multiplicar: deve multiplicar dois números", () => {
      expect(utilitarios.multiplicar(5, 10)).toBe(50);
    });

    test("dividir: deve dividir dois números", () => {
      expect(utilitarios.dividir(10, 2)).toBe(5);
    });

    test("dividir: deve lançar um erro ao tentar dividir por zero", () => {
      expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");
    });

    test("ehPar: deve retornar true para números pares", () => {
      expect(utilitarios.ehPar(4)).toBe(true);
    });

    test("ehPar: deve retornar false para números ímpares", () => {
      expect(utilitarios.ehPar(5)).toBe(false);
    });
  });

  describe("Manipulação de Array", () => {
    test("primeiroElemento: deve retornar o primeiro elemento de um array", () => {
      expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test("primeiroElemento: deve retornar undefined para um array vazio", () => {
      expect(utilitarios.primeiroElemento([])).toBeUndefined();
    });

    test("ultimoElemento: deve retornar o último elemento de um array", () => {
      expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test("ultimoElemento: deve retornar undefined para um array vazio", () => {
      expect(utilitarios.ultimoElemento([])).toBeUndefined();
    });

    test("tamanhoArray: deve retornar o tamanho do array", () => {
      expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test("ordenarArray: deve ordenar um array de números", () => {
      expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test("ordenarArray: deve ordenar um array de strings", () => {
      expect(utilitarios.ordenarArray(["c", "a", "b"])).toEqual(["a", "b", "c"]);
    });

    test("inverterArray: deve inverter a ordem dos elementos de um array", () => {
      expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });
    
    test("mediaArray: deve calcular a média dos elementos de um array", () => {
      expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toBe(3);
    });

    test("mediaArray: deve retornar 0 para um array vazio", () => {
      expect(utilitarios.mediaArray([])).toBe(0);
    });

    test("removerDuplicados: deve remover elementos duplicados de um array", () => {
      expect(utilitarios.removerDuplicados([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });
  });

  describe("Outros Métodos Utilitários", () => {
    test("gerarNumeroAleatorio: deve gerar um número dentro do limite", () => {
      const max = 10;
      const numero = utilitarios.gerarNumeroAleatorio(max);
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThan(max);
    });

    test("ehNumero: deve retornar true para um número e false para outros tipos", () => {
      expect(utilitarios.ehNumero(123)).toBe(true);
      expect(utilitarios.ehNumero("texto")).toBe(false);
      expect(utilitarios.ehNumero(NaN)).toBe(false);
    });

    test("removerEspacos: deve remover espaços no início e no fim da string", () => {
      expect(utilitarios.removerEspacos("  teste  ")).toBe("teste");
    });

    test("repetirTexto: deve repetir um texto um número específico de vezes", () => {
      expect(utilitarios.repetirTexto("abc", 3)).toBe("abcabcabc");
    });

    test("juntarArray: deve juntar os elementos de um array com o separador padrão", () => {
      expect(utilitarios.juntarArray([1, 2, 3])).toBe("1,2,3");
    });
    
    test("juntarArray: deve juntar os elementos de um array com um separador customizado", () => {
      expect(utilitarios.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
    });

    test("contarPalavras: deve contar o número de palavras em uma string", () => {
      expect(utilitarios.contarPalavras("  um dois   três ")).toBe(3);
    });

    test("ehPalindromo: deve verificar se uma string é um palíndromo", () => {
      expect(utilitarios.ehPalindromo("A man, a plan, a canal: Panama")).toBe(true);
      expect(utilitarios.ehPalindromo("race a car")).toBe(false);
    });

    test("mesclarObjetos: deve mesclar dois objetos", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
  });
});