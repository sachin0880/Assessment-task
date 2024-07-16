import React from 'react';

import {useRef , useState } from 'react';
import axios from 'axios';

const Update = () => {


let [name, setname] = useState("");
let [price, setprice] = useState("");

let data = {name , price}

let find=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:2700/data', data)
    .then((res) => {
    alert("Added succefull")
  })
    .catch((err) => {
    alert("Invalid Data")
  })
}


return (
<div>

  <center>
    <div className="videobox">

      <form onSubmit={find} action="">

        <label htmlFor="\">
          <br />
          name: <input type="text" value={name} onChange={ (e)=>{setname(e.target.value);}} placeholder='enter the
          name' />
        </label>
        <br />

        <label htmlFor="\">
          price: <input  value={price} onChange={ (e)=>{setprice(e.target.value);}}
          placeholder='enter the price' />
        </label>
        <br />

        <button> Add </button>

      </form>

    </div>
  </center>

</div>
);
}

export default Update;