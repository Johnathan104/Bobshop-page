import { useState } from "react"
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

export default function Login() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const clear=()=>{
        setEmail("")
        setPassword("")
    }
    const signUp= (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("you have signed up")
            })
            .catch(() => {
                alert("there was an error in signing you up")
            });
    }
    return (
    <section className="my-5" id="login">
        <div id="loginBox" className="container hidden text-white bg-black p-4">
            <div className="d-flex flex-column align-items-center">
                <h1>Login</h1>
            </div>
            <div className="py-3">
                <form action="pages/login.php" method="POST">
                    <div className="row my-5">
                        <span>Email</span>
                        <div className="input-group">
                            <span className="input-group-text" id="emailAddress1"><i className="far fa-envelope text-black-50"></i></span>
                            <input value={email} onChange={handleEmailChange} className="form-control p-3" name="email" type="email" placeholder="Enter email address..." required />
                        </div>
                    </div>
                    <div className="row my-5">
                        <span>Password</span>
                        <div className="input-group">
                            <span className="input-group-text" id="1"><i className="fa-solid fa-key text-black-50"></i></span>
                            <input value={password} onChange={handlePasswordChange} className="form-control p-3" name="password" type="password" placeholder="password" required />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <input type="submit" className="btn btn-primary" value="Login"></input>
                    </div>
                    <span onClick={clear} id="loginSwitch" className="text-white-50 mt-3">Don&apos;t have an account? <a href="#signupBox">Sign up here!</a></span>
                </form>
            </div>
        </div>

        <div id="signupBox" className="container hidden text-white bg-black p-4">
            <div className="d-flex flex-column align-items-center">
                <h1>Signup</h1>
            </div>
            <div className="py-3">
                <form onSubmit={signUp} method="POST">
                    <div className="row my-5">
                        <span>Email</span>
                        <div className="input-group">
                            <span className="input-group-text" id="emailAddress1"><i className="far fa-envelope text-black-50"></i></span>
                            <input value={email} onChange={handleEmailChange} className="form-control p-3" name="email" type="email" placeholder="Enter email address..." required />
                        </div>
                    </div>
                    <div className="row my-5">
                        <span>Password</span>
                        <div className="input-group">
                            <span className="input-group-text" id="1"><i className="fa-solid fa-key text-black-50"></i></span>
                            <input value={password} onChange={handlePasswordChange} className="form-control p-3" name="password" type="password" placeholder="password" required />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <input type="submit" className="btn btn-primary" value="Sign Up"></input>
                    </div>
                    <span onClick={clear} id="signupSwitch" className="text-white-50 mt-3">Already have an account? <a href="#loginBox">Login here!</a></span>
                </form>
            </div>
        </div>
    </section>

    )
}
