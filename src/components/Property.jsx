import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import data from './data'
import { ArrowBack, ArrowForward, KingBedOutlined, BathtubOutlined, CropSquareOutlined, LocationOn, Star, ShoppingCart} from '@material-ui/icons'
import './style2.css'
import Modal from './Modal'


const Property = () => {
   const {id} = useParams();
   const [item, setItem] = useState(data);
   const [index, setIndex] = useState(0);
   const [showModal, setShowModal]= useState(false)


useEffect(() => {
    const newProperty = data.find((home) => home.id === parseInt(id));
    setItem(newProperty);
},[])



const prevImage = () => {
    const images = item.images;
    const nextIndex = index - 1;
    if(nextIndex < 0){
        setIndex(images.length - 1)
    }else{
        setIndex(nextIndex);
    }
}


const nextImage = () => {
    const images = item.images;
    setIndex((index + 1) % images.length)
}


const handleClick = () => {
    setShowModal(true)
}


    return (
        <div className='specific-property'>
            

            <div className="back-link">
                <Link to='/properties'>
                    <p style={{backgroundColor: '#4ae', padding: '3px 10px', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'space-between',}}><ArrowBack /> Back</p>
                </Link>
            </div>

            
            {
            showModal ? <Modal location={item.location} description={item.description}/>
             : ''
             }

            <div className="property-container">

                <div className="img">
                    <img src={item.images ? item.images[index] : "Loading....."} alt={item.description} className='images'/>
                    <div className="icons">
                       <div className='prev'>
                            <button onClick={prevImage}>
                                <ArrowBack />
                            </button>
                       </div>
                       <div className='next'>
                           <button onClick={nextImage}>
                                <ArrowForward />
                           </button>
                       </div>
                    </div>

                </div>



                    <div className="details">
                        <h1 style={{color: 'black'}}>{item.description}</h1>
                                <div className="thin-line"></div>
                                <h4 style={{color: 'black'}}>{item.price}</h4>
                                <div className="thin-line"></div>
                            
                    </div>


                    <div className="other-details">
                                    
                                            <div className="bathroom">
                                                <div className='rest'>
                                                    <KingBedOutlined />
                                                    <span>{item.bedroom}</span>
                                                </div>
                                                <span>Bedroom</span>
                                            </div>

                                            <div className="bedroom">
                                                <div className='rest'>
                                                    <BathtubOutlined />
                                                    <span>{item.bathroom}</span>
                                                </div>
                                                <span>Bathroom</span>
                                            </div>

                                            <div className="bedroom">
                                                <div className='rest'>
                                                    <CropSquareOutlined />
                                                    <span>{item.livingArea}</span>
                                                </div>
                                                <span>Living Area</span>
                                            </div>


                                     
                                


    
                    </div>

<div className="thin-line differ"></div>
                            <div className="other-details">
                                    
                                            <div className="bathroom">
                                                <div className='rest'>
                                                    <CropSquareOutlined />
                                                    <span>{item.livingArea}</span>
                                                </div>
                                                <span>Parking Space</span>
                                            </div>

                                            <div className="bedroom">
                                                <div className='rest'>
                                                    <span>{item.rating}</span>
                                                    <Star />
                                                </div>
                                                <span>Rating</span>
                                            </div>

                                            <div className="bedroom" style={{maxWidth: '120px'}}>
                                                <div className='rest'>
                                                    <LocationOn />
                                                    <span>Location</span>
                                                </div>
                                                <span>{item.location}</span>
                                            </div>
                            </div>
                            <div className="thin-line differ"></div>

                            <div className="comments" style={{display: 'flex', justifyContent: 'center', padding:'10px'}}>
                                <p style={{width: 'auto', fontFamily: 'ubuntu-medium', marginRight: '50px'}}>Reviews:</p>
                                <p style={{textAlign: 'justify', maxWidth: '500px'}}>{item.speech}</p>
                            </div>

                            <div className="thin-line differ"></div>

                    <div className="action-btns">
                        <div className="cancel-btn">
                            <Link to='/properties'>
                                <button>Cancel</button>
                            </Link>
                        </div>

                        <div className="proceed-btn">
                            <div className='buy-btn' onClick={handleClick}>
                                <ShoppingCart style={{color: 'white'}} />
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                
            </div>
        
        </div>
        
    )

}

export default Property
