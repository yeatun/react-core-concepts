import React, { useEffect, useState } from "react" ;
import logo from './logo.svg';
import './App.css';

function App() { 
  const productMarket =[{product : 'Photoshop',price : '$80.00'},
                        {product : 'adobe premier pro',price : '$90.00'}]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter> 
        <Users></Users>
        <ul>
          {
            productMarket.map (productName=> <li>{productName.product} ({productName.price})</li>)
          }
         
        </ul>
        {
          productMarket.map (productName=> <Product name ={productName}></Product>)
        }
      
        <h1 style={{color :'pink'}}>cricketer</h1>
      <Cricketer name = 'sakib al hasan' work = 'all rounder'> </Cricketer>
      <Cricketer name ='musahfiquer rahim' work = 'wicket keeper batsman'> </Cricketer>
      <Cricketer name = 'Mustafizur rahman' work = 'bowler'> </Cricketer>
      </header>
    </div>
  );
}
function Counter (){
  const style = {
    border :'2px solid yellow',
    margin : "20px",
    borderRadius : '25px',
    boxShadow: '10px 10px 5px grey',
    width :'300px',
    height : '300px',
     

  }
  const [count,setCount] = useState(0);
  const handleIncrease =  () =>   setCount ( count +1); 
  const handleDecrease =  () =>   setCount ( count -1);    
  
  return(
   
    <div style={style}>
      <h1>count:{count}</h1>
      <button onClick = {handleDecrease}>-</button>
      <button onClick ={handleIncrease}>+</button>
    </div>

  )
}
function Users (){
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data))
  },[])
  return(
    <div><h1>Dynamic users: {users.length} </h1>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>

  )
}
function Product (props){
 const style = {
    border :'2px solid yellow',
    margin : "20px",
    borderRadius : '25px',
    boxShadow: '10px 10px 5px grey',
    width :'300px',
    height : '300px',
     

  }
  return(
    <div style ={style}>
      <h3>{props.name.product}</h3>
      <h5>{props.name.price}</h5>
      <button style ={{backgroundColor : 'gray',}}>Buy Now</button>
    </div>
  )
}
function Cricketer (props){
  return (
    <div style = {{border :'2px solid yellow',margin : "20px",borderRadius : '25px',boxShadow: '10px 10px 5px grey',width :'700px' }}>
      <h1> {props.name}</h1>
      <h2>{props.work}</h2>
    </div>
  )
}

export default App;
