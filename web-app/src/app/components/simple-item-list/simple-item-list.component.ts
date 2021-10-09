import { Component, OnInit } from '@angular/core';
import { ISimpleEntry } from 'src/app/model/simple-entry';
import { EntryTypes } from 'src/app/model/simple-entry';
import { Categories } from 'src/app/model/category';
import { Associations } from 'src/app/model/association';


@Component({
  selector: 'simple-item-list',
  templateUrl: './simple-item-list.component.html',
  styleUrls: ['./simple-item-list.component.scss']
})
export class SimpleItemListComponent implements OnInit {

  itemList: Array<ISimpleEntry> = [];

  constructor() {

    this.itemList.push({
      summary: "I made a Journal app!",
      entryType: EntryTypes.TASK,
      category: Categories.PERSONAL,
      date: new Date()
    })

    this.itemList.push({
      summary: "Worked on new features",
      entryType: EntryTypes.EFFORT,
      category: Categories.OTHER,
      date: new Date()
    })
  }

  ngOnInit(): void {
  }

  pushSimple($event: ISimpleEntry) {
    console.log(JSON.stringify($event.entryType))
    this.itemList.push($event);
  }

  removeAtIndex(pos: number) {
    this.itemList.splice(pos, 1);
  }
}
