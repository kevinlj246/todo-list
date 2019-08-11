# Setup
Run `npm start` or `ng serve` inside of the todo-app directory to start a dev server. Then navigate to `http://localhost:4200/`.


# Task at Hand
* Front end candidate task:Write a Todo List app, front end only using Angular 7 or greater (data does not need to persist).Minimum requirements
* Users should be able to:
- [x] View the list of items,
- [x] Add, edit, remove, and mark items as done,

Bonus points (totally optional):

- [ ] Use RxJs Observables
- [x] Input validation
- [ ] Mobile friendly / responsive
- [x] Additional Fields: Datetime created, Datetime last modified
- [x] Be able to sort the list by Date created / date last modified / Alphabetical order

# Notes on the Code
* Bootstrap and font-awesome were used to help with styling of the list.
* The list of items are displayed in the todo.component using *ngFor loop over an array of Item Components.

* Users can add items by typing text in the field and clicking the + button and a new item is pused to the array. Validation is added to ensure blank items do not get added. The input field is also reset after an item is added.

* Clicking an item allows the user to edit the name and view details. Marking items as done updates the last modified date as well as updates the status.

* Clicking the trash icon removes the item from the list. If the item selected is deleted, the delete function calls the deselect function to remove the details view for an item that no longer exists.

* The details view conditionally renders the status using *ngIf by checking the isToggled boolean for the selected item. 


# Ideas for Improvement
* The todo component became rather large. Perhaps refactoring this to separate out some of the functions into their own components.

* Had issues with validation on the button click. An error shows when clicking on the text box and then away but not on the button.

* To my understanding mobile friendly usage can be achieved by adding the following line to index.html.
  `<meta name="viewport" content="width=device-width, initial-scale=1">`
    * However, my hover and select method might not work well on mobile. The edit method could be refactored to include an edit button with an in-line editing capability.

* Had issue updating the last modified date when the name changes, but the radio buttons update the last modified date.

* The sort buttons call separate sort functions but perhaps there is a way to combine these depending on what needs to be sorted. Perhaps a dropdown could be used here as well.


