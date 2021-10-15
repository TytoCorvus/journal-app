import { Component, OnInit } from '@angular/core';
import { ISimpleEntry } from 'src/app/model/simple-entry';
import { EntryTypes } from 'src/app/model/simple-entry';
import { Categories } from 'src/app/model/category';
import { Associations } from 'src/app/model/association';
import { IGoal, IProject } from 'src/app/model/goal';


@Component({
  selector: 'simple-item-list',
  templateUrl: './simple-item-list.component.html',
  styleUrls: ['./simple-item-list.component.scss']
})
export class SimpleItemListComponent implements OnInit {

  itemList: Array<ISimpleEntry> = [];
  goalList: Array<IGoal> = [];
  projectList: Array<IProject> = [];

  constructor() {

    this.itemList = [
      {
        summary: "I made a Journal app!",
        entryType: EntryTypes.TASK,
        category: Categories.PERSONAL,
        date: new Date()
      },
      {
        summary: "Worked on new features",
        entryType: EntryTypes.EFFORT,
        category: Categories.OTHER,
        date: new Date()
      }
    ]

    this.goalList = [
      {
        id: '',
        description: 'Build up to 2000 yards per workout',
        category: Categories.FITNESS,
        startDate: new Date(),
        endDate: new Date((Date.now() + 1000 * 3600 * 24 * 10)) // 10 Days from now
      }
    ]

    this.projectList = [
      {
        id: '',
        description: 'Finish building this app',
        category: Categories.PERSONAL,
        startDate: new Date(),
        endDate: new Date((Date.now() + 1000 * 3600 * 24 * 10)), // 10 Days from now
        association: Associations.PERSONAL,
        tag: 'JRNLAP',
        entries: []
      }
    ]

  }

  ngOnInit(): void {
  }

  pushSimple($event: ISimpleEntry) {
    console.log(JSON.stringify($event.entryType));
    this.itemList.push($event);
  }

  pushGoal($event: IGoal) {
    console.log(JSON.stringify($event));
    this.goalList.push($event);
  }

  pushProject($event: IProject) {
    console.log(JSON.stringify($event));
    this.projectList.push($event);
  }

  removeAtIndex(type: string, pos: number) {
    switch (type) {
      case 'simple':
        this.itemList.splice(pos, 1);
        break;
      case 'goal':
        this.goalList.splice(pos, 1);
        break;
      case 'project':
        this.projectList.splice(pos, 1);
        break;
      default:
        break;
    }
  }
}
