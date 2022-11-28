import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/cadastrar', component: CadastrarProdutoComponent },
  { path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

