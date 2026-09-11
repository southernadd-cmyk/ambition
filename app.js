const screens = {
  welcome: document.getElementById("welcomeScreen"),
  quiz: document.getElementById("quizScreen"),
  results: document.getElementById("resultsScreen"),
  plan: document.getElementById("planScreen")
};

const questions = [
  {
    stage:0,
    text:"How clear is your plan for after the BTEC at the moment?",
    help:"This helps set the starting point. You do not need to have decided yet.",
    options:[
      ["clear","I already have a fairly clear goal","I know the kind of course, apprenticeship or job I want."],
      ["ideas","I have a few ideas","I know some areas I might like, but I have not chosen."],
      ["broad","I only know I want something digital / IT related","I need help narrowing the field."],
      ["unsure","I’m genuinely not sure yet","I want the quiz to give me sensible areas to investigate."]
    ]
  },
  {
    stage:1,
    text:"Which kind of IT task sounds most satisfying?",
    help:"Choose the one you would most willingly spend a lesson working on.",
    score:true,
    options:[
      ["software","Building an app, game or useful piece of software","Turning an idea into something that works."],
      ["cyber","Finding weaknesses and making systems safer","Investigating threats, permissions and security."],
      ["data","Finding patterns in data and explaining what they mean","Using evidence to answer questions or make predictions."],
      ["support","Fixing a device, network or user problem","Working out what is broken and getting it working again."],
      ["creative","Designing a website, interface or digital experience","Combining technology with visual and user-focused design."],
      ["business","Planning a digital project and helping people use technology well","Organising work, requirements, people and outcomes."]
    ]
  },
  {
    stage:1,
    text:"Which project would you be most likely to choose for yourself?",
    help:"Think about what you would still be interested in after the novelty wore off.",
    score:true,
    options:[
      ["software","Create a small web app that solves a real problem","Code, test and improve a working product."],
      ["cyber","Run a legal security investigation in a lab","Analyse logs, vulnerabilities and defensive controls."],
      ["data","Build a dashboard from a messy dataset","Clean, query and visualise information."],
      ["support","Build and document a reliable small network","Configure, troubleshoot and explain the setup."],
      ["creative","Redesign a confusing website for a real audience","Research users, prototype and test the design."],
      ["business","Plan a technology rollout for an organisation","Compare options, risks, costs and user needs."]
    ]
  },
  {
    stage:1,
    text:"When you meet a difficult technical problem, what part do you enjoy most?",
    help:"Pick what sounds most like you on a good day.",
    score:true,
    options:[
      ["software","Breaking the problem into logical steps","I like algorithms, rules and making code behave."],
      ["cyber","Working out how the problem happened","I enjoy clues, causes, unusual behaviour and risk."],
      ["data","Looking for evidence before deciding","I prefer patterns, comparisons and measurable answers."],
      ["support","Trying fixes methodically until the system works","I enjoy hands-on diagnosis and practical solutions."],
      ["creative","Working out why the experience is confusing","I notice layout, accessibility and how users feel."],
      ["business","Clarifying what people actually need","I like turning a messy request into a manageable plan."]
    ]
  },
  {
    stage:2,
    text:"How do you feel about programming?",
    help:"There is no penalty for not loving code. Many strong IT careers use little or no programming.",
    options:[
      ["love","I enjoy it and want to get much better","Coding could be a major part of my future role."],
      ["okay","I’m reasonably comfortable with it","I can use it when needed and I’m open to improving."],
      ["learn","I find it difficult, but I’m willing to learn","I would not rule out a role because it involves some code."],
      ["avoid","I would rather choose a role where coding is not central","I prefer other parts of IT."]
    ]
  },
  {
    stage:2,
    text:"Which strength do you most want a future employer or university to notice?",
    help:"Choose the quality you would be happiest to demonstrate in a project or interview.",
    score:true,
    options:[
      ["software","Logical problem solving","I can build, test and improve a technical solution."],
      ["cyber","Careful investigation","I can spot risk, question assumptions and follow evidence."],
      ["data","Analytical thinking","I can turn information into a useful conclusion."],
      ["support","Technical reliability","I can diagnose problems and explain a fix clearly."],
      ["creative","Creative communication","I can make technology understandable and usable."],
      ["business","Organisation and leadership","I can keep people and tasks moving towards an outcome."]
    ]
  },
  {
    stage:2,
    text:"What type of working day sounds best?",
    help:"Roles vary, but this helps distinguish between job families.",
    score:true,
    options:[
      ["software","Long focused blocks creating and improving things","I like concentration and building towards a working result."],
      ["cyber","A mix of investigation, monitoring and responding","I like changing problems and evidence-led decisions."],
      ["data","Analysis time followed by explaining findings","I like independent thinking with a clear question to answer."],
      ["support","Lots of different problems and contact with users","I like being useful and seeing problems resolved."],
      ["creative","Research, ideas, prototypes and feedback","I like iterating based on what users need."],
      ["business","Meetings, planning, communication and decision-making","I like coordinating people, priorities and progress."]
    ]
  },
  {
    stage:2,
    text:"Which statement best describes your current BTEC progress?",
    help:"This is only used to make the targets more realistic.",
    options:[
      ["strong","I’m on track and usually meet deadlines","I can focus on stretching my grades and building evidence beyond lessons."],
      ["mostly","Mostly on track, with a few areas to improve","I need targeted improvements rather than a complete reset."],
      ["catchup","I need to improve grades, attendance or deadlines","My first targets should strengthen the course outcome."],
      ["unknown","I’m not sure what I’m currently on track to achieve","I need to check my position before setting an entry target."]
    ]
  },
  {
    stage:3,
    text:"Which option sounds most attractive immediately after finishing the BTEC?",
    help:"You can still get a recommendation if you are unsure.",
    options:[
      ["uni","Study full-time at university","I want deeper study, student life and a degree route."],
      ["degreeapp","Earn a salary while working towards a degree-level qualification","A degree apprenticeship sounds attractive."],
      ["app","Start an apprenticeship or structured trainee role","I want work-based learning and job experience."],
      ["job","Move into employment as soon as possible","I want to start earning and develop through work."],
      ["unsure","I want to keep several routes open","I need to compare real options before deciding."]
    ]
  },
  {
    stage:3,
    text:"What matters most to you in that next step?",
    help:"This can change which route is the most realistic fit.",
    options:[
      ["study","Having time to study a subject in depth","I am comfortable with a mainly academic next step."],
      ["earnlearn","Earning while continuing to learn","I like the balance of employment and structured training."],
      ["experience","Getting workplace experience quickly","I want practical evidence and real responsibilities."],
      ["options","Keeping my future choices broad","I do not want to specialise too early."]
    ]
  },
  {
    stage:3,
    text:"Which piece of career evidence do you most need to strengthen this year?",
    help:"Pick the biggest gap, not the easiest task.",
    options:[
      ["grades","My BTEC grades / assignment performance","I need stronger academic evidence."],
      ["portfolio","A portfolio of IT projects","I need things I can actually show and discuss."],
      ["experience","Work experience or employer contact","I need more evidence from outside the classroom."],
      ["applications","CV, personal statement or application skills","I need to explain my strengths more convincingly."],
      ["research","Knowledge of courses, apprenticeships and job requirements","I need better information before choosing."]
    ]
  },
  {
    stage:3,
    text:"What would make this quiz genuinely useful to you?",
    help:"Your final plan will prioritise this.",
    options:[
      ["specific","A specific job direction I can research","I want a clearer destination."],
      ["route","A clearer choice between university, apprenticeships and work","I want to understand the route."],
      ["targets","A short list of actions I can start now","I mainly need momentum."],
      ["backup","A main plan plus realistic alternatives","I want direction without closing off other options."]
    ]
  }
];

