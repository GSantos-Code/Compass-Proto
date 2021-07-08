///Carrega os modulos e configura o protocolo para fazer o built

class PCHeader{
	constructor(){
		this.fs= require("fs");
		this.papa= require("papaparse");

		this.csv= [["_13 Height Camper","13 Campista de Altura"],
				["1b 23 Height Camper","23 Campista de Altura"],
				["1c 13 X MSP","13 X MSP"],
				["1d 23 X MSP","23 X MSP"],
				["1e 14 Height Camper","14 Campista de Altura"],
				["1f 24 Height Camper","24 Campista de Altura"],
				["1g 14 X MSP","14 X MSP"],
				["1h 24 X MSP","24 X MSP"],
				["1i 16 Height Camper","16 Campista de Altura"],
				["1j 26 Height Camper","26 Campista de Altura"],
				["1k 16 X MSP","16 X MSP"],
				["1l 26 X MSP","26 X MSP"],
				["1m 33 X MSP","33 X MSP"],
				["1n 43 X MSP","43 X MSP"],
				["1o 36 X MSP","36 X MSP"],
				["1p 46 X MSP","46 X MSP"],
				["1q 16 Coronal Plane","16 Plano Coronal"],
				["1r 26  Coronal Plane","26 Plano Coronal"],
				["1s 36 Coronal Plane","36 Plano Coronal"],
				["1t 46 Coronal Plane","46 Plano Coronal"],
				["1ta 16 VL Inclination","16 Inclinação VL"],
				["1tb 26 VL Inclination","26 Inclinação VL"],
				["1tc 13 VL Inclination","13 Inclinação VL"],
				["1td 23 VL Inclination","23 Inclinação VL"],
				["1te 46 VL Inclination","46 Inclinação VL"],
				["1tf  36 VL Inclination","36 Inclinação VL"],
				["1tg 43 VL Inclination","43 Inclinação VL"],
				["1th 33 VL Inclination","33 Inclinação VL"],
				["2, A - Np","A - Np"],
				["2, Pog - Np","Pog - Np"],
				["2a Upper Facial Height","Altura Facial Superior"],
				["2b Lower Facial Height","Altura Facial Inferior"],
				["2bB1 Right Lower Facial Height","Altura Facial Inferior Direita"],
				["2bB2 Left Lower Facial Height","Altura Facial Inferior Esquerda"],
				["2c Cranial Base Angle","Angulo da Base do Cranio"],
				["2d NBa-PtLGn","NBa-PtLGn"],
				["2e NBa-PtRGn","NBa-PtRGn"],
				["2f SpPol - GoLMe","SpPol - GoLMe"],
				["2g SpPoR - GoRMe","SpPoR - GoRMe"],
				["2h SNA","SNA"],
				["2i SNB","SNB"],
				["2j CondL - A","CondL - A"],
				["2k CondR - A","CondR - A"],
				["2l CondL - Gn","CondL - Gn"],
				["2m CondR - Gn","CondR - Gn"],
				["2n GoL Camper","GoL Campista"],
				["2oa GoR Camper","GoR Campista"],
				["2ob GoL Coronal Pl","GoL Plano Coronal"],
				["2oc GoR Coronal Pl","GoR Plano Coronal"],
				["2p JL Camper","JL Campista"],
				["2q JR Camper","JR Campista"],
				["2r MeFL X Camper","MeFL X Campista"],
				["2s MeFR X Camper","MeFR X Camper"],
				["2t MeFL X MSP","MeFL X MSP"],
				["2u MeFR X MSP","MeFR X MSP"],
				["2u,  MeFL Coronal Plane","MeFL Plano Coronal"],
				["2u,, MeFR Coronal Plane","MeFR Plano Coronal"],
				["2z Condylar Axis Left","Eixo Condilar Esquerdo"],
				["2z Condylar Axis Right","Eixo Condilar Direito"],
				["3c Capitulare L MSP","Capitular L MSP"],
				["3d Capitulare R MSP","Capitular R MSP"],
				["3DB CAPITULARE L PL, CORONAL","Capitular L PL, Coronal"],
				["3DA CAPITULARE R PL, CORONAL","Capitular R PL, Coronal"],
				["3DC CAPITULARE L PL, FRANKFURT","Capitular L PL Frankfurt"],
				["3DD CAPITULARE R PL, FRANKFURT","Capitular R PL, Frankfurt"],
				["3e Corpus Length Left","Comprimento do corpus esquerdo"],
				["3f Corpus Length Right","Comprimento do corpus esquerdo"],
				["CondL GoL","CondL GoL"],
				["CondR GoR","CondR GoR"],
				["Gn MSP","Gn MSP"],
				["GoL MSP","GoL MSP"],
				["GoR MSP","GoR MSP"],
				["JL MSP","JL MSP"],
				["JR MSP","JR MSP"],
				["Lower Dental Midline","Linha média dentária inferior"],
				["NSL x ML","NSL x ML"],
				["NSL x NL","NSL x NL"],
				["Upper Dental Midline","Linha média dentária superior"] 
];
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
					res[itemv[0]].name= itemv[1]
					res[itemv[0]].value= itemcsv[1]
				}
			})
		});

		this.csv= res;
	}
}

module.exports= PCHeader;