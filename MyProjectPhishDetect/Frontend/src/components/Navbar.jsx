import 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white p-4 flex justify-between'>
      <h1 className=''>PhishDetect</h1>
      <div className='flex space-x-4'>
        
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </div>
    </div>
  )
}

export default Navbar