import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [decrease, setDecrease] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  const fetchQuestion = () => {
    Axios.get("http://jservice.io/api/random").then((res) => {
      setQuestion(res.data[0].question);
      setValue(res.data[0].value);
      setAnswer("");
    });
  };



  const finalScore = () => {
    setScore(total + decrease);
  };


  const increaseValue = () => {
    setTotal(total + value);
  };

  const decreaseValue = () => {
    setDecrease(decrease - value);
  };

  useEffect(() => {
    finalScore();
  }, [total, decrease]);

  return (
    <div className="App">
      
      <button onClick={fetchQuestion}>Fetch Question</button>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>Question: {question}</p>
      <p>Value: {value}</p>
      <p>Increase Value: {total}</p>
      <p>Decrease Value: {decrease}</p>
      <p>Score:{score}</p>
    </div>
  );
}

export default App;