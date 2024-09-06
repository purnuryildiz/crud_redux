import { v4 } from "uuid";
import ActionTypes from "./actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log("to do reducer a geldi:", action);
  switch (action.type) {
    //ADD action u tetiklenirse todo oluştur:
    case ActionTypes.ADD:
      //todo nesnesi oluştur:
      const newTodo = {
        id: v4(),
        text: action.payload,
        is_done: false,
        createdAt: new Date().toLocaleDateString(),
      };
      //nesneyi diziye ekle:
      //push methodu yerine farklı bir method kullanıyorduk ki bu method sayesinde doğrudan diziyi güncellemek yerine yeni bir dizi elde ediyorduk:
      const added = state.todos.concat(newTodo);

      //state'i güncelle:

      return { todos: added };

    //DELETE action'u tetiklenirse todo'yu kaldır:

    case ActionTypes.DELETE:
      //payload ile gelen id'yi diziden kaldır:
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { todos: filtered };
    //UPDATE action'u tetiklenirse dizideki eski elemanı güncelle:
    //dizideki mevcut bir elemanı güncellemek için kullanılan method: map
    case ActionTypes.UPDATE:
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return { todos: updated };

    default:
      return state;
  }
};
export default todoReducer;
