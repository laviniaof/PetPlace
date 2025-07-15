import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  searchTerm: string = '';
  showSuggestions: boolean = false;
  suggestions: string[] = [
    'Ração para cachorro',
    'Brinquedos para gato',
    'Coleira personalizada',
    'Cama para pet',
    'Shampoo para cachorro',
    'Arranhador para gato',
    'Petisco natural',
    'Vermífugo',
    'Vacina',
    'Consulta veterinária'
  ];

  onSearch() {
    if (this.searchTerm.trim()) {
      console.log('Buscando por:', this.searchTerm);
      // Aqui você pode implementar a lógica de busca
      this.showSuggestions = false;
    }
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.showSuggestions = false;
    this.onSearch();
  }

  onInputFocus() {
    this.showSuggestions = true;
  }

  onInputBlur() {
    // Pequeno delay para permitir cliques nas sugestões
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }
}
