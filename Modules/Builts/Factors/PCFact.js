//logicas para aplicar na build
//Operações auxiliares
const Ops= require("./Suport/OpsFacts.js");

class Factors extends Ops{
	constructor(){
		super();
	}

	HC_XMSP(name,ant,pos){
		//testeok
		let desvio= this.desvio(ant,pos);
		let logic= desvio <= 1 ? 0 : desvio > 3 ? 2 : 1;
		logic= isNaN(logic) ? "" : logic;
		let signal= this.signal(logic);

		return{
			"name": name,
			"signal": signal,
			"value": logic
		}
		
	}

}

var a= new Factors();
console.log(a.HC_XMSP("1,50mm","0,25mm"));