import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.css']
})
export class NewTableComponent implements OnInit {
  
  @Input() userData:Array<any>=new Array()
  constructor() { }

  ngOnInit(): void {
  }

}
