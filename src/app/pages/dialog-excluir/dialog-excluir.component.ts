import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

// Angular Material //

import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-excluir',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-excluir.component.html',
  styleUrl: './dialog-excluir.component.css'
})
export class DialogAnimationsExample {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExample, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
