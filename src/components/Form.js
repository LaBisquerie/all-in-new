import React, {useState, useRef} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Form() {

  return (
    <form action="" method="get">
      <div className="product-search">
          <div className="search-element">
            <label className="search-label" htmlFor='services'>Services et cours particuliers</label>
            <input className="search-input" type="text" placeholder="Que voulez-vous ?" name="services" id='services' />
          </div>
          <div className="search-element">
            <label className="search-label" htmlFor='where'>Adresse</label>
            <input className="search-input" type="text" placeholder="Où ?" autoComplete="on" name="where" id='where' />
          </div>
          <div className="search-element">
            <label className="search-label" htmlFor='when'>Date</label>
            <input className="search-input" type="text" placeholder="Quand ?" autoComplete="on" name="when" id='when' />
          </div>
          <a type="submit" className="search-button d-none d-md-flex"><AiOutlineSearch /></a>
          <a type='submit' className='search-button__mobile d-block d-md-none'> Rechercher <AiOutlineSearch /></a>
      </div>
    </form>
  )
}
