import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoList = [
    new ItemComponent('Take out the trash', false),
    new ItemComponent('Wash the dishes', false),
    new ItemComponent('Do laundry', false)
  ];
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  public addItem(name: string){
    let item = new ItemComponent(name, false);
    this.toDoList.push(item);
  }

  newItemChanged(event: KeyboardEvent): void {
    const target = <HTMLInputElement> event.target;
    this.newItem = target.value;
  }

}
