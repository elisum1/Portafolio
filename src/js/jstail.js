// QUERYS //

//QUERYS DE EFECTOS DE ESCTITURA//
const div = document.querySelector('.textos');
const repetivoText = document.querySelector('.textoRepetivo');
const palabraBienvenido = document.getElementById('bienvenido')
const textoPortatil = document.getElementById('textPortatil')
const efectoPt = document.getElementById('efectoPortatil')

const subtext = document.querySelector('.subtext');
const palabr = document.getElementById('palabra');

//Querys Botones//
const colorFijo = document.getElementById('cambio');
const colorFijo1 = document.getElementById('cambio1');
const colorFijo2 = document.getElementById('cambio2');
const colorFijo3 = document.getElementById('cambio3');
const colorFijo4 = document.getElementById('cambio4');
const colorFijo5 = document.getElementById('cambio5');



//Querys de el Avatar//
const panel = document.getElementById('svgs');
const web = document.getElementById('webClass');
const webClassN = document.getElementById('webClassNormal')

//Querys de cambio de diseño//

const mn = document.getElementById('main');
const headerColor= document.getElementById('headerGris');
const bgSection1 = document.getElementById('bgSection1');
const swichOn = document.getElementById('swichW');
const swichOff = document.getElementById('swichB');
const headerColorM = document.getElementById('headerMorado')
const colorPalabraElias = document.getElementById('textElias')
const colorMiEspecialidad = document.getElementById('miEspecialidad')


//EFECTOS ESCRITURA AUTOMATICA AL INICIAR LA PAGINA//

function efectoText(elemento,texto,i=0){
  elemento.textContent += texto[i];
  
  if(i === texto.length-1){
    return;
    }
setTimeout(() => efectoText(div,texto,i+1), 130);

}
texto = 'Full Satck Web Developer.';
efectoText(div,texto);


function efectoTextSecundario(elementos,text,j=0){
elementos.textContent += text[j];

if(j === text.length-1){
    return;
}
setTimeout(() => efectoTextSecundario(subtext,text,j+1), 100);

};

text = 'Desarrolador Front-end y back-end en Formacion.';
efectoTextSecundario(subtext,text);


function efectoTextRepetivo(elementosR,rText,h=0){
elementosR.textContent += rText[h];

if(h === rText.length-1){

  return ;
    
};
setTimeout(() => efectoTextRepetivo(repetivoText,rText,h+1), 100);

};

rText = 'BIENVENIDO';
efectoTextRepetivo(repetivoText,rText);


const webC = () => {
  if ( palabr.textContent && hidden){
    web.classList.remove('hidden')
    return;}

function webEfect(elementosP,pl,k=0){
  elementosP.textContent += pl[k];
  
  if(k === pl.length-1){
  
    return;
      
  };
  setTimeout(() => webEfect(palabr,pl,k+1), 150);
  
  const hidden = webClassN.classList.add('hidden')
  web.classList.remove('hidden')
  hidden;

};

pl = 'Usa los botones debajo del Avatar.';
webEfect(palabr,pl); 
console.log('el')
}
webClassN.onclick = webC;


const textoPort = ()=> {
 
  if(efectoPt.textContent){
    return
  }

  function efectoTextPortatil(elementosPt,rTextP,m=0){
    elementosPt.textContent += rTextP[m];
    
  if(m === rTextP.length-1){
  
    return ;
      
  };
  setTimeout(() => efectoTextPortatil(efectoPt,rTextP,m+1), 100);
};
rTextP = 'Me gusta diseñar interacciones con javascript';
efectoTextPortatil(efectoPt,rTextP);
}

textoPortatil.onclick = textoPort;

//interaccion de el swich que tiene posicion fixed//

const btnOn = () =>{

  swichOn.classList.add('hidden');
  swichOff.classList.remove('hidden');
  
  bgSection1.classList.remove('bg-bgColorMorado')
  bgSection1.classList.add('bg-bgColorVerde')
  
  palabraBienvenido.classList.remove('text-bgColorNegro')
  palabraBienvenido.classList.add('text-bgColorBlanco')
  
  colorPalabraElias.classList.remove('text-bgColorVerde')
  colorPalabraElias.classList.add('text-bgColorNegro')
  
  headerColorM.classList.remove('bg-bgColorVerde')
  headerColorM.classList.add('bg-bgColorMorado')

  

}
swichOn.onclick = btnOn

