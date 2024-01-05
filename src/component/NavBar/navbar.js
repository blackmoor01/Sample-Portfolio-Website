import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import './navbar.css'
import Menu from '../../assets/menu.png'

const NavBar = () => {
    const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>

        <div className='desktopMenu'>
            <Link activeClass={"active"} to={"intro"} spy={true} smooth={true}  offset={-100} duration={500} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Home</Link>
            <Link activeClass={"active"} to={"skills"} spy={true} smooth={true}  offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
            <Link activeClass={"active"} to={"works"} spy={true} smooth={true}  offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
            <Link activeClass={"active"} to={"clients"} spy={true} smooth={true}  offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
        </div>

        <button className='desktopMenuButton' onClick={()=>{
            document.getElementById("contact").scrollIntoView({behavior:"smooth"});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/> Content Menu
        </button>


        {/*Designing the Menu Tab*/}
        <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

        <div className='navMenu' style={{display:showMenu? "flex":"none"}}>
            <Link onClick={()=>setShowMenu(false)} activeClass={"active"} to={"intro"} spy={true} smooth={true}  offset={-100} duration={500} className='listItem'>Home</Link>
            <Link onClick={()=>setShowMenu(false)} activeClass={"active"} to={"skills"} spy={true} smooth={true}  offset={-50} duration={500} className='listItem'>About</Link>
            <Link onClick={()=>setShowMenu(false)} activeClass={"active"} to={"works"} spy={true} smooth={true}  offset={-50} duration={500} className='listItem'>Portfolio</Link>
            <Link onClick={()=>setShowMenu(false)} activeClass={"active"} to={"clients"} spy={true} smooth={true}  offset={-50} duration={500} className='listItem'>Clients</Link>
            <Link onClick={()=>setShowMenu(false)} activeClass={"active"} to={"contact"} spy={true} smooth={true}  offset={-50} duration={500} className='listItem'>Contacts</Link>
        </div>

    </nav>
  )
}

export default NavBar;