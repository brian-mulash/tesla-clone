import React, { useState } from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import {BurgerMenu, CloseWrapper, CustomClose, CustomMenu} from './styled'
import { selectCars } from '../../features/car/carSlice'
import { useSelector } from 'react-redux'

const Header = () => {

   const [ BurgerStatus, setBurgerStatus ] = useState(false)
   const cars = useSelector(selectCars)
   console.log(cars);

   return (
      <div className="header">
         <Link to={'/'} className='logo'>
            <img src={logo} alt="" />
         </Link>

         <div className="menu">

            {cars && cars.map((car, index) => (
               <Link to={'/#'} className='nav-link' key={index}>
                  {car}
               </Link>
            ))}

         </div>

         <div className="right-side-menu">
            <Link to={'/#'} className='nav-link'>
               shop
            </Link>

            <Link to={'/#'} className='nav-link'>
               tesla account
            </Link>

            <div className="menu-icon">
               <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
            </div>
         </div>
         
         <BurgerMenu show={BurgerStatus}>
            <CloseWrapper>
               <CustomClose onClick={()=>{setBurgerStatus(false)}}/>
            </CloseWrapper>
            {cars && cars.map((car, index) => (
               <li key={index}>
                  <Link>
                     {car}
                  </Link>
               </li>
            ))}
            <li>
               <Link to={'/#'}>
                  Existing Inventory
               </Link>
            </li>
            <li>
               <Link to={'/#'}>
                  Used Inventory
               </Link>
            </li>
            <li>
               <Link to={'/#'}>
                  Trade-in
               </Link>
            </li>
            <li>
               <Link to={'/#'}>
                  Cybertrunk
               </Link>
            </li>
            <li>
               <Link>
                  Roadaster
               </Link>
            </li>

         </BurgerMenu>
      </div>
   )
}

export default Header 