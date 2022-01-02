var section = document.querySelector("#section");
var classe = document.querySelector("#Classe");
var numero = document.querySelector("#numero");
var selectbutton = document.querySelector(".disabledbut");
var image = document.querySelector(".image");
var options = document.querySelectorAll(".option");
var name;
var c,s,n;
var navmob = document.querySelector(".navmob");
var mobli = document.querySelectorAll(".mobli");
var burger = document.querySelector(".burger");
var header = document.querySelector(".header");

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}

function classeselected(x) {
	if (x == 0){
		section.disabled = true;
		numero.disabled = true;
		section[0].selected = 'selected';
		numero[0].selected = 'selected';
		selectbutton.className = "disabledbut";
		if (classe.parentElement.parentElement.id == "classes") {
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Classe</b> will appear here.</p>';
			image.style.width = "400px";
			image.style.height = "450px";
		}else{
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Emploit</b> will appear here.</p>';
			image.style.width = "600px";
			image.style.height = "380px";
		}
		
	} else if ((x != 0) && (x != 'Premiére')){
		section[0].selected = 'selected';
		numero[0].selected = 'selected';
		numero.disabled = true;
		selectbutton.className = "disabledbut";
		section.disabled = false;
		c = x;
		if (x == "Deusiéme") {
			section[3].className = "option";
		} else {
			section[3].className = "";
		}

	} else if (x == 'Premiére'){
		numero.disabled = false;
		section.disabled = true;
		section[0].selected = 'selected';
		numero[0].selected = 'selected';
		selectbutton.className = "disabledbut";
		name = classe.parentElement.parentElement.id
		c = x;
		for (let i = 0; i < options.length; i++) {
    		checkImage(name+'/'+c+'/S'+i+'.jpg', function(){options[i-1].className="";}, function(){options[i-1].className="option"; } );
		}
	};
};
function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}
function sectionselected(x){
	if (x != 0){
		numero[0].selected = 'selected';
		selectbutton.className = "disabledbut";
		numero.disabled = false;
		s = x;
		name = section.parentElement.parentElement.id
		for (let i = 0; i < options.length; i++) {
    		checkImage(name+'/'+c+'/S'+i+"_"+s+'.jpg', function(){options[i-1].className="";}, function(){options[i-1].className="option"; } );
		}
	}else if (x == 0){
		numero.disabled = true;
		selectbutton.className = "disabledbut";
		numero[0].selected = 'selected';
		if (section.parentElement.parentElement.id == "classes") {
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Classe</b> will appear here.</p>';
			image.style.width = "400px";
			image.style.height = "450px";
		}else{
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Emploit</b> will appear here.</p>';
			image.style.width = "600px";
			image.style.height = "380px";
		}
	};
};

function numeroselected(x){
	if (x != 0){
		selectbutton.className = "selectbut";
		n = x;
	}else if (x == 0){
		selectbutton.className = "disabledbut";
		if (numero.parentElement.parentElement.id == "classes") {
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Classe</b> will appear here.</p>';
			image.style.width = "400px";
			image.style.height = "450px";
		}else{
			image.innerHTML ='<p style="color: #457b9d;">Your <b style="color: #457b9d;">Emploit</b> will appear here.</p>';
			image.style.width = "600px";
			image.style.height = "380px";
		}
	}
};

function choose(){
	if (c == 'Premiére') {
		image.style.width = "auto";
		image.style.height = "auto";
		if (image.parentElement.children[0].children[0].id == "classes") {
			image.innerHTML = '<a href="'+name+'/'+c+'/'+n+'.jpg" target="_blank"><img id="myimage" class="innerimage" src="'+name+'/'+c+'/'+n+'.jpg" width = 400px ></a>';
		}else{
			image.innerHTML = '<a href="'+name+'/'+c+'/'+n+'.jpg" target="_blank"><img id="myimage" class="innerimage" src="'+name+'/'+c+'/'+n+'.jpg" width = 600px ></a>';
		}
		
	} else {
		image.style.width = "auto";
		image.style.height = "auto";
		if (image.parentElement.children[0].children[0].id == "classes") {
			image.innerHTML = '<a href="'+name+'/'+c+'/'+n+'_'+s+'.jpg" target="_blank"><img id="myimage" class="innerimage" src="'+name+'/'+c+'/'+n+'_'+s+'.jpg" width = 400px ></a>';
		}else{
			image.innerHTML = '<a href="'+name+'/'+c+'/'+n+'_'+s+'.jpg" target="_blank"><img id="myimage" class="innerimage" src="'+name+'/'+c+'/'+n+'_'+s+'.jpg" width = 600px ></a>';
		}
		
	}
};

function showhide(){
	navmob.classList.toggle("navactive");
	for (var i = mobli.length - 1; i >= 0; i--) {
		mobli[i].classList.toggle("liactive");
	}
}

document.addEventListener('click', function(event) {
    var isClickInsideElement = header.contains(event.target);
    if (!isClickInsideElement) {
        navmob.classList = "navmob";
        for (var i = mobli.length - 1; i >= 0; i--) {
			mobli[i].className = "li mobli";
		}
    }
});