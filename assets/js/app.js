(function(){
  const inPages=location.pathname.replaceAll('\\','/').includes('/pages/');
  const base=inPages?'':'pages/';
  const nav=document.querySelector('.topbar nav');
  if(nav){
    nav.innerHTML=[
      [inPages?'../index.html':'index.html','首页'],
      [base+'basics.html','生活建造'],
      [base+'extraction.html','搜打撤'],
      [base+'natural-realm.html','自然之境'],
      [base+'elitemobs.html','RPG冒险'],
      [base+'recipes.html','配方总表']
    ].map(([href,text])=>'<a class="nav-link" href="'+href+'">'+text+'</a>').join('');
    const current=location.pathname.split('/').pop()||'index.html';
    nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href').split('/').pop()===current)a.classList.add('active');});
  }
  const toc=document.getElementById('toc');
  if(toc){document.querySelectorAll('article h2').forEach((h,i)=>{if(!h.id)h.id='sec-'+i;const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;toc.appendChild(a);});}
  const q=document.querySelector('[data-recipe-search]');
  if(q){q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();document.querySelectorAll('[data-recipe-row]').forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(v)?'':'none';});});}
})();
