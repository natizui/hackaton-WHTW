var questionsDictionary = {
  1: {
    "title": "Ataxia e fonoaudiologia",
    "text": "Sou fonoaudióloga e tenho uma paciente com ataxia espinocerebelar e por isso gostaria de saber se alguém tem experiência com a terapia fonoaudiológica e se teve bons resultados. Também gostaria de saber qual a evolução da dificuldade de comunicação que a doença causa.",
    "vote_amount": 3,
    "answer_amount": 1,
    "date": 4,
    "tag": "Ataxia",
    "user_name": "Dra. Joana da Silva",
    "url": "ataxia.html"
  }
}

$.each(questionsDictionary, function(_key, content){
  addQuestionElement(
    content['title'],
    content['vote_amount'],
    content['answer_amount'],
    content['date'],
    content['tag'],
    content['user_name'],
    content['url'])
});

function addQuestionElement(
  title,
  vote_amount,
  answer_amount,
  date,
  tag,
  user_name,
  url
) {

  var questionElement =
    "<li class='question-list-item'>"
    +   "<a href='" + url + "'>"
    +   "<div class='list-item-details'>"
    +     " <div class='question-vote'>"
    +        "<span class='vote-number'>" + vote_amount + "</span>"
    +        "<span class='vote-icon'></span>"
    +    "</div>"
    +    "<div class='question-response'>"
    +      "<span class='response-number'>" + answer_amount + "</span>"
    +      "<span class='response-icon'></span>"
    +    "</div>"
    +   "</div>"
    +   "<div class='list-item-content'>"
    +     "<span>" + title + "</span>"
    +     "<div class='tag-container'><span class='item-tag'>" + tag + "</span></div>"
    +     "<span class='item-footer'>Postado  por " + user_name +" a " + date + " dias </span>"
    +   "</div>"
    +   "</a>"
    + "</li>"

  $("ul.question-list").append(questionElement);
}

