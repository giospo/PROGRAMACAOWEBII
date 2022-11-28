import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

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

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );

      /*
      console.log('Nome: ', this.nome);
      console.log('Validade: ', this.validade);
      console.log('Preço: ', this.preco);
      alert('Salvo com sucesso!')
      */
      this.router.navigate(['/produtos']);
    });
  }
}
