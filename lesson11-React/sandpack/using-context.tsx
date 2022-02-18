/**
 * Ещё один пример использования контекста
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const constants = `export const themes = {
  light: {
     foreground: "#000000",
     background: "#eeeeee"
  },
  dark: {
     foreground: "#ffffff",
     background: "#222222"
  }
};`;

const themeContext = `import React from 'react';
import { themes } from './constants';

// Необходимо поддержать интерфейс изменения по умолчанию,
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});`;

const toggleButton = `import { useContext } from 'react';
import { ThemeContext } from './themeContext';

function ToggleButton() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
     // По клику будем менять тему
    <button
      onClick={toggleTheme}
      style={{backgroundColor: theme.background}}>
      Toggle Theme
    </button>
  );
}

export default ToggleButton;`;

const index = `import ReactDOM from "react-dom";
import { ThemeContext } from "./themeContext";
import ToggleButton from "./toggleButton";
import { useState } from "react";
import { themes } from './constants';

function App() {
   const [theme, setTheme] = useState({
      theme: themes.light,
      toggleTheme() {
         setTheme((themeObj) => {
            const newTheme =
               themeObj.theme === themes.light ? themes.dark : themes.light;
            return { ...themeObj, theme: newTheme };
         });
      }
   });

   return (
      <ThemeContext.Provider value={theme}>
         <Content />
      </ThemeContext.Provider>
   );
}

function Content() {
   return (
      <div>
         <ToggleButton />
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById('root'));`;

function App() {
  return (
    <div>
      <Sandpack template="react-ts" files={{
        '/index.tsx': {
          code: index,
          active: true
        },
        '/constants.tsx': constants,
        '/toggleButton.tsx': toggleButton,
        '/themeContext.tsx': themeContext
      }} options={{
        showTabs: true,
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
