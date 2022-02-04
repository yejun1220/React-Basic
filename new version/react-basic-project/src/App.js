import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick2 = () => {
    setShowing((prev) => !prev);
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
    return console.log("Bye2 :(");
  }, [count]);

  function Hello() {
    useEffect(() => {
      console.log("Hello :)");
      return () => {
        // 함수(컴포넌트)가 사라질 때 기존 코드 대신 return 코드가 반환된다. 그 외는 기존 코드와 return 코드 전부 실행된다.
        console.log("Bye :(");
      };
    }, [count]); // 종속에 count를 넣으면 Hello가 화면에 보이고 count가 변화하면 "Hello :)"가 출력된다.
    return <div>Hello</div>;
  }
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
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
