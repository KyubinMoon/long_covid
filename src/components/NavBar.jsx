import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className='navBar'>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <ul>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/boardlist'>Board</Link>
            </li>
            <li>
                <Link to='/facts'>Facts</Link>
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
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>

    </section>
  )
}

export default NavBar