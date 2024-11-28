import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

// Angular Material //
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent {

  ExcluirFuncionario(){
    
  }

}
