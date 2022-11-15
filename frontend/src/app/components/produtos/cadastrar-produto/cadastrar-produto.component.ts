import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  nome: string = '';
  validade: string = '';
  preco: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    console.log('Nome: ', this.nome);
    console.log('Validade: ', this.validade);
    console.log('Preço: ', this.preco);
    alert('Salvo com sucesso!')
  }
}
