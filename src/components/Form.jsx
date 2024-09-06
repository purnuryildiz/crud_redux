import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/reducers/actionTypes";

const Form = () => {
  // Redux'a action göndermek için useDispatch hook'unu kullanıyoruz
  const dispatch = useDispatch();

  // Form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    // input taki yazıya eriş
    const text = e.target[0].value.trim();
    // yazı yoksa uyarı gönder
    if (!text) return toast.warn("Enter todo..");
    // reducer 'a yeni bir todo'un eklenmesi gerektiğini haber ver
    dispatch({ type: ActionTypes.ADD, payload: text });
    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input className="form-control" type="text" />
      <button className="btn btn-warning">+</button>
    </form>
  );
};

export default Form;
