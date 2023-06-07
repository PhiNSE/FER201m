import React, { Component, useState } from "react";
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [isSelected,SetSelected]=useState(0)
  const data=[]
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <ul className='nav'>
                    <li className={`nav-ele ${isSelected == 0 ? "active": "" }`}  onClick={()=>SetSelected(0)}><a className='switch-mode' href='#home'style={{backgroundColor: `${isSelected != 0 ?"theme.backgroundColor":""}`,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">Home</a></li>
                    <li className={`nav-ele ${isSelected == 1 ? "active": "" }`} onClick={()=>SetSelected(1)}><a className='switch-mode' href='#news'style={{backgroundColor: `${isSelected != 0 ?"theme.backgroundColor":""}`,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">News</a></li>
                    <li className={`nav-ele ${isSelected == 2 ? "active": "" }`} onClick={()=>SetSelected(2)}><a className='switch-mode' href='#about'style={{backgroundColor: `${isSelected != 0 ?"theme.backgroundColor":""}`,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">About</a></li>
                    <li className={`nav-ele ${isSelected == 3 ? "active": "" }`} onClick={()=>SetSelected(3)}><a className='switch-mode' href='#contact'style={{backgroundColor: `${isSelected != 0 ?"theme.backgroundColor":""}`,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">Contact</a></li>
           </ul>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}style={{backgroundColor: theme.backgroundColor,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">Switch Nav to {!dark ? 'Dark' : 'Light'} mode</a>
         </div>
      </nav>
    </div>
  )
}


// import React, { Component, useState } from "react";
// import React from 'react'
// export default function Navigation() {
//     const [isSelected,SetSelected]=useState(0)
//     const data=[]
//   return (
//             <div>
//                 <nav>
//                     <ul className="nav">
//                         <li className={`nav-ele ${isSelected == 0 ? "active": "" }`}  onClick={()=>SetSelected(0)}><a href="#home"><span class="text-dec-none">Home</span></a></li>
//                         <li   className={`nav-ele ${isSelected == 1 ? "active": "" }`} onClick={()=>SetSelected(1)}><a herf="#news">News</a></li>
//                         <li   className={`nav-ele ${isSelected == 2 ? "active": "" }`} onClick={()=>SetSelected(2)}><a href="#about">About</a></li>
//                         <li  className={`nav-ele ${isSelected == 3 ? "active": "" }`} onClick={()=>SetSelected(3)}><a href="#contact">Contact</a></li>
//                     </ul>
//                 </nav>
//             </div>
//   )
// }    

// export default class Navigation extends Component{
//     render(){
//         return(
//             <div>
//                 <nav>
//                     <ul className="nav">
//                         <li className="nav-ele active"><a href="#home"><span class="text-dec-none">Home</span></a></li>
//                         <li  className="nav-ele"><a herf="#news">News</a></li>
//                         <li  className="nav-ele"><a herf="#about">About</a></li>
//                         <li  className="nav-ele"><a herf="#contact">Contact</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }