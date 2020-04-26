

import { Action } from "@ngrx/store"
import { USER } from "../const/text.const"

export class getUser implements Action {
  readonly type = USER
  constructor(public payload: { name: string, last_name: string }){}
}

export type  UserActions = getUser
