import { useCallback, useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const callFunc = useCallback(() => {
    console.log({ count });
  }, []);

  const data = useMemo(() => {
    let val = 0;
    for (let i = 1; i <= 6; i++) {
      val += i;
    }

    return val;
  }, []);

  const callFunc2 = () => {
    console.log({ count });
  };

  return (
    <>
      <p>
        Counter: {count} {data}
      </p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>

      <button onClick={callFunc}>Show Count</button>
    </>
  );
};

export default App;
