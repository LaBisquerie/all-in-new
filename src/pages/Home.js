import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import Categories from '../components/Categories'

export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className='container pt-4'>
      <Categories />
    </div>
  )
}
