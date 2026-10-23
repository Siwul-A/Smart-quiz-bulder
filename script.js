/* ============================================================
   QUESTION BANK  (original questions, aligned to the public AZ-900 skills outline)
   d: cc = Cloud concepts | arch = Architecture & services | mgmt = Management & governance
   type: single | multi | yesno
   ============================================================ */
const DOMAINS = {
  cc:   {name:"Cloud Concepts",                  weight:"25–30%"},
  arch: {name:"Azure Architecture & Services",   weight:"35–40%"},
  mgmt: {name:"Azure Management & Governance",   weight:"30–35%"}
};

const Q = [
/* ---------- CLOUD CONCEPTS (10) ---------- */
{id:"cc01",d:"cc",skill:"Shared responsibility model",type:"single",
 q:"Regardless of whether you use IaaS, PaaS, or SaaS, which item is ALWAYS the customer's responsibility?",
 opts:["Physical datacenter security","Information and data","Patching the physical host servers","Physical network cabling"],ans:1,
 exp:"Information and data (plus the accounts and identities that access it) stays with the customer in every cloud service type. Physical datacenter security, host servers and cabling are always handled by the cloud provider."},

{id:"cc02",d:"cc",skill:"Cloud models",type:"single",
 q:"A hospital must keep patient records on servers in its own building, but wants to run a public-facing appointment website in Azure. The two environments must work together. Which cloud model is this?",
 opts:["Public cloud","Private cloud","Hybrid cloud","Community cloud"],ans:2,
 exp:"Hybrid cloud combines on-premises (private) resources with public cloud services. A purely public model would put everything in Azure; a purely private model would keep everything on-premises."},

{id:"cc03",d:"cc",skill:"Consumption-based model",type:"single",
 q:"Which statement best describes the consumption-based pricing model?",
 opts:["You pay a fixed monthly fee no matter how much you use","You buy hardware up front and depreciate it over several years","You pay only for the resources you actually use, with no up-front hardware purchase","You must sign a three-year contract before using any service"],ans:2,
 exp:"In the consumption-based model you pay as you go for what you use. Fixed fees and up-front hardware purchases describe traditional on-premises spending, and long contracts are not required."},

{id:"cc04",d:"cc",skill:"Serverless",type:"yesno",
 q:"For each statement about serverless computing, select Yes or No.",
 stmts:[
  {t:"Serverless means your code runs without any physical servers.",a:false},
  {t:"With serverless, the cloud provider manages the infrastructure and scales it for you.",a:true},
  {t:"Azure Functions is an example of a serverless compute service.",a:true}],
 exp:"Servers still exist in serverless; you just don't provision or manage them. The provider handles infrastructure and scaling, and you are typically billed for execution. Azure Functions is the classic Azure serverless compute example."},

{id:"cc05",d:"cc",skill:"High availability & scalability",type:"single",
 q:"An online shop automatically adds virtual machines during a holiday sale and removes them when traffic drops. Which cloud benefit does this describe?",
 opts:["Scalability","Disaster recovery","Data sovereignty","Fault isolation"],ans:0,
 exp:"Scalability (including automatic scale-out and scale-in) is the ability to match resources to demand. Disaster recovery is about restoring service after a major failure, which is a different goal."},

{id:"cc06",d:"cc",skill:"Reliability & predictability",type:"single",
 q:"A company wants its application to keep running even if a single datacenter fails. Which cloud benefit is the company seeking?",
 opts:["Elastic billing","High availability","Data classification","Cost allocation"],ans:1,
 exp:"High availability means designing workloads and using services so they remain accessible despite component or datacenter failures. Billing and classification features don't keep an app running."},

{id:"cc07",d:"cc",skill:"Manageability in the cloud",type:"multi",
 q:"Which TWO statements describe manageability benefits of cloud services? (Choose two.)",
 opts:["Resources can be managed through a web portal, command-line tools, or APIs","Deployments can be automated using templates and scripts","You must manually install firmware on the provider's servers","You must physically visit the datacenter to add capacity"],ans:[0,1],
 exp:"Cloud manageability comes from portals, CLI/PowerShell, APIs and automation such as templates. Firmware and physical capacity are handled by the provider, not by you."},

{id:"cc08",d:"cc",skill:"IaaS",type:"single",
 q:"Your team needs full control of the operating system, including choosing the OS version and installing custom drivers. Which cloud service type fits best?",
 opts:["Software as a Service (SaaS)","Platform as a Service (PaaS)","Infrastructure as a Service (IaaS)","Function as a Service only"],ans:2,
 exp:"IaaS (for example Azure Virtual Machines) gives you the most control, including the OS. PaaS and SaaS abstract the OS away from you."},

{id:"cc09",d:"cc",skill:"PaaS",type:"single",
 q:"A developer wants to publish a web application without managing servers or operating system patches. Which service type is the best match?",
 opts:["IaaS","PaaS","On-premises","Colocation"],ans:1,
 exp:"PaaS (for example Azure App Service) lets you deploy code while the provider manages the OS and runtime. IaaS would leave OS patching to you, and on-premises or colocation leave even more to you."},

{id:"cc10",d:"cc",skill:"CapEx vs OpEx",type:"single",
 q:"When an organization moves its servers from an on-premises datacenter to Azure, how does its spending model typically change?",
 opts:["From operational expenditure (OpEx) to capital expenditure (CapEx)","From capital expenditure (CapEx) to operational expenditure (OpEx)","There is no change in spending model","From variable costs to fixed costs only"],ans:1,
 exp:"Cloud shifts spending from large up-front capital purchases (CapEx) to ongoing, usage-based operational costs (OpEx). The reverse describes buying hardware."},

/* ---------- AZURE ARCHITECTURE & SERVICES (14) ---------- */
{id:"ar01",d:"arch",skill:"Regions & region pairs",type:"single",
 q:"Which statement about Azure region pairs is true?",
 opts:["Both regions in a pair always receive platform updates at the same time","Platform updates are rolled out to one region in a pair at a time","A region pair is two datacenters inside the same building","Region pairs are used only for billing purposes"],ans:1,
 exp:"Planned platform updates are sequenced so that only one region of a pair is updated at a time, which reduces the risk of simultaneous downtime. Pairs are separate geographic regions, not one building."},

{id:"ar02",d:"arch",skill:"Availability zones",type:"single",
 q:"What is an Azure availability zone?",
 opts:["A billing boundary that groups subscriptions","A physically separate location within a region with its own power, cooling, and networking","A virtual network used to isolate subnets","A pair of regions in different countries"],ans:1,
 exp:"Availability zones are separate datacenter locations inside one region, each with independent power, cooling and networking, so a failure in one zone doesn't take down the others."},

{id:"ar03",d:"arch",skill:"Resource organization hierarchy",type:"single",
 q:"Which list shows the Azure organizational hierarchy from the highest scope to the lowest?",
 opts:["Resource group → Subscription → Management group → Resource","Management group → Subscription → Resource group → Resource","Subscription → Management group → Resource → Resource group","Resource → Resource group → Subscription → Management group"],ans:1,
 exp:"Management groups sit above subscriptions, subscriptions contain resource groups, and resource groups contain resources."},

{id:"ar04",d:"arch",skill:"Resource groups",type:"single",
 q:"What happens to the resources inside a resource group when you delete that resource group?",
 opts:["They are moved to the default resource group","They are all deleted","They are kept but become unmanaged","Only the empty resources are deleted"],ans:1,
 exp:"Deleting a resource group deletes every resource it contains, so use it carefully. Resource locks can help prevent accidental deletion."},

{id:"ar05",d:"arch",skill:"Compute: containers",type:"single",
 q:"You want to run a single containerized app quickly without managing any virtual machines. Which Azure service is the simplest fit?",
 opts:["Azure Virtual Desktop","Azure Container Instances","Azure Availability Sets","Azure Site Recovery"],ans:1,
 exp:"Azure Container Instances runs containers without you provisioning VMs. Azure Virtual Desktop delivers virtual desktops, and availability sets are a VM availability feature, not a container host."},

{id:"ar06",d:"arch",skill:"VM options: Scale Sets",type:"single",
 q:"Which Azure service lets you deploy and automatically scale a group of identical virtual machines based on demand?",
 opts:["Azure Virtual Machine Scale Sets","Azure Arc","Azure Policy","Azure Data Box"],ans:0,
 exp:"Virtual Machine Scale Sets manage a group of load-balanced, identical VMs that can scale out and in automatically. The other options serve management, governance or data-transfer purposes."},

{id:"ar07",d:"arch",skill:"Virtual networking & connectivity",type:"yesno",
 q:"For each statement about Azure networking, select Yes or No.",
 stmts:[
  {t:"Virtual network peering can connect two Azure virtual networks.",a:true},
  {t:"Azure VPN Gateway sends encrypted traffic between networks over the public internet.",a:true},
  {t:"Azure ExpressRoute sends your traffic over the public internet.",a:false}],
 exp:"Peering links virtual networks. VPN Gateway uses encrypted tunnels across the public internet. ExpressRoute is a private connection that does not go over the public internet."},

{id:"ar08",d:"arch",skill:"Private endpoints",type:"single",
 q:"You want to access an Azure PaaS service using a private IP address from inside your virtual network. What should you use?",
 opts:["A public IP address","A private endpoint","A resource lock","A management group"],ans:1,
 exp:"A private endpoint gives an Azure service a private IP address in your virtual network so traffic stays on the private network. A public IP exposes the service publicly."},

{id:"ar09",d:"arch",skill:"Storage tiers",type:"single",
 q:"A company stores compliance records that are almost never read and can wait several hours to be retrieved. Which blob access tier is the most cost-effective for storage?",
 opts:["Hot","Cool","Archive","Premium"],ans:2,
 exp:"The Archive tier has the lowest storage cost but requires rehydration (hours) before access. Hot and Premium are for frequently accessed data, and Cool suits infrequent access with immediate availability."},

{id:"ar10",d:"arch",skill:"Storage redundancy",type:"single",
 q:"You need your storage data to remain available even if an entire Azure region becomes unavailable. Which redundancy option should you choose?",
 opts:["Locally redundant storage (LRS)","Zone-redundant storage (ZRS)","Geo-redundant storage (GRS)","None; Azure Storage can't survive regional outages"],ans:2,
 exp:"GRS (or GZRS) copies data to a secondary region. LRS and ZRS keep data within a single region, so they don't protect against a full regional outage."},

{id:"ar11",d:"arch",skill:"Migration & data transfer",type:"single",
 q:"A research group has many terabytes of data and slow internet. Which Azure option lets them move it by shipping a physical device?",
 opts:["Azure File Sync","AzCopy","Azure Data Box","Azure Storage Explorer"],ans:2,
 exp:"Azure Data Box is a physical appliance for offline bulk transfer. AzCopy and Storage Explorer transfer over the network, and Azure File Sync keeps on-premises file servers synchronized with Azure Files."},

{id:"ar12",d:"arch",skill:"Conditional Access",type:"single",
 q:"You want to require multifactor authentication only when users sign in from outside the corporate network. Which feature enables this policy-based decision?",
 opts:["Microsoft Entra Conditional Access","Azure Advisor","Azure Resource Manager","Microsoft Purview"],ans:0,
 exp:"Conditional Access evaluates signals such as location and device to decide when to require controls like MFA. The other services don't make sign-in access decisions."},

{id:"ar13",d:"arch",skill:"Azure RBAC",type:"single",
 q:"You need to let a support engineer restart virtual machines in one resource group, but not change anything else. Which feature should you use?",
 opts:["Azure role-based access control (RBAC)","Azure Policy","Resource tags","Azure Monitor alerts"],ans:0,
 exp:"Azure RBAC assigns roles at a chosen scope (such as a resource group) to grant only the needed permissions. Azure Policy controls resource configuration rather than user permissions."},

{id:"ar14",d:"arch",skill:"Zero Trust & defense in depth",type:"multi",
 q:"Which TWO statements describe the Zero Trust and defense-in-depth approaches? (Choose two.)",
 opts:["Verify explicitly: always authenticate and authorize based on available signals","Trust every request that originates from inside the corporate network","Use multiple layers of protection so one failure doesn't expose everything","Rely on a single perimeter firewall for all security"],ans:[0,2],
 exp:"Zero Trust means 'never trust, always verify', and defense in depth uses several layers of security. Trusting internal traffic by default or relying on one firewall goes against both ideas."},

/* ---------- AZURE MANAGEMENT & GOVERNANCE (13) ---------- */
{id:"mg01",d:"mgmt",skill:"Cost factors",type:"multi",
 q:"Which TWO factors can affect the cost of an Azure virtual machine? (Choose two.)",
 opts:["The VM size","The Azure region where it is deployed","The number of tags on the VM","The color theme of the Azure portal"],ans:[0,1],
 exp:"VM size and region both influence price. Tags help organize and report costs but don't change what a resource costs, and portal themes have no cost impact."},

{id:"mg02",d:"mgmt",skill:"Pricing calculator",type:"single",
 q:"Before deploying a new solution, you want to estimate its monthly cost. Which tool should you use?",
 opts:["Azure Pricing calculator","Azure Service Health","Azure Advisor","Azure Policy"],ans:0,
 exp:"The Azure Pricing calculator estimates costs for planned services. Service Health reports incidents, Advisor recommends improvements to existing resources, and Policy enforces rules."},

{id:"mg03",d:"mgmt",skill:"Cost Management",type:"single",
 q:"Which capability lets you set a spending budget and receive an alert when costs approach it?",
 opts:["Microsoft Cost Management","Azure Cloud Shell","Azure Arc","Microsoft Entra ID"],ans:0,
 exp:"Microsoft Cost Management lets you analyze spending, create budgets and configure alerts. The other options are for command-line access, hybrid management and identity."},

{id:"mg04",d:"mgmt",skill:"Tags",type:"single",
 q:"You want to group resources by department so you can report on spending per department. What should you apply to the resources?",
 opts:["Resource locks","Tags","Availability zones","Private endpoints"],ans:1,
 exp:"Tags are name/value pairs (for example Department=Finance) used to organize resources and filter cost reports. Locks prevent changes, and zones and endpoints serve availability and networking."},

{id:"mg05",d:"mgmt",skill:"Microsoft Purview",type:"single",
 q:"Which service helps you govern and understand your data across on-premises, multicloud and SaaS sources?",
 opts:["Microsoft Purview","Azure Virtual Desktop","Azure DNS","Azure Data Box"],ans:0,
 exp:"Microsoft Purview provides data governance, cataloging and compliance capabilities across data estates. The others are desktop virtualization, DNS and data transfer services."},

{id:"mg06",d:"mgmt",skill:"Azure Policy",type:"single",
 q:"Your organization requires that resources may only be created in approved Azure regions. Which service enforces this requirement?",
 opts:["Azure Policy","Azure Advisor","Azure Monitor","Azure Migrate"],ans:0,
 exp:"Azure Policy evaluates resources against rules (such as allowed locations) and can deny or flag non-compliant ones. Advisor and Monitor don't enforce configuration rules."},

{id:"mg07",d:"mgmt",skill:"Resource locks",type:"single",
 q:"You want to make sure a critical database can still be read and changed, but cannot be accidentally deleted. Which resource lock should you apply?",
 opts:["Read-only lock","Delete lock (CanNotDelete)","No lock; RBAC can't prevent deletion","Tag lock"],ans:1,
 exp:"A Delete lock allows reads and modifications but blocks deletion. A Read-only lock would also block changes, and 'Tag lock' is not an Azure lock type."},

{id:"mg08",d:"mgmt",skill:"Azure Arc",type:"single",
 q:"A company has servers in its own datacenter and in another cloud. It wants to manage them from Azure using familiar Azure tools. Which service should it use?",
 opts:["Azure Arc","Azure Data Box","Azure Cache","Azure Site Recovery only"],ans:0,
 exp:"Azure Arc extends Azure management to resources running outside Azure, such as on-premises or other clouds. The other options are not designed for this purpose."},

{id:"mg09",d:"mgmt",skill:"IaC & ARM templates",type:"yesno",
 q:"For each statement about Azure Resource Manager (ARM) and infrastructure as code, select Yes or No.",
 stmts:[
  {t:"ARM templates describe the desired state of resources in a declarative way.",a:true},
  {t:"Deploying the same ARM template repeatedly can produce the same consistent result.",a:true},
  {t:"ARM templates can only be deployed by using the Azure portal.",a:false}],
 exp:"ARM templates are declarative and repeatable, which is the heart of IaC. They can be deployed using the portal, CLI, PowerShell, pipelines and other methods."},

{id:"mg10",d:"mgmt",skill:"Cloud Shell, CLI & PowerShell",type:"single",
 q:"Which tool provides a browser-based command-line experience for managing Azure, without installing anything locally?",
 opts:["Azure Cloud Shell","Azure Storage Explorer","Azure Data Box","Microsoft Defender for Cloud"],ans:0,
 exp:"Azure Cloud Shell runs in the browser and supports Azure CLI (Bash) and Azure PowerShell. Storage Explorer is a GUI for storage and Data Box is a physical transfer device."},

{id:"mg11",d:"mgmt",skill:"Azure Advisor",type:"single",
 q:"Which service analyzes your existing resources and gives personalized recommendations for cost, security, reliability, performance and operational excellence?",
 opts:["Azure Advisor","Azure Pricing calculator","Azure Resource Manager","Azure DNS"],ans:0,
 exp:"Azure Advisor reviews your deployed resources and suggests best-practice improvements across those pillars. The Pricing calculator estimates costs for planned deployments."},

{id:"mg12",d:"mgmt",skill:"Azure Service Health",type:"single",
 q:"You want to be notified when an Azure outage or planned maintenance could affect the services you use. Which service should you check?",
 opts:["Azure Service Health","Azure Policy","Azure Blueprints only","Azure Migrate"],ans:0,
 exp:"Azure Service Health provides personalized alerts and guidance about Azure incidents and planned maintenance that affect your resources. Policy enforces rules, and Migrate helps move workloads."},

{id:"mg13",d:"mgmt",skill:"Azure Monitor & Log Analytics",type:"single",
 q:"Which Azure service collects and analyzes telemetry from your resources and can trigger alerts based on metrics or logs?",
 opts:["Azure Monitor","Azure Data Box","Azure File Sync","Azure Virtual Network"],ans:0,
 exp:"Azure Monitor collects metrics and logs (with Log Analytics for querying) and supports alerts and Application Insights for app telemetry. The others handle data transfer, file sync and networking."}
];

