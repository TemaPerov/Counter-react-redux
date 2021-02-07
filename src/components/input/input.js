import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./../../Redux/action";
const Input = () => {
  const [valueInp, setValueInp] = useState("");
  const dispatch = useDispatch();
  const eventAction = (e) => {
    setValueInp(e.target.value);
  };
  const addToList = () => {
    dispatch(addTask(valueInp));
  };
  return (
    <div>
      <input value={valueInp} onChange={eventAction} />
      <button onClick={addToList}>+</button>
    </div>
  );
};
export default Input;
