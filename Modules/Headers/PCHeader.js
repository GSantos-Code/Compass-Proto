///Carrega os modulos e configura o protocolo para fazer o built
const LoaderLang= require("./../LoaderLang.js");

class PCHeader extends LoaderLang{
	constructor(){
		super("PCCompass","pt-br");
		this.t1= {};
		this.t2= {};
		this.t3= {};
		this.fs= require("fs");
		this.papa= require("papaparse");

		this.mapear();
	}

	mapear(){
		let res= {}
		//Definição de nome de classe para acesso interior de funções globais
		let ClassName= this;
		//abre o arquivo
		let csv= this.fs.readFileSync(__dirname + "/../../CSV/file.csv","ascii");
		//faz a notação
		csv= this.papa.parse(csv)["data"];

		csv.map(function(itemcsv){
			ClassName.csv.map(function(itemv){
				if(itemcsv[0] == itemv[0]){
					res[itemv[2]]= {}
					res[itemv[2]].name= itemv[1]
					res[itemv[2]].value= itemcsv[1]
				}
			})
		});

		this.res= res;
	}
}

module.exports= PCHeader;