const btnOff = () =>{

  swichOff.classList.add('hidden');
  swichOn.classList.remove('hidden');

  headerColorM.classList.add('bg-bgColorVerde')
  headerColorM.classList.remove('bg-bgColorGris')

  bgSection1.classList.add('bg-bgColorBlanco')
  bgSection1.classList.remove('bg-bgColorVerde')

  palabraBienvenido.classList.add('text-bgColorNegro')
  palabraBienvenido.classList.remove('text-bgColorBlanco')

  colorPalabraElias.classList.remove('text-bgColorNegro')
  colorPalabraElias.classList.add('text-bgColorVerde')

}
swichOff.onclick = btnOff


//efecto scroll de la suavidad en que se redirigen las secciones mediante la interaccion de los botones//

function scrollToElement(elementId) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  };
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

//efectos de cambio de color cuando damos click a los botones de interaccion que tienen posicion fixed//

colorFijo.addEventListener('click', function() {

  if(!colorFijo.classList.contains('bg-bgColorNegro')){
colorFijo.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')
colorFijo3.classList.remove('bg-bgColorNegro')
colorFijo4.classList.remove('bg-bgColorNegro')
colorFijo5.classList.remove('bg-bgColorNegro')

}else{
  colorFijo.classList.remove('bg-bgColorNegro');
  colorFijo.classList.add('bg-bgColorMorado');
}

});

colorFijo1.addEventListener('click', function() {
  if(!colorFijo1.classList.contains('bg-bgColorNegro')){
colorFijo1.classList.add('bg-bgColorNegro');
colorFijo.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')
colorFijo3.classList.remove('bg-bgColorNegro')
colorFijo4.classList.remove('bg-bgColorNegro')
colorFijo5.classList.remove('bg-bgColorNegro')

}else{
  colorFijo1.classList.remove('bg-bgColorNegro');
  colorFijo1.classList.add('bg-bgColorMorado');
}

});

colorFijo2.addEventListener('click', function() {
  if(!colorFijo2.classList.contains('bg-bgColorNegro')){
colorFijo2.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo.classList.remove('bg-bgColorNegro')
colorFijo3.classList.remove('bg-bgColorNegro')
colorFijo4.classList.remove('bg-bgColorNegro')
colorFijo5.classList.remove('bg-bgColorNegro')

}else{
  colorFijo2.classList.remove('bg-bgColorNegro');
  colorFijo2.classList.add('bg-bgColorMorado');
}

});

colorFijo3.addEventListener('click', function() {
  if(!colorFijo3.classList.contains('bg-bgColorNegro')){
colorFijo3.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')
colorFijo4.classList.remove('bg-bgColorNegro')
colorFijo5.classList.remove('bg-bgColorNegro')

}else{
  colorFijo3.classList.remove('bg-bgColorNegro');
  colorFijo3.classList.add('bg-bgColorMorado');
}

});

colorFijo4.addEventListener('click', function() {
  if(!colorFijo4.classList.contains('bg-bgColorNegro')){
colorFijo4.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo.classList.remove('bg-bgColorNegro')
colorFijo3.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')
colorFijo5.classList.remove('bg-bgColorNegro')

}else{
  colorFijo4.classList.remove('bg-bgColorNegro');
  colorFijo4.classList.add('bg-bgColorMorado');
}

});

colorFijo5.addEventListener('click', function() {
  if(!colorFijo5.classList.contains('bg-bgColorNegro')){
colorFijo5.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo.classList.remove('bg-bgColorNegro')
colorFijo3.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')
colorFijo4.classList.remove('bg-bgColorNegro')

}else{
  colorFijo5.classList.remove('bg-bgColorNegro');
  colorFijo5.classList.add('bg-bgColorMorado');}
});
