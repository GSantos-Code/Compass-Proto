//logicas para aplicar na build
//Operações auxiliares
const Ops= require("./Suport/OpsFacts.js");

class Factors extends Ops{
	constructor(){
		super();
	}


	HC_XMSP(nameant,ant,namepos,pos){
		var json= {}
		let desvio= this.desvio(ant,pos);
		let logic= desvio <= 1 ? 0 : desvio > 3 ? 2 : 1;
		logic= isNaN(logic) ? "" : logic;
		let signal= this.signal(desvio);

		json[nameant]= ant;
		json[namepos]= pos;
		try{
		json["signal"]= signal.ico;
		json["color"]= signal.color;
		}
		catch(e){}
		return json
	}

}

module.exports= Factors;