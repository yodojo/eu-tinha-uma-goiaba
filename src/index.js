
var decisor = function(){

  decisor.yo = false;

  this.dinheiroNaCarteira = 0;
  this.estarFaminto = false;
  this.precoGoiaba = 1.5;
  this.precoOnibus = 1.5;

  this.decide = function(){

    // variaveis de decisão
    var resultado = {};
    resultado.comprarGoiaba = false;
    resultado.comprarPassagem = false;

    if( this.estarFaminto ){

      if(this.precoGoiaba <= this.dinheiroNaCarteira ){
        resultado.comprarGoiaba = true;
        this.dinheiroNaCarteira -= this.precoGoiaba;
      }

    }

    if(this.precoOnibus <= this.dinheiroNaCarteira) {
      resultado.comprarPassagem = true
      resultado.dinheiroNaCarteira -= this.precoOnibus;
    }

    return resultado;
  }
}

module.exports = decisor;
