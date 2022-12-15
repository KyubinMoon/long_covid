import React from 'react'
import googleLogo from "../asset/googleLogo.png"
import kakaoLogo from "../asset/kakaoLogo.png"
import "../css/login.css"

const Login = () => {
  return (
    <>
        <div className='loginForm'>
            <div>
                <img src={kakaoLogo} alt="Kakao Logo"/> 
                <button className='loginBtn' type="submit">
                    Kakao Login
                </button>
            </div>
            <div>
                <img src={googleLogo} alt="Google Logo"/>
                <button className='loginBtn' type="submit">
                    Google Login
                </button>
            </div>
        </div>


        {/* <h2>Modal Login Form</h2>

        <button onclick="document.getElementById('id01').style.display='block'">Login</button>
    
        <div id="id01" class="modal">
      
        <form class="modal-content animate" action="/action_page.php" method="post">
            <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
            </div>
        
            <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
                
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
            </div>
        
            <div class="container" >
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot</span>
            </div>
        </form>
        </div> */}
    </>
  )
}

export default Login