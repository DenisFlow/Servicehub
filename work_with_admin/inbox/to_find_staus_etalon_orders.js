// to find all status of etalon order
// Настройки типа банковского продукта для изменения

var inboxNeedStatusEtalon;
var inboxNotStatusEtalon;
var inboxEtalonOrders;
var allelements = document.querySelectorAll("tbody");

allelements.forEach((x) => {
  var toCheckElements = x.parentElement.querySelectorAll("th");
  toCheckElements.forEach((y) => {
    if (y.innerText === "СТАТУСЫ ЭТАЛОННЫХ ЗАЯВОК") {
      inboxNeedStatusEtalon = [...x.children];
    } else if (
      y.innerText === "СТАТУСЫ ЗАЯВОК, НЕ ПОДХОДЯЩИХ ДЛЯ ПОДТЯЖКИ ДАННЫХ"
    ) {
      inboxNotStatusEtalon = [...x.children];
    } else if (y.innerText === "ПРОДУКТЫ, ПРЕДОСТАВЛЯЮЩИЕ ЭТАЛОННЫЕ ЗАЯВКИ") {
      inboxEtalonOrders = [...x.children];
    }
  });
});

var goodStatusEtalon = [];
var badStatusEtalon = [];
var neededStatus = [];
var etalonOrders = [];
var strvalue = "";

inboxNeedStatusEtalon.forEach((x) => {
  var select = x.querySelector("select option[selected]")?.innerText;
  goodStatusEtalon.push(select);
});

inboxNotStatusEtalon.forEach((x) => {
  var select = x.querySelector("select option[selected]")?.innerText;
  badStatusEtalon.push(select);
});

inboxEtalonOrders.forEach((x) => {
  var select = x.querySelector("select option[selected]")?.innerText;
  etalonOrders.push(select);
});

goodStatusEtalon.forEach((x) => {
  if (!badStatusEtalon.includes(x)) {
    neededStatus.push(x);
  }
});

strvalue = `(${neededStatus.join("|")})`;
console.log(
  strvalue +
    ";  g:" +
    goodStatusEtalon.toString() +
    " b:" +
    badStatusEtalon +
    "e: " +
    etalonOrders
);

/*
(Формируется предложение|Проект на согласовании|Запрос от клиента на доработку|Выдано|Формирование документов предложения|Ожидание отправки оригинала|Запрос для мониторинга) - for regex search (allowed statuses)

;  g:Аннулирована,Формируется предложение,Проект на согласовании,Запрос от клиента на доработку,Не активна,Отозвана клиентом,Выдано,Формирование документов предложения,Ожидание отправки оригинала,Закрыта хабом,Запрос для мониторинга,---------,  - good statueses

b:Аннулирована,Готова к подписанию,Дубликат,Закрыта хабом,Не активна,Не соответствует условиям,Неверные данные,Ожидает начала обработки,Отклонена Банком,Отозвана клиентом,Отправлена,Ошибка отправки,Предварительная оценка,Производится программная обработка,Черновик,---------, - bad statuses

e: Банковская гарантия на исполнение контракта,Банковская гарантия на участие,Банковская гарантия обеспечения гарантийных обязательств,---------, - all etalons which work with next new order
*/
