import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  selector: 'app-hero-detail',
  imports: [InputFormatDirective],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
  @Input() hero?: Hero;
}
