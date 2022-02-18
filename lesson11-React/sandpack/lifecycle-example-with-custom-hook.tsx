/**
 * Пример использования пользовательского хука
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
      const timerId = setInterval(() => setDate(new Date()), 1000);
      return () => {
          clearInterval(timerId);
      }
  })
  return date;
}

function Clock() {
  const date = useClock();
  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

ReactDOM.render(
    <Clock />,
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
