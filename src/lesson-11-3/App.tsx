import './App.css';
import {useState, useEffect, ChangeEvent} from 'react';

// TODO оставить только верстку с testid
// Убрать зависимости react, state, обработчики
function App() {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);

    useEffect(() => {
        const id = setInterval(() => {
            setCounter((count) => count + 1);
        }, delay);
        return () => clearInterval(id);
    }, [delay])

    return (
        <div className="App">
            <div className="App__counter">
                Counter: {counter}
                <button data-testid="reset"
                        className="App__reset"
                        onClick={() => setCounter(0)}>
                    Reset
                </button>
            </div>
            <div className="App__input">
                <input data-testid="input"
                       pattern="\d"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setDelay(Number(e.target.value))}
                       value={delay}/>
            </div>
        </div>
    );
}

export default App;
