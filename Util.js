class Util{

	// tipo de datos entrantes -> 0=Cualquier dato ; 1=Cualquier número ; 2=Solo número entero
	static entradaDato(mensaje,tipo=0){
		let entrada;
		let salida;
		do{
			salida=false;
			entrada=prompt(mensaje)??"";
			switch(tipo){
				case 1: salida=Util.esNumero(entrada); break;
				case 2: salida=(Util.esNumero(entrada) && !Util.esDecimal(entrada)); break;
				case 0: salida=true; break;
			}
		}while(!salida);
		return entrada;
	}

	static esNumero(texto){
		texto??=" ";
		if(texto=="" || texto=="."){ return false; }
		if(texto=="0"){ return true; }
		let decimales=0;
		if(texto[0]=="-"){
			texto=texto.replaceAll("-","");
		}
		for(let a=0; a<texto.length; a++){
			if(texto[a]=="."){
				decimales++;
			}else
			if(parseFloat(texto[a]).toString()=="NaN"){
				return false;
			}
			if(decimales>1){
				return false;
			}
		}
		return true;
	}

	static esDecimal(texto){
		if(Util.esNumero(texto)){
			if(texto%1==0){
				return false;
			}
		}else{
			return false;
		}
		return true;
	}

	static numeroAleatorio(min,max){
		return Math.round(Math.random()*(max-min)+min);
	}

}