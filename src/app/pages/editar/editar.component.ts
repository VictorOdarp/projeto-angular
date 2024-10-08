import { Component, OnInit } from '@angular/core';
import { FuncionarioFormComponent } from '../../componentes/funcionario-form/funcionario-form.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FuncionarioFormComponent, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  btnAcao: string = "Editar";
  btnTitulo: string = "Editar Funcionário!"
  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.data;
      console.log(data)
    })
  }
}
