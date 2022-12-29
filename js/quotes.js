const quotes = [
  {
    quote: "생각하는대로 살지 않으면 사는 대로 생각하게 된다",
    author: "John Doe",
  },
  {
    quote: "분노는 삶의 원동력이 되기도 하지만, 많은 경우 자신을 해친다",
    author: "John Doe",
  },
  {
    quote: "너가 이성적인 상태에 놓여있지 않다면, 입을 닫고 말하지 말아라",
    author: "John Doe",
  },
  {
    quote: "자신의 행복은 타인의 행복에 영향을 끼친다",
    author: "John Doe",
  },
  {
    quote:
      "어떤 경우에도 타인의 신체에 허락없는 접촉은 충분히 잘못이 될 수 있다",
    author: "John Doe",
  },
  {
    quote: "초면이면 그 누구라도 존대하라",
    author: "John Doe",
  },
  {
    quote: "말에 진심을 담되, 속에 있는 모든 말을 다 할 필요는 없다",
    author: "John Doe",
  },
  {
    quote: "결국 자신을 바꿀 수 있는 건 타인이 아닌 본인이다",
    author: "John Doe",
  },
  {
    quote: "비난은 물론 비판까지도 우호적 관계를 목표한다면 지양해라",
    author: "John Doe",
  },
  {
    quote: "이성적으로 계산하는 경우 감정을 무시하지 말아라",
    author: "John Doe",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
