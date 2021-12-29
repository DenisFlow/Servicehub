var inboxNeedStatusEtalon;

var inboxNotStatusEtalon;

var allelements = document.querySelectorAll("tbody");
allelements.forEach((x) => {
  var toCheckElements = x.parentElement.querySelectorAll("th");
  toCheckElements.forEach((y) => {
    if (y.innerText === "СТАТУСЫ ЭТАЛОННЫХ ЗАЯВОК") {
      inboxNeedStatusEtalon = x;
    } else if (
      y.innerText === "СТАТУСЫ ЗАЯВОК, НЕ ПОДХОДЯЩИХ ДЛЯ ПОДТЯЖКИ ДАННЫХ"
    ) {
      inboxNotStatusEtalon = x;
    }
  });
});
