import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  // variavel imagem
    imagem:string = '/assets/dia.jpg';

  // alterar imagem
    alterarimagem(){
      if(this.imagem === '/assets/dia.jpg'){
        this.imagem = '/assets/noite.jpg';

      } else {
        this.imagem = '/assets/dia.jpg';
      }
    }
}
