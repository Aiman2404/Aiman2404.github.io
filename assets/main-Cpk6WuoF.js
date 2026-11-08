import{p as L}from"./profile-D7IU8vA9.js";import{W as J,S as V,h as Q,m as Z,t as A,u as tt,r as et,v as at,G as ot,s as st,w as N,L as nt}from"./three.module-CAJFzLxV.js";import{g as i,S as w}from"./ScrollTrigger-aLfjG8Xb.js";const G=["#5eead4","#a78bfa","#f472b6","#fbbf24","#60a5fa","#34d399"],r=(e="")=>String(e).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]),I=(e="")=>/^(https?:|mailto:|tel:)/i.test(e)?r(e):"#",B=e=>e.split(" ").map(o=>`<span class="word">${[...o].map(a=>`<span class="ch">${r(a)}</span>`).join("")}</span>`).join(" "),rt=e=>e.split(/\s+/).filter(Boolean).map(o=>`<span class="w">${r(o)}</span>`).join(" "),it=(e,o)=>[e,o].filter(Boolean).map(r).join(" — ");function lt(e,o){e.innerHTML=[ct(o),dt(o),ut(o),pt(o),mt(o),gt(o),ht(o),ft(o)].join("")}function ct(e){return`
  <section class="hero" id="top">
    <div class="hero-inner">
      ${e.availability?`<p class="eyebrow" data-fade><span class="pulse"></span>${r(e.availability)}</p>`:""}
      <h1 class="hero-name" aria-label="${r(e.name)}"><span class="line">${B(e.name||"Your Name")}</span></h1>
      ${e.title?`<p class="hero-title" data-fade>${r(e.title)}</p>`:""}
      ${e.tagline?`<p class="tagline" data-fade>${r(e.tagline)}</p>`:""}
      <div class="cta" data-fade>
        <a class="btn magnetic" href="#projects"><span>See my work</span></a>
        <a class="btn ghost magnetic" href="#contact"><span>Get in touch</span></a>
      </div>
    </div>
    <div class="scroll-hint" aria-hidden="true"><span></span>scroll</div>
  </section>`}function dt(e){var n;if(!e.about&&!((n=e.stats)!=null&&n.length))return"";const o=(e.stats||[]).map(t=>`<div class="stat"><b class="count" data-to="${Number(t.value)||0}">0</b><b>${r(t.suffix||"")}</b><span>${r(t.label)}</span></div>`).join(""),a=(e.languages||[]).map(t=>`<li><span>${r(t.name)}</span><em>${r(t.level||"")}</em></li>`).join("");return`
  <section id="about" class="section">
    <h2 class="section-title"><span>About</span></h2>
    ${e.about?`<p class="reveal-words">${rt(e.about)}</p>`:""}
    <div class="about-meta">
      ${o?`<div class="stats">${o}</div>`:""}
      ${a?`<div class="glass langs"><h3>Languages I speak</h3><ul>${a}</ul></div>`:""}
    </div>
  </section>`}function ut(e){const o=(e.skills||[]).filter(s=>{var l;return(l=s.items)==null?void 0:l.length});if(!o.length)return"";const a=o.flatMap(s=>s.items.map(l=>l.name)),n=s=>`<div class="marquee-row ${s}">${[...a,...a].map(l=>`<span>${r(l)}</span>`).join("<i>✦</i>")}</div>`,t=o.map((s,l)=>`
      <div class="skill-group" style="--accent:${G[l%G.length]}">
        <h3>${r(s.group)}</h3>
        <div class="chips">
          ${s.items.map((c,d)=>`<span class="chip" style="--lvl:${Math.min(5,Math.max(1,Number(c.level)||3))};--i:${d}" title="${r(c.name)} · ${"●".repeat(c.level||3)}${"○".repeat(5-(c.level||3))}">${r(c.name)}</span>`).join("")}
        </div>
      </div>`).join("");return`
  <section id="skills" class="section">
    <h2 class="section-title"><span>Skills</span></h2>
    <div class="marquee" aria-hidden="true">${n("a")}${n("b")}</div>
    <div class="skill-grid">${t}</div>
  </section>`}function pt(e){const o=[...(e.experience||[]).map(a=>({...a,kind:"work"})),...(e.education||[]).map(a=>({role:a.degree,org:a.school,start:a.start,end:a.end,summary:a.details,kind:"study"}))];return o.length?`
  <section id="experience" class="section">
    <h2 class="section-title"><span>Journey</span></h2>
    <div class="timeline">
      <div class="timeline-line"><div class="timeline-fill"></div></div>
      ${o.map(a=>{var n,t;return`
        <article class="tl-item">
          <span class="tl-dot"></span>
          <div class="glass tl-card">
            <p class="tl-when">${it(a.start,a.end)} <span class="tag">${r(a.type||(a.kind==="study"?"Education":"Experience"))}</span></p>
            <h3>${r(a.role)}${a.org?` <span class="at">@ ${r(a.org)}</span>`:""}</h3>
            ${a.summary?`<p>${r(a.summary)}</p>`:""}
            ${(n=a.highlights)!=null&&n.length?`<ul>${a.highlights.map(s=>`<li>${r(s)}</li>`).join("")}</ul>`:""}
            ${(t=a.tools)!=null&&t.length?`<div class="tech">${a.tools.map(s=>`<span>${r(s)}</span>`).join("")}</div>`:""}
          </div>
        </article>`}).join("")}
    </div>
  </section>`:""}function mt(e){const o=[...e.projects||[]].sort((a,n)=>(n.featured?1:0)-(a.featured?1:0));return o.length?`
  <section id="projects" class="section">
    <h2 class="section-title"><span>Selected work</span></h2>
    <div class="projects">
      ${o.map((a,n)=>{var t;return`
        <article class="card${a.featured?" featured":""}" style="--accent:${G[n%G.length]}">
          <div class="card-shine"></div>
          <div class="card-body">
            <p class="card-num">${String(n+1).padStart(2,"0")}${a.year?` · ${r(a.year)}`:""}${a.badge?`<span class="badge">🏆 ${r(a.badge)}</span>`:""}</p>
            <h3>${r(a.title)}</h3>
            <p>${r(a.description)}</p>
            ${(t=a.tech)!=null&&t.length?`<div class="tech">${a.tech.map(s=>`<span>${r(s)}</span>`).join("")}</div>`:""}
            <div class="card-links">
              ${a.link?`<a href="${I(a.link)}" target="_blank" rel="noopener">Live ↗</a>`:""}
              ${a.repo?`<a href="${I(a.repo)}" target="_blank" rel="noopener">Code ↗</a>`:""}
            </div>
          </div>
        </article>`}).join("")}
    </div>
  </section>`:""}function ht(e){var n;const o=e.certifications||[];if(!o.length&&!((n=e.interests)!=null&&n.length))return"";const a=(t,s)=>s?`<div class="glass extra"><h3>${t}</h3><ul>${s}</ul></div>`:"";return`
  <section id="extras" class="section">
    <h2 class="section-title"><span>More about me</span></h2>
    <div class="extras">
      ${a("Certifications",o.map(t=>`<li><b>${r(t.name)}</b><span>${r([t.issuer,t.year].filter(Boolean).join(" · "))}</span></li>`).join(""))}
      ${a("Interests",(e.interests||[]).map(t=>`<li><b>${r(t)}</b></li>`).join(""))}
    </div>
  </section>`}function gt(e){const o=e.achievements||[];return o.length?`
  <section id="awards" class="section">
    <h2 class="section-title"><span>Awards</span></h2>
    <div class="awards">
      ${o.map(a=>{const[,n,t]=a.title.match(/^(\d+(?:st|nd|rd|th))\s*(?:place)?\s*[—–-]?\s*(.*)$/i)||[];return`
        <article class="award${n?` p${parseInt(n)}`:""}">
          <div class="award-rank">${n?`<b>${r(parseInt(n))}</b><sup>${r(n.replace(/\d+/,""))}</sup>`:"<b>★</b>"}</div>
          <div>
            <h3>${r(t||a.title)}</h3>
            <p>${r([a.description,a.year].filter(s=>String(s||"").trim()).join(" · "))}</p>
          </div>
        </article>`}).join("")}
    </div>
  </section>`:""}function ft(e){return`
  <section id="contact" class="section contact">
    <p class="eyebrow">What's next?</p>
    <h2 class="contact-big"><span class="line">${B("Let's build")}</span><span class="line grad">${B("something.")}</span></h2>
    ${e.email?`<a class="btn big magnetic" href="mailto:${r(e.email)}"><span>${r(e.email)}</span></a>`:""}
    ${e.phone?`<p class="phone"><a href="tel:${r(e.phone.replace(/[^\d+]/g,""))}">${r(e.phone)}</a></p>`:""}
    <div class="socials">${(e.links||[]).map(o=>`<a class="magnetic" href="${I(o.url)}" target="_blank" rel="noopener">${r(o.label)}</a>`).join("")}</div>
    <p class="footer">© ${new Date().getFullYear()} ${r(e.name||"")}${e.location?` · ${r(e.location)}`:""}</p>
  </section>`}const vt=`
  uniform float uTime;
  uniform float uMorph;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute vec3 aKnot;
  attribute vec3 aGalaxy;
  attribute vec3 aGalColor;
  attribute float aGalGlow;
  attribute float aRand;
  varying vec3 vColor;
  varying float vAlpha;

  vec3 palette(float t) {
    vec3 a = vec3(0.37, 0.92, 0.83);   // teal
    vec3 b = vec3(0.65, 0.55, 0.98);   // violet
    vec3 c = vec3(0.96, 0.45, 0.71);   // pink
    return t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, (t - 0.5) * 2.0);
  }

  void main() {
    float m1 = smoothstep(0.0, 1.0, clamp(uMorph, 0.0, 1.0));
    float m2 = smoothstep(0.0, 1.0, clamp(uMorph - 1.0, 0.0, 1.0));
    vec3 p = mix(mix(position, aKnot, m1), aGalaxy, m2);

    // drift; calmer once it's a galaxy so the disc stays thin
    float t = uTime * 0.35 + aRand * 6.2831;
    p += vec3(sin(t + p.y * 1.7), cos(t * 0.9 + p.x * 1.3), sin(t * 1.1 + p.z * 1.5)) * 0.06 * (1.0 - 0.75 * m2);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float twinkle = 0.65 + 0.35 * sin(uTime * 2.0 + aRand * 40.0);
    float size = uSize * (0.4 + aRand) * twinkle;
    gl_PointSize = mix(size, size * aGalGlow, m2) * uPixelRatio / -mv.z;

    vColor = mix(palette(fract(aRand * 0.6 + p.y * 0.12 + uMorph * 0.15)), aGalColor, m2);
    vAlpha = mix(0.55 + 0.45 * aRand, min(1.0, 0.35 + 0.65 * aGalGlow), m2);
  }
`,yt=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float glow = pow(smoothstep(0.5, 0.0, d), 2.2);
    gl_FragColor = vec4(vColor, glow * vAlpha);
  }
