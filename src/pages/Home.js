import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import Category from '../components/Category'

export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className='container pt-4'>
      <Category />
    </div>
  )
}
