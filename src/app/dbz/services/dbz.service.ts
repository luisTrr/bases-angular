import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{

    id: uuid(),
    name: 'Krillin',
    power: 1000

  },{

    id: uuid(),
    name: 'Goku',
    power: 9500

  },{

    id: uuid(),
    name: 'Freezer',
    power: 100000

  },{

    id: uuid(),
    name: 'Piccolo',
    power: 9000

  },{

    id: uuid(),
    name: 'Gohan',
    power: 10500

  }

];

  addCharacter( character: Character ): void {

    const newCharacter: Character ={ id: uuid(), ...character};


    this.characters.push(newCharacter);
  }


  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
