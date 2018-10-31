const myHead = document.querySelector('#title');
const zipField = document.querySeletor('#zipField');
const zipSubmit = document.querySelector('#zipSubmit');
zipSubmit.addEventListener('click', getWithZip());
myHead.text("Cnale");

function getWithZip(){
  myHead.innerHTML = "Cnale";
}
