import { Component } from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import { PlacesRest } from "../../services/placesrest";

@Component({
    templateUrl:'secondPage.html'
})
export class SecondPage {
    public usuario:string;
    constructor(public navCtrl: NavController, public placesrest:PlacesRest, public navParams:NavParams) {
        this.placesrest.getPlaces();
        this.usuario= navParams.get("usuario");
    }

    goBack():void {
        this.navCtrl.pop();
    }
}