   let menubtn = document.getElementById('menu')
       let menuOption = document.getElementById('menulist')

menubtn.addEventListener('click', () =>{
    if(menuOption.style.display == "none"){
        menuOption.style.display = 'block';
    } else{
        menuOption.style.display = 'none';
    }
})

let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');
let backtop = document.getElementById('home1');
let backup = document.getElementById('home2');

let autoupdate;

function updatebackground(){
    if(backtop.style.display == 'block'){
        backtop.style.display ='none'
        backup.style.display = 'block'
    }
    else{
        backtop.style.display = 'block'
        backup.style.display = 'none'
    }
}

let businessBtn = document.getElementById('business')
let businessEl = document.getElementById('business-item');

let strategyBtn = document.getElementById('planning')
let strategyEl = document.getElementById('planning-item')

let contentBtn = document.getElementById('content')
let contentEl = document.getElementById('content-item')

businessBtn.classList.add('active')
businessBtn.addEventListener('click', ()=>{
    if(businessEl.style.display = 'none'){
        businessEl.style.display = "block";
        strategyEl.style.display = 'none';
        contentEl.style.display = 'none';
        businessBtn.classList.add('active')
        strategyBtn.classList.remove('active')
        contentBtn.classList.remove('active')  
    }
});

strategyBtn.addEventListener('click', ()=>{
    if(strategyEl.style.display = 'none'){
        businessEl.style.display = "none";
        strategyEl.style.display = 'block';
        contentEl.style.display = 'none';
        businessBtn.classList.remove('active')
        strategyBtn.classList.add('active')
        contentBtn.classList.remove('active')

        }  
});

contentBtn.addEventListener('click', ()=>{
    if(contentEl.style.display = 'none'){
        businessEl.style.display = "none";
        strategyEl.style.display = 'none';
        contentEl.style.display = 'block';
        businessBtn.classList.remove('active')
        strategyBtn.classList.remove('active')
        contentBtn.classList.add('active')
        }
});

