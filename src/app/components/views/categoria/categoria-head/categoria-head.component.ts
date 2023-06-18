import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-head',
  templateUrl: './categoria-head.component.html',
  styleUrls: ['./categoria-head.component.css']
})
export class CategoriaHeadComponent implements OnInit {

  categoria: Categoria[] = []

  displayedColumns: string[] = ['id', 'nome','livros', 'acoes'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.categoria = resposta;
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categoria/create"])
  }

}
