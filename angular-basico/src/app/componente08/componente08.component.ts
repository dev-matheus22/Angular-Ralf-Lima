import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente08',
  imports: [FormsModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {
  // VARIAVEL DE MÉDIA
  media:number = 5;

  // Vetor
  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Libguagem

  linguagem:string = 'PHP';
}
