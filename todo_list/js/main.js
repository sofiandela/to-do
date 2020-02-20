const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');
var submittedTasks = [];
 
//creo el div
let itemDiv = document.createElement('div');
itemDiv.classList.add('item');
//itemDiv.id = 'item';

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

    
    if (inputVal !== "") {
        pItem.innerHTML = inputVal; //acá asigno el valor al "p" en el HTML
        submittedTasks.push(inputVal);

        // for (i = 0; i < submittedTasks.length; i++){
        //     // if (submittedTasks[i] != submittedTasks[i++]) {

        // //    } 
        // }
    } 
    console.log(inputVal);
    console.log(submittedTasks);
}

var prueba = container.appendChild(itemDiv);

console.log(prueba);


getInputValue();


