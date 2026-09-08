const QUESTIONS = [
  { q: "अटाकामा रेगिस्तान कहाँ स्थित है?", options:["अफ्रीका","चिली","ऑस्ट्रेलिया","भारत"], answer:1 },
  { q: "केइको फुजीमोरी (Keiko Fujimori) को किस देश का राष्ट्रपति चुना गया है?", options:["जापान","फिलिपींस","द. कोरिया","पेरू"], answer:3 },
  { q: "पॉलिमर नोट लाने वाला पहला देश कौन-सा था?", options:["भारत","सिंगापुर","ऑस्ट्रेलिया","यूनाइटेड किंगडम"], answer:2 },
  { q: "गणना और तुलना के लिए कम्प्यूटर के किस भाग का प्रयोग किया जाता है?", options:["CLU","ALU","MU","Register"], answer:1 },
  { q: "संविधान सभा की पहली बैठक कब हुई?", options:["14 सितंबर 1949","26 जनवरी 1950","26 नवंबर 1949","9 दिसंबर 1946"], answer:3 },
  { q: "साहित्य अकादेमी पुरस्कार की स्थापना किस वर्ष में हुई थी?", options:["1950","1954","1955","1960"], answer:1 },
  { q: "किस ऑपरेशन के तहत हैदराबाद रियासत को भारत में विलय किया गया?", options:["ऑपरेशन विजय","ऑपरेशन मेघदूत","ऑपरेशन पोलो","ऑपरेशन खिलाफत"], answer:2 },
  { q: "प्रथम विश्व युद्ध के दौरान तुर्की किस पक्ष का हिस्सा था?", options:["मित्र राष्ट्र (Allied Powers)","धुरी राष्ट्र/केंद्रीय शक्तियाँ (Central Powers)","तटस्थ देश (Neutral Country)","इनमें से कोई नहीं"], answer:1 },
  { q: "विश्व में सबसे लंबी तटरेखा किस देश की है?", options:["रूस","इंडोनेशिया","नॉर्वे","कनाडा"], answer:3 },
  { q: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?", options:["फीमर (Femur)","स्टेपीज (Stapes)","ह्यूमरस (Humerus)","टिबिया (Tibia)"], answer:1 },
  { q: "किस द्वीप को स्वाराज द्वीप से जाना जाता है?", options:["हैवलॉक द्वीप","रॉस द्वीप","बाम्बे द्वीप","बारतंग द्वीप"], answer:0 },
  { q: "कर्नाटक पठार के उत्तरी उच्चभूमि को किस नाम से जाना जाता है?", options:["कोडगु (Kodagu)","मैदान (Maidan)","मलनाड (Malnad)","पश्चिमी घाट (Western Ghat)"], answer:2 },
  { q: "MDR में D का full form क्या है?", options:["Deposit","Discount","Debit","Direct"], answer:1 },
  { q: "1764 का बक्सर का युद्ध ब्रिटिश ईस्ट इंडिया कंपनी और एक ऐसे गठबंधन के बीच लड़ा गया था, जिसमें मीर कासिम, शुजा-उद-दौला और कौन शामिल थे?", options:["मीर जाफर","हैदर अली","बहादुर शाह प्रथम","शाह आलम द्वितीय"], answer:3 },
  { q: "केंद्रीय प्रत्यक्ष कर बोर्ड के वर्तमान अध्यक्ष कौन हैं?", options:["नितिन गुप्ता","रवि अग्रवाल","प्रमोद चंद्र मोदी","जे बी महापात्रा"], answer:1 },
  { q: "किस संगठन में भारत की भागीदारी उसे रूस, चीन और कई मध्य एशियाई देशों के साथ सहयोग का मंच प्रदान करती है?", options:["ब्रिक्स (BRICS)","आसियान (ASEAN)","क्वाड (QUAD)","शंघाई सहयोग संगठन (SCO)"], answer:3 },
  { q: "निम्नलिखित में से कौन-सा देश नाटो (NATO) और यूरोपीय संघ (EU) दोनों का सदस्य है?", options:["जापान","कनाडा","जर्मनी","भारत"], answer:2 },
  { q: "हॉर्मुज़ जलडमरूमध्य (Strait of Hormuz) किन दो खाड़ियों (Gulfs) को जोड़ता है?", options:["अरब की खाड़ी और फारस की खाड़ी","फारस की खाड़ी और ओमान की खाड़ी","इरान की खाड़ी और अरब की खाड़ी","अरब खाड़ी और बंगाल की खाड़ी"], answer:1 },
  { q: "इतिहासकार ए. वी. स्मिथ ने गुप्त वंश के किस शासक को \"भारत का नेपोलियन\" कहा है?", options:["चंद्रगुप्त प्रथम","समुद्रगुप्त","चंद्रगुप्त द्वितीय","कुमारगुप्त प्रथम"], answer:1 },
  { q: "P&G जो एक ग्लोबल कंपनी है, यहाँ P&G का क्या मतलब है?", options:["प्रॉक्टर एंड गैंबलिंग (Procter & Gambling)","Philip & George (फिलिप एंड जॉर्ज)","प्रॉक्टर एंड गैंबल (Procter & Gamble)","प्राइम एंड General (Prime & General)"], answer:2 },
];

const OPT_LABELS = ["A","B","C","D"];
const attempted = new Set();
const correct = new Set();
let currentLevel = null;

const screens = {
  home: document.getElementById('screen-home'),
  levels: document.getElementById('screen-levels'),
  question: document.getElementById('screen-question'),
};

function showScreen(name){
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

/* ---- build level grid ---- */
const grid = document.getElementById('level-grid');
function renderLevels(){
  grid.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const btn = document.createElement('button');
    let cls = 'level-btn';
    if (attempted.has(i)) cls += ' attempted';
    if (correct.has(i)) cls += ' done';
    btn.className = cls;
    const state = attempted.has(i) ? (correct.has(i) ? ' (correct)' : ' (wrong)') : '';
    btn.setAttribute('aria-label', 'Level ' + (i+1) + state);
    btn.innerHTML = `
      <span class="check" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2ecc40"/><path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      ${i+1}
    `;
    btn.addEventListener('click', () => openQuestion(i));
    grid.appendChild(btn);
  });
}

