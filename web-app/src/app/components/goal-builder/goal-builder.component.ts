import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/model/category';
import { IGoal } from 'src/app/model/goal';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'goal-builder',
  templateUrl: './goal-builder.component.html',
  styleUrls: ['./goal-builder.component.scss']
})
export class GoalBuilderComponent implements OnInit {

  @Input() startDate: Date = new Date();
  @Output() completeEntry = new EventEmitter<IGoal>();

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

  submit() {
    if (this.form.valid) {
      this.completeEntry.emit({
        ...this.form.value,
        id: uuidv4()
      })
    } else {
      console.log(`The Goal form provided was invalid`)
    }
  }

}
