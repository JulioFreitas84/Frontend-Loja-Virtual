import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade-head',
  templateUrl: './cidade-head.component.html',
  styleUrls: ['./cidade-head.component.css']
})
export class CidadeHeadComponent implements OnInit {

  cidade: Cidade [] = []
  displayedColumns: string[] = ['id', 'nome','descricao', 'acoes'];


  constructor(private service: CidadeService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.cidade = resposta;
    })
  }

  navegarParaCidadeCreate(){
    this.router.navigate(["cidade/create"])
  }

}
