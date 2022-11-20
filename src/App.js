import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Naykos = [{name:'Jasim', age:'56'}, {name:'Dipjol', age:'50'}, {name:'Shakib Khan', age:'40'}];

  const frande = ["Ashik", "Boni", "Prince"];
  const products = [
    { name: "Choklet", price: "$100" },
    { name: "Biskut", price: "$90" },
    { name: "Cokacola", price: "60" },
  ];

  return (
    <div className="App">

      <Movies></Movies>
      <ul>
        {
          Naykos.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
        }
       </ul>
     

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Users></Users>

        <Counter></Counter>

        <ul>
          {products.map((pd) => (
            <li>
              {pd.name} {pd.price}
            </li>
          ))}
        </ul>

        {frande.map((fb) => (
          <p>{fb}</p>
        ))}

        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Shopon" age="30"></Person>
        <Person name="Korim vai" age="40"></Person>
      </header>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>Daynamic User: {user.length} </h1>
      <ul>
        {user.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDicrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Dicrease</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "2px solid #DE3163",
    borderRadius: "5px",
    backgroundColor: "#99A3A4",
    height: "400px",
    width: "400px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <button>By Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "1px solid red", margin: "2px", width: "400px" }}>
      <h1>Name: {props.name}</h1>
      <h2>age: {props.age} </h2>
    </div>
  );
}

function Nayok(props) {
  const nayokStyle = {
    border: "2px solid red",
    margin: "10px",
  };
  return (
    <div style={nayokStyle}>
      <h1>I am Kholnayok- {props.name}</h1>
      <h3>I am done 5 movies {props.age || 30} years</h3>
    </div>
  );
}
 
function Movies(){
  const [movies, setMovies] = useState(0)
  const handelMovies = () => setMovies(movies +1)
  return(
    <div>
       <button onClick={handelMovies}>ad movi</button>
       <h3>Movies Count: {movies}</h3>
       <AllMovies count={movies}></AllMovies>
      
    </div>
  )
}

function AllMovies(props){
  return(
   <p>My all Movies: {props.count}</p>
  )
}


export default App;
