import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from './header.module.css' 
import Lowerheader from './Lowerheader';
import { Link } from 'react-router-dom';
import { Datacontext } from '../Dataprovider/Dataprovider';
import {auth} from "../../Utility/firebase"


function Header() {

    const [ {user,basket}, dispatch]=useContext(Datacontext)
    const totalItem =basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)
    console.log(basket) 
  return (
    <section className={classes.fixed}>
        <section>
            <div className={classes.header__container}>
            <div className={classes.logo__container}>
                {/* logo */}
                <Link to='/'>
                    <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/>
                </Link>
                <div className={classes.delivery}>
                {/* delivery */}
                <span>
                    {/* icon */}
                    <IoLocationOutline />
                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search products'/>
                <IoIosSearch size={38}/>
                {/* icon */}
            </div>
            {/* right side link */}
                <div className={classes.order__container}>
                    <Link to="" className={classes.language}>
                    <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png"alt=''/>
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                {/* three components */}
                </Link>
                <Link to={!user && "/auth"}>
                    <div>
                        {
                            user?(
                                <>
                                 <p>Hello {user?.email?.split("@")[0]}</p>
                                 <span onClick={()=>auth.signOut()}>Sign Out</span>
                                  </>  
                            ):(
                                <>
                                <p>Hello, Sign In</p>
                                <span>Accounts & Lists</span>
                                </>
                            )}
                            
                    </div>
                        </Link>
                        {/* ordres */}
                <Link to="/orders">
                    <p>returns</p>
                    <span>& orders</span>
                </Link>
                {/* cart */}
                <Link to='/cart' className={classes.cart}>
                    {/* icon */}
                    <MdOutlineShoppingCart size={35}/>
                    <span>{totalItem}</span>
                </Link>
                </div>
            </div>
        </section>
        <Lowerheader/>
    </section>
  )
}

export default Header