import React, { useEffect, useState } from 'react'
import classes from './Result.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'

function Result() {
  const [results, setResults] = useState([])
  const [isloading, setisloading] = useState(false)
  const {categoryName} = useParams()
  // console.log(categoryName)
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResults(res.data)
    console.log(res.data)
    setisloading(false)
  }).catch((err)=>{
    console.log(err)
    setisloading(false)
  })
  },[])
  return (
    <Layout>
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {categoryName}</p>
        <hr/>
        {
          isloading? (<Loader />):(
          <div className={classes.products__container}>
          {results?.map((product)=> (
            <ProductCard key={product.id}
            product={product}
            renderDesc={false}
            renderadd={true}
            />
          ))}

        </div>
        )
        }
        
      </section>
      
      
    </Layout>
    
  )
}

export default Result