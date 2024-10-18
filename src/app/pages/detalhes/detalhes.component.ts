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

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){};

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(id).subscribe(data => {
      const dados = data.data;
      this.funcionario = dados;
      
      this.funcionario.creationDate = new Date(this.funcionario.creationDate!).toLocaleDateString('pt-BR')
      this.funcionario.changeDate = new Date(this.funcionario.changeDate!).toLocaleDateString('pt-BR')
    });

    
  }
}
