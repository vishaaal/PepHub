import React from 'react'
import './Cards.css'
import card from '../../Assets/card.png'
export default function Cards() {
    return (
        <div className="container">
            <h2 className='blog-head'>Latest Blogs</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
 
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={card} alt="" />
                        <div className="card-body">
                            <h5 className="card-top">Lorem ipsum dolor! Sit amet</h5>
                            <p style={{ textAlign: 'left' }}>By Rajarshi Ray</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: 'blue' }}>#lorem   #ipsum  #dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={card} alt="" />
                        <div className="card-body">
                            <h5 className="card-top">Lorem ipsum dolor! Sit amet</h5>
                            <p style={{ textAlign: 'left' }}>By Rajarshi Ray</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: 'blue' }}>#lorem   #ipsum  #dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={card} alt="" />
                        <div className="card-body">
                            <h5 className="card-top">Lorem ipsum dolor! Sit amet</h5>
                            <p style={{ textAlign: 'left' }}>By Rajarshi Ray</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie magna at convallis venenatis. Mauris ut felis pellentesque</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: 'blue' }}>#lorem   #ipsum  #dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>
    )
}