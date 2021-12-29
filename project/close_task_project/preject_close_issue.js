///////////////////////////////////
// projects\.srvhub\.tools.issues.
///////////////////////////////////
// Make task closed
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
try {
  var btnClose = document.createElement("LABEL"); // Create a <button> element
  btnClose.innerHTML = "[SET CLOSE VALUE]"; // Insert text
  btnClose.addEventListener("click", fnCloseTopic);
  // document.body.appendChild(btnClose); // Append <button> to <body>
  var setTo = document.querySelector("#content");
  setTo.append(btnClose);

  function fnCloseTopic() {
    document.querySelector("#issue_status_id").value = 5;
    document.querySelector("#issue_done_ratio").value = 100;
    try {
      document.getElementsByName(
        "issue[custom_field_values][18]"
      )[2].checked = true;
    } catch (error) {}
    document.querySelector("#issue_assigned_to_id").value = 361;
    document.querySelector("#issue_notes").value = "Спасибо! ";
  }
} catch (error) {}

// to turn task to owner of task
try {
  var btnClose = document.createElement("LABEL"); // Create a <button> element
  btnClose.innerHTML = "  [ASK TO CLOSE]"; // Insert text
  btnClose.addEventListener("click", fnAskToClose);
  // document.body.appendChild(btnClose); // Append <button> to <body>
  var setTo = document.querySelector("#content");
  setTo.append(btnClose);

  function fnAskToClose() {
    document.querySelector("#issue_done_ratio").value = 90;
    document.querySelector("#issue_assigned_to_id").value = 0;
    document.querySelector("#issue_notes").value =
      "Прошу уточнить, нет ли замечаний на текущий момент и можно ли закрывать задачу?";
  }
} catch (error) {}
