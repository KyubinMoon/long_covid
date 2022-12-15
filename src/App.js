import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Articles from './pages/Articles';
import Clinics from './pages/Clinics';
import Facts from './pages/Facts';
import Login from './pages/Login';
import Survey from './pages/Survey';
import About from './pages/About';
import Header from './components/Header';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />          
          <Route path='/boardlist' element={<BoardList/>} />
          <Route path='/boardwrite' element={<BoardWrite/>} />
          <Route path='/clinics' element={<Clinics/>} />
          <Route path='/facts' element={<Facts/>} />
          <Route path='/survey' element={<Survey/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
