var questionsDictionary = {
  1: {
    "text": "Qual o sentido da vida?",
    "vote_amount": 3,
    "answer_amount": 1,
    "date": 4,
    "tag": "Vida",
    "user_name": "Dra. Joana da Silva"
  },
  2: {
    "text": "Qual o sentido da vida?",
    "vote_amount": 3,
    "answer_amount": 1,
    "date": 5,
    "tag": "Vida",
    "user_name": "Dra. Joana da Silva"
  }
}

$.each(questionsDictionary, function(_key, content){
  addQuestionElement(
    content['text'],
    content['vote_amount'],
    content['answer_amount'],
    content['date'],
    content['tag'],
    content['user_name'])
});

function addQuestionElement(
  text,
  vote_amount,
  answer_amount,
  date,
  tag,
  user_name
) {

  var questionElement =
    "<li class='question-list-item'>"
    +   "<a href='#'>"
    +   "<div class='list-item-details'>"
    +     "<span>" + vote_amount + "<br/>votos</span>"
    +     "<span>" + answer_amount + "<br/> perguntas</span>"
    +   "</div>"
    +   "<div class='list-item-content'>"
    +     "<span>" + text + "</span>"
    +     "<div class='tag-container'><span class='item-tag'>" + tag + "</span></div>"
    +     "<span class='item-footer'>Postado a " + date + " dias " + user_name +"+</span>"
    +   "</div>"
    +   "</a>"
    + "</li>"

  $("ul.question-list").append(questionElement);
}

