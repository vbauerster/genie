var answer = require('./asnswers.js');

function genie(questions) {
  var g = questions();
  while (true) {
    let question = g.next();
    if (question.done) {
      break;
    }
    console.log(question.value);
    console.log('[Genie] ' + answer());
  }
}

module.exports = genie;