const roleProfiles = {
  software:{
    title:"Software & App Development",
    summary:"A strong fit if you enjoy logic, building working products, testing and improving solutions.",
    roles:["Software developer","Web developer","App developer"],
    courses:["Computer Science","Software Engineering","Web / App Development"],
    apprenticeships:["Software developer","Digital and technology solutions","DevOps / software pathway"],
    next:"Build a small coded project and document how you tested it.",
    skills:["programming","problem solving","testing","version control"]
  },
  cyber:{
    title:"Cyber Security",
    summary:"A strong fit if you enjoy investigation, risk, defensive thinking and understanding how systems can fail.",
    roles:["Cyber security analyst","Security operations analyst","Digital forensics pathway"],
    courses:["Cyber Security","Computer Networks and Security","Digital Forensics"],
    apprenticeships:["Cyber security technologist","Digital and technology solutions","Network / security pathway"],
    next:"Complete a legal cyber lab or challenge and write up what you learned.",
    skills:["networking","security principles","analysis","documentation"]
  },
  data:{
    title:"Data, Analytics & AI",
    summary:"A strong fit if you like evidence, patterns, structured questions and explaining what information means.",
    roles:["Data analyst","Business intelligence analyst","Junior data / AI pathway"],
    courses:["Data Science","Computer Science with AI","Business Analytics"],
    apprenticeships:["Data analyst","Digital and technology solutions","AI / data pathway"],
    next:"Create a small data project using a real dataset and explain three useful findings.",
    skills:["data handling","SQL","spreadsheets","visualisation"]
  },
  support:{
    title:"IT Support, Networks & Cloud",
    summary:"A strong fit if you enjoy troubleshooting, practical systems, user problems and keeping technology reliable.",
    roles:["IT support technician","Network technician","Cloud support technician"],
    courses:["Computer Networks","Cloud Computing","Computing / IT"],
    apprenticeships:["IT solutions technician","Network engineer","Digital support technician"],
    next:"Build or simulate a small technical setup and produce clear troubleshooting documentation.",
    skills:["troubleshooting","networks","operating systems","customer support"]
  },
  creative:{
    title:"Web, UX & Digital Design",
    summary:"A strong fit if you care about users, visual communication, accessibility and making digital products easier to use.",
    roles:["Web designer / developer","UX / UI designer pathway","Digital content designer"],
    courses:["Web Design and Development","User Experience Design","Digital Design"],
    apprenticeships:["Creative digital design","Software / web pathway","Digital content pathway"],
    next:"Redesign one digital experience and show your research, prototype and improvements.",
    skills:["web design","UX","accessibility","prototyping"]
  },
  business:{
    title:"Digital Business & IT Projects",
    summary:"A strong fit if you enjoy organising work, understanding requirements and helping people use technology effectively.",
    roles:["Junior business analyst","Digital project support","IT project coordinator"],
    courses:["Information Systems","IT Management for Business","Business Computing"],
    apprenticeships:["Business analyst","Associate project manager","Digital and technology solutions"],
    next:"Plan a small digital project with requirements, risks, milestones and success measures.",
    skills:["communication","requirements","project planning","stakeholder thinking"]
  }
};