/* ---- render a question ---- */
const qText = document.getElementById('q-text');
const qOptions = document.getElementById('q-options');
const qFeedback = document.getElementById('q-feedback');

function openQuestion(levelIndex){
  currentLevel = levelIndex;
  const data = QUESTIONS[levelIndex];
  qText.textContent = data.q;
  qFeedback.textContent = '';
  qOptions.innerHTML = '';
  btnAnswer.disabled = false;
  btn5050.disabled = false;

  data.options.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = OPT_LABELS[i] + '. ' + optText;
    btn.addEventListener('click', () => selectAnswer(i, btn, data));
    qOptions.appendChild(btn);
  });

  showScreen('question');
}

function selectAnswer(chosenIndex, chosenBtn, data){
  const buttons = Array.from(qOptions.children);
  buttons.forEach(b => b.disabled = true);
  btnAnswer.disabled = true;
  btn5050.disabled = true;

  if (chosenIndex === data.answer){
    chosenBtn.classList.add('correct');
    qFeedback.textContent = 'CORRECT!';
    correct.add(currentLevel);
  } else {
    chosenBtn.classList.add('wrong');
    buttons[data.answer].classList.add('correct');
    qFeedback.textContent = 'WRONG — correct answer highlighted';
  }
  attempted.add(currentLevel);
  buttons.forEach((b, i) => {
    if (i !== chosenIndex && i !== data.answer) b.classList.add('dim');
  });
}

/* ---- lifelines ---- */
const btnAnswer = document.getElementById('btn-answer');
const btn5050 = document.getElementById('btn-5050');

btnAnswer.addEventListener('click', () => {
  const data = QUESTIONS[currentLevel];
  const buttons = Array.from(qOptions.children);
  if (buttons.some(b => b.disabled)) return;

  buttons[data.answer].classList.add('correct');
  btnAnswer.disabled = true;
});

btn5050.addEventListener('click', () => {
  const data = QUESTIONS[currentLevel];
  const buttons = Array.from(qOptions.children);
  if (buttons.some(b => b.disabled)) return;

  const wrongIndices = buttons
    .map((_, i) => i)
    .filter(i => i !== data.answer);

  for (let i = wrongIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
  }
  wrongIndices.slice(0, 2).forEach(i => {
    buttons[i].classList.add('eliminated');
    buttons[i].disabled = true;
  });
  btn5050.disabled = true;
});

/* ---- nav ---- */
document.getElementById('btn-start').addEventListener('click', () => {
  renderLevels();
  showScreen('levels');
});

function goToLevels(){
  renderLevels();
  showScreen('levels');
}
function goToHome(){
  showScreen('home');
}

function wireBackButton(id, handler){
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', handler);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); handler(); }
  });
}
wireBackButton('btn-back-to-home', goToHome);
wireBackButton('btn-back-to-levels', goToLevels);

renderLevels();