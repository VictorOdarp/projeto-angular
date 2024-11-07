import { Component, Input, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { RouterModule } from '@angular/router';

// Angular Material//
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, MatButtonModule, MatCardModule,MatInputModule],
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
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      name: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.name : "", [Validators.required]),
      lastName: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.lastName : "", [Validators.required]),
      departament: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departament : "", [Validators.required]),
      bout: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.bout : "", [Validators.required]),
      active: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.active : true),
      creationDate: new FormControl(new Date()),
      changeDate: new FormControl(new Date())
    });
  }

  submit(){
    console.log(this.funcionarioForm.value);
    this.onSubmit.emit(this.funcionarioForm.value);
  }

}
