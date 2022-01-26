import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Content from './pages/Content'
import Redirect from './components/Redirect'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ironman" element={<Content />}/>
        <Route path="/search" element={<Content />}/>
        <Route path='/*' element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
