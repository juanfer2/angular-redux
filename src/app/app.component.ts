import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as text from './actions/text.actions'
import * as user from './actions/user.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'angular-flux';
  data$ : Observable<any>
  user$ : Observable<any>

  constructor(private store: Store<any>){
    this.data$ = store.select('store');
    this.user$ = store.select('user')
    console.log(this.user$)
  }

  spanishMessage(){
    this.store.dispatch(new text.spanishMessage('ESPAÑOL')  )
  }

  englishMessage(){
    this.store.dispatch(new text.englishMessage('INGLISH')  )
  }

  changeUser(){
    this.store.dispatch(new user.getUser( {name: 'nombre', last_name:'last_name'} )   )
  }


}
