import{p as n}from"./profile-D7IU8vA9.js";const i=(s="")=>String(s).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),f=(s="")=>/^(https?:|mailto:)/i.test(s)?i(s):"#",C=(s,a=2)=>String(s).padStart(a,"0"),M=(s,a)=>[s,a].filter(Boolean).map(i).join("–"),$="AJK-2027",x=new Date,R=x.toLocaleString("en-GB",{month:"short",year:"numeric"}),w=["Overview","Characteristics","Applications","Qualification","Revision history","Ordering"],k=(n.skills||[]).filter(s=>{var a;return(a=s.items)==null?void 0:a.length});document.title=`${$} — ${n.name} · Datasheet`;const h=(s,a,t="")=>`
  <header class="sec-head" data-rule>
    <h2><span class="sec-n">${s}</span>${i(a)}</h2>
    ${t?`<p class="sec-note">${t}</p>`:""}
    <p class="sec-sheet">Sheet ${s} of ${w.length}</p>
  </header>`;function T(){const s=k.slice(0,8),a=Math.ceil(s.length/2),t=900,e=380,c=520,o=30,u=46,b=96,m=o*2+u*(a-1)+40,j=d=>o+34+d*u,S=s.map((d,r)=>{const l=r<a,E=l?r:s.length-1-r,p=j(E),[g,v]=l?[e-b,e]:[c,c+b],I=l?g-8:v+8,L=l?e+10:c-10;return`
      <line class="pin" x1="${g}" y1="${p}" x2="${v}" y2="${p}" />
      <circle class="pad" cx="${l?g:v}" cy="${p}" r="3" />
      <text class="pin-n" x="${L}" y="${p+3.5}" text-anchor="${l?"start":"end"}">${r+1}</text>
      <text class="pin-l" x="${I}" y="${p+3.5}" text-anchor="${l?"end":"start"}">${i(d.group.toUpperCase())}</text>`}).join("");return`
  <figure class="pinout">
    <svg viewBox="0 0 ${t} ${m}" role="img" aria-label="Pinout diagram: skill groups as pins of a chip">
      <rect class="chip" x="${e}" y="${o}" width="${c-e}" height="${m-o*2}" />
      <path class="notch" d="M ${(e+c)/2-12} ${o} a 12 12 0 0 0 24 0" />
      <circle class="dot" cx="${e+14}" cy="${o+14}" r="3" />
      <text class="chip-l" x="${(e+c)/2}" y="${m/2-4}" text-anchor="middle">${$}</text>
      <text class="chip-s" x="${(e+c)/2}" y="${m/2+12}" text-anchor="middle">CE · TIU · SULY</text>
      ${S}
    </svg>
    <ol class="pinlist">${s.map((d,r)=>`<li><span>${r+1}</span>${i(d.group)}</li>`).join("")}</ol>
    <figcaption><b>Figure 1.</b> Pin configuration, top view. Each pin is a skill group; ratings in §2.</figcaption>
  </figure>`}function q(){const s=(n.stats||[]).map(t=>`<li><b>${Number(t.value)||0}</b>${i(t.suffix||"")} ${i(t.label)}</li>`).join(""),a=(n.languages||[]).map(t=>`<tr><td>${i(t.name)}</td><td>${i(t.level||"")}</td></tr>`).join("");return`
  <section class="sec overview" id="overview">
    <div class="masthead" data-rule>
      <p class="part">${$}</p>
      <p class="mast-mid">${i(n.title||"")}</p>
      <p class="mast-r">Rev. 4 · ${i(R)}</p>
    </div>
    <div class="title-row">
      <h1>${i(n.name)}</h1>
      <dl class="idbox">
        <div><dt>Device</dt><dd>Computer Engineer</dd></div>
        <div><dt>Package</dt><dd>B.Sc., Tishk International Univ.</dd></div>
        <div><dt>Location</dt><dd>${i(n.location||"")}</dd></div>
        <div><dt>Status</dt><dd class="acc">${i(n.availability||"")}</dd></div>
      </dl>
    </div>
    <div class="front">
      <div class="col">
        <h3>1.1 Features</h3>
        <ul class="feat">${s}</ul>
        <h3>1.2 Languages</h3>
        <table class="mini"><tbody>${a}</tbody></table>
      </div>
      <div class="col desc">
        <h3>1.3 General description</h3>
        <p>${i(n.about||"")}</p>
      </div>
    </div>
    <div class="fig">${T()}</div>
  </section>`}function A(){const s=t=>`<span class="ticks" aria-label="${t} of 5">${[1,2,3,4,5].map(e=>`<i class="${e<=t?"on":""}" style="--d:${e}"></i>`).join("")}</span>`,a=k.map((t,e)=>`
      <table class="spec">
        <thead>
          <tr class="grp"><th colspan="3"><span class="pinref">Pin ${e+1}</span>${i(t.group)}</th></tr>
          <tr><th>Parameter</th><th>Rating</th><th class="num">Typ. / Max.</th></tr>
        </thead>
        <tbody>${t.items.map(c=>{const o=Math.min(5,Math.max(1,Number(c.level)||3));return`<tr><td>${i(c.name)}</td><td class="t">${s(o)}</td><td class="num">${o}<span class="dim"> / 5</span></td></tr>`}).join("")}</tbody>
      </table>`).join("");return`
  <section class="sec" id="characteristics">
    ${h(2,"Characteristics","Self-rated. 5 = use it daily and could teach it. Ratings of 1 are left off.")}
    <div class="spec-grid">${a}</div>
  </section>`}function O(){const s=[...n.projects||[]].sort((t,e)=>(e.featured?1:0)-(t.featured?1:0)),a=s.map((t,e)=>{var c;return`
      <article class="app${t.featured?" feat-app":""}" data-rule>
        <div class="app-meta">
          <p class="app-n">3.${C(e+1)}</p>
          ${t.year?`<p>${i(t.year)}</p>`:'<p class="dim">—</p>'}
          ${t.badge?`<p class="badge">${i(t.badge)}</p>`:""}
        </div>
        <div class="app-body">
          <h3>${i(t.title)}</h3>
          <p>${i(t.description)}</p>
        </div>
        <div class="app-side">
          ${(c=t.tech)!=null&&c.length?`<p class="lbl">Built with</p><ul>${t.tech.map(o=>`<li>${i(o)}</li>`).join("")}</ul>`:""}
          ${t.link||t.repo?`<p class="links">${t.link?`<a href="${f(t.link)}" target="_blank" rel="noopener">Live →</a>`:""}${t.repo?`<a href="${f(t.repo)}" target="_blank" rel="noopener">Source →</a>`:""}</p>`:""}
        </div>
      </article>`}).join("");return`
  <section class="sec" id="applications">
    ${h(3,"Typical applications",`${s.length} documented builds. Featured entries first.`)}
    <div class="apps">${a}</div>
  </section>`}function B(){const s=n.achievements||[];if(!s.length)return"";const a=s.map(t=>{const[,e,c]=t.title.match(/^(\d+(?:st|nd|rd|th))\s*(?:place)?\s*[—–-]?\s*(.*)$/i)||[],o=e?`${e} place`:"Recognised";return`<tr class="${e&&parseInt(e)===1?"first":""}"><td>${i(c||t.title)}<small>${i(t.description||"")}</small></td><td>${i(o)}</td><td class="num">${i(t.year||"—")}</td><td class="num pass">PASS</td></tr>`}).join("");return`
  <section class="sec" id="qualification">
    ${h(4,"Qualification results","Competitions and recognitions.")}
    <table class="spec qual">
      <thead><tr><th>Test</th><th>Result</th><th class="num">Year</th><th class="num">Status</th></tr></thead>
      <tbody>${a}</tbody>
    </table>
  </section>`}function P(){const s=[...(n.experience||[]).map(e=>({...e})),...(n.education||[]).map(e=>({role:e.degree,org:e.school,start:e.start,end:e.end,summary:e.details,type:"Education"}))],a=s.length,t=s.map((e,c)=>{var o;return`
      <tr>
        <td class="num rev">${a-c}</td>
        <td class="when">${M(e.start,e.end)||"—"}</td>
        <td>
          <b>${i(e.role)}</b>${e.org?` <span class="org">${i(e.org)}</span>`:""}
          ${e.summary?`<p>${i(e.summary)}</p>`:""}
          ${(o=e.highlights)!=null&&o.length?`<ul>${e.highlights.map(u=>`<li>${i(u)}</li>`).join("")}</ul>`:""}
        </td>
        <td class="kind">${i(e.type||"")}</td>
      </tr>`}).join("");return`
  <section class="sec" id="revisions">
    ${h(5,"Revision history","Newest first.")}
    <table class="spec revs">
      <thead><tr><th class="num">Rev.</th><th>Date</th><th>Change</th><th>Type</th></tr></thead>
      <tbody>${t}</tbody>
    </table>
  </section>`}function F(){const s=[n.email&&["Email",`<a href="mailto:${i(n.email)}">${i(n.email)}</a>`],...(n.links||[]).map(a=>[a.label,`<a href="${f(a.url)}" target="_blank" rel="noopener">${i(a.url.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""))}</a>`]),n.location&&["Location",i(n.location)]].filter(Boolean).map(([a,t])=>`<tr><td>${i(a)}</td><td>${t}</td></tr>`).join("");return`
  <section class="sec ordering" id="ordering">
    ${h(6,"Ordering information")}
    <div class="order">
      <p class="order-big">For internships, engineering roles and freelance work, write to<br /><a href="mailto:${i(n.email)}">${i(n.email)}</a></p>
      <table class="spec mini2"><tbody>${s}</tbody></table>
    </div>
    <footer class="colophon" data-rule>
      <span>${$} datasheet</span>
      <span>© ${x.getFullYear()} ${i(n.name)}</span>
      <span>Information subject to change as the device keeps learning.</span>
    </footer>
  </section>`}const U=`
  <nav class="rail" aria-label="Contents">
    <p class="rail-part">${$}</p>
    <ol>${["overview","characteristics","applications","qualification","revisions","ordering"].map((s,a)=>`<li><a href="#${s}"><span>${a+1}</span>${w[a]}</a></li>`).join("")}</ol>
  </nav>`;document.getElementById("sheet").innerHTML=`${U}<main>${[q(),A(),O(),B(),P(),F()].join("")}</main>`;const D=matchMedia("(prefers-reduced-motion: reduce)").matches,y=document.querySelectorAll("[data-rule], .spec tbody tr, .pinout, .feat");if(D||!("IntersectionObserver"in window))y.forEach(s=>s.classList.add("in"));else{document.documentElement.classList.add("anim");const s=new IntersectionObserver(a=>a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),s.unobserve(t.target))}),{rootMargin:"0px 0px -8% 0px"});y.forEach(a=>s.observe(a))}const N=[...document.querySelectorAll(".rail a")],Y=new IntersectionObserver(s=>s.forEach(a=>{a.isIntersecting&&N.forEach(t=>t.classList.toggle("on",t.getAttribute("href")===`#${a.target.id}`))}),{rootMargin:"-40% 0px -55% 0px"});document.querySelectorAll(".sec").forEach(s=>Y.observe(s));
