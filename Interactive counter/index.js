//Get elements from the DOM
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

// Initial count value
let = 0;

//Update the count element with the current count value
function updateCount(){
    countElement.textContent = count;
}

//Event listener for the decrement button
decrementButton.addEventListener('click', function () {
    count++;
    updateCount();

});
//Event listener for the increment button
incrementButton.addEventListener('click', function () {
    count++;
    updateCount();
});
