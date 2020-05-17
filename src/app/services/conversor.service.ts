import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'msg-error'
    });
  }

  private isNumber(num: any){
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

  public cannotContainANonBinaryDigit(value: string): boolean {
    if ((value as string).indexOf(' ') >= 0 || !this.isNumber(value)) {
      return true;
    }
    else if (value !== null) {
      const binaryNumber = (value as string).split('');
      const size = binaryNumber.length;
      for (let i = 0; i < size; i++) {
        if ((binaryNumber as unknown as number)[i] < 0 || (binaryNumber as unknown as number)[i] > 1) {
          return true;
        }
      }
    }
    return false;
  }

  public conversor(valueParam: any): string {
    const value = (valueParam as string).split('');
    const size = value.length;
    let idx = size - 1;
    let decimalValue = 0;

    for (let i = 0; i < size; i++) {
      decimalValue += (value[i] as unknown as number) * (2 ** idx);
      idx -= 1;
    }

    return (decimalValue as unknown as string);
  }
}
