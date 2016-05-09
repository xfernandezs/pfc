var km = null;
var lat_fi = null;
var lat_inici = null;
var lon_inici = null;
var lon_fi = null;
var nom = null;
var hashtag= null;
var lats_lons = [];
var marcadors = [];
var dificultat = null;
var desnivell = null;


function inicia() {
	
	var segmentsInicials = window.localStorage.getItem("segmentsInicials");
	var objectIds = segmentsInicials.split(",");
	var llistaSegments= document.getElementById("llistaSegments");
	llistaSegments.innerHTML = "";
	for (var i = 0; i < objectIds.length; i++) {
		var coses = objectIds[i].split(";");
		nom = coses[0];
		km = coses[1];
		lat_inici = coses[2];
		lon_inici = coses[3];
		lat_fi = coses[4];
		lon_fi = coses[5];
		hashtag = coses[6];
		var arr_lats_lons = "";
		var arr = coses[7].split("|");
		for(var j=0; j<arr.length;j++){
			if(j==0){
				arr_lats_lons = arr[j];
			}else{
				arr_lats_lons = arr_lats_lons +","+ arr[j];
			}
		}
		dificultat = coses[8];	
		desnivell = coses[9]; 		
		var newLlista = document.createElement("li");
		newLlista.id = "newLlista"+i;
		newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
		window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat+";"+desnivell);
		llistaSegments.appendChild(newLlista);
	}
}

function recuperaPosition(){
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			window.localStorage.setItem("posLati",position.coords.latitude);
			window.localStorage.setItem("posLongi",position.coords.longitude);
		}	
		)
		
	}else{
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	}
}

function handleNoGeolocation(errorFlag) {
	if (errorFlag) {
		alert("Error: The Geolocation service failed.");
	} else {
		alert("Error: Your browser doesn\'t support geolocation.");
	}
}

