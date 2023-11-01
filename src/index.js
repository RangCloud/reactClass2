import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, HashRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>home ...</p>
    </div>
  );
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <p>topics ...</p>
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      <p>contact ...</p>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>Hello React Dom</h1>
      {/* <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> */}
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>


      {/* Swithch: react-router-dom v5까지 routes와 유사하게 쓰여짐 */}
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/Topics/*' element={<Topics/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/*' element={"Not Found"} />
      </Switch>
    </div>
  )
}

/* function App(){
  return(
    <div>
      <h1>Hello react router dom</h1>
      <Home/>
      <Topics/>
      <Contact/>
    </div>
  );
} */

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><App/></BrowserRouter>);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
