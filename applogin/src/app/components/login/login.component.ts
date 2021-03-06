import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:'',
    password:'',
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {}
  
  onSubmit(){
    console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials!=null && this.credentials.password!=null))
    {
    
        this.loginService.generateToken(this.credentials).subscribe(
          response=>{
            console.log(response);

          },error=>{
            console.log(error)

          }
        )

    }else{
      console.log("fields are empty !!");
    }}
  
  

}
