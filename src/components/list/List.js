import { useSelector } from "react-redux";

const List = () => {
  const list = useSelector((state) => state.arrList);
  return (
    <div>
      {list.map((el, idx) => (
        <p key={idx}>{el.text}</p>
      ))}
    </div>
  );
};
export default List;
