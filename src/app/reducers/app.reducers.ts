import { Action } from '@ngrx/store';
import * as textAction from '../actions/text.actions'
import {  SPANISH,ENGLISH } from "../const/text.const"

export interface appStore {
  text: string
}

export const initialState = {
  text: 'Initial text'
}

export function textReducer(
  state: appStore = initialState, 
  // action: Action
  action: textAction.MessageActions
){
  console.log(action);
  switch (action.type) {
    case SPANISH:
      return {...state, text: action.payload}
    case ENGLISH:
      return {...state, text: action.payload}
    default:
      return {...state}
  }
}