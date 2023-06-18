import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaHeadComponent } from "./components/views/categoria/categoria-head/categoria-head.component";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { ProdutoComponent } from './components/views/produto/produto.component';
import { MarcaComponent } from './components/views/marca/marca.component';
import { CarrinhoComprasComponent } from './components/views/carrinho-compras/carrinho-compras.component';
import { PessoaComponent } from './components/views/pessoa/pessoa.component';
import { EstadoCreateComponent } from './components/views/estado/estado-create/estado-create.component';
import { EstadoDeleteComponent } from './components/views/estado/estado-delete/estado-delete.component';
import { EstadoHeadComponent } from './components/views/estado/estado-head/estado-head.component';
import { EstadoUpdateComponent } from './components/views/estado/estado-update/estado-update.component';
import { HomeComponent } from "./components/views/home/home.component";
import { CidadeHeadComponent } from './components/views/cidade/cidade-head/cidade-head.component';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent,HomeComponent, CategoriaHeadComponent, CategoriaCreateComponent, CategoriaDeleteComponent, CategoriaUpdateComponent, EstadoHeadComponent, ProdutoComponent, MarcaComponent, CarrinhoComprasComponent, PessoaComponent, EstadoCreateComponent, EstadoDeleteComponent, EstadoHeadComponent, EstadoUpdateComponent, CidadeHeadComponent, CidadeCreateComponent, CidadeDeleteComponent, CidadeUpdateComponent],
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
