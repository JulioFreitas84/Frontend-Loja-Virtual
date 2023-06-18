import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoHeadComponent } from './components/views/carrinho/carrinho-head/carrinho-head.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaHeadComponent } from './components/views/categoria/categoria-head/categoria-head.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CidadeHeadComponent } from './components/views/cidade/cidade-head/cidade-head.component';
import { EstadoCreateComponent } from './components/views/estado/estado-create/estado-create.component';
import { EstadoHeadComponent } from './components/views/estado/estado-head/estado-head.component';
import { HomeComponent } from './components/views/home/home.component';
import { MarcaHeadComponent } from './components/views/marca/marca-head/marca-head.component';
import { PessoaHeadComponent } from './components/views/pessoa/pessoa-head/pessoa-head.component';
import { ProdutoHeadComponent } from './components/views/produto/produto-head/produto-head.component';


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
    path: 'estado/head',
    component: EstadoHeadComponent
  },
  {
    path: 'estado/create',
    component: EstadoCreateComponent
  },
  {
    path: 'produto',
    component: ProdutoHeadComponent
  },
  {
    path: 'marca',
    component: MarcaHeadComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoHeadComponent
  },
  {
    path: 'pessoa',
    component: PessoaHeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
