import React from 'react'
import {useState} from 'react'

export default function Example() {

    const [data,setData] = useState([]);

    const handleInput = (e) =>{
      const val = e.target.value;
      const res = val.split(',');
      const rest = parseInt(res[res.length - 1]);
      // console.log(res[res.length - 1]);
      setData(rest>data? rest: data);
      // console.log(val);
      // console.log(val.split(','));
      // console.log(val.split(',').length);
      // setData([...data,res]);
      // console.log(val.split(',')[val.length-2]);
      // setData([...data,val.split(',')[val.length-1]]);
      

      // const arr = [];
      // arr.push(e.target.value);
      // setData(old=>[...old,arr]);
      // data.push(e.target.value);
      // setData(old=>[...old,data])
      // setData(e.target.value);
      // console.log(arr);
    }
    console.log(data);
    return (
      <div className="App">
        <input type="text" name="user"
        value={data}
         onChange={handleInput}/>

      {data}
      </div>
    );
  
}
