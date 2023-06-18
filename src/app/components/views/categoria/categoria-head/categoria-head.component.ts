import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-head',
  templateUrl: './categoria-head.component.html',
  styleUrls: ['./categoria-head.component.css']
})
export class CategoriaHeadComponent implements OnInit {

  categoria: Categoria [] = []
  displayedColumns: string[] = ['id', 'nome','descricao', 'acoes'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  findAll() {
    this.service.findAll().subscribe((resposta: any) =>{
      console.log(resposta);
      this.categoria = resposta;
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categoria/create"])
  }

}
