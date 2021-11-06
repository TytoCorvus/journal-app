import { Component,  Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IGoal, IProject } from 'src/app/model/goal';
import { ISimpleEntry } from 'src/app/model/simple-entry';

@Component({
  selector: 'item-builder',
  templateUrl: './item-builder.component.html',
  styleUrls: ['./item-builder.component.scss']
})
export class ItemBuilderComponent {
  @Input() projectList: Array<IProject> = new Array<IProject>();
  @Output() simpleCreated = new EventEmitter<ISimpleEntry>()
  @Output() goalCreated = new EventEmitter<IGoal>()
  @Output() projectCreated = new EventEmitter<IProject>()

  readonly itemCategories = ['Simple', 'Goal', 'Goal Update', 'Project'];

  form: FormGroup = new FormGroup({
    selectedItemCategory: new FormControl('Simple')
  });

  constructor() { }

  categoryChanged($event: any) {
    this.form.setValue({
      selectedItemCategory: $event.target.value
    })
  }

  simpleSubmitted($event: ISimpleEntry) {
    this.simpleCreated.emit($event);
  }

  goalSubmitted($event: IGoal) {
    this.goalCreated.emit($event);
  }

  projectSubmitted($event: IProject) {
    this.projectCreated.emit($event);
  }

}
