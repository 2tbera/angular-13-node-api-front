import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { getAuthorised } from "../../../../store/auth/actions/auth.action";

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {

  public form: FormGroup = this.fb.group({
    email: [, [Validators.email ,Validators.required]],
    password: [, Validators.required],
  });

  public hide = true;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  public onSubmit(): void {
    this.store.dispatch(getAuthorised(this.form.value))
  }

}


