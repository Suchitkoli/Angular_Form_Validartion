import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';
import { freeApiservice } from './FreeApi/freeApi.service';
import { pincode } from './FreeApi/pincode';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
 
  
  
  
  constructor(private _freeApiservie:freeApiservice) {
    

   }
  pincode!:string
   @Input() users : Array<User> = new Array<User>();

  code:Array<any>=new Array();
  // userModel=new User('','',8668822108,'Nashik',45634);
  userModel:User=new User();
     
  onSubmit(){
    this.users.push(this.userModel)
    this.userModel=new User();
    console.log(this.users)
    
  }
  
  //  code!:any
  validatePinCode(){
    console.log('pincode::',this.userModel.pincode)
    if(this.userModel.pincode.length===6){
      this._freeApiservie.getpincode(this.userModel.pincode).subscribe(message =>{
        console.log(message)
        this.code.push(message)
     
       
        


     
      
        

      })
    }
  }
 
  ngOnInit(): void {
     
    // this._freeApiservie.getpincode()
    // .subscribe(
    //   data=>{
    //     this.lstpincode=data;
    //     // this.lstpincode=this.lstpincode.filter((pincode:any) =>pincode)
    //     console.log(this.lstpincode)
       
      }
    


}

