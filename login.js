const myForm=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameinput.value==='' || emailinput.value===''){
        alert('plz enter the value')
    
    }
    else{
        localStorage.setItem('name',nameinput.value);
        localStorage.setItem('Email',emailinput.value);
    }
    nameinput.value='';
    emailinput.value='';
    
}