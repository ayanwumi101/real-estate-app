import React, {useState} from 'react'
import data from './sellerData'
import {CheckBoxRounded, Storage} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const Sellers = () => {
    const [seller, setSeller] = useState(data)
    return (
        <div style={{marginTop: '30px'}}>

            <div className="heading">
                <h3>Our Top Sellers</h3>
                <div className="line"></div>
            </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
            {seller.map(({ name, earnings, id, image, status}) => {
               return(
            
                <div className="sellers-container" key={id} style={{display: 'flex', alignItems: 'start', gap: '15px',  color: 'black', borderRadius: '5px', padding: '12px',  width: 'auto', height: 'auto', margin: '7px 7px 20px 7px'}}>
                   
                    <div style={{display: 'flex', alignItems: 'center',gap: '10px'}}>

                        <small style={{color: 'grey'}}>{id}</small>
                        <div style={{position: 'relative'}}>
                            <img src={image} alt={name} style={{width: '50px', height: '50px', borderRadius: '50%', border: '4px solid white'}} />
                        </div>

                    </div>

                    <div className="other-info">
                        <p style={{fontFamily: 'ubuntu-medium', color: 'rgb(50, 147, 192)', margin: '10px 0'}}>{name}</p>
                        <p>Earnings : <b style={{color: 'grey', margin:'8px 0'}}>{earnings}</b></p>
                        <p style={{margin: '8px 0'}}>Status : {status} <small><CheckBoxRounded /></small> </p>
                        <Link to={`/seller/${id}`}>
                            <p style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#4ae', padding: '3px 10px', borderRadius: '5px', width: '80%', color: 'white'}}>
                                 <span>view profile</span>
                                 <Storage />
                                 </p>
                            </Link>
                    </div>
                    

                </div>

            
               )
            })}
        </div>
    </div>
    )
}

export default Sellers
