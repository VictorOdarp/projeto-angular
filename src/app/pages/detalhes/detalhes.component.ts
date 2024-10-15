import { Component, input, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
    
    })
    
  }

  

}
