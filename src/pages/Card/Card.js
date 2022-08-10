import React from 'react';

const Card = ({data}) => {
    const {id,name,description,img,price}=data;
    return (
        <div>
            <div>
                <img src={img} alt="logo" srcset="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{price}</p>
                <button>Book Appointment</button>
            </div>
        </div>
    );
};

export default Card;