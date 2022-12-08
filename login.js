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
        const na=nameinput.value;
        const em=emailinput.value;
        localStorage.setItem('name',na);
        localStorage.setItem('Email',em);
        
        const obj={
            na,
            em
        };
      localStorage.setItem('userdetails',JSON.stringify(obj));

    }

    nameinput.value='';
    emailinput.value='';
    
}