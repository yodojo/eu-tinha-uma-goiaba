var Decisor = require('../../src/index');

describe("Carinha da Goiaba:", function() {
  var decisor = new Decisor();

  it("Se não tem grana, nao compra a goiaba", function() {

    decisor.dinheiroNaCarteira = 0.50;

    var resultado = decisor.decide();
    expect(resultado.comprarGoiaba).toBe(false);
  });

  it("Tem fome e tem grana, compra a goiaba", function() {

    decisor.dinheiroNaCarteira = 2.00;
    decisor.estarFaminto = true;


    var resultado = decisor.decide();

    expect(resultado.comprarGoiaba).toBe(true);
  });

  it("Não tem fome e tem grana, não compra a goiaba e pega o onibus", function() {

    decisor.dinheiroNaCarteira = 2.00;
    decisor.estarFaminto = false;

    var resultado = decisor.decide();

    expect(resultado.comprarGoiaba).not.toBe(true);
    expect(resultado.comprarPassagem).toBe(true);
  });

  it("Tem fome e não tem grana, não compra a goiaba", function() {

    decisor.dinheiroNaCarteira = 0.50;
    decisor.estarFaminto = true;

    var resultado = decisor.decide();
    expect(resultado.comprarGoiaba).toBe(false);
  });

  it("Compra a goiaba e pega onibus", function() {

    decisor.dinheiroNaCarteira = 10;
    decisor.estarFaminto = true;

    var resultado = decisor.decide();
    expect(resultado.comprarGoiaba).toBe(true);
    expect(resultado.comprarPassagem).toBe(true);
  });

});
