import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGINLINK } from '../../../../../shared/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signIn = LOGINLINK
}
