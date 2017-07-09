/*
import sum from './sum';
import './image_viewer';

window.sum = sum;
const total = sum(10, 5); 
console.log(total);
*/

const button = document.createElement('button');
button.innerText = 'Ckuck me';
button.onclick = () => {
	System.import('./image_viewer').then(module => {
		console.log(module);
		module.default();
	});
};

document.body.appendChild(button);

