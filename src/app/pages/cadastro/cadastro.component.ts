import { Component } from '@angular/core';
import { FuncionarioFormComponent } from "../../componentes/funcionario-form/funcionario-form.component";
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
 
  constructor(private funcionarioService : FuncionarioService) {
    
  }

  createFuncionario(funcionario: Funcionario){
  }
}
