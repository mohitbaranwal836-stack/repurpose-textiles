
const mt=document.getElementById('mt'),n=document.getElementById('nav');
mt&&mt.addEventListener('click',()=>{const o=n.classList.toggle('open');mt.setAttribute('aria-expanded',o)});
document.querySelectorAll('.chips button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.chips button').forEach(x=>x.setAttribute('aria-pressed',x===b));
 document.querySelectorAll('[data-cat]').forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.cat===b.dataset.f))}));
const f=document.getElementById('qf');
if(f){const p=new URLSearchParams(location.search).get('product');if(p)f.interest.value=p;
 const msg=()=>{const d=new FormData(f);return `Quote request - Repurpose Textiles\nName: ${d.get('name')}\nCompany: ${d.get('company')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nInterested in: ${d.get('interest')}\nDetails: ${d.get('message')}`};
 document.getElementById('sw').addEventListener('click',()=>{if(f.reportValidity())open('https://wa.me/19723810260?text='+encodeURIComponent(msg()))});
 f.addEventListener('submit',e=>{e.preventDefault();location.href='mailto:info@YOUR-DOMAIN.com?subject='+encodeURIComponent('Quote request')+'&body='+encodeURIComponent(msg())})}
document.querySelectorAll('.pill').forEach(function(b){b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')==='true',h=document.querySelector('.pp .hint');
 document.querySelectorAll('.pill').forEach(function(x){x.setAttribute('aria-pressed','false')});
 document.querySelectorAll('.pp .card').forEach(function(c){c.hidden=true});
 if(on){h.hidden=false}else{b.setAttribute('aria-pressed','true');document.querySelector('.pp .card[data-k="'+b.dataset.k+'"]').hidden=false;h.hidden=true}})});
document.querySelectorAll('.thumbs button').forEach(function(b){b.addEventListener('click',function(){var c=b.closest('.card'),m=c.querySelector('img.main');m.src=b.querySelector('img').src;m.alt=b.dataset.alt;c.querySelectorAll('.thumbs button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})})});
