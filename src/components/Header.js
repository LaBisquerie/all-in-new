import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Video from './Video'
import Form from './Form'

export default function Header() {

  return (
    <div className='header'>
      <Sidebar />
      <Navbar />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1 className='header-title'>All-in : Tous vos services et cours à domicile</h1>
        </div>
        <div className='header-form'>
          <Form />
        </div>
      </div>
      <Video />
    </div>
  )
}
