import { Link, useNavigate} from 'react-router-dom'
import '../css/navBar.css'
import { useState } from 'react'

const NavBar = ({ isLogged, handleLogout}) => {
    const navigate = useNavigate()
    const [isOpened, setOpened] = useState(false)
    const toggleDropdown = () => {
        setOpened(!isOpened)
    }
    const executeLogout = () => {
        alert('request Logout...')
        handleLogout()
        navigate('/')
    }
    return (
    <>
    <section className='navBar'>
        <span>
            <Link to='/'>Home 홈</Link>
        </span>
        <ul>
            <li>
                <Link to='/about'>About 소개</Link>
            </li>
            <li>
                <Link to='/boardlist'>Board 소통</Link>
            </li>
            <li>
                <Link to='/clinics'>Clinics 클리닉</Link>
            </li>
            <li>
                <Link to='/survey'>Survey 설문</Link>
            </li>
            <li>
                <Link to='/articles'>Articles 관련 글</Link>
            </li>
            {
                isLogged?
                <li onClick={executeLogout}>
                    <Link to='/api/logout'>Logout 로그아웃</Link>
                </li>:
                <li>
                    <Link to='/login'>Login 로그인</Link>
                </li>
            }
        </ul>
        <span className='hamburgerMenu' onClick={toggleDropdown}>
            <i className='fa fa-bars'></i>
        </span>

    </section>
    {
        isOpened &&
        <div className='dropdown' onClick={toggleDropdown}>
        <ul className='dropdownMenu'>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/boardlist'>Board</Link>
            </li>
            <li>
                <Link to='/clinics'>Clinics</Link>
            </li>
            <li>
                <Link to='/survey'>Survey</Link>
            </li>
            <li>
                <Link to='/articles'>Articles</Link>
            </li>
            {
                isLogged?
                <li onClick={executeLogout}>
                    <Link to='/api/logout'>Logout</Link>
                </li>:
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            }
        </ul>
        </div>
    }
    </>
  )
}

export default NavBar