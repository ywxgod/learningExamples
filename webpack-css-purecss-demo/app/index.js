import purecss from 'purecss';
import component from './component';

console.dir(purecss);

const e1 = document.createElement('div');
e1.className = purecss['pure-button']+' '+purecss['pure-button-primary'];
e1.innerHTML = 'testButton';
document.body.appendChild(e1);

document.body.appendChild(component());