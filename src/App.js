import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions"

function App() {
  const counter = useSelector(state => state.myCount)
  const despatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => despatch(increment())}>+</button>
      <button onClick={() => despatch(decrement())}>-</button>
    </div>
  );
}

export default App;
