const PCHeader= require("./../Headers/PCHeader.js");

class PCBuilt extends PCHeader{
	constructor(){
		super();
		console.log(this.csv)
	}
}

var a= new PCBuilt();