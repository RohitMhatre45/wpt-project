import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [fname,setFanme] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(fname,email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>


      <h3>Sign Up</h3>

      <label>Name</label>
      <input 
        type="text" 
        onChange={(e) => setFanme(e.target.value)} 
        value={fname} 
      />
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <br/>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup