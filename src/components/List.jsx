import { useSelector } from "react-redux";
import React from "react";
import Card from "./Card";

const List = () => {
  //store'daki verilere abone olma:
  //Bir fonksiyon alır ve o fonksiyona parametre olarak store'u gönderir.
  const { todos } = useSelector((store) => store.todoReducer);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
