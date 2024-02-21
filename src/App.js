import React, { useEffect,useContext } from 'react';
import './App.css';
import Routing from './Router'
import { Datacontext } from './Components/Dataprovider/Dataprovider';
import { Type } from './Utility/action.type';
import { auth } from './Utility/firebase'
function App() {
  const[{user}, dispatch] = useContext(Datacontext)

  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          // console.log(authuser)
          type: Type.SET_USER,
          user: authuser
        })
      }else{
        dispatch({
          // console.log(authuser)
          type: Type.SET_USER,
          user: null
        })
      }
    })
  },[])

  return (
    <Routing/>
  );
}

export default App;
