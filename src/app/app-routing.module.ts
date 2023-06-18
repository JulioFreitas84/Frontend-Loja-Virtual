
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { ProdutoComponent } from './components/views/produto/produto.component';
import { MarcaComponent } from './components/views/marca/marca.component';

import { CarrinhoComprasComponent } from './components/views/carrinho-compras/carrinho-compras.component';
import { PessoaComponent } from './components/views/pessoa/pessoa.component';
import { EstadoHeadComponent } from './components/views/estado/estado-head/estado-head.component';
import { EstadoCreateComponent } from './components/views/estado/estado-create/estado-create.component';
import { CategoriaHeadComponent } from './components/views/categoria/categoria-head/categoria-head.component';
import { CidadeHeadComponent } from './components/views/cidade/cidade-head/cidade-head.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categoria',
    component: CategoriaHeadComponent
  },
  {
    path: 'categoria/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categoria/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categoria/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'cidade',
    component: CidadeHeadComponent
  },
  {
    path: 'estado',
    component: EstadoHeadComponent
  },
  {
    path: 'estado/read',
    component: EstadoHeadComponent
  },
  {
    path: 'estado/create',
    component: EstadoCreateComponent
  },
  {
    path: 'produto',
    component: ProdutoComponent
  },
  {
    path: 'marca',
    component: MarcaComponent
  },
  {
    path: 'carrinhoCompras',
    component: CarrinhoComprasComponent
  },
  {
    path: 'pessoa',
    component: PessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
