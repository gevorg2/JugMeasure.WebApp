import { JugActionModel } from './shared/models/jugAction-model';
import { MeasureModel } from './shared/models/measure-model';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { JugMeasureService } from "app/shared/services/jug-measure.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public form:FormGroup;
  public jug1:AbstractControl;
  public jug2:AbstractControl;
  public amount:AbstractControl;
  public submitted:boolean = false;
  public impossible:boolean = false;
  public errorMassage:string;

  public jug1Name:string = "Jug1";
  public jug2Name:string = "Jug2";
  public actions: JugActionModel[];
  public reverseActions: JugActionModel[];
  constructor(fb: FormBuilder, private jugMeasureService: JugMeasureService ) {
    this.form = fb.group({
      'jug1': ['', Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])],
      'jug2': ['', Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])],
      'amount': ['', Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])]
      });
    this.jug1 = this.form.controls['jug1'];
    this.jug2 = this.form.controls['jug2'];
    this.amount = this.form.controls['amount'];
  }

  public onSubmit(values: Object): void {
    this.errorMassage = null;
    this.submitted = true;
    var model = new MeasureModel(this.jug1.value, this.jug1Name, this.jug2.value, this.jug2Name, this.amount.value)
    if (this.form.valid) {
      this.impossible = false;
      this.jugMeasureService.measure(model).subscribe(a => {
        this.actions = a;
        this.impossible = this.actions? false : true;
      });
      this.jugMeasureService.reverseMeasure(model).subscribe(a => {
        this.reverseActions = a;
        this.impossible = this.reverseActions? false : true;
      });
    }
  }
}
