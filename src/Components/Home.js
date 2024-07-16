import React from 'react';
import "../Style/Home.css"
import { useState,useEffect } from 'react';
import axios from 'axios';

import Update from './Update';




const Home = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };


  let [data1,setdata] = useState([]);
  let [force,setforce] = useState(0);


  useEffect(()=>{
    axios.get('http://localhost:2700/data').then((resp)=>{
      setdata(resp.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[force])


  return (
    <div>

    <div className='nav'>
    <h2>Welcome to the Home Page</h2>
    <button className='logouts' onClick={handleLogout}>Logout</button>
    </div>
{/* <!----------------------------------------------------------------------------> */}
    <div  className="searchblock">

      <Update/>

       </div>

{/* <!----------------------------------------------------------------------------> */}
<div className='dname'>
      <h3>Product</h3>
      <h3>Price</h3>
      </div>

       <div  className="addblock">

       {/* <ProductList/> */}

     
       <div className="viewbox">
            { data1.map((x) =>{
              return(
                <div className='viewbox2'>
                <p  >{x.name}</p>
               </div>
              )
            }) }
          </div>

             <br />
          <div className="viewbox">
            { data1.map((x) =>{
              return(
                <div className='viewbox2'>
                <p className='pdata'>{x.price}</p>
               </div>
              )
            }) }
          </div>

       </div>


    </div>
  );
};

export default Home;

