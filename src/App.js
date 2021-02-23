import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function  App() {
 
  return(
         <div className="App">
              <div>
                   <Counter></Counter> 
              </div>
              <hr/>
              <div>
                <Users></Users> 
                
              </div>
         </div> 
     
         )

   }

  
function Counter() {
  
  const productStyle={

    border:'1px solid red',
    height:'150px',
    width:'100%',
    margin:'0px auto',
  backgroundColor:'light-gray',
    float:'left'
  }

  const [counter, setCount] = useState(0)
    const handleIncreaser=() => setCount(counter +1 )
    const handleDecreaser=()=>setCount(counter -1)
    //console.log(prod)
  return(
    <div style={productStyle}>
        <h1>total count {counter}</h1>
       <button onClick={handleIncreaser}>Increaser </button>
       <button onClick={handleDecreaser}>De-creaser </button>
      </div>
 )
} 

function Users() {

  const [users, setUser] = useState([])

  useEffect(() =>{
   // console.log('use effect here')
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data =>
   
     setUser(data)) 
  //console.log(data))
   },[])
    
     
  
  return(
    <div>
      <h3>User useEffect with API call</h3>
        <p>how many? {users.length}</p>
       { users.map(user => <p>{user.name}</p>)}
        
    </div>
  )
}



export default App;

/* function Users() {
  return(
    <div>
      <h3>User useEffect with API call<h3>
        <p>User names</p>
    </div>
  )
} */

/* displaying object data ---------------------------------------------------------------
function  App() {
  const products=[
    {name:'java', price:'$333'},
    {name: 'java script', price:'$322'},
    {name:'python', price:'$444'},
    {name:'cse', price:'$3434'}
  ]
  return(
    <div className="App">
      <h1>react learning</h1>
      {
        products.map(prod => <Product product={prod}></Product>)
       
      }
       
    </div>
  )
}

function Product(prod) {
  const productStyle={
    border:'1px solid red',
    height:'150px',
    width:'200px',
    marginTop:'5px',
  backgroundColor:'light-gray',
    float:'left'
  }
  //console.log(prod)
  return(
    <div style={productStyle}>
        <p>product name {prod.product.name} </p>
          <p>price : {prod.product.price}</p>
           <button>Buy</button>
      </div>
 )
} */
/* // passing object style------------------------------------------
function App() {
  const Friends=['kabir','ambia','biplob','sayed','faruk']

  const products=[
    {name:'java', price:'$333'},
    {name: 'java script', price:'$322'},
    {name:'python', price:'$444'}
  ]
   

  
  return (
    <div className="App">
         <h1> react practice</h1>
          <Person name={Friends[0]} ></Person>
            <Product product={products[0]}> </Product>
            <Product product={products[1]}> </Product>
            <Product product={products[2]}> </Product>
    </div>
  );
}

function  Product(props) {
  

    const productStyle={
      border:'1px solid red',
      height:'150px',
      width:'200px',
      marginTop:'5px',
    backgroundColor:'light-gray',
      float:'left'
    }
    console.log(props)

   const {name, price} = props.product
   console.log(name,price)
  return(
     <div style={productStyle}>
         <p>product name :{name}</p>
           <p>price : {price}</p>
            <button>Buy</button>
       </div>
  )
}

function Person(props) {
  const personStyle={
    border:'1px solid white',
    margin:'10px'
  }
  console.log(props)
  return(
    <div style={personStyle}>
      <h1>my friend name is {props.name}  </h1>
      <p>this is a p tagg</p>
      </div>
  )
} */


// array style---------------------------------------
/* function App() {
  const Friends=['kabir','ambia','biplob','sayed','faruk']
  return (
    <div className="App">
      <header className='App-header'>
         <h1> react practice</h1>
         <Person name={Friends[0]} ></Person>
         <Person name={Friends[1]} ></Person>
    
      </header>
     
      
    </div>
  );
}
function Person(props) {
  const personStyle={
    border:'1px solid white',
    margin:'10px'
  }
  console.log(props)
  return(
    <div style={personStyle}>
      <h1>my friend name is {props.name}  </h1>
      <p>this is a p tagg</p>
      </div>
  )
}
 */

 // attribute style------------------------------------------
/* function App() {
  return (
    <div className="App">
      <header className='App-header'>
         <h1> react practice</h1>
         <Person name='abu hossain' title='mr'></Person>
         <Person name='aaron hossain'></Person> }
      </header>
     
      
    </div>
  );
}
function Person(props) {
  const personStyle={
    border:'1px solid red',
    margin:'10px'
  }
  console.log(props)
  return(
    <div style={personStyle}>
      <h1>my name is {props.title} {props.name} son of {props.name} </h1>
      <p>this is a p tagg</p>
      </div>
  )
} */

/* export default App; */
