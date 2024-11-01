import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

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
