import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


 
@Injectable()
export class freeApiservice{
    url:string='https://api.postalpincode.in/pincode/'
    constructor(private httpclient:HttpClient){}
    getpincode(pin: string){
        return this.httpclient.get(this.url+pin)
    }



}