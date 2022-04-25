import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import {KingBedOutlined, BathtubOutlined, CropSquareOutlined} from '@material-ui/icons'

const Properties = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = data.filter(item => item.keyword.startsWith(e.target.value));
        if (filtered.length === 0) {
            setDetail(-1)
        } else if (e.target.value.length === 0) {
            setDetail(data)
        } else {
            setDetail(filtered)
        }
    }

    const [search, setSearch] = useState("");
    const [detail, setDetail] = useState(data);

    return (
        
        <div className='overall-home'>
                    <div className="heading">
                        <h1>Available Properties</h1>
                        <div className="line"></div>
                    </div>


                    <div style={{marginTop: '50px'}} className='new-form-container'>
                            <div className="buttons new-btns">
                                <button className='btn1'>Sale</button>
                                <button className='btn2'>Rent</button>
                            </div>
                            <form className="search new-form" style={{margin: 'auto'}}>
                                    <input onChange={handleSearch} type="text" placeholder='Search Properties .......e.g flat, duplex, mansion, storey-building, self-contain' className='input'/>
                            </form>
                    </div>

        {detail === -1 ? 
        <div style={{color: 'black', textAlign: 'center', marginTop: '1.3rem'}}>
            <h1>Sorry! No data found</h1>
            <p>No item match your search</p>
            <Link to='/properties' className='back-home'>
                <button>Display Properties</button>
            </Link>
         </div>
        
        : <div className='home-container'>
            
             {detail.map(({id, images, price, location, seller, bedroom,bathroom, livingArea, sellerIcon}) => {
                 
                 return(
                    <div className='wrapper' key={id}>
                        <Link to={`/property/${id}`}>
                            <div className="home">

                                <img src={images[0]} alt="" className='home-image'/>

                                    <div className="seller-details">
                                        <img src={sellerIcon} alt={seller} className='seller-img'/>
                                        <span>{seller}</span>
                                    </div>


                                    <div className="profile">
                                        <h4 className='price'>{price}</h4>
                                        <span>{location}</span>
                                        <div className="thin-line"></div>
                                        
                                        <div className="content rest">
                                            <div className="bedroom">
                                                <div className='bold'>
                                                    <KingBedOutlined />
                                                    <span>{bedroom}</span>
                                                </div>
                                                <span>Bedroom</span>
                                            </div>

                                            <div className="bathroom">
                                                <div className='bold'>
                                                    <BathtubOutlined />
                                                    <span>{bathroom}</span>
                                                </div>
                                                <span>Bathroom</span>
                                            </div>

                                            <div className="living-area">
                                                <div className='bold'>
                                                    <CropSquareOutlined />
                                                    <span>{livingArea}</span>
                                                </div>
                                                <span>Living Area</span>
                                            </div>
                                        </div>

                                        <div className="see-details" style={{width: '100%', background: 'linear-gradient(rgb(46, 48, 47), rgb(70, 68, 68))', color:'black', textAlign: 'center', borderRadius: '5px', padding: '6px 0', boxShadow: '5px 5px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                                            <Link to={`/property/${id}`}>
                                                <button>See Details</button>
                                            </Link>
                                        </div>

                                    </div>
                            </div>
                        </Link>
                    </div>
                 )
                 
             })}
             
        </div>
    }
        </div>
    )
}

export default Properties
