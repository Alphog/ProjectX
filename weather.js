const input = document.getElementById('input-field').value;
const button = document.getElementById('search-btn');
const image = document.querySelector('.image1');
const temperature =document.getElementById('temperature');
const city =document.getElementById('city-name');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');

button.addEventListener('click',() =>image.src= 'images/mist.png');