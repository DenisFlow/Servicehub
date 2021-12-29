let inProcess;
for (const iterator of [...document.querySelectorAll("li span")]) {
  // console.log(iterator);
  if (iterator.innerText === "Выполнено") {
    inProcess = iterator;
    break;
  }
}

let textField;
for (const iterator of [...document.querySelectorAll(".ck-blurred p")]) {
  if (iterator.innerText === "\n") {
    textField = iterator;
    break;
  }
}
let btnAddAnswer;
for (const iterator of [...document.querySelectorAll(".el-button--mini")]) {
  if (iterator.innerText === "Добавить ответ") {
    btnAddAnswer = iterator;
    break;
  }
}
if (
  inProcess.innerText !== undefined &&
  textField.innerText !== undefined &&
  btnAddAnswer.innerText !== undefined
) {
  inProcess.click();
  textField.innerText = "Задача выполнена. Пожалуйста, проверьте результат.";
  setTimeout(function () {
    btnAddAnswer.click();
  }, 500);
}
