

// Grab form element by id 
const newItemForm = document.getElementById('newItemForm')

let id=0
// add event listener to form element.  First parameter is the type of event
// to listen for.  The second is the function we want to call when the event occurs.
newItemForm.addEventListener("submit", function(event){
    // to stop the default behavior of the button
    event.preventDefault();
    // select user input as 'item' id in the form.  save under item var 
    const item = document.getElementById('item');
    // console.log(item.value)
    // select shopping list as id 'shoppinglist' and save under  ' ' var
    const shoppingList = document.getElementById('shoppingList')
    // console.log(shoppingList)
    // create an 'li' element called 'list item'
    const listItem = document.createElement('li');
    // add list item to shopping list
    shoppingList.appendChild(listItem);
    // set list item text to item var value
    listItem.textContent = item.value;
    // set attribute first parameter is the name of the attribute
    // you want to set.  Second is the value, which changes every iteration 
    // based on id variable. 
    listItem.setAttribute('id', id);
    id++
    
    //! remove button
    const del = document.createElement('button')
    listItem.appendChild(del)
    del.textContent = 'Remove Item'
    del.addEventListener("click", function(event){
        event.preventDefault();
        // document.getElementById(`${item.value}`).remove()
        listItem.remove()
    })
})