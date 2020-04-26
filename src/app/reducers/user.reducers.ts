
import { Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions'
import { USER } from "../const/text.const"

export interface UserInterface {
  name: string,
  last_name: string
}

export const initialState = {
  name: 'Jhon',
  last_name: 'Doe'
}

export function userReducer(
  state: UserInterface = initialState, 
  // action: Action
  action: UserActions.getUser
){
  console.log(action);
  switch (action.type) {
    
    case USER:
      return {...state, name: action.payload.name, last_name: action.payload.last_name}
    default:
      return {...state}
  }
}
