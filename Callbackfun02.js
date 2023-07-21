import { useCallback, useState } from "react";

const MultipleUseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const mountFun = useCallback(() => {
    console.log({ counter1, counter2, counter3 });
  }, []);

  const firstFun = useCallback(() => {
    console.log({ counter1, counter2, counter3 });
  }, [counter1]);

  const secondFun = useCallback(() => {
    console.log({ counter1, counter2, counter3 });
  }, [counter2]);

  const thirdFun = useCallback(() => {
    console.log({ counter1, counter2, counter3 });
  }, [counter3]);

  const normalFun = () => {
    console.log({ counter1, counter2, counter3 });
  };

  return (
    <>
      <p onClick={() => setCounter1((prevState) => prevState + 1)}>
        Count 1: {counter1}
      </p>
      <p onClick={() => setCounter2((prevState) => prevState + 1)}>
        Count 2: {counter2}
      </p>
      <p onClick={() => setCounter3((prevState) => prevState + 1)}>
        Count 3: {counter3}
      </p>

      <button onClick={mountFun}>On Mount</button>
      <button onClick={firstFun}>First Fun</button>
      <button onClick={secondFun}>Second Fun</button>
      <button onClick={thirdFun}>Third Fun</button>
      <button onClick={normalFun}>Normal Fun</button>
    </>
  );
};

export default MultipleUseCallback;
