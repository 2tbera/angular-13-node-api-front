import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { getAuthorised, getRegistered } from "../../../../store/auth/actions/auth.action";
import { Store } from "@ngrx/store";

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {

  public form: FormGroup = this.fb.group({
    firstName: [, Validators.required],
    lastName: [, Validators.required],
    emailAddress: [, [Validators.email ,Validators.required]],
    password: [, Validators.required],
  });

  public hide: boolean = true;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  public onSubmit(): void {
    this.store.dispatch(getRegistered(this.form.value))
  }
}


