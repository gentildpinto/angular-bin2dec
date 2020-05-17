import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public form = new FormGroup({
    binaryNumberInput: new FormControl(
      '',
      [
        // Validators.required,
      ]
    ),
    result: new FormControl(
      '',
      []
    )
  });

  constructor(
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
  }

  public get binaryNumberInput(): AbstractControl {
    return this.form.get('binaryNumberInput');
  }

  public get result(): AbstractControl {
    return this.form.get('result');
  }

  public digit() {
    if (this.conversorService.cannotContainANonBinaryDigit(this.binaryNumberInput.value)) {
      this.conversorService.showMessage('Você inseriu um digito não binário');
      this.binaryNumberInput.setValue('');
      this.result.setValue('');
    } else {
      this.result.setValue(
        this.conversorService.conversor(this.binaryNumberInput.value)
      );
    }
  }
}
