import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'responsive-inc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.loginFormGroup = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    console.log();
    
  }

  onLogin() {
    console.log(this.loginFormGroup.value);
    this.router.navigate(['home'])
  }
}
