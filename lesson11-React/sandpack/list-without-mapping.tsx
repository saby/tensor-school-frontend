/**
 * Пример отрисовки массива без итерации
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';

const listItems = ['First', 'Second', 'Third'];

function List() {
  return <div>{listItems}</div>;
}

ReactDOM.render(
    <List />,
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
