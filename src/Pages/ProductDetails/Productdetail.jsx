import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './Productdetail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Productdetail() {
  
  const [product, setproduct] = useState({})
  const [isloading, setisloading] = useState(false)
  const {productId} = useParams()
  
  
  // console.log(productId)
  useEffect(()=>{
    setisloading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data) 
      setisloading(false)
    }).catch((err)=>{
      console.log(err)
      setisloading(false)
    })
  },[])

  return (
    <Layout>
      {isloading? (<Loader/>):(<ProductCard
       product={product}
       flex = {true}
       renderDesc = {true}
       renderadd={true}
       />
        )}
       
    </Layout>
  )
}

export default Productdetail