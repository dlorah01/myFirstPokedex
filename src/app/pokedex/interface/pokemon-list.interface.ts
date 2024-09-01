import { PokemonListItem } from './pokemon-list-item.interface';

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonListItem>;
}