const routeProfiles = {
  uni:{
    title:"University",
    badge:"Full-time study",
    copy:"Your answers suggest that full-time higher education is worth serious investigation. Compare course content and entry requirements rather than choosing only by course title."
  },
  degreeapp:{
    title:"Degree apprenticeship",
    badge:"Earn + degree-level study",
    copy:"Your answers suggest an earn-while-you-learn route could suit you. Degree apprenticeships are competitive, so strong BTEC outcomes, research, applications and employer evidence matter."
  },
  app:{
    title:"Apprenticeship / structured trainee route",
    badge:"Work-based learning",
    copy:"Your answers suggest a practical employment route with structured training may suit you. Look at actual apprenticeship standards and vacancies to see which levels and roles match your qualification."
  },
  job:{
    title:"Direct employment",
    badge:"Employment first",
    copy:"Your answers suggest you want to enter work quickly. Focus on realistic entry roles, demonstrable skills, a good CV and evidence that you can solve problems professionally."
  },
  open:{
    title:"Keep two routes open for now",
    badge:"Compare before choosing",
    copy:"You do not need to force a decision yet. Research at least one university option and one work-based option, then compare entry requirements, day-to-day experience and progression."
  }
};

let state = {
  current:0,
  answers:Array(questions.length).fill(null),
  roleScores:{software:0,cyber:0,data:0,support:0,creative:0,business:0},
  roleOrder:[],
  selectedRole:null,
  selectedRoute:null
};

