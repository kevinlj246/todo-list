import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoList = [
    new ItemComponent(1, 'Take out the trash'),
    new ItemComponent(2, 'Wash the dishes'),
    new ItemComponent(3, 'Do laundry')
  ];

  constructor() { }

  ngOnInit() {
  }

}
