import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from './services/pokeapi.service';
import { PokemonInterface } from './interface/pokemon.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent {
  selectedPokemon?: PokemonInterface;
  updateSubscription?: Subscription;

  constructor(private pokeAPIService: PokeAPIService) {}

  updatePokemonSelection(id: string) {
    this.updateSubscription = this.pokeAPIService
      .getPokemon(id)
      .subscribe((pokemon: PokemonInterface) => {
        this.selectedPokemon = pokemon;
      });
  }

  cleanSelection() {
    this.selectedPokemon = undefined;
  }

  ngOnDestroy() {
    this.updateSubscription?.unsubscribe();
  }
}
