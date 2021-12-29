// ==========================================================
// change value and submit button
// ==========================================================

var date = document.getElementsByName("notification_publication_datetime_0")[0];
var time = document.getElementsByName("notification_publication_datetime_1")[0];
var save = document.getElementsByName("_continue")[0];
var statusR = document.querySelector("#id_status");
var statusNumPredOcenka = 

for (const iterator of statusR.children) {
  
}

if (statusR.value === `441`) {
  if (date.value === ``) {
    date.value = "26.10.2021";
  }

  if (time.value === ``) {
    time.value = "08:32:55";
  }

  // 441 = Предварительная оценка
  // 438 = Ожидает начала обработки
  statusR.value = `438`;
  save.click();
}

// ==========================================================
// submit button Принудительно запустить обработку с начала (переподача)
// ==========================================================
var allInputs = [...document.querySelectorAll("input")];
var runbegin;
var stringName =
  "_action__requestprocessingchaintabularinline__inline__resubmit_action__ebb__requestprocessingchain__";
for (const input of allInputs) {
  if (
    input.name.search(stringName == 0) &&
    input.type === "submit" &&
    input.value === "Принудительно запустить обработку с начала (переподача)"
  ) {
    runbegin = input;
    break;
  }
}

if (runbegin !== undefined) {
  // runbegin.click()
  console.log(runbegin);
}
