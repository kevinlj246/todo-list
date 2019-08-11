import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    public name: string,
    public isToggled: boolean,
    public createdDate: number,
    public lastModified: number) { }

  ngOnInit() {
  }

}
