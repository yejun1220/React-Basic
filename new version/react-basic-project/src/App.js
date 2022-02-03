import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("Run all the time");

  useEffect(() => {
    console.log("CALL THE API..");
  }, []); // useEffect는 특정 상황에서만 실행되게 할 때 쓰인다. []안에는 state가 들어간다.
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변할 때만 useEffet가 실행된다.

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [count]);

  return (
    <div className='App'>
      <h1 className={styles.title}>Hello</h1>
      {/* 다른 클래스 이름을 사용하기 위해 기억하지 않아도 된다.(랜덤이름생성) */}
      <Button text='Click' />
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here..'></input>
      <h1>{count}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
