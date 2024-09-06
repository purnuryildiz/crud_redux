import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/reducers/actionTypes";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  //input'un referansını oluştur:
  const inputRef = useRef(null);
  const handleSave = () => {
    //1-)inputtaki değere eriş:
    const newText = inputRef.current.value;
    //2-) todo nesnesinin text değerini güncelle:
    const updated = { ...todo, text: newText };
    //3-)  reducer'a todo'nun güncellenmesi gerektiğini haber ver:
    dispatch({ type: ActionTypes.UPDATE, payload: updated });
    //4-)Modal'ı kapat:
    close();
  };
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Todo</h5>
            <button onClick={close} type="button" className="btn-close"></button>
          </div>
          <div className="modal-body ">
            <label className="mb-3 form-label">Updated Todo:</label>
            <input
              ref={inputRef}
              className="form-control shadow"
              defaultValue={todo.text}
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={handleSave} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
