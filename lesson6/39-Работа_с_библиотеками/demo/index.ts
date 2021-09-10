// Примеры статического подключения
import {Knife, Fork as MetalFork} from './lib.js';

const knife = new Knife();
const fork = new MetalFork();

// Пример динамического подключения через await
let spoon;
try {
    const {Spoon} = await import('./lib.js');
    spoon = new Spoon();
} catch (err) {
    console.error(err);
}

// Пример динамического подключения через Promise
let plate;
import('./lib.js').then(({Plate}) => {
    plate = new Plate();
    console.log(plate.name(), plate.material());
}).catch((err) => {
    console.error(err);
})

console.log(spoon.name(), spoon.material());
console.log(knife.name(), knife.material());
console.log(fork.name(), fork.material());
