import { Component, Input, OnInit } from '@angular/core';
import { ISimpleEntry } from 'src/app/model/simple-entry';
import { Categories } from 'src/app/model/category';

@Component({
  selector: 'simple-entry',
  templateUrl: './simple-entry.component.html',
  styleUrls: ['./simple-entry.component.scss']
})
export class SimpleEntryComponent implements OnInit {

  @Input() simpleEntry!: ISimpleEntry;

  Categories = Categories;

  constructor() { }

  ngOnInit(): void {
  }
}
