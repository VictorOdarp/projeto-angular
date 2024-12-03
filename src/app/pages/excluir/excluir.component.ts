import { Component, OnInit} from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router} from '@angular/router';

// Angular Material //
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatInputModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent implements OnInit{

  constructor(private funcionarioService: FuncionarioService, private router: Router){}

  ngOnInit(): void {
    console.log("teste");
  }
}
