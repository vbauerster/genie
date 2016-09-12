var answers = [
  `It is certain`, `It is decidedly so`, `Without a doubt`,
  `Yes definitely`, `You may rely on it`, `As I see it, yes`,
  `Most likely`, `Outlook good`, `Yes`, `Signs point to yes`,
  `Reply hazy try again`, `Ask again later`, `Better not tell you now`,
  `Cannot predict now`, `Concentrate and ask again`,
  `Don't count on it`, `My reply is no`, `My sources say no`,
  `Outlook not so good`, `Very doubtful`
];

var count = answers.length;

function answer() {
  if (count === 0) {
    count = answer.length;
  }
  let index = Math.floor(Math.random() * count);
  let result = answers.splice(index, 1)[0];
  answers.push(result);
  count -= 1;
  return result;
}

module.exports = answer;
