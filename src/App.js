import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Articles from './pages/Articles';
import Clinics from './pages/Clinics';
import Login from './pages/Login';
import Survey from './pages/Survey';
import About from './pages/About';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import BoardView from './pages/BoardView';
import MainTitle from './components/MainTitle';
import NavBar from './components/NavBar';


function App() {
  const [auth, setAuth] = useState({
    isLogged: true,
    isJoined: false,
    username: undefined
  })

  const [ posts, setPosts] = useState([])

  const {isLogged, isJoined, username} = auth

  const handleLogin = () => {
    setAuth(prevState => ({
      ...prevState,
      isLogged: true
    }))
  }
  const handleLogout = () => {
    setAuth(prevState => ({
      ...prevState,
      isLogged: false
    }))
  }

  useEffect(() => {
    setPosts(()=>[
      {
        id:1,
        username: 'John',
        title:'FirstPost',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:2,
        username: 'Jane',
        title:'Second Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:3,
        username: 'John',
        title:'Third Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:4,
        username: 'Sally',
        title:'Fourth Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }

    ])

  },[])

  return (
    <div>
      <MainTitle/>
      <Router>
        <NavBar isLogged={isLogged} handleLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Home username={username}/>} />
          <Route path='/about' element={<About/>} />          
          <Route path='/boardlist' element={<BoardList posts={posts}/>} />
          <Route path='/boardwrite' element={<BoardWrite/>} />
          <Route path='/boardview' element={<BoardView/>} />
          <Route path='/clinics' element={<Clinics/>} />
          <Route path='/survey' element={<Survey isJoined={isJoined}/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/login' element={<Login isLogged={isLogged} handleLogin={handleLogin}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
