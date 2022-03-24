/**
 * Пример клиентского роутинга
 */
import React from "react";
import ReactDOM from "react-dom";
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const code = `import ReactDOM from 'react-dom';
  import App from './App';
  import { BrowserRouter } from "react-router-dom";
 
 ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,
   document.getElementById("root")
 );`;

const appCode = `import { Routes, Route, Link } from "react-router-dom";
 
 export default function App() {
   return (
     <div>
       <h1>Welcome to React Router!</h1>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
       </Routes>
     </div>
   );
 }
 
 function Home() {
   return (
     <>
       <main>
         <h2>Welcome to the homepage!</h2>
         <p>You can do this, I believe in you.</p>
       </main>
       <nav>
         <Link to="/about">About</Link>
       </nav>
     </>
   );
 }
 
 function About() {
   return (
     <>
       <main>
         <h2>Who are we?</h2>
         <p>
           That feels like an existential question, don't you
           think?
         </p>
       </main>
       <nav>
         <Link to="/">Home</Link>
       </nav>
     </>
   );
 }`;

function App() {
  return (
    <div>
      <Sandpack
        template="react-ts"
        files={{
          "/index.tsx": {
            code,
          },
          "/App.tsx": {
            code: appCode,
            active: true,
          },
        }}
        options={{
          showTabs: true,
          showLineNumbers: true,
        }}
        customSetup={{
          dependencies: {
            "react-router-dom": "6.2.2",
          },
        }}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
