import './App.css'
import {ReactFragment, useState} from 'react';

type ListType = 'unordered' | 'ordered';
function toggleListType(listType: ListType): ListType {
    return listType === 'unordered' ? 'ordered' : 'unordered';
}

type Color = 'red' | 'violet';
function toggleColor(color: Color): Color {
    return color === 'red' ? 'violet' : 'red';
}

type Font = 'big' | 'small';
function toggleFont(font: Font): Font {
    return font === 'big' ? 'small' : 'big';
}

// TODO убрать
function ListItems(): ReactFragment {
    return <>
        <li>Посмотреть вокруг</li>
        <li>Оглянуться назад</li>
        <li>Рыбов купить</li>
        <li>"Красивое" сказать</li>
    </>;
}

function App() {
    const [listType, setListType] = useState<ListType>('unordered');
    const [color, setColor] = useState<Color>('red');
    const [font, setFont] = useState<Font>('big');
    return (
        <div className="App">
            {/* Изменения делать только ниже */}
            <div className={"App__list App__list-" + font} data-testid="list"
                style={{
                    color: color
                }}>
                {listType === 'unordered' ?
                    <ul>{ListItems()}</ul> :
                    <ol>{ListItems()}</ol>}
            </div>
            {/* Изменения делать только выше */}
            <div className="App__buttons" data-testid="buttons">
                <button data-testid="listType"
                        onClick={() => setListType(toggleListType)}>
                    {'Хочу ' + (listType === 'unordered' ? 'цифры' : 'точки')}
                </button>
                <button data-testid="color"
                        onClick={() => setColor(toggleColor)}>
                    {'Хочу ' + (color === 'red' ? 'фиолетовый' : 'красный' )}
                </button>
                <button data-testid="fontSize"
                        onClick={() => setFont(toggleFont)}>
                    {'Хочу ' + (font === 'big' ? 'маленькие' : 'большие' )}
                </button>
            </div>
            <div className="App__image"/>
        </div>
    );
}

export default App;
