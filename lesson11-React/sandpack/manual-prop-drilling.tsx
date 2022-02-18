/**
 * Пример ручного прокидывания пропов
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';

function App() {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  // Компонент Toolbar просто прокидывает проп "theme"
  // Если компонентов будет много, то будет много бесполезного кода
  // и его поддержка и изменения окажутся очень трудоемкими
  return (
     <div>
        <ThemedButton theme={props.theme} />
     </div>
  );
}

function ThemedButton({ theme }) {
  return <Button theme={theme} />;
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
