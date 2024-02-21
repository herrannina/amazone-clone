import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'

function Product() {
    const [products, setProducts] = useState([])
    const [isloading, setisloading] = useState(false)
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
            setisloading(false)
        }).catch((err)=>{
            console.log(err)
            setisloading(false)

        })
    },[])
    
  return (

    <>
   {
    isloading?(<Loader/>):(<section className={classes.products__container}>
        {
            products?.map((singleProduct)=>{
               return <ProductCard renderadd={true} product={singleProduct} key={singleProduct.id}/>
})
        }
    </section>)
}
    
    </>
    
  )
}

export default Product