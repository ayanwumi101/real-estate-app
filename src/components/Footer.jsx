import React from 'react'
import {Facebook, GitHub, Twitter, Telegram, WhatsApp, LocationOn, CastConnected, Copyright, AccountBalance} from '@material-ui/icons'

const Footer = () => {
    return (
        <div className='footer-container'>
               <div>
                   <h3 style={{fontFamily: 'ubuntu-medium'}}>Quick Links</h3>
                   <div className="line" style={{backgroundColor: 'white'}}></div>
               </div>
           <footer>
               <div className="column">
                    
                        <div className="label" style={{marginBottom: '40px'}}>
                                <AccountBalance  />
                                <span>Contact us</span>
                        </div>
                        
                    
                   <li><a href="https://github.com/ayanwumi101" target="_blank"><GitHub /></a> </li>
                   <li><a href="https://facebook.com/tunde.yanwumi.7a" target="_blank"><Facebook /></a> </li>
                   <li><a href="https://twitter.com/AyanwumiTunde" target="_blank"><Twitter /></a> </li>
                   <li><a href="https://wa.me/2348127671686" target="_blank"><WhatsApp /></a> </li>
                   <li><a href="https://t.me/dev_Cody" target="_blank"><Telegram /></a> </li>
               </div>

               <div className="column block">
                   
                        <div className="label">
                                <CastConnected />
                                <span>Connect with us</span>
                        </div>
                        
                   
                   <li>Weekly Enlightment</li>
                   <li>Customer care service</li>
                   <li>Live Podcasts on Radios and Televisions</li>
                   <li>Branch Offices</li>
               </div>

               <div className="column block">
                   
                        <div className="label">
                                <LocationOn />
                                <span>Office Locations</span>
                        </div>
                       
                   
                   <li>SUB building, University of Ibadan</li>
                   <li>Kenneth Mellanby Hall UI.</li>
                   <li>Department of Food Technology UI.</li>
                   <li>Central Mosque UI.</li>
               </div>
               <div className="thin-line"></div>
            </footer>


             <div className="copyright" style={{fontFamily:'ubuntu-medium'}}>
                    <Copyright/>
                    <span>
                        Copyright, codytech solutions Ltd. 2022
                    </span>
               </div>            
        </div>
    )
}

export default Footer
