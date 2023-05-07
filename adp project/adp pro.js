let food1s = document.getElementById('C:\Users\Dell\Pictures\food1.png');
let food2s = document.getElementById('C:\Users\Dell\Pictures\food1.png');
let foods = document.getElementById('C:\Users\Dell\Pictures\food.jpg');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('C:\Users\Dell\Pictures\food1.png')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('C:\Users\Dell\Pictures\food.jpg')";
})