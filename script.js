

let itemsOrdered = [0, 0 ,0 ,0];
let prices = [8, 3, 6, 2];
var subTotal = 0;
let items = ['Hoagie', 'Coffee', 'Soup', 'Herrs Chips'];
function increment(id) {
    itemsOrdered[id]+= 1;
    document.getElementById('numOrdered' + id).innerHTML = itemsOrdered[id];
    subTotal += prices[id];
    document.getElementById('subtotal').innerHTML = '$' + subTotal;

}

function decrement(id) {
    if (itemsOrdered[id] > 0) {
        itemsOrdered[id] -= 1;
        document.getElementById('numOrdered' + id).innerHTML = itemsOrdered[id];
        subTotal -= prices[id];
        document.getElementById('subtotal').innerHTML = '$' + subTotal;
    }
}

function clearAll() {
    for (let i = 0; i < 4; i++) {
        itemsOrdered[i] = 0; 
        document.getElementById('numOrdered' + i).innerHTML = itemsOrdered[i];
    }

    subTotal = 0;
    document.getElementById('subtotal').innerHTML = '$' + subTotal;

}

function order() {
    if (subTotal === 0) {
        alert("No Items in Cart");
    } else {
    let orderMessage = 'Order Placed!\n';
    for (let i = 0; i < 4; i++) {
        if (itemsOrdered[i] > 0) {
            orderMessage += itemsOrdered[i] + ' ' + items[i] + ' '; 
        }
    } 

        alert(orderMessage);
        clearAll();
    }
}