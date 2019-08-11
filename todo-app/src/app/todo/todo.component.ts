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
    new ItemComponent('Take out the trash', false, this.today, this.today),
    new ItemComponent('Wash the dishes', false, this.today, this.today),
    new ItemComponent('Do laundry', false, this.today, this.today)
  ];
  newItem = '';
  selectedItem: ItemComponent;

  constructor() { }

  ngOnInit() {
  }

  addItem(name: string){
    let addedDate = Date.now();
    let lastModified = Date.now();
    if(name){
      let item = new ItemComponent(name, false, addedDate, lastModified);
      this.toDoList.push(item);
    }
  }

  newItemChanged(event: KeyboardEvent): void {
    const target = <HTMLInputElement> event.target;
    this.newItem = target.value;
  }

  alterToggle(ItemComponent, isToggled){
    ItemComponent.isToggled = !isToggled;
    ItemComponent.lastModified = Date.now();
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


  sortAlphabetically(){
    this.toDoList = this.toDoList.sort(function(a,b){
      return (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
      });  
  }

  sortDateCreated(){
    this.toDoList = this.toDoList.sort(function(a,b){
      return (a.createdDate > b.createdDate ? 1 : a.createdDate < b.createdDate ? -1 : 0)
      });  
  }

  sortLastModified(){
    this.toDoList = this.toDoList.sort(function(a,b){
      return (a.lastModified > b.lastModified ? 1 : a.lastModified < b.lastModified ? -1 : 0)
      });
  }
}
