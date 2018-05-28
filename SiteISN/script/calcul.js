function cal(){
	document.getElementById('resultat1').style.opacity = '1';
	document.getElementById('resultat2').style.opacity = '1';
	document.getElementById('resultat3').style.opacity = '1';
	document.getElementById('resultat4').style.opacity = '1';
	var sexe = elemSelected("sexe");
	var age = document.getElementById('age').value;
	var taille = document.getElementById('taille').value;
	var poids = document.getElementById('poids').value;
	var act = elemSelected('act');
	var attentes = elemSelected('attentes');
	console.log('sexe' + sexe + 'age' + age + 'taille' + taille + 'poids' + poids + 'act' + act + 'attentes' + attentes);
	

	if(sexe == 'rien' && act == 'rien' && attentes == 'rien'){
		alert('Veuillez remplir le formulaire');
	}else{
		var calConsom = calConsomF();
		var calRequis = 0;
		var rs = 0;
		if(sexe == 'femme'){
		calRequis = (9.5634*poids) + (184.96*taille) - (4.6756*age) + 655.0955;
		calRequis = calRequis * act;
		console.log('calrequis' + calRequis);
		}
		if (sexe == 'homme') {
			calRequis = (13.7516*poids) + (500.33*taille) - (6.7550*age) + 66.473;
		}

		if(attentes =='maigrir'){
			calRequis = Math.round(calRequis*0.90);
			rs = 3;
		}
		if(attentes == 'grossir'){
			calRequis = Math.round(calRequis*1.10);
			rs = 4;
		}
		if(attentes == 'maintien'){
			calRequis = Math.round(calRequis);
			rs = 1;
		}

		var ecart = ((Math.abs(calRequis - calConsom))/calRequis)*100;
		console.log("ecart " + ecart + "consommé" + calConsom);

		if(ecart <= 10){
			alert('Vous avez consommé ' + calConsom + ' et vous auriez du consommé ' + calRequis + ' vous êtes dans la fourchette acceptable');
		}else{
			alert('Vous auriez du consommé ' + calRequis + ' mais vous avez consommé ' + calConsom);
			rs = 2;
		}
		dispResult(rs);
	}
	


}

function elemSelected(str){
	var selectElmt = document.getElementById(str);
	console.log(selectElmt);
	var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
	return valeurselectionnee;
}

function calPlatN(i){
	var platN = 'plat' + i;
	var plat = elemSelected(platN);
	var qteN = 'qte' + i;
	var qte = document.getElementById(qteN).value;
	var calPlatN = (plat/100) * qte;
	return calPlatN;
}

function calConsomF(){
	var calConsom = 0;
	for (var i = 1; i < 13; i++){
		console.log(i);
		calConsom = calPlatN(i) + calConsom;
	}
	return calConsom;
	
}

function dispResult(nbr){
	document.getElementById('resultat' + nbr).style.opacity = '1';
}