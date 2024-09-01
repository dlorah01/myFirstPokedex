import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from './services/pokeapi.service';
import { PokemonInterface } from './interface/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit {
  selectedPokemon?: PokemonInterface;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {}

  updatePokemonSelection(id: string) {
    this.pokeAPIService
      .getPokemon(id)
      .subscribe((pokemon: PokemonInterface) => {
        this.selectedPokemon = pokemon;
      });
  }

  cleanSelection() {
    this.selectedPokemon = undefined;
  }
}
