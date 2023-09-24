import React from 'react'
import {ArrowForward} from '@material-ui/icons'
import './styles.css';
import aishah from '../images/aishah.png'
import boy from '../images/boy.png'
import Footer from './Footer'




const Homepage = () => {
    
    return (
        <div className='homepage'>


           <div className="homepage-container">
                <div className="text">
                        <h2>Sell or Rent Your House at The Best Price and Risk Free.</h2>
                    </div>


                <div className='input-top'>
                    <div className="buttons">
                      <button className='btn1'>Sale</button>
                      <button className='btn2'>Rent</button>
                    </div>
                        <form action="#" className="search">
                                <input type="text" placeholder='Search Properties ......' className='input'/>
                                <button type='submit' className='search-btn'>Search</button>
                        </form>
                </div>
                    
                    <div className='checkbox'>
                        <input type="checkbox" checked /> I agree to the terms and privacy policy
                    </div>

                    <div className="counters">
                       <div className="first-count">
                            <h1>1200<small>+</small></h1>
                            <span>Premium Properties</span>
                       </div>
                       <div className="first-count">
                            <h1>4500<small>+</small></h1>
                            <span>Happy Customers</span>
                       </div>
                       <div className="first-count">
                            <h1>240<small>+</small></h1>
                            <span>Active Sellers</span>
                       </div>
                    </div>

           </div>

            <div className="products">
                <div className='contributors'>
                    <div className="heading">
                        <h1>What our customers say</h1>
                        <div className="line"></div>
                    </div>


                    <div className='latest-property'>
                        <div className="latest">
                            <img src={aishah} alt="logo" className='latest-img' />
                            <h4>Abdullah Olukoya</h4>
                        </div>
                    

                        <div className='property-text'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic officiis quidem a tempora laudantium aspernatur perspiciatis consectetur consequatur magni vel in laborum, minus  </p>
                            <span style={{fontFamily: 'ubuntu-light'}}><em>Abdullah olukoya.</em></span>
                        </div>

                        <div className="icon">
                            <ArrowForward />
                        </div>

                    </div>

            <div>

                <div className="heading">
                            <h1>Our Investors</h1>
                            <div className="line"></div>
                        </div>
                    <div className="founders">
               
                    <div className="founder">
                        <img src={aishah} alt="" className='founder-icon'/>
                        <div className="profile">
                            <h3>Aishah Lamidi</h3>
                            <div className="thin-line"></div>
                            <p>
                                <span>Role: </span>
                                <span>Founder</span>
                            </p>
                            <span style={{textAlign: 'justify', fontFamily: 'ubuntu-light', fontStyle: 'italic'}}>"Lorem ipsum, dolor amet elit. Repudiandae  architecto mollitia"</span>
                        </div>
                    </div>


                    <div className="founder">
                        <img src={boy} alt="" className='founder-icon'/>
                        <div className="profile">
                            <h3>Arib</h3>
                            <div className="thin-line"></div>
                            <p>
                                <span>Role: </span>
                                <span>God Father</span>
                            </p>
                            <span style={{textAlign: 'justify', fontFamily: 'ubuntu-light', fontStyle: 'italic'}}>"Lorem ipsum, dolor adipisicing elit. Repudiandae facilis mollitia"</span>
                        </div>
                    </div>


                    <div className="founder">
                        <img src={boy} alt="" className='founder-icon'/>
                        <div className="profile">
                            <h3>Mr. Vang</h3>
                            <div className="thin-line"></div>
                            <p>
                                <span>Role: </span>
                                <span>C.E.O</span>
                            </p>
                            <span style={{textAlign: 'justify', fontFamily: 'ubuntu-light', fontStyle: 'italic'}}> "Lorem ipsum, adipisicing elit. Repudiandae velit facilis mollitia"</span>
                        </div>
                    </div>


                </div>
            </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
