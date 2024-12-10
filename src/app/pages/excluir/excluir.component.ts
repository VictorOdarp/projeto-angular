import { Component, Inject, OnInit} from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router} from '@angular/router';

// Angular Material //
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatInputModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent implements OnInit{

  inputdata: any;
  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.inputdata = this.data;
    this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe(data => {
      const dados = data.data;

      this.funcionario = dados;
    })
  }
  
  ExcluirFuncionario(){
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data)=>{
      location.assign("/");
    });
  }
}
