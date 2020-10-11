let log = console.log;

document.addEventListener('DOMContentLoaded', init);//DOMContetLoaded means: Cuando termine de leer el browser va a ejecutar la funcion init

function init(){
    let txt = document.getElementById('txt');
    txt.addEventListener('keydown', anykey)
}

function anykey(ev){
   // log(ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    log(char, tag);
    let s = String.fromCharCode(char);
    //log(s)

}

