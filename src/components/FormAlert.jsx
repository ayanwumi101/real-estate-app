import React from 'react'
import {Check} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const FormAlert = ({name, number, email}) => {
    return (
        <div className='modal'>
            <div className="modal-content" style={{textAlign: 'center'}}>
                <div style={{fontFamily: 'ubuntu-bold'}}>
                    <div className="check-icon">
                        <Check className='check'/>
                    </div>
                    <h3>Thank You!</h3>
                </div>


                <div>
                    <p>
                        Dear <span style={{fontFamily: 'ubuntu-medium'}}>{name}</span>, thanks for contacting us, our team would get back to you within 24hrs.
                    </p>
                </div>

                <Link to='/'><button className='rent-btn' style={{width: '50%', textAlign: "center", margin: 'auto'}}>Got it!</button></Link>
            </div>
        </div>
    )
}

export default FormAlert
