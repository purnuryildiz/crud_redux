const initialState = {
  user: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  console.log("userReducer'a geldi:", action);
  switch (action.type) {
    case "LOGIN":
      return state;

    case "REGISTER":
      return state;

    case "LOGOUT":
      return state;

    //Burada tanımlı olmayan bir aksiyon tetiklenirse user state'inin sabit olarak kalmasını sağlar:
    default:
      return state;
  }
};

export default userReducer;
