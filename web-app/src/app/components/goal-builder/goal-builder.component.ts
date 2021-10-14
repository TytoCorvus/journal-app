import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/model/category';

@Component({
  selector: 'goal-builder',
  templateUrl: './goal-builder.component.html',
  styleUrls: ['./goal-builder.component.scss']
})
export class GoalBuilderComponent implements OnInit {
  
  @Input() startDate : Date = new Date();

  Categories = Object.values(Categories);

  form: FormGroup = new FormGroup({
    description: new FormControl('', (control) => {
      if (!control.value) {
        return {
          empty: 'The value provided is empty'
        }
      }
      return null;
    }),
    category: new FormControl(Categories.PERSONAL),
    startDate: new FormControl(this.startDate),
    endDate: new FormControl(null),
    metDate: new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
