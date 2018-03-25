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
      +   "<div>" + name + "</div>"
      +   "<div>"
      +     "<span>" + amount + " perguntas</span><br/>"
      +     "<span></span>"
      +   "</div>"
      + "</li>"

      $("ul.tag-list").append(tagElement);
  }

