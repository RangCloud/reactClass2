import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, useParams, HashRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>home ...</p>
    </div>
  );
}

function Topic(){
  let params = useParams();
  console.log(params);
  let topic_id = params.topic_id;
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  for(let i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.description}</p>
    </div>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li> <NavLink to="/topics/1">html</NavLink></li>
        <li> <NavLink to="/topics/2">js</NavLink></li>
        <li> <NavLink to="/topics/3">react</NavLink></li>
      </ul>
      <Routes>
        <Route path='/1' element={"HTML is ..."}/>
        <Route path='/2' element={"JS is ..."}/>
        <Route path='/3' element={"REACT is ..."}/>
      </Routes>
    </div>
  );
}
const contents = [
  {id:1, title:"HTML", description:"HTML is..."},
  {id:2, title:"JS", description:"JS is..."},
  {id:3, title:"React", description:"React is..."}
]
function TopicsV2(){
  var lis = [];
  for (let i = 0; i < contents.length; i++){
    lis.push(<li key={contents[i].id}>
      <NavLink to={"/topics/"+contents[i].id}>{contents[i].title}
      </NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        {/* <Route path='/1' element={"HTML is ..."}/>
        <Route path='/2' element={"JS is ..."}/>
        <Route path='/3' element={"REACT is ..."}/> */}
        <Route path='/:topic_id' element={<Topic />}/>
      </Routes>
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

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Topics/*' element={<TopicsV2/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/*' element={"Not Found"} />
      </Routes>
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
  //<HashRouter><App/></HashRouter>);
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
