import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  funcionario?: Funcionario;
  id!:number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){};

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(this.id).subscribe(data => {
      const dados = data.data; 
      
      dados.creationDate = new Date(dados.creationDate!).toLocaleDateString('pt-BR')
      dados.changeDate = new Date(dados.changeDate!).toLocaleDateString('pt-BR');

      this.funcionario = dados;
    });
   
  }

  InativaFuncionario(){
     this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      window.location.href = "/";
    });
  }
  
}
