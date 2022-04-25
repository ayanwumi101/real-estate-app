import React, {useState} from 'react'
import {Phone, Mail, LocationOn, GitHub, Twitter, Facebook, WhatsApp, Telegram, Computer, Code, GraphicEq, SupervisorAccountSharp} from '@material-ui/icons'
import FormAlert from './FormAlert'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)

const handleClick = (e) => {
    e.preventDefault()
    if(name && number && message && email){
        setAlert(true)
    }
}

    return (
        <>
            {alert ? <FormAlert name={name} email={email} number={number} /> :(
            
                <div className='contact-container'>
                    
                    <div className="heading">
                                <h1 style={{color: 'white'}}>Get in touch</h1>
                                <div className="line" style={{backgroundColor: 'white'}}></div>
                    </div>

                    <div className='contact-bg'>
                    <div className="location-container" style={{ margin: '5% auto 15% auto'}}>
                        <div className='quote-text'>
                            <h1 style={{fontFamily: 'ubuntu-bold'}}>Get a quote</h1>
                            <span>Fill up the form and our team will get back to you within 24 hours</span>
                        </div>



                        <div className="places">
                                <div className="telephone">
                                    <span><Phone /></span>
                                    <span style={{marginLeft: '7px'}}>+234 - 8127 - 6716 - 86</span>
                                </div>
                                <div className="telephone">
                                    <span><Mail /></span>
                                    <span style={{marginLeft: '7px'}}>codytech224@gmail.com</span>
                                </div>
                                <div className="telephone">
                                    <span><LocationOn /></span>
                                    <span style={{marginLeft: '7px'}}>Kenneth Mellanby Hall, UI.</span>
                                </div>
                        </div>


                        <div className="other-contacts" style={{display: 'flex', justifyContent: 'start', gap: '30px'}}>
                                <div className="instagram">
                                    
                                    <li><a href="https://twitter.com/AyanwumiTunde" style={{color: 'white'}} target="_blank"><Twitter className='twitter' /></a> </li>                       
                                </div>
                                <div className="instagram">
                                    
                                    <li><a href="https://facebook.com/tunde.yanwumi.7a" style={{color: 'white'}} target="_blank"><Facebook className='twitter' /></a> </li>                           
                                </div>
                                <div className="instagram">
                                    
                                    <li><a href="https://github.com/ayanwumi101" style={{color: 'white'}} target="_blank"><GitHub className='twitter' /></a> </li>
                                </div> 
                                <div className="instagram">
                                   
                                    <li><a href="https://t.me/dev_Cody" style={{color: 'white'}} target="_blank"><Telegram className='twitter' /></a> </li>
                                </div> 
                                <div className="instagram">
                                    <li><a href="https://wa.me/2348127671686" style={{color: 'white'}} target="_blank"><WhatsApp className='twitter' /></a> </li>
                                </div> 
                        </div>

                        <div className="services" style={{marginTop:'20px'}}>
                            <h2 style={{marginBottom:'15px', fontFamily: 'ubuntu-bold', textAlign: 'center'}}>Other Services</h2>
                                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', textAlign: 'center'}} className='services'>
                                    <p className="service">
                                        <Code />
                                       <span> Web App Development</span>
                                    </p>
                                    <p className="service">
                                        <Computer />
                                        <span> Training</span>
                                    </p>
                                    <p className="service">
                                        <GraphicEq />
                                        <span> UI/UX Design</span>
                                    </p>
                                    <p className="service">
                                        <SupervisorAccountSharp/>
                                        <span>Consultancy Services</span>
                                    </p>
                                </div>
                        </div>

                    </div>

                

                            <form className="modal-content modal-content-small" onSubmit={handleClick} style={{border: 'none', width: '500px'}}>
                            

                            <div className="container">
                                <label style={{color: 'black'}}><b>Fullname</b></label>
                                <input type="text" placeholder="Enter Fullname" name="username" id='username' className='other-input' 
                                value={name} onChange={(e) => setName(e.target.value)}/>

                                <label style={{color: 'black'}}><b>Email</b></label>
                                <input type="email" placeholder="Email Address" name="email" id='email' className='other-input'
                                value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <label style={{color: 'black'}}><b>Mobile Number</b></label>
                                <input type="text" placeholder="Mobile Number" name="number" id='number' className='other-input'
                                value={number} onChange={(e) => setNumber(e.target.value)}/>


                                <label style={{color: 'black'}}><b>Message</b></label>
                                <textarea type="email" placeholder="Your Message" name="message" id='message' className='other-input'
                                value={message} onChange={(e) => setMessage(e.target.value)}/>
                                    
                                <button type="submit" className="btn3" style={{backgroundColor: '#4ae'}}>Submit</button>
                            
                            </div>
                            </form>
        </div>     


                </div>
        
            )}
        </>
    )
}

export default Contact
