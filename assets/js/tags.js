var tagsDictionary = {
  "Medicamentos": 5,
  "Genética": 1,
  "Crianças": 5
}
    $.each(tagsDictionary, function(name, amount){
      addTagElement(name, amount);
    });

  function addTagElement(name, amount) {

    var tagElement =
        "<li class='tag-list-item'>"
      +   "<a href='#'>"
      +   "<div class='list-item-name'>" + name + "</div>"
      +   "<div class='list-item-amount'>"
      +     "<span>" + amount + " perguntas</span><br/>"
      +     "<span></span>"
      +   "</div>"
      +   "</a>"
      + "</li>"

      $("ul.tag-list").append(tagElement);
  }

