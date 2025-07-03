import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-block-feature-one',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './block-feature-one.component.html',
  styleUrl: './block-feature-one.component.scss',
})
export class BlockFeatureOneComponent {

}
