///////////////////////////////////
// https://projects.srvhub.tools/projects/ebb_new/issues/new
///////////////////////////////////
// New subject in Project
var btn = document.createElement("LABEL"); // Create a <button> element
btn.innerHTML = "SET IT-Finance"; // Insert text
btn.addEventListener("click", fnSetTopicItFinance);
// document.body.appendChild(btn); // Append <button> to <body>
var setTo = document.getElementById("issue_description_and_toolbar");
setTo.insertBefore(btn, setTo[0]);

function fnSetTopicItFinance() {
  // ***************************************************************************
  /* 
to data into new task project
issue_custom_field_values_14 - Клиент
issue_subject - Клиент
issue_subject - Тема
issue_description - Описание
issue_assigned_to_id - Назначена
issue[custom_field_values][18] - Требуется настройка системы
issue_tracker_id - Трекер 
*/

  // to create object data
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  (function () {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    Date.prototype.getMonthName = function () {
      return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
      return days[this.getDay()];
    };
  })();
  var now = new Date();
  var day = now.getDayName();

  // to put bank where this need
  let nameClient = document.getElementById(
    "issue_custom_field_values_14"
  ).value;
  let theme = document.getElementById("issue_subject");
  let description = document.getElementById("issue_description");

  var addWatchers = [];
  // 275 - Светлана Сергеева
  addWatchers.push("275");
  // 264 - Алексей Мишуков
  addWatchers.push("264");
  // 62 - Юлия Кузьмина
  addWatchers.push("62");
  if (nameClient === "Открытие") {
    // 262 - Виолетта Маркова, 303 - Алексей Марков
    addWatchers.push("262");
    addWatchers.push("303");
  } else if (nameClient === "Уралсиб" || nameClient === "Почта Банк") {
    // 243 - Андрей Боровков, 303 - Алексей Марков
    addWatchers.push("243");
    addWatchers.push("303");
  } else if (nameClient === "СДМ Банк" || nameClient === "ОТП Банк") {
    // 358 - Алиса Артемьева, 303 - Алексей Марков
    addWatchers.push("358");
    addWatchers.push("303");
  } else if (nameClient === "ПСБ") {
    // 250 - Екатерина Федосова, 303 - Алексей Марков, 270 - Алиса Прохорова
    addWatchers.push("250");
    addWatchers.push("303");
    addWatchers.push("270");
  } else if (nameClient === "РГС") {
    // 282 - Александр Жуков, 303 - Алексей Марков
    addWatchers.push("282");
    addWatchers.push("303");
  } else if (nameClient === "МТС") {
    // 282 - Александр Жуков, 303 - Алексей Марков
    addWatchers.push("282");
  } else if (nameClient === "Платформа - Финанс") {
    // itcredit.io и fin.itfinance.io
    // 239 - Ольга Ануфриева, 303 - Алексей Марков
    addWatchers.push("239");
    addWatchers.push("303");
  } else if (nameClient === "Все") {
    // itcredit.io и fin.itfinance.io
    addWatchers.push("282");
    addWatchers.push("243");
    addWatchers.push("250");
    addWatchers.push("239");
    addWatchers.push("262");
    addWatchers.push("303");
  }

  if (nameClient === "ПСБ") {
    nameClient = "ПСБ клон";
  }

  if (nameClient != null) {
    // theme.value = nameClient;
    var tampletTheme = nameClient + ", ";
    var finitf = "fin.itfinance.io";
    var itcredit = "itcredit.io";
    if (nameClient === "Платформа - Финанс") {
      if (theme.value === "f" || theme.value === "ф") {
        theme.value = `${finitf}, `;
        nameClient = finitf;
        addWatchers.push("270");
      } else if (theme.value === "i" || theme.value === "и") {
        theme.value = `${itcredit}, `;
        nameClient = itcredit;
      } else {
        theme.value = tampletTheme;
      }
    } else {
      theme.value = tampletTheme;
    }
    let textForDescription =
      "Обратившийся пользователь: \nБанк: " +
      nameClient +
      "\nСуть проблемы: \nНомера заявок: \n";
    if (description.value === "") {
      fnAddWatchers(addWatchers);
    }
    description.value = textForDescription;
  }
  // требуется настройка системы - true
  document.getElementsByName(
    "issue[custom_field_values][18]"
  )[1].checked = true;
  // Трекер - ошибка
  document.getElementById("issue_tracker_id").value = 1;
  // Назначить ответственного
  // if (day == days[1]) {
  //   //var value = "247"; // Никита Егорычев
  //   var value = "342"; // Вячеслав Тропиньш
  // } else if (day == days[2]) {
  //   // var value = "338"; // Мария Герасимова
  //   var value = "342"; // Вячеслав Тропиньш
  //   // var value = "318"; // Елена Шихина
  //   // var value = "333"; // Екатерина Козак
  // } else if (day == days[3]) {
  //   // var value = "318"; // Елена Шихина
  //   // var value = "338"; // Мария Герасимова
  //   //var value = "334"; // Александр Карабанов
  //   var value = "247"; // Никита Егорычев
  //   //var value = "333"; // Екатерина Козак
  // } else if (day == days[4]) {
  //   var value = "318"; // Елена Шихина
  //   // var value = "247"; // Никита Егорычев // отпуск
  //   //var value = "333"; // Екатерина Козак
  // } else if (day == days[5]) {
  //   var value = "247"; // Никита Егорычев
  //   // var value = "338"; // Мария Герасимова
  //   //var value = "333"; // Екатерина Козак
  //   //var value = "318"; // Елена Шихина
  // } else {
  //   var value = "361"; // Я
  // }
  // var value = 303; // Алексей Марков
  // var value = 289; // Алексей Пивоваров
  var value = 237; // Марина Александрова
  console.log(day);
  document.getElementById("issue_assigned_to_id").value = value;

  // ***************************************************************************
}

// add marina and pavel to task
document.querySelector(".icon-add-bullet").click();

//set deley about wait form to add them to watchers
setTimeout(function () {
  var inputs = document.getElementsByName("watcher[user_ids][]");
  inputs.forEach((element) => {
    if (element.value === "355" || element.value === "237") {
      element.checked = true;
    }
  });

  document.querySelector("p.buttons input").click();
}, 500);

function fnAddWatchers(addWatchers) {
  if (addWatchers.length === 0) {
    return;
  }
  document.querySelector(".icon-add-bullet").click();

  setTimeout(function () {
    var inputs = document.getElementsByName("watcher[user_ids][]");
    inputs.forEach((element) => {
      addWatchers.forEach((watcher) => {
        if (element.value === watcher) {
          element.checked = true;
        }
      });
    });

    document.querySelector("p.buttons input").click();
  }, 500);
}
