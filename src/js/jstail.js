// QUERYS //

const div = document.querySelector('.textos');
const repetivoText = document.querySelector('.textoRepetivo');
const subtext = document.querySelector('.subtext');
const botonIndg = document.getElementById('indagar');
const sig = document.getElementById('indagar');
const web = document.getElementById('webClass');
const palabr = document.getElementById('palabra');
const colorFijo = document.getElementById('cambio');
const colorFijo1 = document.getElementById('cambio1');
const colorFijo2 = document.getElementById('cambio2');
const panel = document.getElementById('svgs');
const webClassN = document.getElementById('webClassNormal')
const mn = document.getElementById('main');
const headerM = document.getElementById('headerMorado');
const bgSection1 = document.getElementById('bgSection1');
const swichOn = document.getElementById('swichW');
const swichOff = document.getElementById('swichB');



//EFECTOS ESCRITURA//

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
};
pl = 'Usa los botones debajo del Avatar.';

const hidden = webClassN.classList.add('hidden')
web.classList.remove('hidden')
hidden;

webEfect(palabr,pl); 



}
webClassN.onclick = webC;




//Buttons//

const btnOn = () =>{

  swichOn.classList.add('hidden');
  swichOff.classList.remove('hidden');
 headerM.classList.add('bg-bgColorNegro')
 bgSection1.classList.add('bg-bgColorNegro')

}
swichOn.onclick = btnOn

const btnOff = () =>{

  swichOff.classList.add('hidden');
  swichOn.classList.remove('hidden');

  headerM.classList.add('bg-bgColorMorado')
  headerM.classList.remove('bg-bgColorNegro')

  bgSection1.classList.add('bg-bgColorMorado')
  bgSection1.classList.remove('bg-bgColorNegro')

}
swichOff.onclick = btnOff


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

colorFijo.addEventListener('click', function() {
  if(!colorFijo.classList.contains('bg-bgColorNegro')){
colorFijo.classList.add('bg-bgColorNegro');
colorFijo1.classList.remove('bg-bgColorNegro')
colorFijo2.classList.remove('bg-bgColorNegro')

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

}else{
  colorFijo2.classList.remove('bg-bgColorNegro');
  colorFijo2.classList.add('bg-bgColorMorado');
}

});