import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPagesComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    CharacterComponent
  ],
  exports:[
    MainPagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule {}
