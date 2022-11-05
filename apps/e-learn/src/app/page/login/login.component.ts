import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { from, of, tap } from 'rxjs';
import { ChangeUser } from '../../shared/states/app/app.actions';

@Component({
  selector: 'responsive-inc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    public angularFireAuth: AngularFireAuth
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: [
        'randika@gmail.com',
        [Validators.required, Validators.minLength(2)],
      ],
      password: [
        'password1234',
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  ngOnInit(): void {
    console.log();
  }

  onLogin() {
    const { email, password } = this.loginFormGroup.value;
    const login = this.angularFireAuth.signInWithEmailAndPassword(
      email,
      password
    );

    from(login)
      .pipe(
        tap((result) => {
          const email = result.user?.email;
          if (email) this.store.dispatch(new ChangeUser(email));
          this.router.navigate(['home']);
        })
      )
      .subscribe();
  }
}
