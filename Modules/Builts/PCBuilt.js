//buildar o os valores
const Factor= require("./Factors/PCFact.js");
const PCHeader= require("./../Headers/PCHeader.js");

class PCBuilt extends PCHeader{
	constructor(){
		super();
		this.built();
	}
	built(){
		var ClassName= this
		var json= {};
		let f= new Factor();

		var vetors= [["13","23"],["14","24"],["16","26"],["33","43"],["36","46"]];
		var fators= ["HC","XMSP"];
        
        
        //Definição dos HCS e XMSPS
		fators.map(function(fact){
			vetors.map(function(vetor){
				var vant= ClassName.res[fact + vetor[0]];
				var vpos= ClassName.res[fact + vetor[1]];
				if(vant == undefined || vpos == undefined){

				}else{
					json[fact+vetor[0]+vetor[1]]= f.HC_XMSP(vant.name, vant.value,vpos.name,vpos.value)
				}
			})
		})
	 

		json.HCm= Math.round((json.HC1323.logic+json.HC1424.logic+json.HC1626.logic)/3)
	}
}

var a= new PCBuilt();