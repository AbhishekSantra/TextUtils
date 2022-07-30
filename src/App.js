import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";
import MessageAlert from "./components/MessageAlert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [btn, setbtn] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setbtn('Enable light mode');
      showalert("Dark Mode has been Enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbtn('Enable dark mode');
      showalert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Home" about="About" mode={mode} toggleMode={toggleMode} btn={btn} />
        <MessageAlert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextArea heading="Write Here" mode={mode} showalert={showalert} />}/>
        </Routes>  
      </Router>
    </>

  )
}
export default App;
