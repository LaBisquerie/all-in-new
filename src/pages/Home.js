import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className='container pt-4'>
      <h1>home page</h1>
    </div>
  )
}