function iniciaSegmentAmbFiltre(){

	var filtre1 = window.localStorage.getItem("filtre1LlistaSegments");
	var filtre2 = window.localStorage.getItem("filtre2LlistaSegments");
	var filtre3 = window.localStorage.getItem("filtre3LlistaSegments");
	var filtre4 = window.localStorage.getItem("filtre4LlistaSegments");
	var segmentsInicials = window.localStorage.getItem("segmentsInicials");
	var objectIds = segmentsInicials.split(",");
	var llistaSegments= document.getElementById("llistaSegments");
	llistaSegments.innerHTML = "";
	var pos_i=window.localStorage.getItem("posLati");
	var pos_y=window.localStorage.getItem("posLongi");
	var posicio_inici = new google.maps.LatLng(pos_i,pos_y);
	for (var i = 0; i < objectIds.length; i++) {
		var coses = objectIds[i].split(";");
		var posicio_fi = new google.maps.LatLng(coses[2],coses[3]);	
		var distancia = google.maps.geometry.spherical.computeDistanceBetween(posicio_inici, posicio_fi);
		
		if(filtre1!='false' && filtre2!='false' && filtre3!='false' && filtre4!='false'){ //tots
			if(distancia <=20000 && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];	
				desnivell = coses[9];		
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre1!='false' && filtre2!='false' && filtre3!='false' && filtre4!='true'){ // nomes els 3 primers
			if(distancia <=20000){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];	
				desnivell = coses[9];				
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre1!='false' && filtre2!='false' && filtre4!='false' && filtre3!='true'){ // nomes els 2 primers i ultim
			if(coses[8]=="Hard" || coses[8]=="Medium-Hard"){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre2!='false' && filtre1!='true' && filtre3!='true' && filtre4!='true'){ //només el 2
			if(coses[9]=="Desc"){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre1!='false' && filtre2!='true' && filtre3!='true' && filtre4!='true'){ //només el 1
			if(coses[9]=="Asc"){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre3!='false' && filtre1!='true' && filtre2!='true' && filtre4!='true'){ //només el 3
			if(distancia <=20000){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];	
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre4!='false' && filtre1!='true' && filtre2!='true' && filtre3!='true'){ //només el 4
			if(coses[8]=="Hard" || coses[8]=="Medium-Hard"){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre3!='false' && filtre4!='false' && filtre1!='true' && filtre2!='true'){ //3r i 4t
			if(distancia <=20000 && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre1!='false' && filtre3!='false' && filtre2!='true' && filtre4!='true'){ //1r i 3r
			if(coses[9]=="Asc" && distancia <=20000){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else if(filtre1!='false' && filtre4!='false' && filtre2!='true' && filtre3!='true'){ //1r i 4t
			if(coses[9]=="Asc" && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else if(filtre2!='false' && filtre3!='false' && filtre1!='true' && filtre4!='true'){ //2n i 3r
			if(coses[9]=="Desc" && distancia <=20000){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else if(filtre2!='false' && filtre4!='false' && filtre1!='true' && filtre3!='true'){ //2n i 4t
			if(coses[9]=="Desc" && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		}else if(filtre1!='false' && filtre3!='false' && filtre4!='false' && filtre2!='true'){ //1r, 3r i 4t
			if(coses[9]=="Asc" && distancia <=20000 && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else if(filtre1!='true' && filtre3!='false' && filtre4!='false' && filtre2!='false'){ //2r, 3r i 4t
			if(coses[9]=="Desc" && distancia <=20000 && (coses[8]=="Hard" || coses[8]=="Medium-Hard")){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else if(filtre1!='false' && filtre3!='false' && filtre4!='true' && filtre2!='false'){ //1r, 2r i 3r
			if(coses[9]=="Asc" && coses[9]=="Desc" && distancia <=20000){
				nom = coses[0];
				km = coses[1];
				lat_inici = coses[2];
				lon_inici = coses[3];
				lat_fi = coses[4];
				lon_fi = coses[5];
				hashtag = coses[6];
				var arr_lats_lons = "";
				var arr = coses[7].split("|");
				for(var j=0; j<arr.length;j++){
					if(j==0){
						arr_lats_lons = arr[j];
					}else{
						arr_lats_lons = arr_lats_lons +","+ arr[j];
					}
				}
				dificultat = coses[8];
				desnivell = coses[9];	
				var newLlista = document.createElement("li");
				newLlista.id = "newLlista"+i;
				newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
				window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
				llistaSegments.appendChild(newLlista);
			}
		
		}else{
			nom = coses[0];
			km = coses[1];
			lat_inici = coses[2];
			lon_inici = coses[3];
			lat_fi = coses[4];
			lon_fi = coses[5];
			hashtag = coses[6];
			var arr_lats_lons = "";
			var arr = coses[7].split("|");
			for(var j=0; j<arr.length;j++){
				if(j==0){
					arr_lats_lons = arr[j];
				}else{
					arr_lats_lons = arr_lats_lons +","+ arr[j];
				}
			}
			dificultat = coses[8];
			desnivell = coses[9];	
			var newLlista = document.createElement("li");
			newLlista.id = "newLlista"+i;
			newLlista.innerHTML = "<table><tr><td><div id='mostra3_"+i+"' class='arrow-right'></div></td><td><h3>&nbsp;&nbsp;Segment: <a href='detall.html' onclick='seteja("+i+");'>"+nom+"</a></h3><div id='mostraDetallSegment_"+i+"' class='hidden'>Km: "+km+" Difficulty: "+dificultat+" Slope: "+desnivell+"</div></td></tr></table>";
			window.localStorage.setItem("newLlista"+i, km+";"+lat_fi+";"+lat_inici+";"+lon_inici+";"+lon_fi+";"+nom+";"+hashtag+";"+arr_lats_lons+";"+dificultat);
			llistaSegments.appendChild(newLlista);	
		}
	}	
}

function seteja(i){
	window.localStorage.setItem("detall", i);
}
function obreDetall()
{
	var value = window.localStorage.getItem("detall");
	var objecte = window.localStorage.getItem("newLlista"+value);
	var arrayS = objecte.split(";");
	km = arrayS[0];
	lat_fi = arrayS[1];
	lat_inici = arrayS[2];
	lon_inici = arrayS[3];
	lon_fi = arrayS[4];
	nom = arrayS[5];
	hashtag = arrayS[6];
	lats_lons = arrayS[7];
	dificultat = arrayS[8];
	desnivell = arrayS[9];	
	var detallMapa= document.getElementById("detallMapa");
	detallMapa.innerHTML = "";
    var newLlistaDetall = document.createElement("li");
	newLlistaDetall.id = "newLlistaDetall";
	newLlistaDetall.innerHTML = "<h2>Track name and distance: <h3> "+nom+" - "+km+"km</h3><h3> Difficulty: "+dificultat+"</h3><h3> Slope: "+desnivell+"</h3></h2>";
    detallMapa.appendChild(newLlistaDetall);
	window.localStorage.setItem("DadesMapa", lat_inici+";"+lon_inici+";"+lat_fi+";"+lon_fi);
	window.localStorage.setItem("DadesMapa_lats_lons", lats_lons);
	window.localStorage.setItem("HashTagDetall", hashtag);
	retornaTumblr();
	retornaTumblrVideos();
	obreMapa();
	
	document.title = "Segment "+nom+" ready to ride";
	$.getScript("http://platform.twitter.com/widgets.js");
	var tweetBtn= document.getElementById("tweetBtn");
	var twitter = document.createElement('a');
	twitter.setAttribute('href', 'http://twitter.com/share');
	twitter.setAttribute('class', 'twitter-share-button twitter-tweet');
	twitter.setAttribute('data-text', '"I found this segment thanks to LOSEC App. I am ready to ride it!"');
	twitter.setAttribute('data-hashtags',hashtag);
	twitter.setAttribute('data-count', 'horizontal');
	twitter.setAttribute('data-via', 'XaviFdez');
	twitter.setAttribute('data-lang','es');
	twitter.style.top = '30px';
	twitter.style.left = '400px';
	tweetBtn.appendChild(twitter);
	
}

function retornaTumblr(){
	
	$.ajax({
		url:"http://api.tumblr.com/v2/blog/xfernandezspfc.tumblr.com/posts",
		method: 'get',
		data: ({
				api_key: '0iwEZPWExOdQcvY6hwKgvOBJm8N10l0aoko5rc5TmMRO00QWEX',
				type: 'photo'
			  }),
		dataType:"jsonp",
		jsonpCallback: "getImages",
		complete: function() { },
		error: function() { }
	});
}

function retornaTumblrVideos(){
	
	$.ajax({
		url:"http://api.tumblr.com/v2/blog/xfernandezspfc.tumblr.com/posts",
		method: 'get',
		data: ({
				api_key: '0iwEZPWExOdQcvY6hwKgvOBJm8N10l0aoko5rc5TmMRO00QWEX',
				type: 'video'
			  }),
		dataType:"jsonp",
		jsonpCallback: "getVideos",
		complete: function() { },
		error: function() { }
	});
}

function getVideos(json){

	var videos = [];
	var f_url;
	var f_caption;
	var post = json['response']['posts'];
	var hashtag = window.localStorage.getItem("HashTagDetall");
	for(i = 0; i < post.length; i++){
		if(post[i]['tags']==hashtag){
			f_caption = post[i]['caption'];
			f_caption=f_caption.replace("<p>","");
			f_caption=f_caption.replace("</p>","");
			f_url = post[i]['video_url'];
			videos.push({caption: f_caption, url: f_url});				
		}
	}
	var llistavideos = [];
	for(i=0; i<videos.length; i++){
		var tall = videos[i].caption;
		var img = "<video id=video'"+i+"' width='200' height='200' controls><source src='"+videos[i].url+"' type='video/mp4'></video>";
		llistavideos.push(img);
	}
	$('#videos_segment').html(llistavideos.join(''));

}


function getImages(json){
	var images = [];
	var fotos = [];
	var alt_sizes = [];
	var f_url;
	var f_caption;
	var post = json['response']['posts'];
	var hashtag = window.localStorage.getItem("HashTagDetall");
	for(i = 0; i < post.length; i++){
		if(post[i]['tags']==hashtag){
			fotos = post[i]['photos'];
			f_caption = post[i]['caption'];
			f_caption=f_caption.replace("<p>","");
			f_caption=f_caption.replace("</p>","");
			for(j = 0; j < fotos.length; j++){
				alt_sizes = fotos[j]['alt_sizes'];
				for(x=0; x < alt_sizes.length; x++){
					if(alt_sizes[x]['width'] == 500 || alt_sizes[x]['width'] == 75){
						f_url = alt_sizes[x]['url'];
						images.push({caption: f_caption, url: f_url});				
					}
				}
			}
		}
	}
	var llistaIni = [];
	var llistaFi = [];
	for(i=0; i<images.length; i++){
		var tall = images[i].caption.split(" ");
		var img = "<a href='"+images[i].url+"'><img src='"+images[i+1].url+"' /></a>";
		if(tall[0]=='Inici'){
			llistaIni.push(img);
		}else {
			llistaFi.push(img);
		}
		i++;
	}
	$('#imatges_inici').html(llistaIni.join(''));
	$('#imatges_fi').html(llistaFi.join(''));


}


function obreMapa(){

	var dadesMapa = window.localStorage.getItem("DadesMapa");
	var dadesMapa_lats_lons = window.localStorage.getItem("DadesMapa_lats_lons");
	var arrayLatsLongs = dadesMapa_lats_lons.split(",");
	var arrayDadesMapa = dadesMapa.split(";");
	
	var map;
	var myLatlng = new google.maps.LatLng(arrayDadesMapa[0],arrayDadesMapa[1]);
	var mapOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl: true
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var markerIni = new google.maps.Marker({
		position: new google.maps.LatLng(arrayDadesMapa[0],arrayDadesMapa[1]),
		map: map
	});

	var markerFi = new google.maps.Marker({
		position: new google.maps.LatLng(arrayDadesMapa[2],arrayDadesMapa[3]),
		map: map
	});

	var infoWindowsIni = new google.maps.InfoWindow({
		map: map,
		position: new google.maps.LatLng(arrayDadesMapa[0],arrayDadesMapa[1]),
		content: 'Start!.'
	});
	
	var infoWindowsFi = new google.maps.InfoWindow({
		map: map,
		position: new google.maps.LatLng(arrayDadesMapa[2],arrayDadesMapa[3]),
		content: 'Finish!.'
	});
	makeInfoWindowEvent(map, infoWindowsIni, markerIni);
	makeInfoWindowEvent(map, infoWindowsFi, markerFi);

	var arrayFinal = [];
	for(i=0; i<arrayLatsLongs.length; i++){
		if(i == 0){
			arrayFinal.push(new google.maps.LatLng(arrayDadesMapa[0],arrayDadesMapa[1]));
		}
		arrayFinal.push(new google.maps.LatLng(arrayLatsLongs[i], arrayLatsLongs[i+1]));
		i++;
	}
	arrayFinal.push(new google.maps.LatLng(arrayDadesMapa[2],arrayDadesMapa[3]));
 
    var polyline = new google.maps.Polyline({
        path: arrayFinal
        , map: map
        , strokeColor: '#ff0000'
        , strokeWeight: 5
        , strokeOpacity: 0.3
        , clickable: false
    });

}

function makeInfoWindowEvent(map, infowindow, marker) {
  google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map, marker);
  });
}

function recuperaSegmentsInicials(){
	recuperaPosition();
	var locationNameArray = [];
	var locationArray = [];
	var segmentsInicials = [];
	Parse.initialize("as17B246NEIMTr19h8fCYEB1CHuKeyFxcyCHcoMj", "b4qcQ3qhwhqlqsPG9L8XGdgLbbhiZceUd4Vc665l");
	var query = new Parse.Query("Segments");
	query.find({
		success: function(objectIds) {
			for (var i = 0; i < objectIds.length; i++) {
				var lat_i = objectIds[i].get("lat_inici");
				var lon_i = objectIds[i].get("lon_inici");
				var nom = objectIds[i].get("nom");
				var lat_f = objectIds[i].get("lat_fi");
				var lon_f = objectIds[i].get("lon_fi");
				var hashtag = objectIds[i].get("hashtag");
				var km = objectIds[i].get("km");
				var lats_lons = objectIds[i].get("lats_lons");
				var dificultat = objectIds[i].get("dificultat");
				var desnivell = objectIds[i].get("Desnivell");	
				var arr_lats_lons = "";
				var arr = lats_lons.split(",");
				if(lats_lons!=null){
					for(var j=0; j<arr.length;j++){
						if(j==0){
							arr_lats_lons = arr[j];
						}else{
							arr_lats_lons = arr_lats_lons +"|"+ arr[j];
						}
					}
				}
				var segmentsIni = [nom+";"+km+";"+lat_i+";"+lon_i+";"+lat_f+";"+lon_f+";"+hashtag+";"+arr_lats_lons+";"+dificultat+";"+desnivell];
				segmentsInicials.push(segmentsIni);
				window.localStorage.setItem("segmentsInicials", segmentsInicials);
				var marcador = [lat_i, lon_i];
				locationArray.push(marcador);
				locationNameArray.push("'"+nom+"'");
				window.localStorage.setItem("locationArray", locationArray);
				window.localStorage.setItem("locationNameArray", locationNameArray);
			}
			window.localStorage.setItem("filtrekm", document.getElementById("myonoffswitch3").checked);
			
		},
		error: function(object, error) {
			// The object was not retrieved successfully.
		  // error is a Parse.Error with an error code and description.
		}
	});
}









