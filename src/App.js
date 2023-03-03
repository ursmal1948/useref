import { useState, useEffect, useRef } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
  }, []);

  const stopCounter = () => {
    clearInterval(intervalRef.current)
  }

  return (
      <>
        <p>{counter}</p>
        <button onClick={stopCounter}>Stop the counter</button>
      </>
  );
}

export default App;
