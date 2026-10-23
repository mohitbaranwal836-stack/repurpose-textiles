
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
