// Импорт приватного модуля из этой же библиотеки.
import Cutlery from './Cutlery.js';

export default class Knife extends Cutlery {
    name(): string {
        return 'Knife';
    }
}
