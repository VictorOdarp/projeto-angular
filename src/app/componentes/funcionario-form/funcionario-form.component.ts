import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{

  funcionarioForm!: FormGroup;

  constructor(){

  }

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(""),
      sobrenome: new FormControl(""),
      departamento: new FormControl(""),
      turno: new FormControl(""),
      ativo: new FormControl(true),
      DataDeCriacao: new FormControl(new Date()),
      DataDeAlteracao: new FormControl(new Date())
    });
  }

  submit(){
    console.log(this.funcionarioForm.value);
  }

}
