import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.singupUser(email,pass);
  }

}
