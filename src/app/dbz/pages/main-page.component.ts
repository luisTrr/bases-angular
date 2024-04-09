import { Component, } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPagesComponent {

  constructor ( private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter( id: string): void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character : Character ){
    this.dbzService.addCharacter(character);
  }


  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
  }

}
