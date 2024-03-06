import React  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import './index.css'


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Route>
         <App/>
      </Route>
   </React.StrictMode>
)

