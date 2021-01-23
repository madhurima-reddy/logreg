import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import {CrudService} from '../crud.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    Userid:new FormControl(''),
    password:new FormControl(''),
    Name:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    address:new FormControl('')
  })
  constructor(private service:CrudService,private router:ActivatedRoute) { }
  get User_id() {
    return this.registerForm.get('Userid');
  } 
 
  get password() {
    return this.registerForm.get('password');
  } 
 
  get Fullname() {
    return this.registerForm.get('Name');
  } 
 
  get email() {
    return this.registerForm.get('email');
  } 
 
  get Phone_no() {
    return this.registerForm.get('mobile');
  } 
 
  get address() {
    return this.registerForm.get('address');
  } 

  ngOnInit(): void {
  }
  submitForm(){
    this.service.register(this.registerForm.value).subscribe((data)=>
      console.log(data,"user registered Successfully")
    )
  }

}
