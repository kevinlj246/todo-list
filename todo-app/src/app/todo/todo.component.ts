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
  selectedItem: ItemComponent;

  constructor() { }

  ngOnInit() {
  }

  addItem(name: string){
    if(name){
      let item = new ItemComponent(name, false);
      this.toDoList.push(item);
    }
  }

  newItemChanged(event: KeyboardEvent): void {
    const target = <HTMLInputElement> event.target;
    this.newItem = target.value;
  }

  alterToggle(ItemComponent, isToggled){
    ItemComponent.isToggled = !isToggled;
  }

  deleteItem(item){
    const index: number = this.toDoList.indexOf(item);
    this.toDoList.splice(index, 1);
    if(item === this.selectedItem){
      this.deselect();
    }
  }

  onSelect(item: ItemComponent): void {
    this.selectedItem = item;
  }

  deselect(): void {
    this.selectedItem = null;
  }

}
