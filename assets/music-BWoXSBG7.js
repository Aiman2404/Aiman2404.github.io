import{p as E}from"./profile-D7IU8vA9.js";import{g as l,S as h}from"./ScrollTrigger-aLfjG8Xb.js";import{W as T,S as q,x as M,o as $,u as P,b as B,i as R,s as I,L as U}from"./three.module-CAJFzLxV.js";const a=(e="")=>String(e).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),b=(e="")=>/^(https?:|mailto:)/i.test(e)?a(e):"#",x=(e,s)=>[e,s].filter(Boolean).map(a).join("–");function H(e,s){if(s===0)return"5:05";let r=0;for(const t of e)r=r*31+t.charCodeAt(0)>>>0;return`${2+r%5}:${String((r>>>3)%60).padStart(2,"0")}`}const L=(e="")=>e.split(/\s+/).filter(Boolean).slice(0,3).map(s=>s[0].toUpperCase()).join("");function W(e,s){e.innerHTML=[_(s),O(s),Y(s),z(s),D(s),V(s)].join("")}function _(e){const[s,...r]=(e.name||"").split(" ");return`
  <section class="hero" id="top">
    <div class="deck">
      <div class="vinyl" aria-hidden="true">
        <div class="label">
          <span class="label-top">${a(L(e.name))}</span>
          <span class="label-hole"></span>
          <span class="label-bot">Side A · 33⅓</span>
        </div>
      </div>
      <div class="sleeve">
        <div class="sleeve-window"></div>
        <p class="sleeve-cat">${a(L(e.name))}–27 · stereo</p>
        <h1 class="sleeve-title"><span class="t1">${a(s)}</span><span class="t2">${a(r.join(" "))}</span></h1>
      </div>
    </div>
    <div class="hero-copy">
      ${e.availability?`<p class="kicker">Out now — ${a(e.availability)}</p>`:""}
      ${e.title?`<p class="hero-title">${a(e.title.replace(/\s*•\s*/g," / "))}</p>`:""}
      ${e.tagline?`<p class="hero-tag">${a(e.tagline)}</p>`:""}
      <div class="hero-cta">
        <a class="pill" href="#side-a">Drop the needle</a>
        <a class="pill ghost" href="#bonus">Skip to the bonus track</a>
      </div>
    </div>
  </section>`}function O(e){if(!e.about)return"";const s=(e.stats||[]).map(r=>`<li><b>${a(r.value)}${a(r.suffix||"")}</b><span>${a(r.label)}</span></li>`).join("");return`
  <section class="paper notes" id="about">
    <div class="paper-inner">
      <p class="section-tag">Sleeve notes</p>
      <p class="essay">${a(e.about)}</p>
      ${s?`<ul class="pressing" aria-label="In numbers">${s}</ul>`:""}
    </div>
  </section>`}function Y(e){const s=[...e.projects||[]].sort((t,o)=>(o.featured?1:0)-(t.featured?1:0));return s.length?`
  <section class="side" id="side-a">
    <header class="side-head"><h2>Side A</h2><p>Things I built</p></header>
    <ol class="tracks">${s.map((t,o)=>{var n;const i=`
        ${t.description?`<p>${a(t.description)}</p>`:""}
        ${(n=t.tech)!=null&&n.length?`<p class="instr"><em>Instruments</em> ${t.tech.map(a).join(", ")}</p>`:""}
        ${t.link||t.repo?`<p class="links">${t.link?`<a href="${b(t.link)}" target="_blank" rel="noopener">Listen live ↗</a>`:""}${t.repo?`<a href="${b(t.repo)}" target="_blank" rel="noopener">Source ↗</a>`:""}</p>`:""}`;return A(`A${o+1}`,t.title,t.badge,t.year?`’${a(String(t.year).slice(-2))}`:"",H(t.title+t.description,o),i,t.featured)}).join("")}</ol>
  </section>`:""}function z(e){const s=[...(e.experience||[]).map(t=>({title:t.role,org:t.org,when:x(t.start,t.end),type:t.type,summary:t.summary,list:t.highlights,tools:t.tools})),...(e.education||[]).map(t=>({title:t.degree,org:t.school,when:x(t.start,t.end),type:"Education",summary:t.details}))];return s.length?`
  <section class="side side-b" id="side-b">
    <header class="side-head"><h2>Side B</h2><p>Where I’ve been</p></header>
    <ol class="tracks">${s.map((t,o)=>{var n,c;const i=`
        ${t.org?`<p class="org">${a(t.org)}${t.type?` · ${a(t.type)}`:""}</p>`:""}
        ${t.summary?`<p>${a(t.summary)}</p>`:""}
        ${(n=t.list)!=null&&n.length?`<ul>${t.list.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`:""}
        ${(c=t.tools)!=null&&c.length?`<p class="instr"><em>Instruments</em> ${t.tools.map(a).join(", ")}</p>`:""}`;return A(`B${o+1}`,t.title,"","",t.when||"—",i,!1)}).join("")}</ol>
  </section>`:""}function A(e,s,r,t,o,i,n){const c=`trk-${e}`;return`
    <li class="track${n?" hit":""}">
      <button class="track-row" type="button" aria-expanded="false" aria-controls="${c}">
        <span class="no">${e}</span>
        <span class="name">${a(s)}${t?` <i class="yr">${t}</i>`:""}${r?` <span class="stamp-sm">${a(r)}</span>`:""}</span>
        <span class="lead" aria-hidden="true"></span>
        <span class="time">${o}</span>
      </button>
      <div class="track-body" id="${c}" hidden><div class="track-inner">${i}</div></div>
    </li>`}function D(e){const r=(e.skills||[]).filter(n=>{var c;return(c=n.items)==null?void 0:c.length}).map(n=>`<div class="credit"><h3>${a(n.group)}</h3><p><b>${a(e.name)}</b> — ${n.items.map(c=>a(c.name)).join(", ")}</p></div>`).join(""),t=(e.languages||[]).map(n=>`${a(n.name)} <span>(${a(n.level.toLowerCase())})</span>`).join(", "),o=(e.achievements||[]).map((n,c)=>{const[,u,g]=n.title.match(/^(\d+(?:st|nd|rd|th))\s*(?:place)?\s*[—–-]?\s*(.*)$/i)||[];return`
      <li class="cert" style="--r:${[-6,4,-2,7,-4,3][c%6]}deg">
        <b>${u?a(u):"★"}</b>
        <div class="cert-txt"><span class="cert-ring">Certified${n.year?` · ${a(n.year)}`:""}</span>
        <span class="cert-name">${a(g||n.title)}</span>
        ${n.description?`<small>${a(n.description)}</small>`:""}</div>
      </li>`}).join(""),i=(e.interests||[]).map(a).join(" · ");return`
  <section class="liner" id="notes">
    <div class="liner-inner">
      <p class="section-tag">Liner notes</p>
      <h2 class="liner-h">Credits</h2>
      <div class="credits">${r}
        ${t?`<div class="credit"><h3>Vocals</h3><p>${t}</p></div>`:""}
      </div>
      ${o?`<h2 class="liner-h">Certified</h2><ul class="certs">${o}</ul>`:""}
      ${i?`<p class="thanks"><em>Off the record:</em> ${i}</p>`:""}
    </div>
  </section>`}function V(e){return`
  <section class="paper bonus" id="bonus">
    <div class="paper-inner">
      <p class="section-tag">Bonus track</p>
      <h2 class="bonus-h">Let’s make<br /><em>the next one</em> together.</h2>
      ${e.email?`<a class="mail" href="mailto:${a(e.email)}">${a(e.email)}</a>`:""}
      <p class="socials">${(e.links||[]).map(s=>`<a href="${b(s.url)}" target="_blank" rel="noopener">${a(s.label)} ↗</a>`).join("")}</p>
      <p class="colophon">© ${new Date().getFullYear()} ${a(e.name||"")}${e.location?` · Recorded in ${a(e.location)}`:""}</p>
    </div>
  </section>`}const F=`
  precision highp float;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uLens;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return v;
  }

  // late-night blend: wine black, deep violet, oxblood, crimson, burnt orange, dusty peach
  vec3 band(float id) {
    float k = mod(id, 6.0);
    if (k < 0.5) return vec3(0.078, 0.031, 0.063);
    if (k < 1.5) return vec3(0.165, 0.059, 0.227);
    if (k < 2.5) return vec3(0.361, 0.059, 0.133);
    if (k < 3.5) return vec3(0.69, 0.11, 0.2);
    if (k < 4.5) return vec3(0.851, 0.349, 0.165);
    return vec3(0.91, 0.773, 0.6);
  }

  void main() {
    float aspect = uRes.x / uRes.y;
    vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
    vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0);
    float t = uTime;

    // cursor lens: bands get sucked into a soft bulge
    vec2 d = p - m;
    float lens = exp(-dot(d, d) * 5.0) * uLens;
    p -= d * lens * 0.55;

    // slow liquid warp
    float w = fbm(p * 1.1 + vec2(t * 0.04, -t * 0.03));
    float bend = sin(p.y * 1.6 + t * 0.18 + w * 2.0) * 0.32 + sin(p.y * 4.0 - t * 0.11 + p.x * 1.5) * 0.05;
    float v = p.x * (1.0 + uScroll * 0.6) + bend + w * 0.55 + uScroll * 1.8 - t * 0.02;
    v += p.y * p.y * 0.35;

    float s = v * 5.0;
    float id = floor(s);
    float f = fract(s);
    float aa = fwidth(s) * 1.5;
    vec3 col = mix(band(id), band(id + 1.0), smoothstep(1.0 - aa, 1.0, f));

    // thin pinstripe riding inside each band, like a printed sleeve
    float pin = smoothstep(0.03 + aa, 0.03, abs(f - 0.82));
    col = mix(col, col * 0.78, pin * 0.6);

    // paper grain + edge burn
    col += (hash(vUv * uRes + fract(t)) - 0.5) * 0.06;
    float vig = smoothstep(1.25, 0.25, length((vUv - 0.5) * vec2(aspect * 0.8, 1.0)));
    col *= mix(0.55, 1.0, vig);
    gl_FragColor = vec4(col, 1.0);
  }
`;function G(e,{reduced:s}){let r;try{r=new T({canvas:e,antialias:!1,powerPreference:"low-power"})}catch{return e.remove(),document.documentElement.classList.add("no-gl"),{setScroll(){}}}const t=new q,o=new M(-1,1,1,-1,0,1),i={uRes:{value:new $},uTime:{value:7},uScroll:{value:0},uMouse:{value:new $(.62,.45)},uLens:{value:s?.4:1}},n=new P({uniforms:i,fragmentShader:F,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"});t.add(new B(new R(2,2),n));const c=new $(.62,.45);let u=0;const g=()=>{const d=Math.min(window.devicePixelRatio||1,1.25);r.setPixelRatio(d),r.setSize(innerWidth,innerHeight,!1),i.uRes.value.set(innerWidth*d,innerHeight*d),s&&r.render(t,o)};if(addEventListener("resize",g),g(),!s){addEventListener("pointermove",v=>c.set(v.clientX/innerWidth,1-v.clientY/innerHeight),{passive:!0});const d=new I;let S=!0;document.addEventListener("visibilitychange",()=>S=!document.hidden),r.setAnimationLoop(()=>{if(!S)return;const v=Math.min(d.getDelta(),.05);i.uTime.value+=v,i.uMouse.value.lerp(c,.06),i.uScroll.value+=(u-i.uScroll.value)*.08,r.render(t,o)})}return{setScroll(d){u=d,s&&(i.uScroll.value=d,r.render(t,o))}}}l.registerPlugin(h);const f=matchMedia("(prefers-reduced-motion: reduce)").matches;f&&document.documentElement.classList.add("reduced");document.title=[E.name,"Hardware & Software Engineer"].filter(Boolean).join(" — ");document.querySelector(".cat").textContent="AJK–27";W(document.getElementById("app"),E);const J=G(document.getElementById("currents"),{reduced:f});let m;f||(m=new U({lerp:.1}),m.on("scroll",h.update),l.ticker.add(e=>m.raf(e*1e3)),l.ticker.lagSmoothing(0));document.querySelectorAll('a[href^="#"]').forEach(e=>e.addEventListener("click",s=>{const r=document.querySelector(e.getAttribute("href"));r&&(s.preventDefault(),m?m.scrollTo(r,{offset:-10}):r.scrollIntoView())}));const j=()=>{const e=document.documentElement.scrollHeight-innerHeight;J.setScroll(e>0?scrollY/e:0)};addEventListener("scroll",j,{passive:!0});j();document.querySelectorAll(".track-row").forEach(e=>{e.addEventListener("click",()=>{const s=document.getElementById(e.getAttribute("aria-controls")),r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!r)),e.parentElement.classList.toggle("open",!r),f?s.hidden=r:r?l.to(s,{height:0,duration:.35,ease:"power2.inOut",onComplete:()=>{s.hidden=!0,h.refresh()}}):(s.hidden=!1,l.fromTo(s,{height:0},{height:"auto",duration:.45,ease:"power3.out",onComplete:()=>h.refresh()}))})});const p=document.querySelector(".player"),y=p.querySelector(".player-btn"),K=p.querySelector(".player-panel"),w=p.querySelector(".player-embed"),k=[...p.querySelectorAll('[role="tab"]')],C=e=>{k.forEach(s=>s.setAttribute("aria-selected",String(s===e))),p.querySelector(".player-now").textContent=e.dataset.title,w.innerHTML=`<iframe title="Spotify: ${e.dataset.title} by ${e.dataset.artist}" src="https://open.spotify.com/embed/track/${e.dataset.id}?utm_source=generator&theme=0" width="100%" height="152" frameborder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`};k.forEach(e=>e.addEventListener("click",()=>e.getAttribute("aria-selected")!=="true"||!w.firstChild?C(e):null));y.addEventListener("click",()=>{const e=y.getAttribute("aria-expanded")==="true";w.firstChild||C(k.find(s=>s.getAttribute("aria-selected")==="true")),K.hidden=e,y.setAttribute("aria-expanded",String(!e)),p.classList.toggle("open",!e)});if(!f){const e=innerWidth>760?"58%":"30%";l.timeline({delay:.15}).from(".sleeve",{y:40,rotate:-3,opacity:0,duration:1,ease:"power3.out"}).fromTo(".vinyl",{xPercent:0,yPercent:0},{x:e,y:"0%",duration:1.3,ease:"power3.inOut"},"-=0.4").from(".sleeve-title span",{yPercent:110,duration:.9,stagger:.12,ease:"power4.out"},"-=1.2").from(".hero-copy > *",{y:24,opacity:0,duration:.8,stagger:.08,ease:"power3.out"},"-=0.8"),l.to(".deck",{rotate:-4,yPercent:12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});const r=document.querySelector(".label");let t=0,o=0;h.create({onUpdate:i=>o=l.utils.clamp(-30,30,i.getVelocity()/120)}),l.ticker.add((i,n)=>{o*=.92,t+=200/1e3*n*(1+o),r.style.transform=`rotate(${t}deg)`}),l.utils.toArray(".track").forEach(i=>l.from(i,{y:30,opacity:0,duration:.7,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 92%"}})),l.utils.toArray(".side-head h2").forEach(i=>l.from(i,{xPercent:-8,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 85%"}})),l.utils.toArray(".cert").forEach((i,n)=>l.from(i,{scale:1.6,opacity:0,rotate:20,duration:.5,delay:n%3*.08,ease:"back.out(2)",scrollTrigger:{trigger:i,start:"top 90%"}})),l.from(".essay",{y:40,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:".essay",start:"top 85%"}})}
