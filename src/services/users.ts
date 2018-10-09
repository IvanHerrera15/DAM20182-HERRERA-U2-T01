import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class Users{
    public users:any;
    constructor(private http:Http){

    }

    getUsers():void{
        this.http.get("http://127.0.0.1:8080/usuarios.json").subscribe(
            (res)=>{
                this.users= res.json();
                console.log("Oki");
            },
            (err)=>{
                console.log(err);
            }
        );
    }
}