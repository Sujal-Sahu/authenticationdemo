import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logincontext from './context/Logincontext';
import Loginstate from './context/Loginstate';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
function App() {
  document.body.style.background="green";
  return (
    <BrowserRouter>
    <Loginstate>
    <div className="App">
       <Routes>
       <Route exact path="/login" element={<Login/>} ></Route>
          <Route exact path="/" element={<Signup/>} ></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </div>
    </Loginstate>
    </BrowserRouter>
  );
}

export default App;
