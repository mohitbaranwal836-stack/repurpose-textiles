
(function(){
var WA='https://wa.me/19723810260';
var A={
what:['What We Do','Repurpose Textiles connects textile collection, reuse, and distribution. We work with communities and organizations to keep reusable clothing and textiles in use for longer.',[['About Us','about.html']]],
accept:['Items We Accept','These are the items we gladly accept as donations. Not sure about something? Just ask us.',[['Ask on WhatsApp',WA]],["Clothing: All Types & Sizes", "Shoes", "Purse/Backpacks", "Jewelry", "Linens/Blankets", "Household Items: Bath & Kitchen Items", "Books", "Toys", "Electronics", "Small Appliances", "Small Home Decor", "Media (CDs and DVDs)"],'\u2713'],
reject:['Items We Do NOT Accept','Please do not donate the items below. If you are unsure about something, message us before you bring it.',[['Ask on WhatsApp',WA]],["Any Medical Supplies", "Anything Toxic or Flammable", "Blinds", "Building Materials (Bricks, Lumber, Fence Posts, Tile, Etc.)", "Cabinetry", "Chemicals/Oils/Paints", "Countertops", "Doors", "Food (Animal or Human)", "Fuel Cans", "Hospital Beds/Adjustable Beds", "Hot Tubs", "Large Appliances", "Large Exercise Equipment", "Light Fixtures", "Magazines", "Mattresses/Box Springs", "Newspapers", "Office Furniture/Cubicles, Desks, File Cabinets", "Pipes", "Scrap Fabric", "Sheet Rock", "Sinks", "Soiled, Torn, Damaged or Stained Furniture", "Swing Sets", "Tires", "Toilets", "Trash", "Tube TV, CRT, and DLP (Projection TV)", "Unframed Mirrors", "Unprotected Glass", "Used AC/Heating Units", "Water Beds", "Water Heaters", "Wet, Rusty and Broken Items", "Guns or Swords", "Windows", "Car Seats/Booster Seats", "Children’s High Chairs"],'\u2715'],
items:['Products We Collect','We collect used clothing (institutional rags and credential bales), credential toys, bric-a-brac, purses and belts, shoes, electronics, and books and media (CDs and DVDs). For specific items or quantities, message us and we will confirm.',[['See Products We Collect','products.html'],['Ask on WhatsApp',WA]]],
partner:['Collection Partnerships','We welcome charities, nonprofit organizations, property owners, shopping centers, and other groups who want to set up collection initiatives for reusable clothing and textiles.',[['Collection Partnerships','partnerships.html'],['Contact Us','contact.html']]],
events:['Events & Fundraisers','We would love to talk with charities and community organizations about fundraising or community driven collection events.',[['Events & Fundraising','partnerships.html#events'],['Contact Us','contact.html']]],
after:['What Happens To My Donations?','Reuse comes first. We aim to give wearable clothing and footwear a new home, and to direct textiles that can no longer be worn toward recovery where possible.',[['Sustainability','sustainability.html']]],
contact:['Contact Us','You can reach us on WhatsApp or through our contact form. Our office is at 2626 Manana Dr, Dallas, TX 75220.',[['Contact Page','contact.html'],['WhatsApp',WA]]],
wa:['Chat on WhatsApp','Our team can help with anything specific. Tap below to message us on WhatsApp.',[['Open WhatsApp',WA]]]
};
var K={reject:['not accept','n\u0027t accept','do not take','not allowed','prohibit','mattress','tires','trash','chemical','paint','toxic','flammable','sword','window','car seat','booster','high chair','rusty','furniture','medical'],accept:['accept','what can i donate','what can i give','can i donate','book','jewel','electronic','blanket','linen','backpack','appliance','decor','dvd','media'],events:['event','fundrais'],partner:['partner','collect','charit','nonprofit','church','school','mall','property','donat'],items:['item','toy','purse','belt','bric','shoe','footwear','cloth','supply'],after:['happen','recycl','reuse','landfill','after'],contact:['contact','address','phone','email','where','office','call','reach'],wa:['whatsapp','human','person','agent','talk'],what:['what do','who are','about','mission','repurpose']};
var order=['what','accept','reject','items','partner','events','after','contact','wa'];
var calm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var beh=calm?'auto':'smooth';
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e}
function match(t){t=t.toLowerCase();if(/(n['\u2019]t|\bnot\b|\bnever\b)(\s+\w+)?\s+(accept|take|donate)/.test(t))return 'reject';var b=null,n=0;for(var k in K){var c=0;K[k].forEach(function(w){if(t.indexOf(w)>-1)c++});if(c>n){n=c;b=k}}return b}
var btn=el('button','gl-btn');btn.type='button';btn.setAttribute('aria-expanded','false');
btn.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.5L5 22v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg><span><span class="lg">Ask </span>RePurpose Guide</span><svg class="rays" width="34" height="24" viewBox="0 0 34 24" aria-hidden="true"><g stroke="#24d57a" stroke-width="3" stroke-linecap="round"><line x1="8" y1="22" x2="4" y2="10"/><line x1="17" y1="20" x2="17" y2="4"/><line x1="26" y1="22" x2="30" y2="10"/></g></svg>';btn.setAttribute('aria-label','Ask RePurpose Guide');
var tip=el('div','gl-tip','Hi! Need help? Ask RePurpose Guide');tip.hidden=true;tip.setAttribute('aria-hidden','true');
var box=el('div','gl');box.hidden=true;box.setAttribute('role','dialog');box.setAttribute('aria-label','RePurpose Guide chat');
var hd=el('div','gl-h'),ht=el('div');ht.appendChild(el('b','','RePurpose Guide'));ht.appendChild(el('small','','Your virtual assistant'));
var cl=el('button','','\u00d7');cl.type='button';cl.setAttribute('aria-label','Close chat');hd.appendChild(ht);hd.appendChild(cl);
var list=el('div','gl-m');list.setAttribute('role','log');list.setAttribute('aria-live','polite');
var ch=el('div','gc');
order.forEach(function(k){var b=el('button','',A[k][0]);b.type='button';b.addEventListener('click',function(){ask(k)});ch.appendChild(b)});
var fm=el('form','gl-f'),inp=el('input');inp.type='text';inp.maxLength=200;inp.placeholder='Type your question here...';inp.setAttribute('aria-label','Type your question');
var sb=el('button','btn','Send');sb.type='submit';fm.appendChild(inp);fm.appendChild(sb);
var note=el('div','gn','Automated assistant. For anything specific, message us on WhatsApp.');
[hd,list,fm,note].forEach(function(n){box.appendChild(n)});document.body.appendChild(btn);document.body.appendChild(tip);document.body.appendChild(box);
function goto(node){var d=node.getBoundingClientRect().top-list.getBoundingClientRect().top-8;list.scrollTo({top:list.scrollTop+d,behavior:Math.abs(d)>700?'auto':beh})}
function say(t,who,links,topics,items,icon){var b=el('div','gb'+(who?' u':''),t);if(items){b.className+=' wide';var ul=el('ul','gli');items.forEach(function(i){var li=el('li');li.appendChild(el('span','',icon));li.appendChild(document.createTextNode(i));ul.appendChild(li)});b.appendChild(ul)}(links||[]).forEach(function(l){var a=el('a','',l[0]);a.href=l[1];if(l[1].indexOf('http')===0){a.target='_blank';a.rel='noopener'}else{a.addEventListener('click',close)}b.appendChild(a)});
 if(topics){var tb=el('button','gt','\u2191 All topics');tb.type='button';tb.addEventListener('click',function(){goto(ch)});b.appendChild(tb)}
 list.appendChild(b);return b}
function reply(k,ub){setTimeout(function(){say(A[k][1],0,A[k][2],1,A[k][3],A[k][4]);goto(ub)},calm?0:350)}
function ask(k){var ub=say(A[k][0],1);goto(ub);reply(k,ub)}
var started=false;
function hideTip(){tip.hidden=true}
function open(){hideTip();box.hidden=false;btn.hidden=true;btn.setAttribute('aria-expanded','true');if(!started){started=true;say('Hi! I\u2019m RePurpose Guide, your virtual assistant. How can I help you today?',0);list.appendChild(ch)}inp.focus()}
function close(){box.hidden=true;btn.hidden=false;btn.setAttribute('aria-expanded','false')}
btn.addEventListener('click',open);tip.addEventListener('click',open);cl.addEventListener('click',function(){close();btn.focus()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden){close();btn.focus()}});
fm.addEventListener('submit',function(e){e.preventDefault();var t=inp.value.trim();if(!t)return;inp.value='';var ub=say(t,1);goto(ub);var k=match(t);
 if(k){reply(k,ub)}else{setTimeout(function(){say('I\u2019m not sure I understood that. Pick a topic from the list above, or message our team on WhatsApp.',0,[['Open WhatsApp',WA]],1);goto(ub)},calm?0:350)}});
try{if(!sessionStorage.getItem('gtip')){setTimeout(function(){if(box.hidden){tip.hidden=false;try{sessionStorage.setItem('gtip','1')}catch(e){}setTimeout(hideTip,9000)}},3500)}}catch(e){}
})();
