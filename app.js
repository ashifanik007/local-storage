const addBtn = document.getElementById('add-cart');
addBtn.addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    // display ui
    displayInput(inputValue);
    inputField.value = '';
});

const displayInput = item => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
