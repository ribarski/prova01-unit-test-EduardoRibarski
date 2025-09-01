const Utilitarios = require("../src/utilitarios");

const TEST_DATA = {
  strings: {
    simple: "teste",
    empty: "",
    withSymbols: "a1b2@c3",
    withSpaces: "  teste  ",
    palindrome: "A man, a plan, a canal: Panama",
    notPalindrome: "race a car"
  },
  arrays: {
    numbers: [1, 2, 3],
    unsorted: [3, 1, 2],
    withDuplicates: [1, 2, 2, 3, 3, 3],
    strings: ["c", "a", "b"],
    empty: [],
    forAverage: [1, 2, 3, 4, 5]
  },
  math: {
    PRIMEIRO_NUMERO: 5,
    SEGUNDO_NUMERO: 10,
    SOMA_ESPERADA: 15,
    SUBTRACAO_ESPERADA: 5,
    MULTIPLICACAO_ESPERADA: 50,
    DIVISAO_NUMERADOR: 10,
    DIVISAO_DENOMINADOR: 2,
    DIVISAO_ESPERADA: 5,
    NUMERO_PAR: 4,
    NUMERO_IMPAR: 5
  },
  objects: {
    first: { a: 1, b: 2 },
    second: { c: 3, d: 4 },
    merged: { a: 1, b: 2, c: 3, d: 4 }
  }
};

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
      expect(utilitarios.inverterString(TEST_DATA.strings.empty)).toBe("");
    });

    test("inverterString: deve inverter corretamente strings com números e símbolos", () => {
      expect(utilitarios.inverterString(TEST_DATA.strings.withSymbols)).toBe("3c@2b1a");
    });

    test("inverterString: deve preservar espaços ao inverter", () => {
      expect(utilitarios.inverterString("a b c")).toBe("c b a");
    });

    test("contarCaracteres: deve contar os caracteres de uma string", () => {
      expect(utilitarios.contarCaracteres(TEST_DATA.strings.simple)).toBe(5);
    });

    test("contarCaracteres: deve retornar 0 para uma string vazia", () => {
      expect(utilitarios.contarCaracteres(TEST_DATA.strings.empty)).toBe(0);
    });

    test("contarCaracteres: deve contar espaços como caracteres", () => {
      expect(utilitarios.contarCaracteres("a b c")).toBe(5);
    });

    test("paraMaiusculas: deve converter uma string em minúsculas para maiúsculas", () => {
      expect(utilitarios.paraMaiusculas(TEST_DATA.strings.simple)).toBe("TESTE");
    });

    test("paraMaiusculas: deve manter uma string que já está em maiúsculas", () => {
      expect(utilitarios.paraMaiusculas("TESTE")).toBe("TESTE");
    });

    test("paraMaiusculas: deve converter string mista corretamente", () => {
      expect(utilitarios.paraMaiusculas("TeSte123")).toBe("TESTE123");
    });

    test("paraMinusculas: deve converter uma string em maiúsculas para minúsculas", () => {
      expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    });

    test("paraMinusculas: deve manter uma string que já está em minúsculas", () => {
      expect(utilitarios.paraMinusculas(TEST_DATA.strings.simple)).toBe("teste");
    });

    test("primeiraLetraMaiuscula: deve capitalizar o primeiro caractere de uma string", () => {
      expect(utilitarios.primeiraLetraMaiuscula(TEST_DATA.strings.simple)).toBe("Teste");
    });

    test("primeiraLetraMaiuscula: deve manter o primeiro caractere se já for maiúsculo", () => {
      expect(utilitarios.primeiraLetraMaiuscula("Teste")).toBe("Teste");
    });

    test("primeiraLetraMaiuscula: deve lidar com strings vazias sem erro", () => {
      expect(utilitarios.primeiraLetraMaiuscula(TEST_DATA.strings.empty)).toBe("");
    });

    test("removerEspacos: deve remover espaços no início e no fim da string", () => {
      expect(utilitarios.removerEspacos(TEST_DATA.strings.withSpaces)).toBe("teste");
    });

    test("removerEspacos: deve preservar espaços internos", () => {
      expect(utilitarios.removerEspacos("  teste teste  ")).toBe("teste teste");
    });

    test("repetirTexto: deve repetir um texto um número específico de vezes", () => {
      const REPETICOES = 3;
      expect(utilitarios.repetirTexto("abc", REPETICOES)).toBe("abcabcabc");
    });

    test("repetirTexto: deve retornar string vazia quando repetir 0 vezes", () => {
      expect(utilitarios.repetirTexto("abc", 0)).toBe("");
    });

    test("contarPalavras: deve contar o número de palavras em uma string", () => {
      expect(utilitarios.contarPalavras("  um dois   três ")).toBe(3);
    });

    test("contarPalavras: deve retornar 1 para string com uma palavra", () => {
      expect(utilitarios.contarPalavras("palavra")).toBe(1);
    });

    test("contarPalavras: deve lidar com múltiplos espaços entre palavras", () => {
      expect(utilitarios.contarPalavras("palavra1    palavra2")).toBe(2);
    });

    test("ehPalindromo: deve verificar se uma string é um palíndromo (caso complexo)", () => {
      expect(utilitarios.ehPalindromo(TEST_DATA.strings.palindrome)).toBe(true);
    });

    test("ehPalindromo: deve retornar false para não-palíndromos", () => {
      expect(utilitarios.ehPalindromo(TEST_DATA.strings.notPalindrome)).toBe(false);
    });

    test("ehPalindromo: deve ignorar maiúsculas/minúsculas e pontuação", () => {
      expect(utilitarios.ehPalindromo("A Santa at NASA")).toBe(true);
    });
  });

  describe("Funções Matemáticas", () => {
    const { PRIMEIRO_NUMERO, SEGUNDO_NUMERO, SOMA_ESPERADA, 
            SUBTRACAO_ESPERADA, MULTIPLICACAO_ESPERADA,
            DIVISAO_NUMERADOR, DIVISAO_DENOMINADOR, DIVISAO_ESPERADA,
            NUMERO_PAR, NUMERO_IMPAR } = TEST_DATA.math;

    test("somar: deve somar dois números positivos", () => {
      expect(utilitarios.somar(PRIMEIRO_NUMERO, SEGUNDO_NUMERO)).toBe(SOMA_ESPERADA);
    });

    test("somar: deve somar números negativos corretamente", () => {
      expect(utilitarios.somar(-5, -10)).toBe(-15);
    });

    test("somar: deve somar zero corretamente", () => {
      expect(utilitarios.somar(0, 5)).toBe(5);
    });

    test("subtrair: deve subtrair dois números", () => {
      expect(utilitarios.subtrair(SEGUNDO_NUMERO, PRIMEIRO_NUMERO)).toBe(SUBTRACAO_ESPERADA);
    });

    test("subtrair: deve lidar com resultados negativos", () => {
      expect(utilitarios.subtrair(5, 10)).toBe(-5);
    });

    test("multiplicar: deve multiplicar dois números positivos", () => {
      expect(utilitarios.multiplicar(PRIMEIRO_NUMERO, SEGUNDO_NUMERO)).toBe(MULTIPLICACAO_ESPERADA);
    });

    test("multiplicar: deve retornar zero quando multiplicar por zero", () => {
      expect(utilitarios.multiplicar(100, 0)).toBe(0);
    });

    test("multiplicar: deve lidar com números negativos", () => {
      expect(utilitarios.multiplicar(-5, 3)).toBe(-15);
    });

    test("dividir: deve dividir dois números", () => {
      expect(utilitarios.dividir(DIVISAO_NUMERADOR, DIVISAO_DENOMINADOR)).toBe(DIVISAO_ESPERADA);
    });

    test("dividir: deve lançar um erro ao tentar dividir por zero", () => {
      expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");
    });

    test("dividir: deve lidar com divisões que resultam em decimais", () => {
      expect(utilitarios.dividir(10, 3)).toBeCloseTo(3.333, 3);
    });

    test("dividir: deve lidar com números negativos", () => {
      expect(utilitarios.dividir(-10, 2)).toBe(-5);
    });

    test("ehPar: deve retornar true para números pares", () => {
      expect(utilitarios.ehPar(NUMERO_PAR)).toBe(true);
    });

    test("ehPar: deve retornar false para números ímpares", () => {
      expect(utilitarios.ehPar(NUMERO_IMPAR)).toBe(false);
    });

    test("ehPar: deve funcionar com zero", () => {
      expect(utilitarios.ehPar(0)).toBe(true);
    });

    test("ehPar: deve funcionar com números negativos", () => {
      expect(utilitarios.ehPar(-4)).toBe(true);
      expect(utilitarios.ehPar(-3)).toBe(false);
    });
  });

  describe("Manipulação de Array", () => {
    test("primeiroElemento: deve retornar o primeiro elemento de um array", () => {
      expect(utilitarios.primeiroElemento(TEST_DATA.arrays.numbers)).toBe(1);
    });

    test("primeiroElemento: deve retornar undefined para um array vazio", () => {
      expect(utilitarios.primeiroElemento(TEST_DATA.arrays.empty)).toBeUndefined();
    });

    test("primeiroElemento: deve funcionar com diferentes tipos de elementos", () => {
      expect(utilitarios.primeiroElemento(["string", 123, true])).toBe("string");
    });

    test("ultimoElemento: deve retornar o último elemento de um array", () => {
      expect(utilitarios.ultimoElemento(TEST_DATA.arrays.numbers)).toBe(3);
    });

    test("ultimoElemento: deve retornar undefined para um array vazio", () => {
      expect(utilitarios.ultimoElemento(TEST_DATA.arrays.empty)).toBeUndefined();
    });

    test("ultimoElemento: deve funcionar com array de um elemento", () => {
      expect(utilitarios.ultimoElemento([42])).toBe(42);
    });

    test("tamanhoArray: deve retornar o tamanho do array", () => {
      expect(utilitarios.tamanhoArray(TEST_DATA.arrays.numbers)).toBe(3);
    });

    test("tamanhoArray: deve retornar 0 para array vazio", () => {
      expect(utilitarios.tamanhoArray(TEST_DATA.arrays.empty)).toBe(0);
    });

    test("ordenarArray: deve ordenar um array de números", () => {
      expect(utilitarios.ordenarArray(TEST_DATA.arrays.unsorted)).toEqual([1, 2, 3]);
    });

    test("ordenarArray: deve ordenar um array de strings alfabeticamente", () => {
      expect(utilitarios.ordenarArray(TEST_DATA.arrays.strings)).toEqual(["a", "b", "c"]);
    });

    test("ordenarArray: deve não modificar o array original", () => {
      const original = [...TEST_DATA.arrays.unsorted];
      utilitarios.ordenarArray(TEST_DATA.arrays.unsorted);
      expect(TEST_DATA.arrays.unsorted).toEqual(original);
    });

    test("ordenarArray: deve lidar com números de múltiplos dígitos corretamente", () => {
      expect(utilitarios.ordenarArray([100, 20, 3])).toEqual([100, 20, 3]);
    });

    test("inverterArray: deve inverter a ordem dos elementos de um array", () => {
      expect(utilitarios.inverterArray(TEST_DATA.arrays.numbers)).toEqual([3, 2, 1]);
    });

    test("inverterArray: deve não modificar o array original", () => {
      const original = [...TEST_DATA.arrays.numbers];
      utilitarios.inverterArray(TEST_DATA.arrays.numbers);
      expect(TEST_DATA.arrays.numbers).toEqual(original);
    });

    test("inverterArray: deve retornar array vazio quando receber array vazio", () => {
      expect(utilitarios.inverterArray(TEST_DATA.arrays.empty)).toEqual([]);
    });
    
    test("mediaArray: deve calcular a média dos elementos de um array", () => {
      expect(utilitarios.mediaArray(TEST_DATA.arrays.forAverage)).toBe(3);
    });

    test("mediaArray: deve retornar 0 para um array vazio", () => {
      expect(utilitarios.mediaArray(TEST_DATA.arrays.empty)).toBe(0);
    });

    test("mediaArray: deve calcular média com números decimais", () => {
      expect(utilitarios.mediaArray([1.5, 2.5, 3.5])).toBeCloseTo(2.5, 2);
    });

    test("mediaArray: deve lidar com números negativos", () => {
      expect(utilitarios.mediaArray([-10, 0, 10])).toBe(0);
    });

    test("removerDuplicados: deve remover elementos duplicados de um array", () => {
      expect(utilitarios.removerDuplicados(TEST_DATA.arrays.withDuplicates)).toEqual([1, 2, 3]);
    });

    test("removerDuplicados: deve preservar a ordem dos elementos únicos", () => {
      expect(utilitarios.removerDuplicados([3, 1, 1, 2, 3])).toEqual([3, 1, 2]);
    });

    test("removerDuplicados: deve funcionar com strings", () => {
      expect(utilitarios.removerDuplicados(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
    });

    test("juntarArray: deve juntar os elementos de um array com o separador padrão", () => {
      expect(utilitarios.juntarArray(TEST_DATA.arrays.numbers)).toBe("1,2,3");
    });
    
    test("juntarArray: deve juntar os elementos de um array com um separador customizado", () => {
      expect(utilitarios.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
    });

    test("juntarArray: deve retornar string vazia para array vazio", () => {
      expect(utilitarios.juntarArray(TEST_DATA.arrays.empty)).toBe("");
    });

    test("juntarArray: deve funcionar com separador vazio", () => {
      expect(utilitarios.juntarArray(["a", "b", "c"], "")).toBe("abc");
    });
  });

  describe("Outros Métodos Utilitários", () => {
    describe("gerarNumeroAleatorio", () => {
      const MAX_VALUE = 10;
      const SAMPLE_SIZE = 100;

      test("deve gerar números dentro do limite especificado", () => {
        const numeros = Array.from(
          { length: SAMPLE_SIZE }, 
          () => utilitarios.gerarNumeroAleatorio(MAX_VALUE)
        );
        
        numeros.forEach(num => {
          expect(num).toBeGreaterThanOrEqual(0);
          expect(num).toBeLessThan(MAX_VALUE);
        });
      });

      test("deve gerar números diferentes (teste de aleatoriedade)", () => {
        const numeros = Array.from(
          { length: SAMPLE_SIZE }, 
          () => utilitarios.gerarNumeroAleatorio(MAX_VALUE)
        );
        
        const numerosUnicos = new Set(numeros);
        expect(numerosUnicos.size).toBeGreaterThan(1);
      });

      test("deve usar valor padrão quando max não for especificado", () => {
        const numero = utilitarios.gerarNumeroAleatorio();
        expect(numero).toBeGreaterThanOrEqual(0);
        expect(numero).toBeLessThan(100);
      });

      test("deve sempre retornar números inteiros", () => {
        const numeros = Array.from(
          { length: 50 }, 
          () => utilitarios.gerarNumeroAleatorio(MAX_VALUE)
        );
        
        numeros.forEach(num => {
          expect(Number.isInteger(num)).toBe(true);
        });
      });
    });

    describe("ehNumero", () => {
      test("deve retornar true para números inteiros", () => {
        expect(utilitarios.ehNumero(123)).toBe(true);
      });

      test("deve retornar true para números decimais", () => {
        expect(utilitarios.ehNumero(123.456)).toBe(true);
      });

      test("deve retornar true para números negativos", () => {
        expect(utilitarios.ehNumero(-123)).toBe(true);
      });

      test("deve retornar true para zero", () => {
        expect(utilitarios.ehNumero(0)).toBe(true);
      });

      test("deve retornar false para strings", () => {
        expect(utilitarios.ehNumero("123")).toBe(false);
      });

      test("deve retornar false para NaN", () => {
        expect(utilitarios.ehNumero(NaN)).toBe(false);
      });

      test("deve retornar false para null", () => {
        expect(utilitarios.ehNumero(null)).toBe(false);
      });

      test("deve retornar false para undefined", () => {
        expect(utilitarios.ehNumero(undefined)).toBe(false);
      });

      test("deve retornar false para objetos", () => {
        expect(utilitarios.ehNumero({})).toBe(false);
      });

      test("deve retornar false para arrays", () => {
        expect(utilitarios.ehNumero([])).toBe(false);
      });
    });

    describe("mesclarObjetos", () => {
      test("deve mesclar dois objetos simples", () => {
        expect(
          utilitarios.mesclarObjetos(TEST_DATA.objects.first, TEST_DATA.objects.second)
        ).toEqual(TEST_DATA.objects.merged);
      });

      test("deve sobrescrever propriedades duplicadas com valores do segundo objeto", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
      });

      test("deve lidar com objetos vazios", () => {
        expect(utilitarios.mesclarObjetos({}, { a: 1 })).toEqual({ a: 1 });
        expect(utilitarios.mesclarObjetos({ a: 1 }, {})).toEqual({ a: 1 });
      });

      test("deve não modificar os objetos originais", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const resultado = utilitarios.mesclarObjetos(obj1, obj2);
        
        expect(obj1).toEqual({ a: 1 });
        expect(obj2).toEqual({ b: 2 });
        expect(resultado).toEqual({ a: 1, b: 2 });
      });

      test("deve funcionar com propriedades de diferentes tipos", () => {
        const obj1 = { str: "texto", num: 123 };
        const obj2 = { bool: true, arr: [1, 2, 3] };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({
          str: "texto",
          num: 123,
          bool: true,
          arr: [1, 2, 3]
        });
      });
    });
  });

  describe.skip("Testes de Performance", () => {
    test("ordenarArray deve processar arrays grandes eficientemente", () => {
      const largeArray = Array.from({ length: 10000 }, () => Math.random());
      const startTime = performance.now();
      utilitarios.ordenarArray(largeArray);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(100);
    });

    test("removerDuplicados deve processar arrays grandes eficientemente", () => {
      const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100));
      const startTime = performance.now();
      utilitarios.removerDuplicados(largeArray);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(50);
    });
  });

  describe("Testes de Integração", () => {
    test("deve processar e formatar texto corretamente", () => {
      const texto = "  hello world  ";
      const textoLimpo = utilitarios.removerEspacos(texto);
      const textoPrimeiraLetra = utilitarios.primeiraLetraMaiuscula(textoLimpo);
      
      expect(textoPrimeiraLetra).toBe("Hello world");
    });

    test("deve processar arrays de números corretamente", () => {
      const numeros = [5, 2, 8, 2, 1, 8, 9, 1];
      const semDuplicados = utilitarios.removerDuplicados(numeros);
      const ordenados = utilitarios.ordenarArray(semDuplicados);
      const media = utilitarios.mediaArray(ordenados);
      
      expect(ordenados).toEqual([1, 2, 5, 8, 9]);
      expect(media).toBe(5);
    });
  });
});