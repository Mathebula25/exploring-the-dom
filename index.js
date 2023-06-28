const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const removeMessageButton = document.querySelector('.removeMessageButton');
const inputBox = document.querySelector('.theInputValue');

// Inner text insert buton 
theMessageButton.addEventListener('click', function() {
    myMessage = 'Button pressed';
//     setTimeout(function () {
//         myMessage.innerText = 'This is a message in the DOM!'
//     }, 4000);
    console.log(myMessage);
});

// Inner text removing after 4 seconds
removeMessageButton.addEventListener('click', function() {
    setTimeout(function () {
        myMessage.innerText = ''
    }, 1000);
});

// Background colour
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

console.log(myMessage);

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
       inputBox.value = ""
    }
    else 
    {
        alert("Please enter text")
    }
});
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");
for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
};
// fruits DOM
// const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
// const fruitList = document.querySelector(".fruits");

// for(let i=0;i<fruits.length;i++){
//    // get fruits from the list
//    const fruit = fruits[i];
   
//    // create a new li element
//    const li = document.createElement('li');
//    li.innerText = fruit;
//    fruitList.appendChild(li);
// }