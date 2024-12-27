import { auth } from "../firebase"
import {signOut} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js'



export default function Nav({uid}) {

  const signOutFunc = (e) =>{
    e.preventDefault()
    signOut(auth).then(()=>{
      alert("signed out")
    }).catch(()=>{
      alert("failed to sign out")
    })
  }
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="index.php#page-top"> Bob&apos;s Hardware Diagnosis</a>
            <button className="navbar-toggler navbar-toggler-right" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive" 
            aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#survey">Survey</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                    {uid ? (
                      <li className="nav-item">
                        <a onClick={signOutFunc}className="nav-link" href="">
                          Logout
                        </a>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <a className="nav-link" href="#login">
                          Login
                        </a>
                      </li>
                    )}
                </ul>
            </div>
        </div>
     </nav>
    )
  }
