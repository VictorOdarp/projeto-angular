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

    }); 
  }
}
