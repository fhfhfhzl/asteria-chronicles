// Shared by the mobile and desktop archives.
const chronicleChapters = [
  ['화폐와 모험가 허가', [
    ['골드·실버·코퍼', '금화는 골드, 은화는 실버, 동화는 코퍼로 쓴다. 카르세노의 금융 조합은 환전과 신용 거래를 맡는다. 국가 간 환율과 도시별 물가는 미정이다.'],
    ['등록비 20골드', '카이엔 시대부터 후대 길드 시대까지 모험가 등록·정식 허가는 20골드다. 카이엔은 비용을 다 마련하지 못해 등록하지 못할 뻔했고 바렌이 부족분을 보탰다. 허가가 없어도 여행과 자발적 구조는 가능하다. 마력 총량, 모험 실무 등급, 의뢰 위험도, 허가 요건을 따로 기록한다. 모험 등급 명칭에는 옛 4단계와 F~SS 기록이 병존한다.']
  ]],
  ['생활과 길의 등불', [
    ['교통과 길 정보', '도보·말·마차·배의 소요 시간과 악천후 단절 구간을 노선별로 기록한다. 역참과 여관은 관측자와 확인 시점을 전한다. 어제 보행자가 건넌 다리도 오늘 짐마차에는 폐쇄될 수 있다.'],
    ['편지와 송금', '애플린에서는 상인이나 정기 마차에 편지를 맡긴다. 후대 벨로른에서는 송금을 접수하고 카르세노 금융 조합의 연계 창구에서 지급한다. 접수표에 금액과 목적지를 쓰고 수령인의 신원을 확인한다. 글을 읽기 어려운 사람에게 직원이 수령인과 금액을 읽어준다.'],
    ['치료와 구호', '위급한 환자는 가까운 시설에서 먼저 처치한다. 신전 구호실은 응급 처치와 단기 보호, 치료원은 수술·입원·경과 관찰, 약재상은 약의 조제와 공급을 맡는다. 시골에서는 역할이 겹친다. 비용은 안정 후 계약·구호 기금·고용 관계를 확인해 정한다.'],
    ['구조·치안·재판', '길드는 생존자 수색과 구조를 계속하고 범죄 흔적은 시간·장소와 함께 경비대에 알린다. 생명을 구하려 현장을 옮겼다면 옮긴 물건과 사람을 기록한다. 경비대는 수사, 관할 재판기관은 판단, 길드 회계 담당은 계약 분쟁을 맡는다.'],
    ['전쟁 보급과 농가', '군은 물자를 받을 때 현금 또는 농가·품목·수량·상환 주체가 적힌 인수증을 준다. 마을은 겨울 식량과 다음 파종 분량을 구분한다. 수레와 말까지 동원하면 남은 작물의 운반도 영향을 받는다.'],
    ['실종자와 유품', '벨로른은 긴급 수색비를 길드에 예치한다. 가족의 선금 없이 위험 정황만으로 출발할 수 있다. 귀환 지연·연락 두절·실종·사망 확인을 구별한다. 연락인은 친족 밖에서 지정하거나 비워둘 수 있다. 대여품과 개인 유품, 미지급 보수를 따로 인계한다.'],
    ['후대 길드의 계약', '지아의 길의 등불은 카엘 일행보다 뒤 시대의 민간 길드다. 에린이 접수하고 로웬이 위험을 조사한다. 필요하면 테오가 장비를 분석하고 마레트가 보수·증거·부분 완료 조건을 확인한 뒤 지아가 배정한다. 민간 의뢰 예치금, 운영비, 공공 수색비는 구별한다. 국가가 에드릭의 체불임금을 먼저 지급했고 지아는 경매에서 건물을 인수했다.']
  ]],
  ['인물과 시대', [
    ['카이엔과 바렌', '애플린 사과농장을 떠난 카이엔은 모험가 등록비 20골드를 마련하지 못할 뻔했다. 부족한 금액을 보탠 바렌과 함께 모험을 시작했다.'],
    ['시온의 감각', '시온은 실체화되기 전의 악마를 볼 수 있다. 금속 무기 소환과 구마는 각각 별개의 능력이다.'],
    ['아리아와 루비', '두 사람은 니벨른에서 처음 만나 연인이 되었고 2년 동안 함께 살았다. 아리아가 어린아이를 마차에서 구한 날 주민들은 처음으로 아리아의 마법을 보았다.'],
    ['두 영웅의 동행', '전쟁이 끝난 뒤 에일린과 루나는 약 3년 동안 함께 길을 걸으며 고대 마법을 연구했다. 루나는 아리아의 가르침을 이어 에일린에게 마법을 가르쳤다.'],
    ['후대의 벨로른', '지아와 길의 등불은 두 세대의 영웅들 이후를 다룬 별도 길드 소설이다. 파르디아의 벨로른을 중심으로 의뢰·탐사·구조를 다룬다.']
  ]]
];

