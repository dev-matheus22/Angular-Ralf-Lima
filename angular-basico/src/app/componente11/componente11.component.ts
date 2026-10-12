import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // objeto de formulário
  formulario = new FormGroup({
  nome   : new FormControl('', [Validators.required, Validators.minLength(3)]),
  idade  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
})

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Armazenar índice
  indice:number = -1;

  // Vetor
  vetor:Pessoa[] = [];

  // Função
  cadastrar(){
    // Cadastro
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza
    this.formulario.reset();

    // Visalização

    // Seleção
    
  }

  selecionar(indice:number){
    // Atribuir indice
    this.indice = indice;

    // Atribuir ao form
    this.formulario.setValue({
      nome : this.vetor[indice].nome, 
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });
    this.btnCadastrar = false;

  }

  // Alterar
  alterar(){
    // Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os inputs
    this.formulario.reset;

    // Visibilidade
    this.btnCadastrar = true;
  }

  // Remoção
  remover(){
    // REMOVENDO PESSOA 
    this.vetor.splice(this.indice, 1);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Cancelamento
  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}

