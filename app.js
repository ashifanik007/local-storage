const addCart = document.getElementById('add-cart');
addCart.addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // display input value;
    displayInput(inputText);
    //display local storage; 
    inputField.value = '';
});

const displayInput = inputItem => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = inputItem;
    ul.appendChild(li);
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    if(cart){
        
    }
}