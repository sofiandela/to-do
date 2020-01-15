const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');

//creo el div
let itemDiv = document.createElement('div');
itemDiv.classList.add('item');
itemDiv.id = 'item';

//creo el p
let pItem = document.createElement('p');
pItem.classList.add('item_p');
pItem.id = 'p_item_id';
    
let editButton = document.createElement('button');
editButton.classList.add('editButton');
editButton.innerHTML = "EDIT";

let removeButton = document.createElement('button');
removeButton.classList.add('removeButton');
removeButton.innerHTML = "REMOVE";

itemDiv.appendChild(pItem);
itemDiv.appendChild(editButton);
itemDiv.appendChild(removeButton);


function getInputValue() {
    var inputVal = document.getElementById('user-input').value;

    if (inputVal != "") {
        var theID = document.getElementById('p_item_id')
        pItem.innerHTML = inputVal;
    } 
    console.log(inputVal)
}

var prueba = container.appendChild(itemDiv);

console.log(prueba);



