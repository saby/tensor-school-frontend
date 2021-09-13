// Импорт приватного модуля из этой же библиотеки.
import Cutlery from './Cutlery.js';

export default class Fork extends Cutlery {
    name(): string {
        return 'Fork';
    }
}