const chronicleSections = chronicleChapters.map(([category, rows], index) =>
  rows.map(([title, detail], row) => ({id: 'chronicle-11-25-' + index + '-' + row, category, title, detail})));
const chronicleCorrections = [
  ['귀신·악마를 보고 대화할 수 있으며', '실체화 전의 악마를 볼 수 있으며'],
  ['죽은 자의 영혼과 악마 같은 영적 존재를 직접 보고 대화할 수 있었다', '실체화되기 전의 악마를 볼 수 있었다'],
  ['죽은 자의 영혼과 악마를 보고 대화할 수 있었고', '실체화되기 전의 악마를 볼 수 있었고'],
  ['귀신과 악마 등 보이지 않는 존재를 보았고', '실체화되기 전의 악마를 보았고'],
  ['영적 존재를 보고 말하는 오빠', '실체화 전의 악마를 보는 오빠'],
  ['영적 존재를 보고 그들과 대화하는 아들', '실체화 전의 악마를 보는 아들'],
  ['영적 존재를 보는 감각', '실체화 전 악마를 보는 감각'],
  ['영적 존재를 본다는', '실체화 전의 악마를 본다는'],
  ['바르가스와의 싸움에서 아샤를 지키고 사망', '모르텐과의 싸움에서 아샤를 지키고 사망'],
  ['100골드', '20골드'], ['금화 10개', '20골드'], ['금화 2개', '2골드'],
  ['조이의 남편 이름과 정착지, 결별의 구체적 대사는 미정', '조이의 정착지는 라우하이며 남편의 이름과 결별의 구체적 대사는 미정'],
];
function reviseChronicleText(value) {
  if (typeof value !== 'string') return value;
  for (const [before, after] of chronicleCorrections) value = value.replaceAll(before, after);
  return value;
}
function updateChronicleRecords(archive) {
  const records = [...archive.characters, ...archive.events, ...archive.lore, ...archive.regions, archive.guild];
  for (const record of records) {
    for (const key of ['history','style','family','relationships','notes','detail','description','dialogue','role'])
      if (record[key]) record[key] = reviseChronicleText(record[key]);
  }
  for(const person of archive.characters){
    if(person.id==='c5' && !person.history.includes('루비를 만나 2년') && person.history.includes('연인 루비와 함께 노르벨의 가상 도시')){
      person.history=person.history.replace('연인 루비와 함께 노르벨의 가상 도시', '니벨른에서 루비를 만나 2년 동안 함께 살았다. 마차와 충돌할 뻔한 아이를 구하면서 처음으로 마을 사람들 앞에서 마법을 썼다. 연인 루비와 함께 노르벨의 가상 도시');
    }
  }
  const staffNames = ['지아 메르벨','로웬 하르트','에린 로웰','마레트 에스카르','테오 바실','에반 로르크','미레나 벨라','에드릭 벨몬트'];
  for (const person of archive.characters) {
    if (staffNames.includes(person.name) && person.era==='500년 후') person.era='후대 길드';
  }
  for (const entry of chronicleSections.flat()) {
    if (!archive.lore.some(old => old.id === entry.id)) archive.lore.unshift({...entry});
  }
}

