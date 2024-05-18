import { useEffect }from 'react'

import { useAuthContext } from "../hooks/useAuthContext"

// components

// import WorkoutForm from '../components/WorkoutForm'
import Addbook from '../components/Addbook'

const Home = () => {
 
  const {user} = useAuthContext()
  console.log(user);

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch('/api/workouts', {
  //       headers: {'Authorization': `Bearer ${user.token}`},
  //     })
  //     const json = await response.json()

  //     if (response.ok) {
  //       dispatch({type: 'SET_WORKOUTS', payload: json})
  //     }
  //   }

  //   if (user) {
  //     fetchWorkouts()
  //   }
  // }, [dispatch, user])

  return (
    <div >

      <h1></h1>
      {/* <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm /> */}
      <Addbook/>
    </div>
  )
}

export default Home