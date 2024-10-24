import { Component, Input, input, OnInit, Output } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  funcionario?: Funcionario;
  id!:number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){};

  ngOnInit(): void {
    console.log("componente inicializado novamente")
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(this.id).subscribe(data => {
      const dados = data.data; 
      
      dados.creationDate = new Date(dados.creationDate!).toLocaleDateString('pt-BR')
      dados.changeDate = new Date(dados.changeDate!).toLocaleDateString('pt-BR')

      this.funcionario = dados;
    });
   
  }

  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe(data => {
      this.router.navigate(["/"]);
    });
  }
}