`,y=()=>{const e=1-Math.random(),o=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*o)},$t=2.1,U=e=>Math.log(e/.25)*$t,v={core:[1,.86,.62],inner:[1,.95,.85],arm:[.62,.78,1],outer:[.66,.56,.98],nebula:[.98,.42,.68],dust:[.37,.75,.9]},q=(e,o,a)=>e.map((n,t)=>n+(o[t]-n)*a),H=Array.from({length:34},(e,o)=>{const a=.9+Math.random()*2.6,n=o%2*Math.PI+U(a)+y()*.08;return[Math.cos(n)*a,Math.sin(n)*a]});function bt(e,o,a,n){const t=Math.random();let s,l,c,d,g;if(t<.22){const u=Math.abs(y())*.5,h=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1);s=u*Math.sin(m)*Math.cos(h),c=u*Math.sin(m)*Math.sin(h),l=u*Math.cos(m)*.6,d=q(v.inner,v.core,Math.min(1,u/.5)),g=.9+Math.random()*.5}else if(t<.74){const u=Math.random()<.22,h=(Math.random()<.5?0:Math.PI)+(u?1.35:0),m=.35+Math.pow(Math.random(),1.35)*3.5,$=h+U(m)+y()*(u?.22:.13),S=y()*(.12+m*.07);s=Math.cos($)*m+Math.cos($+1.57)*S,c=Math.sin($)*m+Math.sin($+1.57)*S,l=y()*.045*(1+m*.15);const b=Math.min(1,m/3.8);d=b<.35?q(v.inner,v.arm,b/.35):q(v.arm,v.outer,(b-.35)/.65),g=(u?.55:.8)+Math.random()*.4}else if(t<.82){const[u,h]=H[n%H.length];s=u+y()*.07,c=h+y()*.07,l=y()*.03,d=Math.random()<.7?v.nebula:v.arm,g=.9+Math.random()*.6}else if(t<.95){const u=.3+-Math.log(1-Math.random()*.97)*1,h=Math.random()*Math.PI*2;s=Math.cos(h)*u,c=Math.sin(h)*u,l=y()*.07,d=q(v.arm,v.dust,Math.random()),g=.4+Math.random()*.35}else{const u=1.5+Math.random()*4.5,h=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1);s=u*Math.sin(m)*Math.cos(h),c=u*Math.sin(m)*Math.sin(h),l=u*Math.cos(m)*.7,d=[.85,.88,1],g=Math.random()<.1?1.6:.35+Math.random()*.3}e.set([s,l,c],n*3),o.set(d,n*3),a[n]=g}function Mt(e,{reduced:o}){let a;try{a=new J({canvas:e,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{e.remove();return}const n=Math.min(devicePixelRatio,2);a.setPixelRatio(n);const t=new V,s=new Q(55,1,.1,100);s.position.set(0,0,7);const l=innerWidth<760,c=l?6e3:12e3,d=new Z,g=new Float32Array(c*3),u=new Float32Array(c*3),h=new Float32Array(c*3),m=new Float32Array(c),$=new Float32Array(c*3),S=new Float32Array(c);for(let p=0;p<c;p++){const M=Math.random();m[p]=M;const k=1-p/(c-1)*2,E=Math.sqrt(1-k*k),P=p*2.399963,j=2.1+(Math.random()-.5)*.25;g.set([Math.cos(P)*E*j,k*j,Math.sin(P)*E*j],p*3);const C=p/c*Math.PI*2*1,Y=2,_=3,X=1.3+.55*Math.cos(_*C),z=()=>(Math.random()-.5)*.45;u.set([X*Math.cos(Y*C)+z(),X*Math.sin(Y*C)+z(),.55*Math.sin(_*C)*1.6+z()],p*3),bt(h,$,S,p)}d.setAttribute("position",new A(g,3)),d.setAttribute("aKnot",new A(u,3)),d.setAttribute("aGalaxy",new A(h,3)),d.setAttribute("aGalColor",new A($,3)),d.setAttribute("aGalGlow",new A(S,1)),d.setAttribute("aRand",new A(m,1));const b={uTime:{value:0},uMorph:{value:0},uSize:{value:l?34:42},uPixelRatio:{value:n}},K=new tt({vertexShader:vt,fragmentShader:yt,uniforms:b,transparent:!0,depthWrite:!1,blending:et}),D=new at(d,K),T=new ot;T.add(D),t.add(T);const f={x:0,y:0,tx:0,ty:0};addEventListener("pointermove",p=>{f.tx=p.clientX/innerWidth*2-1,f.ty=p.clientY/innerHeight*2-1});function F(){const p=innerWidth,M=innerHeight;a.setSize(p,M,!1),s.aspect=p/M,s.updateProjectionMatrix()}addEventListener("resize",F),F();let x=0;const O=new st;function R(){const p=O.getElapsedTime(),M=document.documentElement.scrollHeight-innerHeight,k=M>0?scrollY/M:0,E=Math.min(2,k*2.6);x+=(E-x)*.06,f.x+=(f.tx-f.x)*.05,f.y+=(f.ty-f.y)*.05,b.uTime.value=o?0:p,b.uMorph.value=x;const P=innerWidth>960;T.position.x=P?N.lerp(2.3,0,Math.min(1,x)):0,T.rotation.y=(o?0:p*.06)+f.x*.35+k*2.4;const j=N.smoothstep(x,1,2);T.rotation.x=f.y*.25+Math.min(1,x)*.35+j*.75,a.render(t,s)}if(o){addEventListener("scroll",()=>requestAnimationFrame(R),{passive:!0}),R();return}a.setAnimationLoop(()=>!document.hidden&&R())}i.registerPlugin(w);function wt({reduced:e}){if(e){document.documentElement.classList.add("reduced"),document.querySelectorAll(".skill-group, .tl-item, .award").forEach(t=>t.classList.add("lit")),document.querySelectorAll(".count").forEach(t=>t.textContent=t.dataset.to);return}const o=new nt({lerp:.09});o.on("scroll",w.update),i.ticker.add(t=>o.raf(t*1e3)),i.ticker.lagSmoothing(0),document.querySelectorAll('a[href^="#"]').forEach(t=>t.addEventListener("click",s=>{const l=t.getAttribute("href");l.length<2||(s.preventDefault(),o.scrollTo(l==="#top"?0:l,{offset:-40,duration:1.6}))})),i.to(".progress",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}}),w.create({start:80,end:"max",toggleClass:{targets:".nav",className:"scrolled"}}),i.timeline({delay:.15}).from(".hero-name .ch",{yPercent:120,rotate:12,opacity:0,stagger:.045,duration:1.2,ease:"expo.out"}).from(".hero [data-fade]",{y:30,opacity:0,stagger:.12,duration:1,ease:"power3.out"},"-=0.8").from(".nav",{y:-30,opacity:0,duration:.8,ease:"power3.out"},"-=0.8").from(".scroll-hint",{opacity:0,duration:.8},"-=0.4"),i.to(".hero-inner",{yPercent:-35,opacity:0,filter:"blur(8px)",ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),i.utils.toArray(".section-title span").forEach(t=>i.from(t,{yPercent:110,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 88%"}}));const n=i.utils.toArray(".reveal-words .w");n.length&&i.fromTo(n,{opacity:.12},{opacity:1,stagger:.05,ease:"none",scrollTrigger:{trigger:".reveal-words",start:"top 80%",end:"bottom 50%",scrub:!0}}),i.utils.toArray(".count").forEach(t=>{const s={v:0};i.to(s,{v:Number(t.dataset.to),duration:1.8,ease:"power2.out",onUpdate:()=>t.textContent=Math.round(s.v),scrollTrigger:{trigger:t,start:"top 90%"}})}),i.to(".marquee-row.a",{xPercent:-35,ease:"none",scrollTrigger:{trigger:".marquee",start:"top bottom",end:"bottom top",scrub:.5}}),i.fromTo(".marquee-row.b",{xPercent:-35},{xPercent:0,ease:"none",scrollTrigger:{trigger:".marquee",start:"top bottom",end:"bottom top",scrub:.5}}),i.utils.toArray(".skill-group").forEach(t=>{i.from(t.querySelectorAll(".chip"),{y:50,opacity:0,scale:.6,stagger:.05,duration:.9,ease:"back.out(1.8)",clearProps:"transform,opacity",scrollTrigger:{trigger:t,start:"top 85%"}}),w.create({trigger:t,start:"top 75%",end:"bottom 20%",toggleClass:"lit"})}),i.to(".timeline-fill",{scaleY:1,ease:"none",scrollTrigger:{trigger:".timeline",start:"top 70%",end:"bottom 60%",scrub:!0}}),i.utils.toArray(".tl-item").forEach((t,s)=>{i.from(t.querySelector(".tl-card"),{x:s%2?60:-60,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 82%"}}),w.create({trigger:t,start:"top 65%",toggleClass:"lit"})}),i.utils.toArray(".card").forEach(t=>i.from(t,{y:100,rotateX:-18,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 90%"}})),i.utils.toArray(".award").forEach((t,s)=>{i.from(t,{y:50,scale:.94,opacity:0,duration:1,delay:s%2*.12,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 88%"}}),w.create({trigger:t,start:"top 80%",toggleClass:"lit",once:!0})}),i.utils.toArray(".extra").forEach((t,s)=>i.from(t,{y:60,opacity:0,duration:1,delay:s*.1,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 88%"}})),i.from(".contact-big .ch",{yPercent:110,opacity:0,stagger:.03,duration:1,ease:"expo.out",scrollTrigger:{trigger:".contact-big",start:"top 80%"}}),addEventListener("load",()=>w.refresh())}function xt({reduced:e}){if(e||!matchMedia("(pointer: fine)").matches)return;const o=document.querySelector(".cursor-glow"),a=i.quickTo(o,"x",{duration:.6,ease:"power3"}),n=i.quickTo(o,"y",{duration:.6,ease:"power3"});addEventListener("pointermove",t=>{a(t.clientX),n(t.clientY)}),document.querySelectorAll(".magnetic").forEach(t=>{const s=i.quickTo(t,"x",{duration:.5,ease:"elastic.out(1, 0.4)"}),l=i.quickTo(t,"y",{duration:.5,ease:"elastic.out(1, 0.4)"});t.addEventListener("pointermove",c=>{const d=t.getBoundingClientRect();s((c.clientX-d.left-d.width/2)*.35),l((c.clientY-d.top-d.height/2)*.45)}),t.addEventListener("pointerleave",()=>{s(0),l(0)}),t.addEventListener("pointerenter",()=>o.classList.add("big")),t.addEventListener("pointerleave",()=>o.classList.remove("big"))}),document.querySelectorAll(".card").forEach(t=>{const s=i.quickTo(t,"rotateX",{duration:.6,ease:"power3"}),l=i.quickTo(t,"rotateY",{duration:.6,ease:"power3"});t.addEventListener("pointermove",c=>{const d=t.getBoundingClientRect(),g=(c.clientX-d.left)/d.width,u=(c.clientY-d.top)/d.height;t.style.setProperty("--mx",`${g*100}%`),t.style.setProperty("--my",`${u*100}%`),l((g-.5)*14),s((.5-u)*14)}),t.addEventListener("pointerleave",()=>{s(0),l(0)})})}const W=matchMedia("(prefers-reduced-motion: reduce)").matches;document.title=[L.name,L.title].filter(Boolean).join(" — ")||"Portfolio";document.querySelector(".nav-logo").textContent=kt(L.name);lt(document.getElementById("app"),L);Mt(document.getElementById("bg"),{reduced:W});xt({reduced:W});wt({reduced:W});function kt(e=""){return e.split(/\s+/).filter(Boolean).slice(0,2).map(o=>o[0].toUpperCase()).join("")||"✦"}
