///////////////////////////////////
// https://projects.srvhub.tools/projects/srvhub-front/issues/new
///////////////////////////////////
// New subject in Project
// var btn = document.createElement("LABEL"); // Create a <button> element
// btn.innerHTML = "Set to GoodFin"; // Insert text
// btn.addEventListener("click", fnSetTopic);
// // document.body.appendChild(btn); // Append <button> to <body>
// var setTo = document.getElementById("issue_description_and_toolbar");
// setTo.insertBefore(btn, setTo[0]);

function fnSetTopic() {
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

  let textForDescription =
    "Обратившийся пользователь: \nСуть проблемы: \nИНН клиента: \nИНН агента: \nСделка: \nРеестровый номер процедуры (тендера): \nЗаявка: \nИдентификатор ошибки: \nURL-адрес страницы: \nНаименование и версия браузера: \n";
  document.getElementById("issue_subject").value = "GoodFin, ";
  document.getElementById("issue_description").value = textForDescription;

  // Трекер - ошибка
  document.getElementById("issue_tracker_id").value = 1;
  // Назначить ответственного
  // document.getElementById("issue_assigned_to_id").value = "315";
  // document.getElementById("issue_assigned_to_id").value = "317";
  // document.getElementById("issue_assigned_to_id").value = "366";
  document.getElementById("issue_assigned_to_id").value = "237"; // Марина Александрова

  // ***************************************************************************
}

// add marina and pavel to task
document.querySelector(".icon-add-bullet").click();

//set deley about wait form to add them to watchers
setTimeout(function () {
  var inputs = document.getElementsByName("watcher[user_ids][]");
  inputs.forEach((element) => {
    //355 - Погиба, 237 - Марина, 322 - Алексеева, 270 - Прохорова
    // 264 - Алексей Мишуков
    // 62 - Юлия Кузьмина
    let date = new Date();

    if (
      element.value === "355" ||
      element.value === "237" ||
      element.value === "286" ||
      element.value === "264" ||
      element.value === "270"
    ) {
      element.checked = true;
    }

    fnSetTopic();
  });
  document.querySelector("p.buttons input").click();
}, 500);
