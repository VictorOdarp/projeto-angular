import { Component, Input, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string; 
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;

  constructor(){

  }

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      departament: new FormControl("", [Validators.required]),
      bout: new FormControl("", [Validators.required]),
      active: new FormControl(true),
      creationDate: new FormControl(new Date()),
      changeDate: new FormControl(new Date())
    });
  }

  submit(){
    console.log(this.funcionarioForm.value);
    this.onSubmit.emit(this.funcionarioForm.value);
  }

}
