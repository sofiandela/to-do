const addButton = document.querySelector('.addButton');
//var input = document.querySelector('input');
const container = document.querySelector('container');
let userInput = document.getElementById('user-input');

class item{
    constructor(userInfo) {
        //create the item name
        this.createDiv(userInfo);
    }

    createDiv(userInfo) {
        let listDiv= document.createElement('div');
        listDiv.classList.add('item_input');
        listDiv.value(userInput);

        console.log(listDiv);

        
        // let input = document.createElement('input');
        // input.value = itemName;
        // input.disabled = true;
        // input.classList.add('item_input');
        // input.type = "text";


        //ITEMBOX

        //creo LI que contendrá los items agregados
        let itemBox = document.createElement('li');
        console.log(itemBox);
        
        itemBox.classList.add('editButton');

        //creo el boton editar
        let editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.innerHTML = "EDIT";

        //creo el boton remover
        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innterHTML = "REMOVE";

        //anexo el itemBox al container
        container.appendChild(itemBox);

        itemBox.appendChild(listDiv);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);


        editButton.addEventListener('click', () => this.edit(input));
        
        removeButton.addEventListener('click' , () => this.remove(itemBox));
        
    }

    edit(input) {
        input.disabled = !input.disabled;
    }
    remove(input) {
        container.removeChild(item);
    }
}

// function check() {
//     if (input.value != "") {
//         new item(input.value);
//         input.value = "";
//     }
// }

// addButton.addEventListener('click', check);
// window.addEventListener('kewydown', (e) => {
//     if (e.which == 13) {
//         check();
//     }
// })