import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  funcionarios: Funcionario[] = [];
  funcionariosGeral : Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.data;

      dados.map(item => {
        item.creationDate = new Date(item.creationDate!).toLocaleDateString('pt-BR')
        item.changeDate = new Date(item.changeDate!).toLocaleDateString('pt-BR')
      })

      console.log(dados);
    }); 
  }
}
