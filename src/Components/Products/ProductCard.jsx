import React, { useState, useContext } from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
import { Datacontext } from '../Dataprovider/Dataprovider'
import { Type } from '../../Utility/action.type'

function ProductCard({product,flex,renderDesc,renderadd}) {
    
    const { image, title, id, rating, price, description} = product

    const [state,dispatch] =  useContext(Datacontext)

    const addtocart =()=>{
        dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
                image, title, id, rating, price, description
            }
        })
    }
    // console.log(product)
  return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed:''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container}/>
        </Link>
        <div>
        
            <h3>{title}</h3>
           {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            
            <div className={classes.rating}>
                <Rating value={rating?.rate} precision={0.1}/>
                {/* rating count*/}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* pricing */}
                <CurrencyFormat amount = {price}/>
            </div>
           
                {
                renderadd && <button className={classes.button } onClick={addtocart}>
                add to cart
            </button>
            
            } 
            
           
            
        </div>
    </div>
  )
}

export default ProductCard