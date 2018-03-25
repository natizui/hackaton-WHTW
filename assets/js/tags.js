var tagsDictionary = {
  1: {
    "name": "Ataxia",
    "amount": 1,
    "url": "tags-ataxia.html"
  },
  2: {
    "name": "Suplemento",
    "amount": 1,
    "url": "#"
  },
  3: {
    "name": "Ozonioterapia",
    "amount": 1,
    "url": "#"
  },
  4: {
    "name": "Glúten",
    "amount": 1,
    "url": "#"
  }
}
    $.each(tagsDictionary, function(_i, value){
      addTagElement(
        value['name'],
        value['amount'],
        value['url']
      );
    });

  function addTagElement(name, amount, url) {
    var tagElement =
        "<li class='tag-list-item'>"
      +   "<a href='" + url + "'>"
      +   "<div class='list-item-name'>" + name + "</div>"
      +   "<div class='list-item-amount'>"
      +     "<span>" + amount + " perguntas</span><br/>"
      +     "<span></span>"
      +   "</div>"
      +   "</a>"
      + "</li>"

      $("ul.tag-list").append(tagElement);
  }

