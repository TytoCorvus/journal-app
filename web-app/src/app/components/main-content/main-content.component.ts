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

  dateChange($event: any){
    console.log(`Date changed: ${JSON.stringify($event)}`)
  }

}
