const myHead = document.querySelector('.title');
const zipField = document.querySeletor('#zipField');
const zipSubmit = document.querySelector('#zipSubmit');
zipSubmit.addEventListener('click', getWithZip());
myHead.textContent = 'Cnale';

function getWithZip(){
  myHead.innerHTML = "Cnale";
}
