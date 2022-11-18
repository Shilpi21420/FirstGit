//console.log('I dont know what to do');
// var h=document.getElementById('header-title');
// h.innerText='Hello';
// h.style.borderBottom='solid 3px black';
// h.style.fontWeight='bold';
//var c=document.getElementsByClassName('list-group-item');
// c[1].innerText='Hello';
// c[1].style.background='yellow';
// console.log('Good Morning');
   //c[1].style.background='green';
// var titles=document.querySelectorAll('.title');
// titles[1].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//var itemlist=document.querySelector('#items');
// itemlist.parentElement.style.backgroundColor='yellow';
// itemlist.lastElementChild.style.backgroundColor='green';
//itemlist.lastChild.style.color='red';
//itemlist.style.backgroundColor='red';
// itemlist.nextSibling.style.fontWeight='bold';
// itemlist.previousElementSibling.style.color='green';


var newDiv=document.createElement('div');
newDiv.className='HEllo';
newDiv.id='Hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText=document.createTextNode('HEllo World');
newDiv.appendChild(newDivText);
var co=document.querySelector('header  .container');
//var hi=document.querySelector('header h1');
newDiv.style.fontSize='30px';
//co.insertBefore(newDiv, hi);
var hi=document.querySelector('list-group-item');
co.insertBefore(newDiv, hi );
