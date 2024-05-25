// QUERYS //

const div = document.querySelector('.textos');
const repetivotext = document.querySelector('.textoRepetivo');
const subtext = document.querySelector('.subtext');
const botonIndg = document.getElementById('indagar');
const sig = document.getElementById('indagar');
const web = document.getElementById('webClass');
const palabr = document.getElementById('palabra');
const colorFijo = document.getElementById('cambio');
const colorFijo1 = document.getElementById('cambio1');
const colorFijo2 = document.getElementById('cambio2');
const panel = document.getElementById('svgs');


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

}

text = 'Desarrolador Front-end y back-end en Formacion.';
efectoTextSecundario(subtext,text);




function efectoTextRepetivo(elementosR,rText,h=0){
elementosR.textContent += rText[h];

if(h === rText.length-1){

  return ;
    
};
setTimeout(() => efectoTextRepetivo(repetivotext,rText,h+1), 100);

};

rText = 'JAVASCRIPT, HTML, CSS, TAILWIND, SASS.';
efectoTextRepetivo(repetivotext,rText);


function siguiente() {
  window.scrollBy({
        top: 700,
         behavior: "smooth",
})
};

sig.onclick = siguiente;


const webC = () => {

  if ( palabr.textContent){
    return;}

function webEfect(elementosP,pl,k=0){
  elementosP.textContent += pl[k];
  
  if(k === pl.length-1){
  
    return;
      
  };
  setTimeout(() => webEfect(palabr,pl,k+1), 150);
};
pl = 'Usa los botones de la base de la pantalla.';
webEfect(palabr,pl); 

}
web.onclick = webC;


function scrollToElement(elementId) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  };

     if(!colorFijo.classList.contains('bg-bgColorNegro')){
   colorFijo.classList.add('bg-bgColorNegro');
   
 } else {
  colorFijo.classList.remove('bg-bgColorNegro');
  colorFijo.classList.add('bg-bgColorMordado');
  return;
    };
    
    if(!colorFijo1.classList.contains('bg-bgColorNegro')){
      colorFijo1.classList.add('bg-bgColorNegro');
      
    } else {
     colorFijo1.classList.remove('bg-bgColorNegro');
     colorFijo1.classList.add('bg-bgColorMordado');
     return;
       };

       if(!colorFijo2.classList.contains('bg-bgColorNegro')){
        colorFijo2.classList.add('bg-bgColorNegro');
        
      } else {
       colorFijo2.classList.remove('bg-bgColorNegro');
       colorFijo2.classList.add('bg-bgColorMordado');
       return;
         };
};


let icono = null;

panel.addEventListener('mouseenter', function() {
 
  if (!icono) {
    icono = document.createElement('i');
    icono.classList.add('text-center','w-[300px]', 'h-[200px]', 'bg-bgColorBlanco', 'rounded-2xl','flex','flex-col','text-bgColorMorado','font-secondary','font-bold');
    const element = document.createElement('a');
    element.textContent = 'Sobre mi';
    icono.appendChild(element);
    panel.insertAdjacentElement('beforebegin', icono);
  }
  if (icono) {
    panel.addEventListener('mouseleave', function() {
      
      icono.remove();
      icono=null
    
    });
  }
});



