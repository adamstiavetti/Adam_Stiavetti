import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import ThemeWrapper from "./components/ui/Theme.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeWrapper>
    <App />
      </ThemeWrapper>
  </React.StrictMode>,
)
