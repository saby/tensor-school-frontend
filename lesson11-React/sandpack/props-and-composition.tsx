/**
 * Пример композиции и использования пропсов
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Мир" />
      <Welcome name="Труд" />
      <Welcome name="Май" />
    </div>
  );
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
