import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from 'react-icons/hi' 
import HeaderItem from './HeaderItem'
function Header() {
  const HOME = 'Home';
  const SEARCH = 'Search';
  const WATCHLIST = 'Watchlist';
  const ORIGINALS = 'Originals';
  const MOVIES = 'Movies';
  const SERIES = 'Series';

  const menu = [
    {
      name: HOME,
      icon: HiHome
    },
    {
      name: SEARCH,
      icon: HiMagnifyingGlass
    },
    {
      name: WATCHLIST,
      icon: HiPlus
    },
    {
      name: ORIGINALS,
      icon: HiStar
    },
    {
      name: MOVIES,
      icon: HiPlayCircle
    },
    {
      name: SERIES,
      icon: HiTv
    },
  ]

  return (
    <div>
      <img src={logo} alt='logo' className='w-[80px] md:w-[115px] object-cover'/>
      {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
    </div>
  )
}

export default Header
