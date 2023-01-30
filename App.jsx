
import { useState } from "react";
import Buttons from "./components/Button";



function App() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 10);
  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        <Buttons onClick = {increment}>Increment</Buttons>
      </div>
      <div>
        <Buttons onClick = {decrement}>Decrement</Buttons>
      </div>
    </div>
  );
}

export default App;
