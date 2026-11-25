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
const menuOrder = ['home','characters','relations','regions','monsters','gods','map','timeline','stories','guild','lore','manage'];
const menuLabels = new Map(navItems);
menuLabels.set('regions','국가와 지역');
navItems.splice(0, navItems.length, ...menuOrder.map(key=>[key, menuLabels.get(key)]));
const retiredPages = {'edition-0':'guild','edition-1':'guild','edition-2':'timeline',combat:'characters'};
const oldPage = location.hash.slice(1);
if (retiredPages[oldPage]) history.replaceState(null,'','#'+retiredPages[oldPage]);
const archiveRender = render;
let lastArchive;
function writerToggle() {
  return '<button class="btn" type="button" data-writer-toggle aria-pressed="'+chronicleAuthor+'">'+(chronicleAuthor?'독자 보기로 돌아가기':'기존 원문 보기 · 스포일러')+'</button>';
}
function writerNotice() {
  return '<section class="panel guide-reading"><h3>과거 원문 자료</h3><p>이전 판본과 결말을 포함합니다.</p>'+writerToggle()+'</section>';
}
const characterScenes = {
  "c1": "겁먹은 사람에게는 다음 한 걸음만 일러 주고 곁에 선다. 말이 끝나기 전에 먼저 손을 내미는 모습이 농장에서 단련한 체격과 어울린다.",
  "c2": "조이에게도 존댓말을 쓴다. 평소라면 한 문장으로 끝낼 부탁을 조이 앞에서는 한 번 고쳐 말하는 식으로 망설임을 드러낸다.",
  "c3": "낯선 발자국을 발견하면 설명이 빨라진다. 동료가 멈춰 서면 손으로 보폭을 짚어 보이며 신이 난 이유를 함께 나눈다.",
  "c4": "환자에게는 “여기 눌러 줘”처럼 한 번에 한 가지씩 부탁한다. 격투로 굳은살이 박인 손인데도 아픈 곳을 짚을 때는 유난히 힘이 가볍다.",
  "c5": "루나가 술식을 틀리면 정답을 먼저 말하지 않고 마지막으로 이해한 부분을 묻는다. 답을 기다리는 조용한 표정에 스승으로서의 자신감이 드러난다.",
  "c6": "동료를 안심시킬 때는 눈높이를 맞추고 편히 말을 건다. 동생이 위험할 때는 목소리를 높이기보다 평소의 웃음과 긴 설명이 먼저 사라진다.",
  "c7": "마법 이야기에 빠져 설명이 길어지다가도 세라가 걱정하면 쉬운 말로 다시 풀어준다. 몸 상태를 살필 때는 표정과 숨 고르는 간격을 함께 본다.",
  "c8": "여관값이 비싸다고 툴툴대면서도 먼저 일행이 잘 자리를 살핀다. 고맙다는 말을 들으면 대꾸가 짧아지고 시선이 다른 데로 간다.",
  "c9": "궁정에서는 누가 무엇을 책임질지 분명히 묻는다. 아르준에게 의견을 구할 때는 명령하던 말을 멈추고 동생의 설명을 끝까지 듣는다.",
  "c10": "카이를 놀릴 때는 대답할 틈을 주고 느긋하게 웃는다. 세라나 아샤가 다치면 그 웃음부터 사라져 같은 목소리의 짧은 말도 무겁게 들린다.",
  "c11": "낯선 환자에게는 먼저 어디를 만질지 조심스레 말해 준다. 낯을 가리는 표정은 그대로여도 치료가 필요한 순간에는 부탁을 분명하게 끝맺는다.",
  "c12": "친구에게 건네는 부드러운 반말도 아리아 앞에서는 ‘스승님’이라는 호칭과 존댓말로 바뀐다. 귀와 높게 묶은 주황색 머리가 고개를 돌리는 동작을 선명하게 보인다.",
  "c13": "두 시대의 에일린은 같은 사람이다. 예전에는 상대의 대답을 기다리며 조심스럽게 묻던 말을, 훗날에는 먼저 가볍게 웃으며 건네 상대의 반응을 살핀다.",
  "c14": "마음에 든 풍경은 어디부터 그리고 싶은지부터 말한다. 아리아의 기분이 가라앉으면 심각한 위로보다 둘만 알아듣는 소박한 농담을 건넨다.",
  "c15": "거절하기 어려운 부탁도 낮고 정중한 목소리로 건넨다. 상대가 대답을 망설여도 단정한 자세와 차분한 표정이 쉽게 흐트러지지 않는다.",
  "c16": "상대가 뒷걸음치면 길게 위협하기보다 웃으며 짧게 도발한다. 갈기처럼 풍성한 머리와 큰 체구 때문에 한 발 다가서는 동작만으로도 압박이 된다.",
  "c17": "상대가 통증을 호소해도 어느 순간부터 아팠는지부터 묻는다. 움직임과 목소리는 차분하지만 대화의 관심은 끝내 관찰 결과에 머문다.",
  "c18": "상대가 스스로 결론을 내린 듯 느끼게 짧은 질문을 건넨다. 나른하게 내리뜬 눈과 긴 손가락의 작은 움직임으로 여유가 드러난다.",
  "c19": "연구 원리를 설명할 때는 정확하고 자신 있다. 대화가 녹스와 에일린에게 닿으면 같은 질문도 상대의 약점을 짚는 날 선 말이 된다.",
  "c20": "아이처럼 밝은 얼굴로 상대가 대답하기를 기다린다. 끔찍한 이야기를 꺼낼 때도 웃음과 말의 속도가 그대로여서 잔인함이 더욱 도드라진다.",
  "c21": "사적인 부탁도 상대에게 무엇을 요구하는지 또렷하게 끝맺는다. 공식 석상에서 말을 고르는 잠깐의 침묵에도 단정한 표정을 유지한다.",
  "c22": "바렌에게 존댓말로 자신의 뜻을 전한다. 마음이 흔들리는 장면에서도 상대가 대신 결정을 내리게 두지 않고 끝내 자기 입으로 부탁한다.",
  "c23": "구조 요청을 받으면 먼저 지금 당장 필요한 일을 묻는다. 직원의 설명을 끊고 혼자 뛰어나가기보다 위험 판단을 듣고 각자 맡을 일을 정한다.",
  "c24": "아샤에게 꽃을 건넬 때는 궁정의 칭호를 늘어놓기보다 오늘 꽃을 고른 이유를 들려준다. 햇볕에 그을린 얼굴과 따뜻한 눈매가 소박한 태도와 어울린다.",
  "extra_25": "보고를 들은 뒤 숫자 하나를 다시 짚어 묻는다. 누나에게도 단순히 동의하지 않고 자기가 확인한 근거를 차분히 덧붙인다.",
  "extra_26": "수정구의 수치가 어긋나면 흥분해서 원리를 길게 설명한다. 상대가 따라오지 못하면 작은 안경 너머로 장비를 살피며 실제 값 두 개를 나란히 보여준다.",
  "extra_27": "몸집과 무표정 때문에 첫인상은 위압적이다. 걱정하는 상대에게 긴 위로를 건네기보다는 무거운 것을 받아 들고 필요한 말을 짧게 한다.",
  "extra_28": "동생의 무모한 결심에는 걱정부터 앞서도 말을 끝까지 들어 준다. 왕이 된 뒤에도 평범한 농가가 치러야 할 수고를 떠올리며 질문하는 편이다.",
  "extra_29": "카르코의 농담을 웃어넘기다가도 집안일을 의논할 때는 무엇을 약속하는지 확인한다. 다정한 인상과 또렷한 말끝이 동시에 살아난다.",
  "extra_30": "왕자로서 내린 판단을 평가할 때에는 결론보다 그 이유를 먼저 묻는다. 아버지의 걱정이 말에 직접 드러나지 않아도 답을 기다려 주는 태도에서 읽힌다.",
  "extra_31": "두 아들에게 똑같은 위로를 반복하지 않는다. 각자가 말하기 편한 속도를 살피는 동안 차분하게 시선을 맞춘다.",
  "extra_32": "당장 계약을 따낼 때는 날짜와 수익을 낙관적으로 말한다. 지급할 날짜를 다시 물으면 구겨진 정장 차림으로 다음 계약 이야기부터 꺼낸다.",
  "extra_33": "어린 동생이 이해하지 못한 말을 어른에게 다시 묻는다. 밝은 표정과 끊이지 않는 질문에는 자신도 알고 남도 챙기고 싶은 마음이 함께 있다.",
  "extra_34": "처음 보는 물건 앞에서는 자기가 해 보겠다는 말이 먼저 나온다. 짧은 머리와 동그란 눈, 들뜬 표정으로 호기심을 드러낸다.",
  "extra_35": "궁금한 것이 있으면 먼저 가까이 가서 보고 질문한다. 낯선 사람 앞에서도 환하게 웃으며 금세 말을 붙인다.",
  "extra_36": "누나가 먼저 발견한 것을 한동안 조용히 본다. 한참 뒤에 남들이 놓친 작은 차이를 한마디로 꺼내는 편이다.",
  "extra37": "가족끼리의 대화에도 가문의 체면과 의무를 먼저 들이민다. 푸른 눈과 각진 얼굴이 단호한 말끝과 만나면 아들이 느끼는 압박이 커진다.",
  "extra38": "궁정에서 상대의 실수를 지적할 때는 누가 듣고 있는지부터 살핀다. 정갈하게 올린 머리와 고른 어조에 예법을 중시하는 태도가 드러난다.",
  "c39": "걱정을 길게 말하기보다 아들이 길에서 쓸 물건을 직접 살핀다. 햇볕에 그을린 얼굴과 농사일로 단련한 손이 말보다 먼저 눈에 들어온다.",
  "c40": "돌아온 가족에게 무엇을 해냈는지보다 밥은 먹었는지 먼저 묻는다. 소박한 차림과 온화한 미소가 일상의 걱정을 자연스럽게 받쳐 준다.",
  "c41": "가족이 크게 놀란 날에도 지금 누가 아이들을 돌보고 누가 일을 마칠지부터 정한다. 앞치마를 두른 채 질문을 하나씩 건네는 모습에 생활력이 드러난다.",
  "c42": "무슨 일인지 모르겠으면 아는 척하지 않고 곧바로 되묻는다. 리본을 단 머리를 들고 어른의 얼굴을 살피는 모습이 애교 섞인 말투와 어울린다.",
  "c43": "설명을 다 듣기 전에 손부터 뻗고, 실수하면 상대의 표정을 살핀다. 짧은 갈색 머리와 활짝 웃는 얼굴에서 장난기가 먼저 보인다.",
  "c44": "환자를 받을 때 절차를 먼저 묻는 말에 병원 책임자로서의 자부심이 묻어난다. 가운을 단정히 갖춘 엄정한 인상은 가족과 의논할 때도 쉽게 풀리지 않는다.",
  "c45": "가족의 안위를 걱정할수록 가능한 일정을 차례대로 짚는다. 단정히 묶은 머리와 또박또박 끊어 말하는 습관 때문에 당부도 지시처럼 들릴 수 있다.",
  "c46": "목소리를 낮게 유지하면서 위험이 따르는 선택에는 끝까지 이유를 묻는다. 날카로운 눈매와 감정을 누른 말투 때문에 동생에게는 걱정이 엄격함으로 전해진다.",
  "c47": "상대가 반대하면 목소리를 높이기보다 근거를 하나 더 설명한다. 안경을 쓴 차분한 인상과 길어지는 설명에서 연구자다운 고집이 드러난다.",
  "c48": "급한 의료 현장에서는 짧은 지시가 장점이다. 가족에게도 그 속도로 말을 던져 걱정에서 나온 한마디가 타박으로 들릴 수 있다.",
  "guild_29": "보고할 때 확인한 위험과 아직 확인할 수 없는 위험을 구분한다. 섣부른 낙관에 고개를 쉽게 끄덕이지 않는 태도가 말수보다 인상 깊다.",
  "guild_34": "낯익은 의뢰인의 이름을 기억해 주면서도 접수 절차는 차례로 설명한다. 상대가 글을 읽기 어려우면 금액과 수령인을 소리 내 다시 확인한다.",
  "guild_36": "동료의 다급한 사정은 듣되 장부에 적을 금액과 지급일을 다시 묻는다. 반대할 때도 상대의 숙련도를 탓하기보다 어긋난 숫자를 짚는다.",
  "guild_evan_20261123": "왼쪽 뺨에 얕은 흉터가 있고 평소에는 먼저 농담을 건넨다. 위험 신호를 발견하는 순간 농담이 뚝 끊기는 것이 동료에게도 신호가 된다.",
  "guild_44": "길을 안내할 때는 방향을 먼저, 위험 지점을 다음에 말한다. 출발을 재촉하는 사람 앞에서도 아직 살피지 않은 구간은 솔직하게 짚는다.",
  "c_1795284801229_5nw7u": "부드럽게 동의를 구하며 상대가 스스로 답을 정한 것처럼 대화를 이끈다. 중성적인 인상과 낮은 목소리에서 속내를 읽기 어렵다.",
  "c_1795286472429_d7kvl": "초보자가 실수하면 푸근하게 웃으며 손으로 다시 보여 준다. 묵직한 체구와 느긋한 인상은 불의를 보고 웃음을 거두는 순간 더 단단하게 느껴진다.",
  "c_1795287655006_4gm6a": "붉은 긴 머리 아래로 표정 변화가 작아도 필요한 정보는 놓치지 않는다. 상대가 당장 알아야 할 한마디를 낮게 건네는 식으로 마음을 드러낸다.",
  "asha_parent_father": "백성의 안전을 묻는 보고에서는 책임자를 확인하고, 가족에게는 부드러운 당부를 남긴다. 짙은 갈색 머리와 녹색 눈, 단정한 수염이 군주다운 인상을 이룬다.",
  "asha_parent_mother": "딸의 선택을 막을 때조차 궁정의 격식을 지킨다. 긴 검은 머리와 통제된 말투가 흐트러지는 순간은 가족의 상실을 드러내는 단서가 된다.",
  "sion_parent_edmon": "설명할 수 없는 현상을 들으면 질문이 짧고 급해진다. 금발을 단정하게 다듬은 모습과 달리 불안 앞에서는 말을 마칠 여유가 사라진다.",
  "sion_parent_marena": "시온을 대할 때 걱정과 두려움이 한 문장에 함께 실린다. 낮게 올린 금발과 조심스러운 말씨로 시작했다가 끝에서는 다급한 당부가 튀어나온다.",
  "karko_parent_archer": "아들에게 활을 가르칠 때는 짧은 말로 자세 하나씩 고쳐 준다. 오랜 경험은 묘기를 보이는 일보다 주변의 안전을 먼저 살피는 태도에 드러난다.",
  "karko_parent_mage": "카르코를 말리고 싶을 때도 결정을 대신 내리기보다 무엇을 보고 판단했는지 묻는다. 부드럽게 물결치는 갈색 머리와 차분히 기다리는 눈길이 그 말투와 어울린다."
};
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
function editionEntry(index,row){
  const original=chronicleSections[index][row];
  return data.lore.find(record=>record.id===original.id)||original;
}
function inlineEntries(entries){
  return entries.map(row=>`<details class="list-card integrated-entry"><summary>${esc(row.title)}</summary><p>${esc(row.detail)}</p></details>`).join('');
}
const combatOwners = {
  '자연 마법 전투 방식':['c3','c9'], '아리아의 어둠 마법':['c5'],
  '바렌의 무연성 즉발 마법':['c2'], '렌의 수중 호흡·보행과 물 조작':['c8'],
  '카엘의 초고온 화염과 절제된 검술':['c6']
};
const personalGradeTitles=/영웅 13인 비공식|모험 등급과 마력 등급|마력 총량 등급 F~SS|전투력 서열/;
const publicLore = renderLore;
renderLore = function(){
  const records=data.lore;
  try {
    data.lore=records.filter(row=>!combatOwners[row.title]&&!personalGradeTitles.test(row.title));
    return publicLore();
  } finally {data.lore=records;}
};

