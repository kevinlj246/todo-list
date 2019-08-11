import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  today: number = Date.now();
  toDoList = [
    new ItemComponent('Take out the trash', false, this.today),
    new ItemComponent('Wash the dishes', false, this.today),
    new ItemComponent('Do laundry', false, this.today)
  ];
  newItem = '';
  selectedItem: ItemComponent;

  constructor() { }

  ngOnInit() {
  }

  addItem(name: string){
    let addedDate = Date.now();
    if(name){
      let item = new ItemComponent(name, false, addedDate);
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
