
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  //logica
  const [counter, setCounter] = useState(0)
  const increment = ()=> setCounter(counter + 1)
  const decrement = ()=> setCounter(counter - 1)
  

  return (
    <div className="App">
      <Header />
      <Counter 
        contador = {counter}
        incre = {increment} 
        decre = {decrement}
      />
      <Footer />
    </div>
  );
}

export default App;
