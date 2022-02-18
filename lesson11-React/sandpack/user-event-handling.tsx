/**
 * Пример пользовательского события
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';
import { useState, useCallback, useEffect } from 'react';

// 1. Извлекаем из пропсов колбэк
function Clock({ onMinuteChanged }) {
  const [date, setDate] = useState(new Date());
  // 2. Когда cекунды пришли в 0, значит пошла новая минута
  // Если убрать это условие колбэк будет вызываться раз в секунду
  if (date.getSeconds() === 0) {
      // 3. Вызовем колбэк с новым значением минут
      onMinuteChanged(date.getMinutes());
  }
  useEffect(() => {
    const timerId = setTimeout(() => setDate(new Date()), 1000);
    return () => {
      clearTimeout(timerId);
    }
  })
  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function ClockWithCuckoo() {
    // Создаем колбэк используя хук useCallback
    const minuteChanged = useCallback((minute) => {
        playCuckoo = () => console.log('cuckoo');
        // Проигрываем "куку" раз в 2 минуты
        if (minute % 2 === 0) {
            playCuckoo();
        }
        // передаем в зависимости пустой массив
        // чтобы не обновлять колбэк на каждый рендер
    }, []);
    
    // Передаем колбэк в часы
    return (
        <Clock onMinuteChanged={minuteChanged}/>
    );
}

ReactDOM.render(
    <ClockWithCuckoo />,
    document.getElementById('root')
);`;

function App() {
  return (
    <div>
      <Sandpack template="react-ts" files={{
        '/index.tsx': {
          code,
          active: true
        }
      }} options={{
        showTabs: false,
        showLineNumbers: true
      }} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
