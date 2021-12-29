let inProcess;
for (const iterator of [...document.querySelectorAll("li span")]) {
  // console.log(iterator);
  if (iterator.innerText === "В процессе") {
    inProcess = iterator;
    break;
  }
}

let toMe;
for (const iterator of [
  ...document.querySelectorAll(".select__text-overflow"),
]) {
  // console.log(iterator);
  if (iterator.innerText === " Денис Давыденко ") {
    toMe = iterator;
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
  textField.innerText =
    "Добрый день! Заявка принята к исполнению. Пожалуйста, ожидайте.";
  setTimeout(function () {
    btnAddAnswer.click();
  }, 500);
}
