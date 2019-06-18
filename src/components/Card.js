import React from 'react';
import './styles/Card.css'
import circleImg from '../images/circles.png'
import emptyImg from '../images/empty.png'

const Card = ({title,description,img,leftColor,rightColor}) => (
     <div className="card mx-auto Fitness-Card my-2"
            style={{
                backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImg} className="float-right" alt="exercise"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
)

export default Card 