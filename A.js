const card = document.getElementById('card');
const closeBtn = document.getElementById('close');
function setOpen(open){
if(open){
card.setAttribute('data-state','open');
card.setAttribute('aria-pressed','true');
card.querySelector('.front').setAttribute('aria-hidden','true');
card.querySelector('.inner').setAttribute('aria-hidden','false');
} else {
card.setAttribute('data-state','closed');
card.setAttribute('aria-pressed','false');
card.querySelector('.front').setAttribute('aria-hidden','false');
card.querySelector('.inner').setAttribute('aria-hidden','true');
}
}
card.addEventListener('click', (e)=>{
if(e.target === closeBtn) return;
const isOpen = card.getAttribute('data-state') === 'open';
setOpen(!isOpen);
});
closeBtn.addEventListener('click',(e)=>{ e.stopPropagation(); setOpen(false); });
card.addEventListener('keydown', (e)=>{
if(e.key === 'Enter' || e.key === ' '){
e.preventDefault();
const isOpen = card.getAttribute('data-state') === 'open';
setOpen(!isOpen);
}
if(e.key === 'Escape') setOpen(false);
});
setOpen(false);