/* ---------- APP ---------- */
const $ = s => document.querySelector(s);
const app = $('#app');
const KEY = 'az900-quiz-coach-v1';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };

function load(){
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.missed) return s; } catch(e){}
  return {missed:{}, dom:{cc:{r:0,t:0},arch:{r:0,t:0},mgmt:{r:0,t:0}}, history:[]};
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} }
let store = load();
let S = null; // session

const pct = (r,t) => t ? Math.round(100*r/t) : 0;
const cls = p => p>=80 ? 'ok' : p>=60 ? 'mid' : 'bad';

function home(){
  const missedIds = Object.keys(store.missed).filter(id => Q.some(q=>q.id===id));
  const counts = {cc:0,arch:0,mgmt:0}; Q.forEach(q=>counts[q.d]++);
  const totalAns = Object.values(store.dom).reduce((a,d)=>a+d.t,0);
  const rows = Object.keys(DOMAINS).map(k=>{
    const d = store.dom[k]; const p = pct(d.r,d.t);
    return `<div class="dom"><div class="row"><span><b>${DOMAINS[k].name}</b> <span class="muted">(exam weight ${DOMAINS[k].weight})</span></span><span>${d.t?p+'%':'—'}</span></div>
    <div class="bar ${d.t?cls(p):''}"><i style="width:${d.t?p:0}%"></i></div></div>`;
  }).join('');
  const hist = store.history.slice(-5).reverse().map(h=>`<div class="row review"><span>${esc(h.label)}</span><span><b>${h.score}/${h.total}</b> · ${new Date(h.date).toLocaleDateString()}</span></div>`).join('');
  app.innerHTML = `
  <div class="card">
    <h1>Practice smarter, not just harder.</h1>
    <p class="muted">Every answer gets instant feedback and a clear explanation of why it's right or wrong. ${Q.length} original questions organised by AZ-900 skill area, using single-choice, multiple-choice and Yes/No formats.</p>
    <div class="grid two" style="margin-top:14px">
      <button class="mode" data-mode="all"><b>🎯 Full practice (${Q.length} questions)</b><small>Mixed topics, matching exam weighting</small></button>
      <button class="mode" data-mode="mini"><b>⚡ Quick round (15 questions)</b><small>Balanced random sample</small></button>
      <button class="mode" data-mode="cc"><b>☁️ ${DOMAINS.cc.name}</b><small>${counts.cc} questions</small></button>
      <button class="mode" data-mode="arch"><b>🏗️ ${DOMAINS.arch.name}</b><small>${counts.arch} questions</small></button>
      <button class="mode" data-mode="mgmt"><b>🛡️ ${DOMAINS.mgmt.name}</b><small>${counts.mgmt} questions</small></button>
      <button class="mode" data-mode="missed" ${missedIds.length?'':'disabled'}><b>🔁 Retry missed questions</b><small>${missedIds.length} waiting for review</small></button>
    </div>
  </div>
  <div class="card">
    <div class="row"><h2>Your progress by topic</h2>
      ${totalAns?'<button class="btn ghost small" id="reset">Reset</button>':''}</div>
    ${totalAns?rows:'<p class="muted">Finish a quiz and your accuracy per skill area will appear here, so you can see your weak spots.</p>'}
    ${hist?'<h3 style="margin-top:18px">Recent attempts</h3>'+hist:''}
  </div>`;
  app.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>start(b.dataset.mode));
  const rs = $('#reset'); if (rs) rs.onclick=()=>{ if(confirm('Clear all saved progress on this device?')){ store={missed:{},dom:{cc:{r:0,t:0},arch:{r:0,t:0},mgmt:{r:0,t:0}},history:[]}; save(); home(); } };
}

