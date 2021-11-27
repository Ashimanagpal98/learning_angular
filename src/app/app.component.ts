import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( ){

  }

  title = 'CCC';
  displayName = '';


/*-----------Oneway databinding------------*/
/*----------
  userName2='';
  displayName='';

  getUserName2(event: any){
    this.userName2 = event.target.value;
  }
  saveUserName(){
    this.displayName = this.userName2;
  }
--------------*/

/*-----------Twoway databinding------------*/
changeName(){
  this.displayName = 'I am new value';
}
onedit(){
  console.log('Called edit button');
}
oneditTwo(){
  console.log('Called edit second button')

}
}


