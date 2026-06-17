// Zodiac wheel render
function buildWheel(){
  const w = document.querySelector('.wheel');
  if(!w) return;
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  signs.forEach((s,i)=>{
    const ang = (i/12)*360;
    const el = document.createElement('div');
    el.className='sign';
    el.textContent=s;
    const r = 46; // % radius
    const x = 50 + r*Math.sin(ang*Math.PI/180);
    const y = 50 - r*Math.cos(ang*Math.PI/180);
    el.style.left = x+'%';
    el.style.top = y+'%';
    el.style.transform='translate(-50%,-50%)';
    w.appendChild(el);
  });
  for(let i=0;i<60;i++){
    const t=document.createElement('div');
    t.className='tick';
    t.style.transform=`translateX(-50%) rotate(${i*6}deg)`;
    t.style.transformOrigin=`50% ${w.clientWidth/2}px`;
    w.appendChild(t);
  }
}

// Blog filter
function bindFilters(){
  const btns = document.querySelectorAll('.filter');
  if(!btns.length) return;
  btns.forEach(b=>b.addEventListener('click',()=>{
    btns.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const cat = b.dataset.cat;
    document.querySelectorAll('.post').forEach(p=>{
      p.style.display = (cat==='all' || p.dataset.cat===cat) ? '' : 'none';
    });
  }));
}

// Mobile menu
function bindMenu(){
  const btn = document.querySelector('.menu-btn');
  const ul = document.querySelector('.nav ul');
  if(!btn||!ul) return;
  btn.addEventListener('click',()=>{
    if(ul.style.display==='flex'){ul.style.display=''}
    else{ul.style.display='flex';ul.style.flexDirection='column';
      ul.style.position='absolute';ul.style.top='70px';ul.style.left='24px';ul.style.right='24px';
      ul.style.background='#fff';ul.style.padding='20px';ul.style.borderRadius='20px';
      ul.style.boxShadow='0 20px 50px rgba(0,0,0,.08)';ul.style.border='1px solid rgba(0,0,0,.06)'}
  });
}

// Contact form
function bindContact(){
  const f = document.querySelector('form.contact');
  if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const btn = f.querySelector('button');
    btn.textContent='Sent ✓';
    btn.disabled=true;
    f.reset();
    setTimeout(()=>{btn.textContent='Send Message';btn.disabled=false},2400);
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  buildWheel();
  bindFilters();
  bindMenu();
  bindContact();
});
