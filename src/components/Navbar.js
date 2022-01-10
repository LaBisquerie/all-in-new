import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from 'react-icons/fa'

export default function Navbar() {

  const {currentUser} = useContext(UserContext)

  const {toggleModals} = useContext(UserContext)

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("Erreur dans la déconnexion")
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="col-6 d-flex align-items-center">
          <span className='navbar-menu__btn' data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="offcanvasExample"><GiHamburgerMenu /></span>
          <Link to="/" className="navbar-brand navbar-menu__title">
            All-in
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <ul className='navbar-list'>
            <li>
              <button className='navbar-list__item d-block d-md-none'><FaUserAlt /></button>
              <button className='navbar-list__item d-none d-md-block' onClick={() => toggleModals("signUp")}>Connexion</button>
            </li>
            {currentUser ? "" :
              <li onClick={logOut}>
                Deconnexion
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
