import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class Sports {
    public sports:any;

    constructor(private http:Http){

    }

    getSports():void{
        this.http.get("http://127.0.0.1:8080/sports.json")
            .subscribe(
                (res) => {
                    this.sports = res.json();
                    console.log(this.sports);
                },
                (err)=> {
                    console.log(err);
                }
            );
    } 
}