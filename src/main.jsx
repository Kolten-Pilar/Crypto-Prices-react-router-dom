import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import browserrouter and rename it to router
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'


// Wrap the App component with the Router component to enable the router features
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
