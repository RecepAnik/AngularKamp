import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private toastrServicce:ToastrService) { }

  ngOnInit(): void {
   this. createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]


    })
  }


  login(){
   if (this.loginForm.valid) {
     console.log(this.loginForm.value);
let loginModel= Object.assign({},this.loginForm.value)
 
this.authService.login(loginModel).subscribe(Response =>{
  this.toastrServicce.info(Response.message)
  localStorage.setItem("token",Response.data.token)
},ResponseError=>{
  this.toastrServicce.error(ResponseError.error)
})

   }
  }

}
