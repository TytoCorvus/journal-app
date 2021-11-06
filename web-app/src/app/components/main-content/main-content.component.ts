import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  selectedDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  dateChange($event: any) {
    console.log(`Date changed: ${JSON.stringify($event)}`)
  }

  dateAsString(): string {
    const dateDiff = this.selectedDate.getDate() - (new Date()).getDate();

    switch (dateDiff) {
      case 0:
        return `Today`;
      case -1:
        return `Yesterday`;
      default:
        return '';
    }
  }
}
