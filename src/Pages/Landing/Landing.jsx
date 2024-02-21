import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagories/Catagory'
import Product from '../../Components/Products/Product'

function Landing() {
  return (
    <Layout>
        <Carousel/>
        <Catagory/>
        <Product/>
    </Layout>
  )
}

export default Landing