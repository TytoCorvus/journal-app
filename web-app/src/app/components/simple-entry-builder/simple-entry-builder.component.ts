import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISimpleEntry, EntryTypes } from 'src/app/model/simple-entry';
import { Categories } from 'src/app/model/category';
import { Associations } from 'src/app/model/association';
import { IProject } from 'src/app/model/goal';

@Component({
  selector: 'simple-entry-builder',
  templateUrl: './simple-entry-builder.component.html',
  styleUrls: ['./simple-entry-builder.component.scss']
})
export class SimpleEntryBuilderComponent {
  @Input() eventDate: Date = new Date();
  @Input() projectList: Array<IProject> = new Array<IProject>();
  @Output() completeEntry = new EventEmitter<ISimpleEntry>();

  projectEntry: boolean = false;

  EntryTypes = Object.values(EntryTypes);
  Categories = Object.values(Categories);
  Associations = Object.values(Associations);

  form: FormGroup = new FormGroup({
    summary: new FormControl('', (control) => {
      if (!control.value) {
        return {
          empty: 'The value provided is empty'
        }
      }
      return null;
    }),
    entryType: new FormControl(EntryTypes.TASK),
    category: new FormControl(Categories.PERSONAL),
    date: new FormControl(this.eventDate),
    association: new FormControl(null),
    projectId: new FormControl(null)
  });

  constructor() { }

  isProjectChanged($event : any) {
    console.log('It changed?');
    console.log(JSON.stringify($event));
    console.log(this.projectEntry);
  } 

  submit() {
    if (this.form.valid) {
      this.completeEntry.emit({
        ...this.form.value,
      });
    } else {
      // TODO: Fix this - make a modal or something
      console.log(`The form provided is invalid.`);
    }
  }

}
