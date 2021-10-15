import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IProject } from 'src/app/model/goal';
import { v4 as uuidv4 } from 'uuid'

import { Categories } from 'src/app/model/category';
import { Associations } from 'src/app/model/association';

@Component({
  selector: 'project-builder',
  templateUrl: './project-builder.component.html',
  styleUrls: ['./project-builder.component.scss']
})
export class ProjectBuilderComponent implements OnInit {

  @Input() startDate: Date = new Date();
  @Output() completeEntry = new EventEmitter<IProject>()

  Categories = Object.values(Categories);
  Associations = Object.values(Associations);

  form = new FormGroup({
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
    metDate: new FormControl(null),
    association: new FormControl(Associations.PERSONAL),
    tag: new FormControl('', (control) => {
      if (!control.value) {
        return {
          empty: 'The value provided is empty'
        }
      } else if (typeof control.value !== 'string') {
        return {
          type: 'The tag needs to be a string value'
        }
      } else if (control.value.length > 6) {
        return {
          length: 'The tag cannot exceed 6 characters in length'
        }
      }

      return null;
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.completeEntry.emit({
      ...this.form.value,
      id: uuidv4()
    })
  }

}
