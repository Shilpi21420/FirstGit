//console.log('I dont know what to do');
// var h=document.getElementById('header-title');
// h.innerText='Hello';
// h.style.borderBottom='solid 3px black';
// h.style.fontWeight='bold';
var c=document.getElementsByClassName('list-group-item');
// c[1].innerText='Hello';
// c[1].style.background='yellow';
// console.log('Good Morning');
   //c[1].style.background='green';
var titles=document.querySelectorAll('.title');
titles[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}