function showScreen(name){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function saveState(){
  localStorage.setItem("btecPathfinderState", JSON.stringify({
    answers:state.answers,
    selectedRole:state.selectedRole,
    selectedRoute:state.selectedRoute
  }));
}

function resetAll(){
  localStorage.removeItem("btecPathfinderState");
  state.current=0;
  state.answers=Array(questions.length).fill(null);
  state.roleScores={software:0,cyber:0,data:0,support:0,creative:0,business:0};
  state.roleOrder=[];
  state.selectedRole=null;
  state.selectedRoute=null;
  document.getElementById("priorityInput").value="";
  document.getElementById("supportInput").value="";
  showScreen("welcome");
}

function loadSaved(){
  try{
    const saved=JSON.parse(localStorage.getItem("btecPathfinderState"));
    if(saved && Array.isArray(saved.answers) && saved.answers.length===questions.length){
      state.answers=saved.answers;
      state.selectedRole=saved.selectedRole || null;
      state.selectedRoute=saved.selectedRoute || null;
    }
  }catch(e){}
}

function renderQuestion(){
  const q=questions[state.current];
  document.getElementById("progressCurrent").textContent=state.current+1;
  document.getElementById("progressTotal").textContent=questions.length;
  document.getElementById("progressFill").style.width=`${((state.current+1)/questions.length)*100}%`;
  const stageNames=["Starting point","Your interests","How you work","Your next step"];
  document.getElementById("progressStage").textContent=stageNames[q.stage];
  document.querySelectorAll(".stage-item").forEach((item,i)=>{
    item.classList.toggle("active",i===q.stage);
  });
  document.getElementById("questionTag").textContent=`QUESTION ${state.current+1}`;
  document.getElementById("questionText").textContent=q.text;
  document.getElementById("questionHelp").textContent=q.help;
  document.getElementById("validation").textContent="";
  document.getElementById("backBtn").style.visibility=state.current===0?"hidden":"visible";
  document.getElementById("nextBtn").textContent=state.current===questions.length-1?"See my matches →":"Continue →";

  const opts=document.getElementById("options");
  opts.innerHTML="";
  q.options.forEach((opt,index)=>{
    const btn=document.createElement("button");
    btn.className="option"+(state.answers[state.current]===opt[0]?" selected":"");
    btn.type="button";
    btn.innerHTML=`
      <span class="option-marker">${String.fromCharCode(65+index)}</span>
      <span><strong>${escapeHtml(opt[1])}</strong><span class="option-copy">${escapeHtml(opt[2])}</span></span>
    `;
    btn.addEventListener("click",()=>{
      state.answers[state.current]=opt[0];
      saveState();
      renderQuestion();
    });
    opts.appendChild(btn);
  });
}

function calculate(){
  state.roleScores={software:0,cyber:0,data:0,support:0,creative:0,business:0};
  questions.forEach((q,i)=>{
    if(q.score && state.answers[i] && state.roleScores[state.answers[i]]!==undefined){
      state.roleScores[state.answers[i]]+=2;
    }
  });

  // Programming preference nudges role families rather than deciding them.
  const coding=state.answers[4];
  if(coding==="love"){state.roleScores.software+=3;state.roleScores.data+=1;state.roleScores.cyber+=1}
  if(coding==="okay"){state.roleScores.software+=1;state.roleScores.data+=1;state.roleScores.cyber+=1}
  if(coding==="avoid"){state.roleScores.support+=1;state.roleScores.business+=2;state.roleScores.creative+=1}

  state.roleOrder=Object.entries(state.roleScores)
    .sort((a,b)=>b[1]-a[1])
    .map(([k])=>k);

  if(!state.selectedRole || !state.roleOrder.includes(state.selectedRole)){
    state.selectedRole=state.roleOrder[0];
  }

  const direct=state.answers[8];
  const priority=state.answers[9];
  if(["uni","degreeapp","app","job"].includes(direct)){
    state.selectedRoute=direct;
  }else{
    if(priority==="study") state.selectedRoute="uni";
    else if(priority==="earnlearn") state.selectedRoute="degreeapp";
    else if(priority==="experience") state.selectedRoute="app";
    else state.selectedRoute="open";
  }
}

function renderResults(){
  calculate();
  const roleCards=document.getElementById("roleCards");
  roleCards.innerHTML="";
  state.roleOrder.slice(0,3).forEach((key,index)=>{
    const p=roleProfiles[key];
    const card=document.createElement("article");
    card.className="role-card"+(state.selectedRole===key?" selected":"");
    const labels=["Best match","Strong alternative","Also explore"];
    card.innerHTML=`
      <div class="match-pill">${labels[index]}</div>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.summary)}</p>
      <div class="card-subhead">Example job roles</div>
      <ul class="role-list">${p.roles.map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>
      <div class="card-subhead">Example university course titles</div>
      <p class="course-line">${p.courses.map(escapeHtml).join(" · ")}</p>
      <div class="choose-label">${state.selectedRole===key?"✓ Selected for my plan":"Choose this direction →"}</div>
    `;
    card.addEventListener("click",()=>{
      state.selectedRole=key;
      saveState();
      renderResults();
    });
    roleCards.appendChild(card);
  });

  const r=routeProfiles[state.selectedRoute] || routeProfiles.open;
  document.getElementById("routeTitle").textContent=r.title;
  document.getElementById("routeCopy").textContent=r.copy;
  document.getElementById("routeBadge").textContent=r.badge;
}

function routePhrase(){
  const r=state.selectedRoute;
  if(r==="uni") return "a university course related to";
  if(r==="degreeapp") return "a degree apprenticeship leading towards";
  if(r==="app") return "an apprenticeship or trainee role leading towards";
  if(r==="job") return "an entry-level job that can progress towards";
  return "a university or work-based route leading towards";
}

function defaultAmbition(){
  const p=roleProfiles[state.selectedRole];
  if(state.selectedRoute==="uni"){
    return `After my BTEC IT, I want to investigate university courses such as ${p.courses[0]} or ${p.courses[1]}, with ${p.roles[0]} as my current long-term role to research.`;
  }
  if(state.selectedRoute==="degreeapp" || state.selectedRoute==="app"){
    return `After my BTEC IT, I want to investigate apprenticeships such as ${p.apprenticeships[0]} or ${p.apprenticeships[1]}, with ${p.roles[0]} as my current career direction.`;
  }
  if(state.selectedRoute==="job"){
    return `After my BTEC IT, I want to investigate realistic entry-level jobs that can progress towards ${p.roles[0]}, while also considering roles such as ${p.roles[1]}.`;
  }
  return `After my BTEC IT, I want to compare university and work-based routes into ${p.title.toLowerCase()}, with ${p.roles[0]} as my current first-choice role to research.`;
}

function generateTargets(){
  const p=roleProfiles[state.selectedRole];
  const progress=state.answers[7];
  const gap=state.answers[10];
  const route=state.selectedRoute;

  let academic;
  if(progress==="catchup"){
    academic="Within the next 2 weeks, check my current BTEC progress with a tutor and make a catch-up plan for any missed, late or below-target work.";
  }else if(progress==="unknown"){
    academic="Within the next 2 weeks, find out my current BTEC working grades and identify the one unit or skill that most needs improvement.";
  }else if(progress==="mostly"){
    academic="By the end of this half term, improve one weaker BTEC unit or assignment area by acting on feedback and checking the improvement with a tutor.";
  }else{
    academic="By the end of this half term, choose one BTEC unit to stretch beyond my usual standard and use feedback to improve the quality of my evidence.";
  }

  const project=`Within the next 8 weeks, complete one small ${p.title.toLowerCase()} project I can show to someone else. ${p.next}`;

  let research;
  if(route==="uni"){
    research=`Before the end of this year, compare at least 3 relevant university courses, recording course content, entry requirements, location and what I like or dislike about each one.`;
  }else if(route==="degreeapp"){
    research=`Before the end of this year, research at least 5 relevant degree-apprenticeship employers or programmes and record their typical entry requirements, application stages and opening dates.`;
  }else if(route==="app"){
    research=`Before the end of this year, find at least 5 relevant apprenticeship or trainee opportunities and record the role, level, employer, entry requirements and skills they ask for.`;
  }else if(route==="job"){
    research=`Before the end of this year, compare at least 5 realistic entry-level job adverts in this area and list the skills, experience and qualifications that appear most often.`;
  }else{
    research=`Before the end of this year, compare 2 university options and 2 work-based options in this area, including entry requirements, costs/pay, daily experience and progression.`;
  }

  const experience=`Before next year begins, gain one piece of evidence from outside normal lessons: work experience, an employer event, a careers conversation, volunteering, a competition, or a relevant online challenge — and write down what I learned from it.`;

  let application=`Before next year begins, create or update a one-page CV and a short bank of examples showing my IT skills, teamwork, problem solving and reliability.`;
  if(gap==="portfolio") application=`Before next year begins, organise at least 2 pieces of IT work into a simple portfolio with screenshots, a short explanation of the problem, what I did and what I learned.`;
  if(gap==="experience") application=experience;
  if(gap==="applications") application=`Within the next 6 weeks, create or improve my CV and practise one application statement or interview answer using evidence from my BTEC work.`;
  if(gap==="research") application=research;
  if(gap==="grades") application=academic;

  const pool=[academic,project,research,experience,application];
  return [...new Set(pool)].slice(0,5).concat([
    "Before next year begins, review this ambition with a tutor or careers adviser and change it if the evidence points to a better option."
  ]).slice(0,5);
}

function buildPlan(){
  calculate();
  document.getElementById("ambitionInput").value=defaultAmbition();
  document.getElementById("ladderNext").textContent=roleProfiles[state.selectedRole].next.split(".")[0];
  document.getElementById("ladderRoute").textContent=(routeProfiles[state.selectedRoute]||routeProfiles.open).title;
  document.getElementById("ladderRole").textContent=roleProfiles[state.selectedRole].title;
  renderTargets(generateTargets());
  saveState();
  showScreen("plan");
}

function renderTargets(targets){
  const list=document.getElementById("targetList");
  list.innerHTML="";
  targets.forEach((target,index)=>{
    const row=document.createElement("div");
    row.className="target-row";
    row.innerHTML=`
      <div class="target-num">0${index+1}</div>
      <textarea rows="2" aria-label="Target ${index+1}">${escapeHtml(target)}</textarea>
    `;
    list.appendChild(row);
  });
}

function getSummary(){
  const ambition=document.getElementById("ambitionInput").value.trim();
  const targets=[...document.querySelectorAll("#targetList textarea")].map(t=>t.value.trim()).filter(Boolean);
  const priority=document.getElementById("priorityInput").value.trim();
  const support=document.getElementById("supportInput").value.trim();
  const p=roleProfiles[state.selectedRole];
  const r=routeProfiles[state.selectedRoute]||routeProfiles.open;

  return [
    "BTEC IT PATHFINDER – ACTION PLAN",
    "========================================",
    "",
    `Ambition: ${ambition}`,
    `Direction: ${p.title}`,
    `Suggested route: ${r.title}`,
    "",
    "Targets:",
    ...targets.map((t,i)=>`${i+1}. ${t}`),
    "",
    `First priority: ${priority || "Not completed yet"}`,
    `Help/support I may need: ${support || "Not completed yet"}`,
    "",
    "Research next:",
    "• National Careers Service: https://nationalcareers.service.gov.uk/explore-careers/job-sector/digital",
    "• UCAS: https://www.ucas.com/explore/search/all",
    "• Find an apprenticeship: https://www.gov.uk/apply-apprenticeship",
    "",
    "Reminder: this is a planning prompt. Check current entry requirements and opportunities before making a final decision."
  ].join("\n");
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}

document.getElementById("startBtn").addEventListener("click",()=>{
  state.current=0;
  showScreen("quiz");
  renderQuestion();
});
document.getElementById("nextBtn").addEventListener("click",()=>{
  if(!state.answers[state.current]){
    document.getElementById("validation").textContent="Choose the answer that fits you best before continuing.";
    return;
  }
  if(state.current<questions.length-1){
    state.current++;
    renderQuestion();
  }else{
    renderResults();
    showScreen("results");
  }
});
document.getElementById("backBtn").addEventListener("click",()=>{
  if(state.current>0){state.current--;renderQuestion()}
});
document.getElementById("editAnswersBtn").addEventListener("click",()=>{
  state.current=0;showScreen("quiz");renderQuestion();
});
document.getElementById("buildPlanBtn").addEventListener("click",buildPlan);
document.getElementById("refreshTargets").addEventListener("click",()=>renderTargets(generateTargets()));
document.getElementById("printBtn").addEventListener("click",()=>window.print());
document.getElementById("copyBtn").addEventListener("click",async()=>{
  const btn=document.getElementById("copyBtn");
  try{
    await navigator.clipboard.writeText(getSummary());
    const old=btn.textContent;btn.textContent="Copied ✓";setTimeout(()=>btn.textContent=old,1600);
  }catch{
    alert("Copy was blocked by the browser. Use Download .txt instead.");
  }
});
document.getElementById("downloadBtn").addEventListener("click",()=>{
  const blob=new Blob([getSummary()],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="my-btec-it-pathway-plan.txt";a.click();
  URL.revokeObjectURL(url);
});
document.getElementById("resetTop").addEventListener("click",()=>{
  if(confirm("Start again and clear the answers saved in this browser?")) resetAll();
});

loadSaved();
