import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { REGISTERLINK } from '../../../../../shared/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signUp = REGISTERLINK;
}
