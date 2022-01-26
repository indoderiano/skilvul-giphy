import './App.css';
import { Routes, useNavigate, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div>
        TTESTTTT
      </div>
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' exact element={()=> {navigate("/"); <div/>}}/>
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
