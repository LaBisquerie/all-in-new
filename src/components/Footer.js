import React from 'react'
import logo from '../assets/logo-title.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row gx-4'>
            <div className='col-md-3 col-lg-4'>
              <div className='block-logo'>
                <img src={logo} alt="" />
              </div>
            </div>
            <div className='col-6 col-md-3 col-lg-2 d-flex'>
              <div className='block-link'>
                <h3 className='block-link__title'>Info utiles</h3>
                <ul className='block-link__list'>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                </ul>
              </div>
            </div>
            <div className='col-6 col-md-3 col-lg-2 d-flex'>
              <div className='block-link'>
                <h3 className='block-link__title'>Besoin d'aide ?</h3>
                <ul className='block-link__list'>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                  <li><a href="#" className="block-link__item">Lorem ipsum dolor</a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-3 col-lg-4 d-flex'>
              <div className='block-contact'>
                <h3 className='block-contact__title'>Nous contacter</h3>
                <span className='block-contact__phone'>09 86 27 91 32</span>
                <span className='block-contact__mail'>contact@all-in.house</span>
                <span className='block-contact__address'>CENTURY GLORY LIMITED SAS 17 RUE DU MARBORE, 31170 TOURNEFEUILLE</span>
                <div className='block-contact__social'>
                  <ul>
                    <li><a href="#"><img src={facebook} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={linkedin} alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-after'>
        <span className='footer-after__text'>&copy; All-in 2021 CGU - Mentions légales - politique de confidentialité</span>
      </div>
    </>
  )
}
