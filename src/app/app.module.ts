import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CarrinhoComprasComponent } from './components/views/carrinho/carrinho-compras.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaHeadComponent } from './components/views/categoria/categoria-head/categoria-head.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { CidadeHeadComponent } from './components/views/cidade/cidade-head/cidade-head.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { EstadoCreateComponent } from './components/views/estado/estado-create/estado-create.component';
import { EstadoDeleteComponent } from './components/views/estado/estado-delete/estado-delete.component';
import { EstadoHeadComponent } from './components/views/estado/estado-head/estado-head.component';
import { EstadoUpdateComponent } from './components/views/estado/estado-update/estado-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { MarcaCreateComponent } from './components/views/marca/marca-create/marca-create.component';
import { MarcaDeleteComponent } from './components/views/marca/marca-delete/marca-delete.component';
import { MarcaHeadComponent } from './components/views/marca/marca-head/marca-head.component';
import { MarcaUpdateComponent } from './components/views/marca/marca-update/marca-update.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaHeadComponent } from './components/views/pessoa/pessoa-head/pessoa-head.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { ProdutoHeadComponent } from './components/views/produto/produto-head/produto-head.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { CarrinhoCreateComponent } from './components/views/carrinho/carrinho-create/carrinho-create.component';
import { CarrinhoDeleteComponent } from './components/views/carrinho/carrinho-delete/carrinho-delete.component';
import { CarrinhoHeadComponent } from './components/views/carrinho/carrinho-head/carrinho-head.component';
import { CarrinhoUpdateComponent } from './components/views/carrinho/carrinho-update/carrinho-update.component';



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent,HomeComponent, CategoriaHeadComponent, CategoriaCreateComponent, CategoriaDeleteComponent, CategoriaUpdateComponent, EstadoHeadComponent, CarrinhoComprasComponent, EstadoCreateComponent, EstadoDeleteComponent, EstadoHeadComponent, EstadoUpdateComponent, CidadeHeadComponent, CidadeCreateComponent, CidadeDeleteComponent, CidadeUpdateComponent, PessoaCreateComponent, PessoaDeleteComponent, PessoaHeadComponent, PessoaUpdateComponent, ProdutoCreateComponent, ProdutoDeleteComponent, ProdutoHeadComponent, ProdutoUpdateComponent, MarcaCreateComponent, MarcaDeleteComponent, MarcaHeadComponent, MarcaUpdateComponent, CarrinhoCreateComponent, CarrinhoDeleteComponent, CarrinhoHeadComponent, CarrinhoUpdateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
