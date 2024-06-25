import React from 'react';
import './productPage.css';
const ProductDetails=(props)=>{
    return(
        <ul className='divCard'>
            <li className='title'>{props.Name}</li>
            <li>₹.{props.Price}</li>
            <li className='descript'>{props.Description}</li>
        </ul>
            
    );
}
export default ProductDetails;