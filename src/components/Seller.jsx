import React,{useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import sellerData from './sellerData'
import {Facebook, Instagram, Twitter, Telegram, WhatsApp,ArrowBack, CheckBoxRounded, StarOutline, StarHalfOutlined} from '@material-ui/icons'

const Seller = () => {
    const {id} = useParams()
    const [item, setItem] = useState(sellerData);


    useEffect(() => {
        const seller = sellerData.find((user) => user.id === parseInt(id));
        setItem(seller)
    }, [])


    return (
        <div className='specific-seller' style={{marginTop: '2rem', color: 'black'}}>

            <div className="back-link">
                <Link to='/sellers'>
                    <p style={{backgroundColor: '#4ae', padding: '3px 10px', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'space-between',}}><ArrowBack /> Back</p>
                </Link>
            </div>

        {/* //single user details starts here */}
            <div className="specific-detail">

               <div className='first-col'>
                        <div>
                            <img src={item.image} alt="" className='user-img'/>
                        </div>
                        
                        <div className="social-icons">
                            <li><a href="https://github.com/ayanwumi101" target="_blank"><Instagram /></a> </li>
                            <li><a href="https://facebook.com/tunde.yanwumi.7a" target="_blank"><Facebook /></a> </li>
                            <li><a href="https://twitter.com/AyanwumiTunde" target="_blank"><Twitter /></a> </li>
                            <li><a href="https://wa.me/2348127671686" target="_blank"><WhatsApp /></a> </li>
                            <li><a href="https://t.me/dev_Cody" target="_blank"><Telegram /></a> </li>
                        </div>
               </div>


               <div className="second-col">
                    <h1>{item.name}</h1>
                    <p><b>Earnings :</b> {item.earnings}</p>
                    <p><b>Property Sold :</b> {item.propertySold}</p>
                    <p><b>Status :</b> {item.status} <small><CheckBoxRounded /></small></p>
                    <p><b>Rating :</b> {item.rating} <StarHalfOutlined /></p>
                    <p><b>Likes :</b> {item.likes}</p>
                    <p><b>Reviews :</b> <ol>
                                    <p><li>{item.reviews}</li></p>
                                    <p><li>{item.reviews}</li></p>
                                    <p><li>{item.reviews}</li></p>
                                    <p><li>{item.reviews}</li></p>
                                    
                                </ol>
                                 </p>
               </div>
                
            </div>
        {/* single user details ends here */}

        </div>
    )
}

export default Seller
