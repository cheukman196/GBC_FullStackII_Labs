import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, NgFor, RemoveSpacesPipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
  
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
