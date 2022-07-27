const Counter = (props) => {
    const { contador, incre, decre} = props
    return (
      <div>
        <h1>Contador: {contador}</h1>
        {/* 2 botones uno para sumar y otro para restar */}
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
      </div>
    );
  };
  
  export default Counter;