import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


// Angular Material//
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatTableModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  colunas = ["Situacao", "Nome", "Sobrenome", "Departamento", "Editar", "Detalhes", "Excluir"];

  constructor(private funcionarioService: FuncionarioService) {}
  

  ngOnInit(): void {

    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.data;

      dados.map(item => {
        item.creationDate = new Date(item.creationDate!).toLocaleDateString('pt-BR');
        item.changeDate = new Date(item.changeDate!).toLocaleDateString('pt-BR');
      });

      this.funcionarios = data.data;
      this.funcionariosGeral = data.data;
    });
  }

  search(event : Event){
    console.log(event);
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.name.toLowerCase().includes(value);
    });
  };
  
}
