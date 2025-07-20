const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closs = document.getElementById("closs")


if(bar){
    bar.addEventListener('click', ()=>{
     nav.classList.add('active');
    })
}
if(closs){
    closs.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}