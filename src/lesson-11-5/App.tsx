import './App.css';
import {useState, ChangeEventHandler, useCallback, MouseEventHandler, KeyboardEventHandler} from 'react';
// TODO наверно убрать все кроме верстки с className и testid
const onlyExpressionSymbols = /[^0-9+\-=*/.]/g;
const doubleSigns = /([-+=*/.])[+=*/.]*/g;
const doubleSub = /(-)-*/g;
const startSign = /^[+=*/]/;
const SIGNS: Record<string, string> = {
    '÷': '/',
    '×': '*',
    '−': '-'
}

function App() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleExpression = useCallback((expression) => {
        try {
            // потому шо лень
            // eslint-disable-next-line no-eval
            const result = eval(expression);
            setResult(+result.toFixed(10) + '');
        } catch {}
    }, [])

    const updateExpression = useCallback((value: string) => {
        const newValue = value.replace(startSign, '')
            .replace(onlyExpressionSymbols, '')
            .replace(doubleSigns, '$1')
            .replace(doubleSub, '$1');
        if (newValue !== expression) {
            if (newValue[newValue.length - 1] === '=') {
                handleExpression(newValue.slice(0, -1));
            } else {
                setExpression(newValue);
            }
        }
    }, [expression, setExpression, handleExpression])

    const changeString: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const {value} = e.target;
        updateExpression(value);
    }, [updateExpression])

    const keyboardClick = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        const {target} = event;
        const HTMLTarget = target as HTMLElement;
        if (HTMLTarget.children.length === 0) {
            const addition = SIGNS[HTMLTarget.textContent as string] || HTMLTarget.textContent;
            updateExpression(expression + addition);
        }
    }, [expression, updateExpression]);

    const onSubmit = useCallback<KeyboardEventHandler>(
        (event) => event.key === "Enter" && handleExpression(expression),
        [handleExpression, expression]
    );

    return (<div className="App">
        <div className="App__calculator">
            <div data-testid="result"
                 className="App__result">
                {result}
            </div>
            <input data-testid="input"
                   className="App__string"
                   value={expression}
                   onChange={changeString}
                   onKeyPress={onSubmit}/>
            <div
                data-testid="keyboard"
                className="App__keyboard"
                onClick={keyboardClick}>
                <div>7</div><div>8</div><div>9</div><div>÷</div>
                <div>4</div><div>5</div><div>6</div><div>×</div>
                <div>1</div><div>2</div><div>3</div><div>−</div>
                <div>0</div><div>.</div><div>=</div><div>+</div>
            </div>
        </div>
    </div>)
}

export default App;
