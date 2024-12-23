import { auth } from "../firebase"
import  { useEffect, useState } from "react";

export default function Nav() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUid(user.uid);
      } else {
        // User is signed out
        setUid(null);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
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
                    <li className="nav-item"><a className="nav-link" href="index.php#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.php#survey">Survey</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.php#contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.php#gallery">Gallery</a></li>
                    {uid ? (
                      <li className="nav-item">
                        <a className="nav-link" href="index.php#dashboard">
                          Dashboard
                        </a>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <a className="nav-link" href="index.php#login">
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
