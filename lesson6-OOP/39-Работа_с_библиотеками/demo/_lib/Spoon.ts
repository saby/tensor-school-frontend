// Импорт приватного модуля из этой же библиотеки.
import Cutlery from './Cutlery.js';

export default class Spoon extends Cutlery {
    name(): string {
        return 'Spoon';
    }
}
