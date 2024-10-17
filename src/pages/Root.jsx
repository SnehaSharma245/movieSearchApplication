import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'
import LoadingSpinner from "../assets/LoadingSpinner.svg"
import styles from "./Root.module.css"
function Root() {
  const navigation = useNavigation()
  // console.log(navigation)
  return (
    <>
    
    <div>

    <nav className={`container ${styles.nav}`}>
        <Link to= "/">Movie Search</Link>
    </nav>
    {navigation.state === "loading"? 
     (<img src={LoadingSpinner} alt='loading...' className='loadingSpinner'/>) : <Outlet />  
      }
    </div>
  
    </>
  )
}

export default Root