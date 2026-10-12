import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoService } from '../servico/produto.service';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-componente13',
  imports: [CommonModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
// Vetor
vetor:Produto[] = [];

// Inicialização
ngOnInit(){
  this.selecionar();
}

// Construtor
constructor(private servico:ProdutoService){

}

// Método
selecionar(){
  this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
}
}