function characterDetails(c){
  const area=$('#main .text-areas');
  if(!area)return;
  const panels = new Map([...area.children].map(el=>[el.querySelector('h4')?.textContent,el]));
  const sequence=['성격','말투','대표 대사 3가지 (말투 예시 · 정사 속 실제 발언 아님)','외형 상세','인물의 역사','전투 방식','가족·혈연·혼인','관계','추가 메모'];
  for(const title of sequence)if(panels.has(title))area.append(panels.get(title));
  const appearance=panels.get('외형 상세');
  if(appearance && c.appearance){
    const parts=c.appearance.split(/\n+|(?<=\.)\s+(?=[가-힣· ]{1,14}:)/).map(line=>line.trim()).filter(Boolean);
    appearance.querySelector('p').innerHTML=parts.map(line=>'<span class="appearance-line">'+esc(line)+'</span>').join('');
  }
  const scene=characterScenes[c.id];
  if(scene)panels.get('말투')?.insertAdjacentHTML('beforeend','<h5>말투와 행동 · 묘사 예시</h5><p>'+esc(scene)+'</p>');
  const notes=data.lore.filter(row=>combatOwners[row.title]?.includes(c.id));
  if(notes.length)panels.get('전투 방식')?.insertAdjacentHTML('beforeend',inlineEntries(notes));
  if(canDisplayRank(c)){
    for(const field of document.querySelectorAll('.detail-hero .field')){
      const label=field.querySelector('b');
      if(label?.textContent==='모험 등급')label.textContent='모험가 등급';
      if(label && /등급/.test(label.textContent) && !field.querySelector('span').textContent.trim())field.querySelector('span').textContent='미정';
    }
  }
}
function integrateGuild(){
  const headers=[...document.querySelectorAll('#main .section-head')];
  const rank=headers.find(el=>el.querySelector('h3')?.textContent==='모험가 등급과 마력 등급');
  if(rank){
    const rules=rank.nextElementSibling;
    const table=rules?.nextElementSibling;
    rules?.remove(); if(table?.querySelector('.ranks'))table.remove(); rank.remove();
  }
  const entries=[editionEntry(0,0),editionEntry(0,1),...chronicleSections[1].map((_,i)=>editionEntry(1,i))];
  $('#main .hero')?.insertAdjacentHTML('afterend',section('화폐와 생활 제도')+inlineEntries(entries));
}
render = function renderArchiveEdition(){
  if(lastArchive!==data){updateChronicleRecords(data);lastArchive=data;}
  page=retiredPages[page]||page;
  archiveRender();
  const c=page==='characters'&&selected?data.characters.find(person=>person.id===selected):null;
  if(c){
    if(c.id==='c12'&&!chronicleAuthor)$('#main').innerHTML=renderDetail({...c,role:'기록자 · 마법사',history:'아리아가 달빛 아래 만난 아이에게 루나라는 이름을 지어 주었다. 루나는 아리아에게 마법을 배우고 500년 전 동료들과 길을 걸었다.',relationships:'아리아는 스승이며 에일린은 함께 마법을 연구한 동행자다.',notes:'자신이 어디에서 왔는지 찾고 있다.'});
    characterDetails(c);
  } else {
    document.querySelectorAll('#main .chip[title="마력 등급"],#main .chip[title="모험 등급"]').forEach(el=>el.remove());
  }
  if(page==='characters'&&!selected){
    const filter=$('#eraFilter');if(filter){filter.add(new Option('후대 길드','후대 길드'));filter.value=eraFilter;}
  }
  if(page==='home'){
    const link=$('[data-act="go-guild"]');if(link)link.textContent='모험가 길드 보기';
  }
  if(page==='guild')integrateGuild();
  if(page==='timeline'){
    const headings=[...document.querySelectorAll('#main .section-head')];
    for(const [era,rows] of [['500년 전',[0,2]],['500년의 간극',[3]]]){
      headings.find(el=>el.querySelector('h3')?.textContent===era)?.insertAdjacentHTML('afterend',inlineEntries(rows.map(i=>editionEntry(2,i))));
    }
    $('#main').insertAdjacentHTML('beforeend',section('후대 길드')+inlineEntries([editionEntry(2,4)]));
  }
  if(page==='lore'){
    if(!chronicleAuthor){
      const sources=$('#main section.section h3');if(sources?.textContent.includes('원본 자료'))sources.parentElement.replaceWith(document.createRange().createContextualFragment(writerNotice()));
    } else {
      for(const original of document.querySelectorAll('#main pre'))original.textContent=original.textContent.split('\n').filter(line=>!/(?:카이엔|에일린|카엘|아리아|루나|지아).*(?:SS?급|[A-F]급|마력 등급|모험 등급|카이엔 [A-FS])/.test(line)).join('\n');
    }
    for(const card of document.querySelectorAll('#main details.list-card > p')){
      card.textContent=card.textContent.replace(/카이의 SS급 선천 마력/g,'카이의 선천 마력');
    }
  }
  protectLunaOrigin();
  $('#main').insertAdjacentHTML('beforeend','<footer class="guide-footer">'+writerToggle()+'</footer>');
};
document.addEventListener('click',event=>{
  if(event.target.closest('[data-writer-toggle]')){chronicleAuthor=!chronicleAuthor;render();}
});
