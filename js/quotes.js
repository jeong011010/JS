const quotes = [
  {
    quote: '난 인간을 그만두겠다! 죠죠',
    author: 'DIO'
  }, {
    quote: '요동친다 하트, 불타버릴만큼 히트, 새긴다 혈액의 비트!',
    author: 'Jonathan Joestar'
  }, {
    quote: '넌 지금까지 먹은 빵의 갯수를 기억하고 있나?',
    author: 'DIO',
  }, {
    quote: '생각하는 것을 그만두었다',
    author: 'Kars',
  }, {
    quote: '최고로 High! 한 기분이다!',
    author: 'DIO',
  }, {
    quote: '오라오라오라오라',
    author: 'Jotaro Kujo',
  }, {
    quote: '로드롤러다-!!!',
    author: 'DIO',
  }, {
    quote: '틀렸다. 길이라는 것은 스스로 만들어 나가는 것이다.',
    author: 'Jotaro Kujo',
  }, {
    quote: '기다려... 내 레이즈 권리가 아직 안 끝났잖아. 레이즈하는 것은 내 어머니의 영혼이다!',
    author: 'Jotaro Kujo',
  }, {
    quote: '이 맛은! ....거짓말을 하는 『맛』 이구나...',
    author: 'Bruno Bucciarati',
  }, {
    quote: 'WRYYYYYYYYYY----!',
    author: 'DIO',
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;