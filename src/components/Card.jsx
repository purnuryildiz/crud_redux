import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/reducers/actionTypes";
import Modal from "./Modal";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    //onaylamazsa fonksiyonu durdur:
    if (!confirm("Are you sure you want to delete?")) return;
    //silinmesine karar verildiyse reducer'a todo'yu silmek için haber gönderilmesi gerekiyor:
    dispatch({ type: ActionTypes.DELETE, payload: todo.id });
  };
  //tamamla butonuna tıklanılınca is_done değerini tersine çevir:
  const handleStatus = () => {
    //güncel nesneyi oluştur:
    const updatedTodo = { ...todo, is_done: !todo.is_done };
    //reducer' a bir todo'nun güncellenmesi gerektiğini haber ver:
    dispatch({ type: ActionTypes.UPDATE, payload: updatedTodo });
  };

  return (
    <div className="border shadow-lg p-4 my-5 rounded">
      <h5>{todo.text} </h5>

      <p>{todo.createdAt} </p>

      <button onClick={() => setIsOpen(true)} className="bg-primary">
        Edit
      </button>
      <button onClick={handleStatus} className="bg-success mx-2">
        {todo.is_done ? "Continue.." : "Done"}
      </button>
      <button onClick={handleDelete} className="bg-warning">
        Delete
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
