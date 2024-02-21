import React from 'react'
import {catagoryInfos} from './catagoryFullinfo'
import CatagoryCard from './CatagoryCard'
import classes from './Catagory.module.css'
function Catagory() {
  return (
    <section className={classes.catagory__container}>
        {
          catagoryInfos?.map((infos)=> (
            <CatagoryCard data = {infos}/>
            )) 
        }
    </section>
  )
}

export default Catagory