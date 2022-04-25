import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div style={{color: 'black', textAlign: 'center', margin: '30px 15px'}}>
            <h1>Page not found</h1>
            <p>Sorry! the page you are looking for is unavailable, please contact the developer for more info.</p>
            <Link to='/' className='back-home'>
                <button>Back to home</button>
            </Link>
        </div>
    )
}

export default Error
