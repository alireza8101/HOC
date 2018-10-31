import {combineReducers} from 'redux'
const ADD_USER='ADD_USER'

export const addUser=(user)=>({
type:ADD_USER,
user
})
const initialState={
  user:'ali'
}

const userReducer=(stat=initialState,action)=>{
switch(action.type){
  case ADD_USER:
  return {...stat,user:action.user}
  default:
  return stat
      }
}

 const rootRducer=combineReducers({userReducer})

 export default rootRducer