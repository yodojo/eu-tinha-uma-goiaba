var Decisor = require('../../src/index');

describe("Carinha da Goiaba:", function() {
  var decisor = new Decisor();
  
  it("Se não tem grana, nao compra a goiaba", function() {
    var dado = new Decisor(0.50, false); 

    expect(dado.decide()).toBe('');
  });

  it("Tem fome e tem grana, compra a goiaba", function() {
    var dado = new Decisor(2, true); 

    expect(dado.decide()).toBe('comprar goiaba');
  });

  it("Não tem fome e tem grana, não compra a goiaba e pega o onibus", function() {
    var dado = new Decisor(2, false); 

    expect(dado.decide()).toBe('comprar passagem');
  });

  it("Tem fome e não tem grana, não compra a goiaba", function() {
    var dado = new Decisor(0.5, true); 

    expect(dado.decide()).toBe('');
  });

  it("Compra a goiaba e pega onibus", function() {
    var dado = new Decisor(10, true); 
    
    expect(dado.decide()).toBe('comprar goiaba e comprar passagem');
  });
});
