const USER_LOGIN = "USER_LOGIN";

export const userLogin = user => ({
  type: USER_LOGIN,
  user
});

const initialState = {
  user: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.user };

    default:
      return state;
  }
};