function pickMini(){
  const by = k => shuffle(Q.filter(q=>q.d===k));
  return shuffle([...by('cc').slice(0,4), ...by('arch').slice(0,6), ...by('mgmt').slice(0,5)]);
}

function start(mode){
  let list, label;
  if (mode==='all'){ list = shuffle(Q); label='Full practice'; }
  else if (mode==='mini'){ list = pickMini(); label='Quick round'; }
  else if (mode==='missed'){ list = shuffle(Q.filter(q=>store.missed[q.id])); label='Missed questions'; }
  else { list = shuffle(Q.filter(q=>q.d===mode)); label = DOMAINS[mode].name; }
  S = {label, list, i:0, results:[], done:false};
  show();
}

function prepare(q){
  if (q._p && q._p.session===S) return q._p;
  const p = {session:S};
  if (q.type==='yesno') p.stmts = shuffle(q.stmts.map((s,k)=>({...s,k})));
  else p.opts = shuffle(q.opts.map((t,k)=>({t, c:Array.isArray(q.ans)?q.ans.includes(k):q.ans===k})));
  p.sel = new Set(); p.yn = {}; p.locked = false;
  q._p = p; return p;
}

function show(){
  if (S.i >= S.list.length) return finish();
  const q = S.list[S.i], p = prepare(q);
  const multi = q.type==='multi', yn = q.type==='yesno';
  const prog = Math.round(100*S.i/S.list.length);
  let body = '';
  if (yn){
    body = p.stmts.map((s,i)=>`<div class="stmt" data-s="${i}"><div>${esc(s.t)}</div>
      <div class="yn"><button data-yn="${i}|1">Yes</button><button data-yn="${i}|0">No</button></div></div>`).join('');
  } else {
    body = p.opts.map((o,i)=>`<button class="opt ${multi?'multi':'single'}" data-o="${i}"><span class="mark"></span><span>${esc(o.t)}</span></button>`).join('');
  }
  app.innerHTML = `
  <div class="card">
    <div class="row" style="margin-bottom:8px"><span class="muted">${esc(S.label)} · Question ${S.i+1} of ${S.list.length}</span>
      <button class="btn ghost small" id="quit">Quit</button></div>
    <div class="bar"><i style="width:${prog}%"></i></div>
    <div style="margin-top:14px"><span class="tag">${DOMAINS[q.d].name}</span><span class="tag">${esc(q.skill)}</span></div>
    <div class="qtext">${esc(q.q)}${multi?'':''}</div>
    <div id="body">${body}</div>
    <div id="fb"></div>
    <div class="row" style="margin-top:14px;justify-content:flex-end">
      <button class="btn" id="submit" disabled>${multi||yn?'Check answer':'Select an answer'}</button>
    </div>
  </div>`;
  $('#quit').onclick = () => { if (confirm('Quit this quiz? Your answers so far are saved.')) { finishEarly(); } };
  const sub = $('#submit');
  if (yn){
    app.querySelectorAll('[data-yn]').forEach(b=>b.onclick=()=>{
      if (p.locked) return;
      const [i,v] = b.dataset.yn.split('|');
      p.yn[i] = v==='1';
      const wrap = b.closest('.stmt');
      wrap.querySelectorAll('button').forEach(x=>x.classList.remove('sel')); b.classList.add('sel');
      sub.disabled = Object.keys(p.yn).length < p.stmts.length;
    });
    sub.onclick = () => grade(q,p);
  } else {
    app.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{
      if (p.locked) return;
      const i = +b.dataset.o;
      if (multi){
        p.sel.has(i) ? p.sel.delete(i) : p.sel.add(i);
        b.classList.toggle('sel');
        b.querySelector('.mark').textContent = p.sel.has(i) ? '✓' : '';
        sub.disabled = p.sel.size===0;
      } else {
        p.sel = new Set([i]); grade(q,p);
      }
    });
    if (multi) sub.onclick = () => grade(q,p);
    else sub.style.visibility = 'hidden';
  }
}

