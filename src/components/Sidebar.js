import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap';
import { Offcanvas } from 'bootstrap';
import { MdDirectionsBoat } from "react-icons/md"
import { FaUserAlt, FaAtlassian, FaPlane, FaBed, FaCar, FaUmbrellaBeach } from "react-icons/fa";
import logoTitle from '../assets/logo-title.png'

export default function Sidebar() {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="sidebar" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img src={logoTitle} alt="logo" height="50px" /></h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {/* CONTENT */}
        <nav className='sidebar-container'>
          <Link to="/search" className='sidebar-link'>
            <FaPlane />
            <div className='sidebar-link__text'>Vols</div>
          </Link>
          <Link to="/" className='sidebar-link'>
            <FaBed />
            <div className='sidebar-link__text'>Hebergements</div>
          </Link>
          <Link to="/" className='sidebar-link'>
            <FaCar />
            <div className='sidebar-link__text'>Voitures</div>
          </Link>
          <Link to="/" className='sidebar-link'>
            <MdDirectionsBoat />
            <div className='sidebar-link__text'>Bateaux</div>
          </Link>
          <Link to="/" className='sidebar-link'>
            <FaUmbrellaBeach />
            <div className='sidebar-link__text'>Vacances</div>
          </Link>
        </nav>
      </div>
    </div>
  )
}
