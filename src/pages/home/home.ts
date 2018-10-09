import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Users} from "../../services/users";
import {SecondPage} from "../secondPage/secondPage"
import {ThirdPage} from "../thirdPage/thirdPage"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usu:string;
  psw:string;

  constructor(public navCtrl: NavController, public users:Users) {
    this.users.getUsers();
  }

  login():void{
    for(let i of this.users.users){
      if(i.usuario==this.usu && i.password==this.psw && i.role=="admin"){
        this.navCtrl.push(SecondPage, {
          usuario:this.usu
        });
      }else if(i.usuario==this.usu && i.password==this.psw && i.role=="user"){
        this.navCtrl.push(ThirdPage, {
          usuario:this.usu
        });
      }
    }
  }

}
