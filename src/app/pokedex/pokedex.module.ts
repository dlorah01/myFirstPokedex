import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokeScreenComponent } from './poke-screen/poke-screen.component';
import { PokeDescriptionComponent } from './poke-description/poke-description.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokedexComponent,
    PokeScreenComponent,
    PokeDescriptionComponent,
    PokeListComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class PokedexModule {}
