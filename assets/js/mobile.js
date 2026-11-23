"use strict";
(function(){
 const sidebar=document.querySelector('.sidebar');
 const scrim=document.getElementById('navScrim');
 const toggle=document.getElementById('navToggle');
 const close=document.getElementById('navClose');
 const top=document.getElementById('backToTop');
 const pageNames=new Set(['home','characters','relations','map','regions','gods','monsters','combat','stories','timeline','guild','lore','manage','families']);
 function setMenu(open){
   if(!sidebar||!toggle)return;
   sidebar.classList.toggle('open',open);
   scrim.hidden=!open;
   document.body.classList.toggle('menu-open',open);
   toggle.setAttribute('aria-expanded',String(open));
 }
 toggle?.addEventListener('click',()=>setMenu(!sidebar.classList.contains('open')));
 close?.addEventListener('click',()=>setMenu(false));
 scrim?.addEventListener('click',()=>setMenu(false));
 document.getElementById('nav')?.addEventListener('click',()=>setMenu(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
 window.addEventListener('resize',()=>{if(innerWidth>980)setMenu(false)});
 document.querySelector('.mobile-logo')?.addEventListener('click',e=>{
   e.preventDefault();setMenu(false);go('home');updateAddress();
 });
 const validPage=p=>pageNames.has(p)||navItems.some(item=>item[0]===p);
 function parseAddress(){
   const raw=decodeURIComponent(location.hash.slice(1)||'home');
   const parts=raw.split('/');
   const p=parts[0];
   if(!validPage(p))return null;
   return {page:p,selected:p==='characters'&&parts[1]||null};
 }
 function updateAddress(){
   const fragment=page==='characters'&&selected?'characters/'+encodeURIComponent(selected):page;
   const now=location.hash.slice(1);
   if(now!==fragment){try{history.pushState({asteria:true},'',location.pathname+location.search+'#'+fragment)}catch(e){/* about:blank preview has no navigable origin */}}
 }
 function applyAddress(){
   const dest=parseAddress();
   if(!dest)return;
   page=dest.page;
   selected=dest.selected;
   modePin=false;
   setMenu(false);
   render();
   window.scrollTo({top:0,behavior:'instant'});
 }
 // The original archive handles navigation, filtering, and editing. Add URL history without rewriting its logic.
 document.addEventListener('click',e=>{
   if(e.target.closest('#nav button'))setMenu(false);
   if(e.target.closest('[data-page],[data-character],[data-region]')){updateAddress();return}
   const a=e.target.closest('[data-act]')?.dataset.act||'';
   if(a==='back-chars'||a==='go-characters'||a==='go-guild'||a==='era-past'||a==='era-future'||a.startsWith('family-character:'))updateAddress();
 });
 window.addEventListener('popstate',applyAddress);
 window.addEventListener('hashchange',applyAddress);
 const initial=parseAddress();
 if(initial){page=initial.page;selected=initial.selected;}
 else {try{history.replaceState({},'',location.pathname+location.search+'#home')}catch(e){}}
 function checkScroll(){top?.classList.toggle('visible',scrollY>330)}
 window.addEventListener('scroll',checkScroll,{passive:true});
 top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 checkScroll();
})();
