import { somme, message } from './mon-module.js';
console.log();    

document.getElementById("app").innerHTML += somme(3,2) + "</br>";
document.getElementById("app").innerHTML += message;