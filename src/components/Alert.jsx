import React from 'react'
import {Check} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const Alert = ({name, email, location, description}) => {
   


    return (
        <div className='modal'>
            <div className="modal-content" style={{textAlign: 'center'}}>
                <div style={{fontFamily: 'ubuntu-bold'}}>
                    <div className="check-icon">
                        <Check className='check'/>
                    </div>
                    <h3>Success!</h3>
                </div>


                <div>
                    <p>
                        Dear <span style={{fontFamily: 'ubuntu-medium'}}>{name}</span>, you have successfully opted in for the purchase of <span style={{fontFamily: 'ubuntu-medium'}}>{description}</span> which is located at <span style={{fontFamily: 'ubuntu-medium'}}>{location}</span>. Your response has been received and saved, kindly check <span style={{fontFamily: 'ubuntu-medium'}}>{email}</span> regularly, we would get back to you shortly.
                    </p>
                </div>

                <Link to='/'><button className='rent-btn' style={{width: '50%', textAlign: "center", margin: 'auto'}}>Got it!</button></Link>
            </div>
        </div>
    )
}

export default Alert
