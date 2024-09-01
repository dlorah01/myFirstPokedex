import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../interface/pokemon.interface';
import { PokemonList } from '../interface/pokemon-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(pokemon: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.apiUrl}${pokemon}`);
  }

  getPokemonList(offset: number, limit: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(
      `${this.apiUrl}?offset=${offset}&limit=${limit}`
    );
  }
}
