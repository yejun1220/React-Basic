import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefalut();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do'
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;
