import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../interface/pokemon.interface';
import { PokeAPIService } from '../services/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  @Input() selectedPokemon?: PokemonInterface;
  @Output() emitSelection: EventEmitter<string> = new EventEmitter();
  pokemonList: { name: string; url: string }[] = [];
  currentPokemon: PokemonInterface | null = null;
  offset = 0;
  limit = 20;
  totalCount = 0;
  searchQuery: string = '';

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.fetchPokemonList();
  }

  fetchPokemonList(): void {
    this.pokeAPIService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data) => {
        this.pokemonList = data.results;
        this.totalCount = data.count;
      });
  }

  nextPage(): void {
    if (this.offset + this.limit < this.totalCount) {
      this.offset += this.limit;
      this.fetchPokemonList();
    }
  }

  previousPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.fetchPokemonList();
    }
  }

  searchPokemon(): void {
    this.selectPokemon(this.searchQuery);
    this.clearSearch();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.currentPokemon = null;
    this.fetchPokemonList();
  }

  extractPokemonId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  parsePokemonIdTo4Numbers(id: string): string {
    const idealNumbers = 4;
    const zerosToAdd = idealNumbers - id.length;
    return '0'.repeat(zerosToAdd) + id;
  }

  selectPokemon(id: string) {
    if (
      !isNaN(parseInt(id)) &&
      parseInt(id) <= this.totalCount &&
      parseInt(id) >= 1
    ) {
      this.emitSelection.emit(id);
    }
  }

  onKeydown(value: KeyboardEvent) {
    if (value.key === 'Enter' && this.searchQuery.length) {
      this.searchPokemon();
    } else if (value.key === 'Escape') {
      this.clearSearch();
    }
  }
}
