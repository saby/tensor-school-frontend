/**
 * Пример прокидывания пропов через контекст
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function App() {
    // Используем компонент Provider для передачи контекста
    // со значением "dark" по дереву компонентов
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    );
}

// Тулбар больше ничего не знает о теме
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
function ThemedButton() {
    // Используем хук useContext() чтобы получить значение контекста ThemeContext
    const theme = useContext(ThemeContext);
    // theme = 'dark';
    return (
       <Button theme={theme} />
    );
}

function Button({ theme }) {
  return <button className={theme}>Кнопка</button>;
}

ReactDOM.render(
    <App />,
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
