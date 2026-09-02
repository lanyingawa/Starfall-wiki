
(function(){
  const nav=document.querySelector('.topbar nav');
  if(nav){
    const inPages=location.pathname.replaceAll('\\','/').includes('/pages/');
    const links=[
      {href:inPages?'natural-realm.html':'pages/natural-realm.html',text:'自然之境'},
      {href:inPages?'extraction.html':'pages/extraction.html',text:'搜打撤行动'}
    ];
    links.forEach(item=>{
      if(!Array.from(nav.querySelectorAll('a')).some(a=>a.getAttribute('href')===item.href)){
        const a=document.createElement('a'); a.className='nav-link'; a.href=item.href; a.textContent=item.text; nav.appendChild(a);
      }
    });
  }
  if(!document.querySelector('article') && document.querySelector('main.home')){
    const home=document.querySelector('main.home');
    const section=document.createElement('section'); section.className='card';
    section.innerHTML='<h2>搜打撤行动：把三角洲式玩法带进生存服</h2><p class="lead">服务器将行动终端、三人小队、配装入局、随机搜刮、枪械交战、拉闸与联动撤离、死亡遗物箱、战利品仓库和特勤处交易组合成完整循环。想体验一局从“带什么进去”到“能不能活着带出来”的高风险冒险，先从这里开始。</p><div class="pills"><span>组队配装</span><span>搜刮保险与电脑</span><span>拉闸全图警报</span><span>死亡遗物箱</span><span>仓库成长</span><span><a href="pages/extraction.html">查看完整规则 →</a></span></div>';
    const footer=home.querySelector('.footer'); if(footer) home.insertBefore(section,footer); else home.appendChild(section);
  }
  const toc=document.getElementById('toc');
  if(toc){document.querySelectorAll('article h2').forEach((h,i)=>{if(!h.id)h.id='sec-'+i;const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;toc.appendChild(a);});}
  const q=document.querySelector('[data-recipe-search]');
  if(q){q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();document.querySelectorAll('[data-recipe-row]').forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(v)?'':'none';});});}
})();
