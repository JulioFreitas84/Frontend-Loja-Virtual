import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado.model';
import { EstadoService } from '../estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-head',
  templateUrl: './estado-head.component.html',
  styleUrls: ['./estado-head.component.css']
})
export class EstadoHeadComponent implements OnInit {

  estado: Estado [] = []
  displayedColumns: string[] = ['id', 'nome','livros', 'acoes'];

  constructor(private service: EstadoService, private router: Router) { }

  ngOnInit(): void {

    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.estado = resposta;
    })
  }

  navegarParaEstadoCreate(){
    this.router.navigate(["estado/create"])
  }

}
