import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: IProduto[] = [];


  /*
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Fatima',
    idade: 18,
    altura: 1.56,
    graduado: true
  }

  listaProdutos: any[] = [
    { nome: 'Curso de Angular', precoProduto: 35.36, validade: '2021-12-31', id: 1 },
    { nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2 },
    { id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31' },
  ];
  */

  constructor(private produtosService: ProdutosService) {

  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscartodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  }

  deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id!).subscribe(() => {      // subscribe é para enviar o nosso pedido através dos métodos http.Como não teremos nenhum retorno, só iremos tratar a resposta.
      this.produtosService.exibirMensagem(                         // vamos tratar a mensagem de erro
        'SISTEMA',
        `${produto.nome} foi excluido com sucesso!`,
        'toast-error'                                              // aqui vamos passar o tipo de erro
      );
      this.carregarProdutos();
    });
  }
}
