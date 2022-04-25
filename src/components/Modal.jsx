import React,{useState} from 'react'
import image from '../images/image-avatar.png'
import Alert from './Alert'
import {Link} from 'react-router-dom'

const Modal = ({location, description}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(false)

  
    const handleSubmit = (e) => {
        e.preventDefault();
       if(name && email){
            setAlert(true);
       }
    }


    return (
        <>
        {alert ? <Alert name={name} email={email} location={location} description={description}/> : (
            <div className='modal'>

                <div style={{textAlign: 'center',color: 'white', fontFamily: 'ubuntu-medium'}}>
                    <h3>Please input your Details</h3>
                </div>

            <form className="modal-content animate" onSubmit={handleSubmit}>
                <div className="imgcontainer">
                <img src={image} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label><b>Fullname</b></label>
                    <input type="text" placeholder="Enter Fullname" name="username" id='username' className='other-input' 
                    value={name} onChange={(e) => setName(e.target.value)}/>

                    <label><b>Email</b></label>
                    <input type="email" placeholder="Email Address" name="email" id='email' className='other-input'
                     value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                    <button type="submit" className="btn3">Submit</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                <Link to='/properties'><button type="button" className="cancelbtn btn3">Cancel</button></Link>
                <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
        )}
    </>
    )
}

export default Modal
