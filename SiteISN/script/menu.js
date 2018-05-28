document.write(

		"<nav class='menunav'>\
					<button id='accueil' onclick='hello(1);'>Accueil</button>\
					<button id='explication' onclick='hello(2);'>Comment ça marche</button>\
					<button id='alimentsetcalories' onclick='hello(3);'>Les Aliments et Leurs Calories</button>\
					<button id='calcul' onclick='hello(4);'>Calculer ses calories</button>\
				</nav>"

	)


function hello(bouton){
	var depart = document.location.href;
	var index = depart.lastIndexOf('SiteISN') + 8;
	var ref = depart.substr(0,index);
	var arrive = '';
	if(bouton == 1){
		arrive = ref + 'index.html';
	}
	if(bouton == 2){
		arrive = ref + 'pages/explication.html';
	}
	if(bouton == 3){
		arrive = ref + 'pages/alimentsetcalories.html';
	}
	if(bouton == 4){
		arrive = ref + 'pages/calcul.html';
	}
	if(arrive == depart){
		alert('Vous y êtes !!')
	}else{
		window.location.href = arrive;
	}

		
		
}





