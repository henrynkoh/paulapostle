import { QuestionAnswer, Category, PaulLifeEvent } from '@/types';
import { additionalQuestionsAnswers } from './additionalQAs';

export const categories: Category[] = [
  {
    id: 'calling-authority',
    name: '부르심과 권위',
    description: 'Paul\'s divine calling and apostolic authority',
    subcategories: ['Damascus Road', 'Divine Commission', 'Apostolic Authority']
  },
  {
    id: 'role-differentiation',
    name: '역할 구분',
    description: 'Paul vs Peter - different but equal roles',
    subcategories: ['Paul vs Peter', 'Gentile vs Circumcised', 'Apostolic Equality']
  },
  {
    id: 'circumcision-controversy',
    name: '할례 문제',
    description: 'Circumcision controversy and Jerusalem Council',
    subcategories: ['Jerusalem Council', 'Law vs Grace', 'Gentile Inclusion']
  },
  {
    id: 'mission-strategy',
    name: '사명의 초점',
    description: 'Paul\'s mission strategy and approach',
    subcategories: ['Jew First', 'Gentile Ministry', 'Mission Strategy']
  },
  {
    id: 'doctrinal-defense',
    name: '교리적 변호',
    description: 'Paul\'s defense of his teachings and doctrine',
    subcategories: ['Gospel Authenticity', 'Grace vs Works', 'Justification by Faith']
  },
  {
    id: 'mystery-revelation',
    name: '비밀의 계시',
    description: 'Mystery of Christ revealed to Gentiles',
    subcategories: ['Gentile Inclusion', 'Mystery of Christ', 'Fellow Heirs']
  },
  {
    id: 'suffering-opposition',
    name: '고난과 반대',
    description: 'Paul\'s sufferings and opposition as validation',
    subcategories: ['Apostolic Suffering', 'Persecution', 'Weakness and Authority']
  },
  {
    id: 'resurrection-witness',
    name: '부활 증거',
    description: 'Paul\'s witness of the resurrected Christ',
    subcategories: ['Resurrection Testimony', 'Last Apostle', 'Witness Validation']
  },
  {
    id: 'heavenly-revelation',
    name: '하늘의 계시',
    description: 'Paul\'s visions and heavenly revelations',
    subcategories: ['Third Heaven', 'Visions', 'Revelations']
  },
  {
    id: 'church-authority',
    name: '교회 권위',
    description: 'Paul\'s authority in church governance',
    subcategories: ['Church Order', 'Spiritual Gifts', 'Leadership']
  }
];

