import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PokemonInterface } from '../interface/pokemon.interface';

@Component({
  selector: 'app-poke-screen',
  templateUrl: './poke-screen.component.html',
  styleUrl: './poke-screen.component.scss',
})
export class PokeScreenComponent {
  @Input() selectedPokemon?: PokemonInterface;
  @Output() emitClean: EventEmitter<void> = new EventEmitter();
  imageLoaded = false;

  getPokemonOfficialImage(): string {
    return this.selectedPokemon
      ? this.selectedPokemon.sprites.other['official-artwork'].front_default
      : '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedPokemon']) {
      this.startChangeImage();
    }
  }

  getPokemonType(): string {
    return this.selectedPokemon ? this.selectedPokemon.types[0].type.name : '';
  }

  parsePokemonIdTo4Numbers(id: string): string {
    const idealNumbers = 4;
    const zerosToAdd = idealNumbers - id.length;
    return '0'.repeat(zerosToAdd) + id;
  }

  startChangeImage() {
    this.imageLoaded = false;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  goBack() {
    this.emitClean.emit();
  }
}
