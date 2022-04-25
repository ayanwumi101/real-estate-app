import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import './styles.css'
import {GroupOutlined, Menu} from '@material-ui/icons';
import logo from '../images/logo4.png'



const Navbar = () => {
const [showNavbar, setShowNavbar] = useState(true)



useEffect(() => {
     if(window.innerWidth < 700){
            setShowNavbar(!showNavbar)
     } 
}, [])



const handleClick = () => {
  if(window.innerWidth < 700){
    setShowNavbar(!showNavbar);
  }
}

const hideClick = () => {
    if(window.innerWidth < 700){
        setShowNavbar(!showNavbar)
    }else{
        setShowNavbar(true)
    }
}

    return (
        <>
            <div className="navbar">
                

                <div className="brand">
                        

                        <div className='links'>
                                <div className="logo">
                                    <div className='logos'>
                                        <Link to='/'><img src={logo} alt="" width='45px' height='40px' /></Link>
                                        <Link to='/'>LUXURY</Link>
                                    </div>
                                    <button className='toggler-icon' id="menuIcon" onClick={handleClick}>
                                        <Menu />
                                    </button>
                                </div>


                                    {
                                        showNavbar ?
                                    <div onClick={hideClick}>
                                            <li>
                                                <Link to='/properties'>Properties</Link>
                                            </li>
                                    
                                            <li>
                                                <Link to='/sellers'>Sellers</Link>
                                            </li>

                                            <li>
                                                <Link to='/valuation'>Valuation</Link>
                                            </li>

                                            <li>
                                                <Link to='/contact'>Contact</Link>
                                            </li>
                                        </div>
                                        :null
                                    }
                                


                            
                        </div>
                </div>


                            <div className="login">
                                <li>
                                    <Link to='/' style={{display: 'flex', alignItems: 'center', float: 'right', textAlign: 'right'}}>
                                        <GroupOutlined />Sign in
                                    </Link>
                                </li>
                            </div>
                

            </div>
        </>
    )
}

export default Navbar
