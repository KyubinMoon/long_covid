import React from 'react'
import googleLogo from "../asset/googleLogo.png"
import kakaoLogo from "../asset/kakaoLogo.png"
import "../css/login.css"
import { useNavigate } from 'react-router-dom'

const Login = ({ isLogged, handleLogin }) => {
    const navigate = useNavigate()
    const kakaoLogin = () => {
        alert('request Kakao Login...')
        handleLogin()
        navigate('/boardlist')
    }
    const googleLogin = () => {
        alert('request Google Login...')
        handleLogin()
        navigate('/boardlist')
    }
    return (
    isLogged?
    <div className='subTitle'>You have logged in. 로그인되어 있습니다.</div>:

    <>
    <div className='subTitle'>Log In</div>
        <div className='loginForm'>
            <div>
                <button className='loginBtn' type="submit" onClick={kakaoLogin}>
                    <img className='socialLogo' src={kakaoLogo} alt="Kakao Logo"/> <br/><br/>
                        <span>Kakao 카카오 로그인</span>
                </button>
            </div>
            <div>
                <button className='loginBtn' type="submit" onClick={googleLogin}>
                    <img className='socialLogo' src={googleLogo} alt="Google Logo"/> <br/><br/>
                        <span>Google 구글 로그인</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Login