import { Action } from "@ngrx/store"
import {  SPANISH,ENGLISH } from "../const/text.const"

export class spanishMessage implements Action {
  readonly type = SPANISH
  constructor(public payload: string){}
}

export class englishMessage implements Action {
  readonly type = ENGLISH
  constructor(public payload: string){}
}

export type  MessageActions = spanishMessage | englishMessage