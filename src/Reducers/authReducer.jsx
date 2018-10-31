

const AUTH_USER='AUTH_USER'


export const authUser = user => ({
  type: AUTH_USER,
  user
});

const initialState={
  user:{}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state,user:action.user} ;

    default:
      return state;
  }
};
