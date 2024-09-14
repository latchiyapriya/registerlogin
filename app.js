const addbutton=document.querySelector('.addbutton');
var input=document.querySelector('.input');
const container=document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let inputElement = document.createElement('input');
        inputElement.value = itemName;
        inputElement.disabled = true;
        inputElement.classList.add('item_input');
        inputElement.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editbutton = document.createElement('button');
        editbutton.innerHTML = "EDIT";
        editbutton.classList.add('editbutton');

        let removebutton = document.createElement('button');
        removebutton.innerHTML = "REMOVE";
        removebutton.classList.add('removebutton');
        
        container.appendChild(itemBox);

        itemBox.appendChild(inputElement);
        itemBox.appendChild(editbutton);
        itemBox.appendChild(removebutton);
    
    
        editbutton.addEventListener('click' , () => this.edit(inputElement));
        removebutton.addEventListener('click' , () => this.remove(itemBox));
    }
        edit(inputElement)
        {
            inputElement.disabled = !inputElement.disabled;
        }

        remove(item)
        {
            container.removeChild(item);
        }
    
}

function check() {
    if(input.value != "")
    {
        new item(input.value);
        input.value="";
    }
}   

addbutton.addEventListener('click', check);

window.addEventListener('keydown',(e) => {
    if(e.which==13)
    {
        check();
    }
});
