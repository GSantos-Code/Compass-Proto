//Carrega o CSV pra qual protocolo especificando também a linguagem
class Loader{
	constructor(ptc,lang){
		this.lang= lang
		if(ptc == "PCCompass"){
			this.pc();
		}
	}
	getLang(){
		if(this.lang == "pt-br"){
			return "pt-br.js";
		}
	}
	pc(){
		let LoadPC= require("./Languages/PC/" + this.getLang())
		this.csv= new LoadPC();
	}
}

module.exports= Loader;