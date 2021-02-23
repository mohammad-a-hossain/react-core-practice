import logo from './logo.svg';
import './App.css';


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
}
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

export default App;
