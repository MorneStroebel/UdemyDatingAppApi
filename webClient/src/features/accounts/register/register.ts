import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RegisterCreds} from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  cancelRegister = output<boolean>();
  protected creds: RegisterCreds = {} as RegisterCreds;

  register() {
    console.log(this.creds);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
