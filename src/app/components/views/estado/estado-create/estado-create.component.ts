import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado.model';
import { EstadoService } from '../estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-create',
  templateUrl: './estado-create.component.html',
  styleUrls: ['./estado-create.component.css']
})
export class EstadoCreateComponent implements OnInit {

  estado: Estado = {
    nome: '',
    descricao: ''
  }

  constructor(private service: EstadoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.estado).subscribe((resposta) => {
      this.router.navigate(['estado'])
      this.service.mensagem('Estado criada com sucesso!')
    }, err => {
      for(let i = 0; i < err.error.erros.length; i ++){
          this.service.mensagem(err.error.erros[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['estado'])
  }

}
