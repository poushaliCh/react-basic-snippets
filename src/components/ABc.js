import React from 'react'

export default function ABc() {
    const [cart, setCart] = React.useState([]);
  const [input, setInput] = React.useState([]);

  const saveInput = e => {
    setInput(e.target.value);
  };

  const addNewItem = () => {
    setCart(prevState => [...prevState, input]);
    // main();
  };

//   const main = () =>{
//     const x = cart.split("");
//     console.log(x);
//   } 
//   console.log(cart);
    return (
        <div>
          <input type="text" onChange={saveInput} />
          <button onClick={addNewItem}> Add Item </button>
          <ol>
          
            {cart.map((Items, Index) => (
              <li key={Index}> {Items}</li>
            ))}
          </ol>
      
        </div>
      );
}
