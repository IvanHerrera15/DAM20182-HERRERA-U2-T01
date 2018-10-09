import { Component } from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import { Sports } from "../../services/sports";

@Component({
    templateUrl:'thirdPage.html'
})
export class ThirdPage {
    public usuario:string;
    constructor(public navCtrl: NavController, public sports:Sports, public navParams:NavParams) {
        this.sports.getSports();
        this.usuario= navParams.get("usuario");
    }

    goBack():void {
        this.navCtrl.pop();
    }
}