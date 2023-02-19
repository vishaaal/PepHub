import React from 'react'
import codeLogo from '../../Assets/codeLogo.png'
import search from '../../Assets/search.png'
import translate from '../../Assets/translate.png'
import moon from '../../Assets/moon.png'



export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-inline-flex p-2 w-100">
      <div className='px-2'><img src={codeLogo} /></div>
      
      <div className='px-2'><img src={search}/></div>

      <div className='px-2'><img src={moon}/></div>

      <div className='px-2'><button type="button" class="btn btn-primary">Start Preparing Now</button></div>

      
      
      
      

  
</nav>
  )
}