let chronicleAuthor = false;
const guideNames = chronicleChapters.map(([name]) => name);
const guideId = index => 'edition-' + index;
navItems.splice(1,0,...guideNames.map((name,i)=>[guideId(i),name]));
const archiveRender = render;
let lastArchive;
function guideButton(i) {
  return '<button type="button" class="guide-link" data-page="'+guideId(i)+'">'+esc(guideNames[i])+'</button>';
}
function writerToggle() {
  return '<button class="btn" type="button" data-writer-toggle aria-pressed="'+chronicleAuthor+'">'+(chronicleAuthor?'독자 보기로 돌아가기':'기존 원문 보기 · 스포일러')+'</button>';
}
function writerNotice() {
  return '<section class="panel guide-reading"><h3>과거 원문 자료</h3><p>이전 판본과 결말을 포함합니다.</p>'+writerToggle()+'</section>';
}
function guideCards(index) {
  return chronicleSections[index].map(entry=>{
    const row=data.lore.find(x=>x.id===entry.id)||entry;
    return '<article class="panel guide-reading"><h3>'+esc(row.title)+'</h3><p>'+esc(row.detail)+'</p></article>';
  }).join('');
}
function protectLunaOrigin() {
  if (chronicleAuthor) return;
  const luna = DEFAULT_DATA.characters.find(person=>person.id==='c12');
  const formerName = luna?.role?.split('(')[0];
  const secret = {test:text=>Boolean(formerName && text.includes(formerName)) || /최초의 인간|관찰자의 기원|루나와 녹스의 기원/.test(text)};
  const candidates=document.querySelectorAll('#main p,#main span,#main strong,#main small,#main summary,#main h4,#main td,#main dd,#main li,#main div');
  for(const node of Array.from(candidates).reverse()){
    const reveals=Array.from(node.childNodes).some(child=>child.nodeType===3 && secret.test(child.textContent));
    if(!reveals)continue;
    for(const child of Array.from(node.childNodes)){
      if(child.nodeType===3 && secret.test(child.textContent))child.textContent='[루나의 기원 · 작가용]';
    }
  }
}
render = function renderArchiveEdition() {
  if (lastArchive!==data) {
    updateChronicleRecords(data);
    lastArchive=data;
  }
  const index=guideNames.findIndex((_,i)=>guideId(i)===page);
  if (index>=0) {
    document.title=guideNames[index]+' | 아스테리아';
    $('#nav').innerHTML=navItems.map(([k,label])=>'<button data-page="'+k+'" class="'+(page===k?'active':'')+'">'+esc(label)+'</button>').join('');
    $('#main').innerHTML=head('ASTERIA',guideNames[index],'')+guideCards(index);
  } else {
    archiveRender();
    if(page==='characters' && selected==='c12' && !chronicleAuthor){
      const luna=data.characters.find(person=>person.id==='c12');
      if(luna)$('#main').innerHTML=renderDetail({...luna,role:'기록자 · 마법사',history:'아리아가 달빛 아래 만난 아이에게 루나라는 이름을 지어 주었다. 루나는 아리아에게 마법을 배우고 500년 전 동료들과 길을 걸었다.',relationships:'아리아는 스승이며 에일린은 함께 마법을 연구한 동행자다.',notes:'자신이 어디에서 왔는지 찾고 있다.'});
    }
    if(page==='home'){
      const hero=$('#main .hero');
      if(hero)hero.insertAdjacentHTML('afterend','<section class="guide-index"><h3>세계관 찾아보기</h3><div>'+guideNames.map((_,i)=>guideButton(i)).join('')+'</div></section>');
    }
    if(page==='guild')$('#main .hero')?.insertAdjacentHTML('afterend','<section class="guide-index"><h3>화폐와 길드 실무</h3>'+guideButton(0)+guideButton(1)+'</section>');
    if(page==='timeline')$('#main .top')?.insertAdjacentHTML('afterend',guideButton(2));
    if(page==='characters'&&!selected){
      const filter=$('#eraFilter');
      if(filter){filter.add(new Option('후대 길드','후대 길드'));filter.value=eraFilter;}
    }
    if(page==='characters'&&selected){
      const subject=data.characters.find(c=>c.id===selected);
      const i=['c1','c2','c5','c10','c12','c13'].includes(subject?.id)||subject?.name==='루비 에델린'?2:-1;
      if(i>=0)$('#main .top')?.insertAdjacentHTML('afterend',guideButton(i));
    }
    if(page==='lore'&&!chronicleAuthor){
      const sources=$('#main section.section h3');
      if(sources?.textContent.includes('원본 자료'))sources.parentElement.replaceWith(document.createRange().createContextualFragment(writerNotice()));
    }
    protectLunaOrigin();
  }
  $('#main').insertAdjacentHTML('beforeend','<footer class="guide-footer">'+writerToggle()+'</footer>');
};
document.addEventListener('click',event=>{
  if(event.target.closest('[data-writer-toggle]')){chronicleAuthor=!chronicleAuthor;render();}
});
