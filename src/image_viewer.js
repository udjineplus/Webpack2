import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

let image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

let bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);