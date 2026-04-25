(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}})();const C=["January","February","March","April","May","June","July","August","September","October","November","December"],k=["Su","Mo","Tu","We","Th","Fr","Sa"];class A{constructor(a,r,l){this.wrap=a,this.input=r,this.onSelect=l,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",a=>{this.wrap.contains(a.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(a){this.month+=a,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const a=this._dropdown.querySelector("#dp-month-label"),r=this._dropdown.querySelector("#dp-grid");a.textContent=`${C[this.month]} ${this.year}`;const l=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),e=new Date;let n=k.map(d=>`<div class="dp-dh">${d}</div>`).join("");for(let d=0;d<l;d++)n+='<button class="dp-day empty" disabled></button>';for(let d=1;d<=s;d++){const u=this.dateString(this.year,this.month+1,d),i=this.selected===u,p=e.getFullYear()===this.year&&e.getMonth()===this.month&&e.getDate()===d;let y="dp-day";i?y+=" selected":p&&(y+=" today"),n+=`<button class="${y}" data-date="${u}">${d}</button>`}r.innerHTML=n,r.querySelectorAll(".dp-day:not(.empty)").forEach(d=>{d.addEventListener("click",()=>{this.selected=d.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(a,r,l){return`${a}-${String(r).padStart(2,"0")}-${String(l).padStart(2,"0")}`}formatDisplay(a){const[r,l,s]=a.split("-");return`${s} ${C[parseInt(l)-1]} ${r}`}reset(){this.selected=null,this.input.value=""}}const E="trippy-planner-data",M=()=>({id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1});function F(){try{const t=localStorage.getItem(E);return t?JSON.parse(t):[]}catch{return[]}}function N(t){try{localStorage.setItem(E,JSON.stringify(t))}catch{}}function O(t){let a=F();const r=()=>{N(a),t([...a])};return{getAll:()=>[...a],add(l,s){const e=M();e.date=l,e.destination=s,a.push(e),a.sort((n,d)=>n.date.localeCompare(d.date)),r()},update(l,s,e){const n=a.find(d=>d.id===l);n&&(n[s]=e,r())},remove(l){a=a.filter(s=>s.id!==l),r()},loadFromCSV(l){a=l,r()},toCSV(){const l=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],s=a.map(e=>[e.date,e.destination,e.event,e.travelDay?"Y":"N",e.accommodation,e.accomCost,e.travelDetails,e.travelCost,e.finalised?"Y":"N"].map(n=>`"${(n??"").toString().replace(/"/g,'""')}"`).join(","));return[l.join(","),...s].join(`
`)},metrics(){const l=a.length,s=a.filter(d=>d.travelDay).length,e=a.filter(d=>d.finalised).length,n=a.reduce((d,u)=>d+Number(u.accomCost||0)+Number(u.travelCost||0),0);return{total:l,travelDays:s,finalised:e,cost:n}}}}const x=["January","February","March","April","May","June","July","August","September","October","November","December"];function _(t){if(!t)return"";const[a,r,l]=t.split("-");return`${l} ${x[parseInt(r)-1]} ${a}`}function g(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function P(t,a,r,l,s){const e=r.metrics(),n=t.querySelector("#metrics-row");n&&(n.style.display=a.length?"grid":"none",t.querySelector("#m-days").textContent=e.total,t.querySelector("#m-travel").textContent=e.travelDays,t.querySelector("#m-cost").textContent="$"+Number(e.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const d=t.querySelector("#progress-wrap");if(d)if(a.length){d.style.display="block";const i=e.total?Math.round(e.finalised/e.total*100):0;t.querySelector("#progress-fill").style.width=i+"%",t.querySelector("#progress-count").textContent=`${e.finalised} / ${e.total} days finalised`}else d.style.display="none";const u=t.querySelector("#itinerary-list");if(u){if(a.length===0){u.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}u.innerHTML=a.map(i=>{const p=l===i.id,y=i.finalised?'<span class="day-badge badge-final">Finalised</span>':i.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',c=p?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${i.id}" data-field="event"
              value="${g(i.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${i.id}" data-field="accommodation"
              value="${g(i.accommodation)}" placeholder="Hotel / Airbnb name">
          </div>
          <div class="detail-field">
            <label>Accommodation Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${i.id}" data-field="accomCost" value="${i.accomCost}">
          </div>
          <div class="detail-field">
            <label>Travel Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${i.id}" data-field="travelCost" value="${i.travelCost}">
          </div>
          <div class="detail-field detail-full">
            <label>Travel Details</label>
            <input class="dark-input" data-id="${i.id}" data-field="travelDetails"
              value="${g(i.travelDetails)}" placeholder="Flight / train / driving info">
          </div>
        </div>
        <div class="detail-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${i.id}" data-field="travelDay"
              ${i.travelDay?"checked":""}>
            Travel day
          </label>
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${i.id}" data-field="finalised"
              ${i.finalised?"checked":""}>
            Finalised
          </label>
          <button class="delete-btn" data-delete="${i.id}">Remove</button>
        </div>
      </div>`:"";return`
      <div class="day-card">
        <div class="day-header" data-toggle="${i.id}">
          <div class="day-dot"></div>
          <div class="day-date">${_(i.date)}</div>
          <div class="day-dest">${g(i.destination)}</div>
          ${y}
          <span class="chevron${p?" open":""}">&#9654;</span>
        </div>
        ${c}
      </div>`}).join(""),u.querySelectorAll("[data-toggle]").forEach(i=>{i.addEventListener("click",()=>{const p=i.dataset.toggle;s(l===p?null:p)})}),u.querySelectorAll("[data-field]").forEach(i=>{const p=()=>{const y=i.type==="checkbox"?i.checked:i.value;r.update(i.dataset.id,i.dataset.field,y)};i.addEventListener(i.type==="checkbox"?"change":"blur",p)}),u.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&r.remove(i.dataset.delete)})})}}const H=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function w(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function S(t,a,r,l){const s=t.querySelector("#cal-title"),e=t.querySelector("#cal-days-header"),n=t.querySelector("#cal-body");if(!s||!e||!n)return;s.textContent=`${H[l]} ${r}`,e.innerHTML=Y.map(c=>`<div class="cal-header-cell">${c}</div>`).join("");const d={};a.forEach(c=>{c.date&&(d[c.date]=c)});const u=new Date(r,l,1).getDay(),i=new Date(r,l+1,0).getDate(),p=new Date;let y="";for(let c=0;c<u;c++)y+='<div class="cal-cell empty"></div>';for(let c=1;c<=i;c++){const D=`${r}-${String(l+1).padStart(2,"0")}-${String(c).padStart(2,"0")}`,m=p.getFullYear()===r&&p.getMonth()===l&&p.getDate()===c,h=d[D];let o="cal-cell";m?o+=" today":h&&(o+=" has-trip");let v=`<div class="cal-date-num${m?" today-num":""}">${c}</div>`;h&&(v+=`<div class="cal-dest">${w(h.destination)}</div>`,h.event&&(v+=`<div class="cal-note">${w(h.event)}</div>`),h.travelDetails&&(v+=`<div class="cal-travel-note">${w(h.travelDetails)}</div>`)),y+=`<div class="${o}">${v}</div>`}n.innerHTML=y}function J(t){t.innerHTML=`
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="tabs">
        <button class="tab active" data-tab="planner">Planner</button>
        <button class="tab"        data-tab="calendar">Calendar</button>
      </div>
    </div>

    <!-- ── Planner Tab ─────────────────────────────────────────────────── -->
    <div id="tab-planner">

      <div class="section-label">Add a new day</div>
      <div class="add-bar">
        <div class="field-group date-picker-wrap" id="dp-wrap">
          <label>Date</label>
          <input class="dark-input" id="new-date-display"
            placeholder="Pick a date" readonly>
        </div>
        <div class="field-group">
          <label>Destination</label>
          <input class="dark-input" id="new-dest"
            placeholder="e.g. Paris, France">
        </div>
        <button class="add-btn" id="add-btn">+ Add Day</button>
      </div>

      <hr class="divider">

      <div class="metrics" id="metrics-row" style="display:none">
        <div class="metric">
          <div class="metric-label">Total Days</div>
          <div class="metric-value" id="m-days">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Travel Days</div>
          <div class="metric-value" id="m-travel">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Total Cost (AUD)</div>
          <div class="metric-value" id="m-cost">$0.00</div>
        </div>
      </div>

      <div id="itinerary-list"></div>

      <div id="progress-wrap" style="display:none" class="progress-wrap">
        <div class="progress-header">
          <span class="progress-label">Trip progress</span>
          <span class="progress-count" id="progress-count">0 / 0 days finalised</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill" style="width:0%"></div>
        </div>
      </div>

      <div class="io-row">
        <button class="ghost-btn" id="download-btn">↓ Download CSV</button>
        <button class="ghost-btn" id="upload-btn">↑ Load Plan</button>
        <input type="file" id="upload-input" accept=".csv" style="display:none">
      </div>
    </div>

    <!-- ── Calendar Tab ─────────────────────────────────────────────────── -->
    <div id="tab-calendar" style="display:none">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="cal-prev">&#8249; Prev</button>
        <span class="cal-title" id="cal-title"></span>
        <button class="cal-nav-btn" id="cal-next">Next &#8250;</button>
      </div>
      <div class="cal-grid" id="cal-days-header"></div>
      <div style="height:6px"></div>
      <div class="cal-grid" id="cal-body"></div>
    </div>
  `;let a=[],r=null,l="planner";const s=new Date;let e=s.getFullYear(),n=s.getMonth();const d=O(o=>{a=o,h()});a=d.getAll();const u=t.querySelector("#dp-wrap"),i=t.querySelector("#new-date-display");let p=null;const y=new A(u,i,o=>{p=o});y.init();const c=t.querySelector("#new-dest"),D=t.querySelector("#add-btn");function m(){const o=c.value.trim();if(!p||!o){p?c.focus():i.focus(),i.style.borderColor=p?"":"var(--accent)",c.style.borderColor=o?"":"var(--accent)";return}i.style.borderColor="",c.style.borderColor="",d.add(p,o),p=null,y.reset(),c.value="",c.focus()}D.addEventListener("click",m),c.addEventListener("keydown",o=>{o.key==="Enter"&&m()}),t.querySelectorAll(".tab").forEach(o=>{o.addEventListener("click",()=>{l=o.dataset.tab,t.querySelectorAll(".tab").forEach(v=>v.classList.toggle("active",v.dataset.tab===l)),t.querySelector("#tab-planner").style.display=l==="planner"?"":"none",t.querySelector("#tab-calendar").style.display=l==="calendar"?"":"none",l==="calendar"&&S(t,a,e,n)})}),t.querySelector("#cal-prev").addEventListener("click",()=>{n--,n<0&&(n=11,e--),S(t,a,e,n)}),t.querySelector("#cal-next").addEventListener("click",()=>{n++,n>11&&(n=0,e++),S(t,a,e,n)}),t.querySelector("#download-btn").addEventListener("click",()=>{const o=new Blob([d.toCSV()],{type:"text/csv"}),v=document.createElement("a");v.href=URL.createObjectURL(o),v.download="trip_plan.csv",v.click(),URL.revokeObjectURL(v.href)}),t.querySelector("#upload-btn").addEventListener("click",()=>{t.querySelector("#upload-input").click()}),t.querySelector("#upload-input").addEventListener("change",o=>{const v=o.target.files[0];if(!v)return;const $=new FileReader;$.onload=L=>{const q=L.target.result.trim().split(`
`).slice(1).map(b=>{const f=(b.match(/(".*?"|[^,]+)/g)||[]).map(T=>T.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:f[0]||"",destination:f[1]||"",event:f[2]||"",travelDay:f[3]==="Y",accommodation:f[4]||"",accomCost:parseFloat(f[5])||0,travelDetails:f[6]||"",travelCost:parseFloat(f[7])||0,finalised:f[8]==="Y"}}).filter(b=>b.date&&b.destination);d.loadFromCSV(q)},$.readAsText(v),o.target.value=""});function h(){P(t,a,d,r,o=>{r=o,h()}),l==="calendar"&&S(t,a,e,n)}h()}J(document.getElementById("app"));
