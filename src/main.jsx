import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router, { BrowserRouter, Route, Routes } from 'router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter/>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='*' element={ <p>Not Found</p> }/>
        </Routes>
      </Router> */}
    
  </React.StrictMode>,
)
