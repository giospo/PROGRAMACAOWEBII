import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  /*
  nome: string = '';
  validade: string = '';
  preco: number = 0;
  */

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );

      /*
      console.log('Nome: ', this.nome);
      console.log('Validade: ', this.validade);
      console.log('Preço: ', this.preco);
      alert('Salvo com sucesso!')
      */

    });
    this.router.navigate(['/produto']);
  }
}
