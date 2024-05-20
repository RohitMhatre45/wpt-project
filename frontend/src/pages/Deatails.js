import { useEffect }from 'react'

import { useAuthContext } from "../hooks/useAuthContext"


import Addbook from '../components/Addbook'

const Home = () => {
 
  const {user} = useAuthContext()
  console.log(user);

 
  return (
    <div >

      <h1></h1>
     
      <Addbook/>
    </div>
  )
}

export default Home