export const questionsAnswers: QuestionAnswer[] = [
  // 1. Divine Calling and Authority
  {
    id: 1,
    category: 'calling-authority',
    subcategory: 'Damascus Road',
    question: '왜 네가 이방인의 사도라고 주장하는가? 네가 예수님을 직접 따르지 않았고, 12제자 중 하나도 아니지 않은가?',
    answer: '나는 사람의 뜻으로 받은 것이 아니요, 오직 예수 그리스도의 계시로 받은 것이라. 나를 태에서부터 택정하시고 그의 은혜로 부르사 내게 그의 아들을 계시하사 내가 이방인에게 전하기 위함이 되게 하셨다',
    kjvVerse: 'But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ.',
    koreanVerse: '형제들아 내가 너희에게 알게 하노니 내가 전한 복음은 사람을 따라 된 것이 아니니 나는 그것을 사람에게서 받지도 아니하고 배우지도 아니하고 오직 예수 그리스도의 계시로 말미암은 것이라',
    book: 'Galatians',
    chapter: 1,
    verse: 11,
    context: 'Paul defends his apostolic authority by stating his gospel came directly from Christ',
    relatedVerses: ['Galatians 1:12', 'Galatians 1:15-16'],
    tags: ['apostolic authority', 'divine calling', 'revelation']
  },
  {
    id: 2,
    category: 'calling-authority',
    subcategory: 'Divine Commission',
    question: '예수님이 다마스커스 도상에서 너에게 직접 나타나셨다고 하지만, 누가 이를 증명할 수 있는가? 네가 진짜 구원받은 것이 맞는가?',
    answer: '하나님이 말씀하시되 \'가라, 이 사람은 내가 택한 기구니 내 이름을 이방인과 임금들과 이스라엘 자손 앞에 들어가게 하려 함이니라\', 아나니아를 통해 내게 말씀하셨다',
    kjvVerse: 'But the Lord said unto him, Go thy way: for he is a chosen vessel unto me, to bear my name before the Gentiles, and kings, and the children of Israel:',
    koreanVerse: '주께서 이르시되 가라 이 사람은 내 이름을 이방인과 임금들과 이스라엘 자손에게 전하기 위하여 택한 나의 그릇이라',
    book: 'Acts',
    chapter: 9,
    verse: 15,
    context: 'God speaks to Ananias about Paul being His chosen vessel',
    relatedVerses: ['Acts 9:16', 'Acts 22:14-15', 'Acts 26:16-18'],
    tags: ['chosen vessel', 'divine appointment', 'Ananias']
  },
  {
    id: 3,
    category: 'role-differentiation',
    subcategory: 'Paul vs Peter',
    question: '베드로는 할례자에게 복음을 전하는 사도로 인정받았는데, 네가 무할례자인 이방인에게 복음을 전하는 것은 정당한가?',
    answer: '반대로 그들은 내가 무할례자에게 복음 전함을 맡은 것이 베드로가 할례자에게 맡음과 같은 것을 보았고, 베드로에게 역사하사 그를 할례자의 사도로 삼으신 이가 또한 내게 역사하사 나를 이방인에게 사도로 삼으셨느니라',
    kjvVerse: 'But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter; (For he that wrought effectually in Peter to the apostleship of the circumcision, the same was mighty in me toward the Gentiles:)',
    koreanVerse: '반대로 그들은 내가 무할례자에게 복음 전함을 맡은 것이 베드로가 할례자에게 맡음과 같은 것을 보았고 베드로에게 역사하사 그를 할례자의 사도로 삼으신 이가 또한 내게 역사하사 나를 이방인에게 사도로 삼으셨느니라',
    book: 'Galatians',
    chapter: 2,
    verse: 7,
    context: 'Jerusalem Council agreement on apostolic roles',
    relatedVerses: ['Galatians 2:8', 'Galatians 2:9'],
    tags: ['apostolic equality', 'role differentiation', 'Jerusalem Council']
  },
  {
    id: 4,
    category: 'circumcision-controversy',
    subcategory: 'Jerusalem Council',
    question: '이방인들이 구원받으려면 할례를 받고 모세의 율법을 지켜야 한다고 가르치는 이들이 있는데, 이에 대한 네 입장은 무엇인가?',
    answer: '나는 이방인들에게 말하기를 \'할례를 받은 상태로 부르심을 받았느냐? 무할례자가 되지 말라. 무할례 상태로 부르심을 받았느냐? 할례를 받지 말라. 할례도 무할례도 아무것도 아니요 오직 하나님의 계명들을 지키는 것이니라\'',
    kjvVerse: 'Circumcision is nothing, and uncircumcision is nothing, but the keeping of the commandments of God.',
    koreanVerse: '할례도 무할례도 아무것도 아니요 오직 하나님의 계명들을 지키는 것이니라',
    book: '1 Corinthians',
    chapter: 7,
    verse: 19,
    context: 'Paul\'s teaching on circumcision vs. keeping God\'s commandments',
    relatedVerses: ['Acts 15:10-11', 'Galatians 5:6'],
    tags: ['circumcision', 'law', 'commandments']
  },
  {
    id: 5,
    category: 'mission-strategy',
    subcategory: 'Jew First',
    question: '네가 왜 주로 유대인 회당에서 먼저 복음을 전하고 이방인에게도 전하는가? 네 사명은 분명히 이방인에게 있는 것이 아닌가?',
    answer: '나는 먼저 유대인에게, 후에 헬라인에게 복음을 전하는 것이 나의 관습이 되었으니, 이는 먼저 받은 자에게 복음이 전파되어야 하기 때문이라. 그러나 하나님께서 나를 보내시되 \'내가 너를 이방인에게 멀리 보내리라\' 하셨다',
    kjvVerse: 'And Paul, as his manner was, went in unto them, and three sabbath days reasoned with them out of the scriptures.',
    koreanVerse: '바울이 자기의 관례대로 그들에게로 들어가서 세 안식일에 성경을 가지고 강론하며',
    book: 'Acts',
    chapter: 17,
    verse: 2,
    context: 'Paul\'s custom of preaching to Jews first',
    relatedVerses: ['Acts 22:21', 'Romans 1:16'],
    tags: ['mission strategy', 'Jew first', 'Gentile ministry']
  },
  {
    id: 6,
    category: 'doctrinal-defense',
    subcategory: 'Gospel Authenticity',
    question: '어떤 이들은 네가 전하는 복음이 예수님이 가르치신 것과 다르다고 말한다. 네가 전하는 복음의 핵심은 무엇인가?',
    answer: '나는 너희에게 전한 것 중에서 가장 중요한 것을 전하였노니, 곧 그리스도께서 우리 죄를 위하여 성경대로 죽으시고 장사 지낸 지 사흘 만에 성경대로 다시 살아나셨으며',
    kjvVerse: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:',
    koreanVerse: '내가 받은 것을 먼저 너희에게 전하였노니 이는 성경대로 그리스도께서 우리 죄를 위하여 죽으시고 장사 지낸 바 되었다가 성경대로 사흘 만에 다시 살아나사',
    book: '1 Corinthians',
    chapter: 15,
    verse: 3,
    context: 'Paul\'s core gospel message - Christ\'s death, burial, and resurrection',
    relatedVerses: ['1 Corinthians 15:4', 'Galatians 1:8-9'],
    tags: ['gospel', 'resurrection', 'core message']
  },
  {
    id: 7,
    category: 'mystery-revelation',
    subcategory: 'Gentile Inclusion',
    question: '이방인들이 유대인과 함께 동일한 몸의 일원이 되고, 동일한 약속의 상속자가 된다는 \'그리스도의 비밀\'이 무엇인가?',
    answer: '이 비밀은 곧 이방인들이 그리스도 예수 안에서 복음으로 말미암아 동일한 상속자가 되고, 동일한 몸의 일원이 되며, 동일한 약속의 참여자가 된다는 것이라',
    kjvVerse: 'That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel:',
    koreanVerse: '이 비밀은 곧 이방인들이 그리스도 예수 안에서 복음으로 말미암아 동일한 상속자가 되고 동일한 몸의 일원이 되며 동일한 약속의 참여자가 된다는 것이라',
    book: 'Ephesians',
    chapter: 3,
    verse: 6,
    context: 'The mystery of Gentile inclusion in God\'s promises',
    relatedVerses: ['Ephesians 3:3-5', 'Romans 11:17-18'],
    tags: ['mystery', 'Gentile inclusion', 'fellow heirs']
  },
  {
    id: 8,
    category: 'suffering-opposition',
    subcategory: 'Apostolic Suffering',
    question: '왜 네가 이방인들에게 복음을 전하다가 많은 핍박과 고난을 받고 있는가? 이는 네가 잘못된 길을 가고 있다는 증거가 아닌가?',
    answer: '나는 밧모섬에서 야만인에게, 다시 시도니귀아와 약소에서, 또 두 번씩 로마인에게 채찍을 맞고, 세 번씩 배를 난파당했으며, 하루의 밤과 낮을 깊은 바닷물 속에서 보냈다',
    kjvVerse: 'In labours more abundant, in stripes above measure, in prisons more frequent, in deaths oft. Of the Jews five times received I forty stripes save one.',
    koreanVerse: '수고를 넘치게 하고 매를 맞고 옥에 갇히고 죽을 뻔한 일이 여러 번 있고',
    book: '2 Corinthians',
    chapter: 11,
    verse: 23,
    context: 'Paul\'s catalog of sufferings as proof of apostleship',
    relatedVerses: ['2 Corinthians 11:24-25', 'Acts 9:16'],
    tags: ['suffering', 'persecution', 'apostolic proof']
  },
  {
    id: 9,
    category: 'resurrection-witness',
    subcategory: 'Last Apostle',
    question: '왜 네가 받은 계시를 다른 사도들에게 확인하지 않고 독자적으로 사역하였는가?',
    answer: '내가 다시 살아난 주님을 보았고, 내가 받은 복음이 사람의 뜻으로 받은 것이 아니요 오직 예수 그리스도의 계시로 받은 것임을 알았으므로, 내가 즉시 육체와 피를 의지하지 아니하고 예루살렘으로 올라가지 아니하였다',
    kjvVerse: 'But when it pleased God, who separated me from my mother\'s womb, and called me by his grace, To reveal his Son in me, that I might preach him among the heathen; immediately I conferred not with flesh and blood:',
    koreanVerse: '그러나 나를 어머니 태에서부터 갈라내어 은혜로 나를 부르신 이가 그 아들을 이방에 전하기 위하여 그를 내 속에 나타내시기를 기뻐하실 때에',
    book: 'Galatians',
    chapter: 1,
    verse: 15,
    context: 'Paul\'s direct revelation from Christ without human consultation',
    relatedVerses: ['Galatians 1:16-17', '1 Corinthians 15:8'],
    tags: ['revelation', 'independence', 'divine calling']
  },
  {
    id: 10,
    category: 'church-authority',
    subcategory: 'Church Order',
    question: '네가 예수님을 직접 보지 못하였으므로 사도가 될 자격이 없다고 주장하는 이들이 있는데, 이에 대해 어떻게 대답하는가?',
    answer: '나는 먼저 형제들에게 받은 것을 너희에게도 전하였노니, 곧 그리스도께서 우리 죄를 위하여 죽으시고 성경대로 장사 지낸 지 사흘 만에 다시 살아나셨으며',
    kjvVerse: 'And last of all he was seen of me also, as of one born out of due time.',
    koreanVerse: '맨 나중에 만삭되지 못하여 난 자 같은 내게도 보이셨나니',
    book: '1 Corinthians',
    chapter: 15,
    verse: 8,
    context: 'Paul\'s witness of the resurrected Christ validates his apostleship',
    relatedVerses: ['1 Corinthians 15:3-7', 'Acts 9:3-6'],
    tags: ['resurrection witness', 'apostolic validation', 'last apostle']
  },
  ...additionalQuestionsAnswers
];
