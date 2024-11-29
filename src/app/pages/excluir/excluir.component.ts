import { Component, OnInit} from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';

// Angular Material //
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatInputModule, RouterModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent implements OnInit{

  funcionario?: Funcionario;
  id!:number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data =>{
      const dados = data.data;

      this.funcionario = dados;
    }));
  }

}
