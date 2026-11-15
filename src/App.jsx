import { useState } from "react"


function App() {
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ])

  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(100)
  const [warningMessage , setWarningMessage ] = useState('')


  function handleAddToCart(oneItem){
       if(availableBalance> oneItem.price){

    const filteredItems = availableItems.filter((item)=>{
     return item.id !== oneItem.id
    })
    setWarningMessage('')
    setAvailableItems(filteredItems)
    setShoppingCart([...shoppingCart,oneItem])
    setAvailableBalance(availableBalance - oneItem.price)
  }
  else{
    setWarningMessage('Insufficient funds. Your balance is too low to purchase this item')

  }}


  function handleRemoveFromShoppingCart(oneItem){
    const filteredItems = shoppingCart.filter((item)=>{
     return item.id !== oneItem.id
    })
    setShoppingCart(filteredItems)
    setAvailableBalance(availableBalance+ oneItem.price)
    setAvailableItems([...availableItems, oneItem])  
  }

  return (
    <div>
      <h1>Zaid's Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>
       <p>{warningMessage}</p>
      <h2>Available Items</h2>
      {availableItems.map((oneItem)=>
      <div key={oneItem.id}>
       <p>Name:{oneItem.name}</p> 
       <p>Price:{oneItem.price}</p> 
        <button onClick ={()=>{handleAddToCart(oneItem)}}>Add to Cart</button><br/>

      </div>
      
      )}

      <h2>Shopping Cart</h2>
  
      {shoppingCart.map((oneShoppingCart)=>
      <div key={oneShoppingCart.id}>
        <p>Name:{oneShoppingCart.name} </p>
        <p>Price:{oneShoppingCart.price} </p>
        <button onClick ={()=>{handleRemoveFromShoppingCart(oneShoppingCart)}}>Remove</button><br/>

      </div>)
}







</div>)}

export default App
