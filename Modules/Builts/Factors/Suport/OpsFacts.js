//operações auxiliares
const fs= require("fs")
class OpsFacts{
	constructor(){

	}
	img(path){
		return fs.readFileSync(path,"base64");
	}
	signal(value){
		let ClassName= this;

		if(value >= 3){
			return ClassName.img(__dirname + "/Signals/dan.png");
		}else if(value < 3 && value >= 1){
			return ClassName.img(__dirname + "/Signals/warn.png");
		}else if(value < 1){
			return ClassName.img(__dirname + "/Signals/ok.png");
		}else{
			console.log("Erro no Signal");
		}
	}
	convert(num){
		let res= ""
		for(var i in num){
			if(num[i] == " "){
				break;
			}
			if(!isNaN(parseInt(num[i]))){
				res += num[i]
			}else{
				if(num[i] == ","){
					res += "."
				}
			}
		}
		return parseFloat(res);
	}
	desvio(ant,pos){
		var n1= this.convert(ant);
		var n2= this.convert(pos);
		var res= Math.abs(n1-n2)
		return res;
	}
}

module.exports= OpsFacts