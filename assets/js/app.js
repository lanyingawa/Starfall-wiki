
(function(){
  const toc=document.getElementById('toc');
  if(toc){document.querySelectorAll('article h2').forEach((h,i)=>{if(!h.id)h.id='sec-'+i;const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;toc.appendChild(a);});}
  const q=document.querySelector('[data-recipe-search]');
  if(q){q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();document.querySelectorAll('[data-recipe-row]').forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(v)?'':'none';});});}
})();
