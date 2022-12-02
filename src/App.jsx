import Addcontacts from './Addcontacts';
import {v4} from 'uuid';
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Contact from './Contact';
import Contactdetails from './Contactdetails';

function App() {

  const KEY_P = 'contact'

  const [contact, setcontact] = useState(
    JSON.parse(localStorage.getItem(KEY_P)) || []
  );

  const adder = (name,email) => {
    setcontact([...contact, {id:v4(),name:name, email:email}])
  }

  const deleter = (id) => {
    const result = window.confirm("are you sure??")
    if(result === true) {
      const newContact = contact.filter((cont) => {
        return cont.id !== id;
      })
  
      setcontact(newContact)
    }
    
  }

  useEffect(() => {
    localStorage.setItem(KEY_P, JSON.stringify(contact));
  }, [contact]);
  

  return (
    <div className="App d-flex flex-column">
      <Router>
        <Header/>
        <Routes>
          {/* <Route path="/addcontacts" element={<Addcontacts adder={adder}/>}> */}
          <Route path="/addcontacts" element={<Addcontacts adder={adder}/>}>
            
          </Route>
          <Route path="/" element={
              <div className="d-flex flex-wrap">
              <Contact contact={contact} deleter={deleter}/>
              </div>
            }>
            
          </Route>
          <Route path="/details/:id" element={<Contactdetails/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
