import { Component } from '@angular/core';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
 
  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionário!"

  constructor(private funcionarioService : FuncionarioService, private router: Router) {
    
  }

  createFuncionario(funcionario: Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(["/"]);
    });
  }
}