function grade(q,p){
  p.locked = true;
  let ok, picked;
  if (q.type==='yesno'){
    ok = p.stmts.every((s,i)=>p.yn[i]===s.a);
    app.querySelectorAll('.stmt').forEach((el,i)=>{
      const s = p.stmts[i], good = p.yn[i]===s.a;
      el.classList.add(good?'right':'wrong');
      const btns = el.querySelectorAll('button'); btns.forEach(b=>b.disabled=true);
      const note = document.createElement('div'); note.className='muted'; note.style.marginTop='6px';
      note.textContent = (good?'✓ Correct: ':'✗ Correct answer: ') + (s.a?'Yes':'No');
      el.appendChild(note);
    });
    picked = Object.values(p.yn);
  } else {
    const correct = new Set(p.opts.map((o,i)=>o.c?i:-1).filter(i=>i>=0));
    ok = correct.size===p.sel.size && [...correct].every(i=>p.sel.has(i));
    app.querySelectorAll('.opt').forEach((el,i)=>{
      el.disabled = true;
      const mark = el.querySelector('.mark');
      if (correct.has(i)){ el.classList.add('right'); mark.textContent='✓'; }
      else if (p.sel.has(i)){ el.classList.add('wrong'); mark.textContent='✗'; }
    });
    picked = [...p.sel];
  }
  S.results.push({id:q.id, ok});
  // persist stats
  const d = store.dom[q.d]; d.t++; if (ok) d.r++;
  if (ok) { if (store.missed[q.id]) delete store.missed[q.id]; }
  else store.missed[q.id] = (store.missed[q.id]||0)+1;
  save();

  $('#fb').innerHTML = `<div class="fb ${ok?'ok':'no'}"><h3>${ok?'✅ Correct!':'❌ Not quite.'}</h3><p>${esc(q.exp)}</p></div>`;
  const sub = $('#submit');
  sub.style.visibility='visible'; sub.disabled=false;
  sub.textContent = S.i+1 >= S.list.length ? 'See results' : 'Next question →';
  sub.onclick = () => { S.i++; show(); window.scrollTo({top:0,behavior:'smooth'}); };
  sub.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function finishEarly(){ if (S.results.length) { S.list = S.list.slice(0,S.results.length); finish(); } else { S=null; home(); } }

function finish(){
  const total = S.results.length, score = S.results.filter(r=>r.ok).length, p = pct(score,total);
  store.history.push({label:S.label, score, total, date:Date.now()});
  store.history = store.history.slice(-30); save();
  const byD = {};
  S.results.forEach(r=>{ const q = Q.find(x=>x.id===r.id); (byD[q.d] = byD[q.d]||{r:0,t:0}).t++; if(r.ok) byD[q.d].r++; });
  const rows = Object.keys(byD).map(k=>{ const d=byD[k], pp=pct(d.r,d.t);
    return `<div class="dom"><div class="row"><span><b>${DOMAINS[k].name}</b></span><span>${d.r}/${d.t} · ${pp}%</span></div><div class="bar ${cls(pp)}"><i style="width:${pp}%"></i></div></div>`; }).join('');
  const weakest = Object.keys(byD).sort((a,b)=>pct(byD[a].r,byD[a].t)-pct(byD[b].r,byD[b].t))[0];
  const missed = S.results.filter(r=>!r.ok);
  const msg = p>=80 ? 'Excellent. You look exam-ready on this set.' : p>=70 ? 'Solid. A little more revision on weak topics will get you there.' : 'Keep going. Review the explanations below and retry the missed questions.';
  const review = S.results.map(r=>{ const q=Q.find(x=>x.id===r.id);
    return `<div class="review"><span class="ico ${r.ok?'ok':'no'}">${r.ok?'✓':'✗'}</span>${esc(q.q)}<div class="muted" style="margin-top:4px">${esc(q.skill)}</div></div>`; }).join('');
  app.innerHTML = `
  <div class="card" style="text-align:center">
    <div class="muted">${esc(S.label)}</div>
    <div class="score">${score}<span class="muted" style="font-size:1.5rem">/${total}</span></div>
    <div class="verdict" style="margin:6px 0 2px">${p}% · ${msg}</div>
    ${weakest && pct(byD[weakest].r,byD[weakest].t)<100 ? `<div class="muted">Focus next on: <b>${DOMAINS[weakest].name}</b></div>`:''}
    <div class="row" style="justify-content:center;margin-top:16px;flex-wrap:wrap">
      ${missed.length?'<button class="btn" id="retry">Retry missed ('+missed.length+')</button>':''}
      <button class="btn ghost" id="again">New quiz</button>
    </div>
  </div>
  <div class="card"><h2>Score by topic</h2>${rows}</div>
  <div class="card"><h2>Question review</h2>${review}</div>`;
  const ids = missed.map(r=>r.id);
  const rt = $('#retry'); if (rt) rt.onclick = () => { S = {label:'Missed questions', list:shuffle(Q.filter(q=>ids.includes(q.id))), i:0, results:[], done:false}; show(); };
  $('#again').onclick = () => { S=null; home(); };
  window.scrollTo({top:0});
}

home();