import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("Run all the time");
  useEffect(() => {
    console.log("CALL THE API..");
  }, []);

  return (
    <div className='App'>
      <h1 className={styles.title}>Hello</h1>
      {/* 다른 클래스 이름을 사용하기 위해 기억하지 않아도 된다.(랜덤이름생성) */}
      <Button text='Click' />
      <h1>{count}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
