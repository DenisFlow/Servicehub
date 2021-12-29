///////////////////////////////////
// https://support.srvhub.ru/
///////////////////////////////////
//=================================================================
var setTo = document.getElementsByClassName(
  "ticket-tobpar-actions__common-actions"
)[0];

function bThisTaskCreateNewAgent() {
  return /\n Создание учетной записи Агенту на agents.goodfin.ru/.test(
    document.querySelector("div .ticket-detail__title").innerText
  );
}
//=================================================================
// TO CLOSE TASK
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "CL TASK"; // Insert text
btn.style.color = "#FF0000";
btn.addEventListener("click", fnCloseTaskEndWork);
setTo.appendChild(btn);

function fnCloseTaskEndWork() {
  let btnAnswerGo = document.querySelector("#tab-post");
  const bCreateAgent = bThisTaskCreateNewAgent();

  btnAnswerGo.click();

  setTimeout(function () {
    let inProcess;
    for (const iterator of [...document.querySelectorAll("li span")]) {
      // console.log(iterator);
      if (iterator.innerText.trim() === "Выполнено") {
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
      if (iterator.innerText.trim() === "Добавить ответ") {
        btnAddAnswer = iterator;
        break;
      }
    }

    if (
      inProcess.innerText !== undefined &&
      textField.innerText !== undefined &&
      btnAddAnswer.innerText !== undefined
    ) {
      if (bCreateAgent) {
        fnMakeComment(
          "Пользователь создан, учетные данные будут высланы на почту.\nУчетная запись уже ранее была создана.",
          false,
          false
        );
      } else {
        textField.innerText =
          "Задача выполнена. Пожалуйста, проверьте результат.";
        setTimeout(function () {
          btnAddAnswer.click();
          // console.log("click 1");
        }, 0);
      }
      setTimeout(function () {
        inProcess.click();
        // console.log("click 2");
      }, 300);
    }
  }, 300);
}
//=================================================================

// TO PUT TASK TO CLIENT SUPPORT
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "TO CLIENT"; // Insert text
btn.style.color = "#FF00E4";
btn.addEventListener("click", fnToClientSupport);
setTo.appendChild(btn);

function fnToClientSupport() {
  let inExecuter;
  for (const iterator of [
    ...document.querySelectorAll(".select__text-overflow"),
  ]) {
    // console.log(iterator.innerText);
    if (iterator.innerText.trim() === "Клиентская Поддержка") {
      inExecuter = iterator;
      break;
    }
  }

  let inProcess;
  for (const iterator of [...document.querySelectorAll("li span")]) {
    // console.log(iterator);
    if (iterator.innerText.trim() === "В процессе") {
      inProcess = iterator;
      break;
    }
  }

  if (inExecuter !== undefined && inProcess !== undefined) {
    setTimeout(function () {
      inExecuter.click();
      // console.log("click 1");
    }, 0);
    setTimeout(function () {
      inProcess.click();
      // console.log("click 2");
    }, 300);
  }
}
//=================================================================
// TO PUT TASK TO CLIENT SUPPORT
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "TO ADMIN"; // Insert text
btn.style.color = "#005FFF";
btn.addEventListener("click", fnToAdminSupport);
setTo.appendChild(btn);

function fnToAdminSupport() {
  let inExecuter;
  for (const iterator of [
    ...document.querySelectorAll(".select__text-overflow"),
  ]) {
    // console.log(iterator.innerText);
    if (iterator.innerText.trim() === "Администратор Поддержка") {
      inExecuter = iterator;
      break;
    }
  }

  let inProcess;
  for (const iterator of [...document.querySelectorAll("li span")]) {
    // console.log(iterator);
    if (iterator.innerText.trim() === "В процессе") {
      inProcess = iterator;
      break;
    }
  }

  if (inExecuter !== undefined && inProcess !== undefined) {
    setTimeout(function () {
      inExecuter.click();
      // console.log("click 1");
    }, 0);
    setTimeout(function () {
      inProcess.click();
      // console.log("click 2");
    }, 300);
  }
}
//=================================================================
// TO PUT TASK TO WORK
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "TO WORK"; // Insert text
btn.style.color = "#37B700";
btn.addEventListener("click", fnPutTaskToWork);
setTo.appendChild(btn);

function fnPutTaskToWork() {
  let btnAnswerGo = document.querySelector("#tab-post");
  const bCreateAgent = bThisTaskCreateNewAgent();
  btnAnswerGo.click();

  let inProcess;
  for (const iterator of [...document.querySelectorAll("li span")]) {
    // console.log(iterator);
    if (iterator.innerText.trim() === "Давыденко Денис") {
      inProcess = iterator;
      break;
    }
  }
  setTimeout(function () {
    let bExecuter;
    let bExucuterI;
    for (const iterator of [
      ...document.querySelectorAll(".select__text-overflow"),
    ]) {
      if (iterator.innerText.trim() === "Техническая Поддержка") {
        bExecuter = iterator;
      } else if (iterator.innerText.trim() === "Денис Давыденко") {
        bExucuterI = iterator;
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
      if (iterator.innerText.trim() === "Добавить ответ") {
        btnAddAnswer = iterator;
        break;
      }
    }

    if (
      inProcess !== undefined &&
      textField !== undefined &&
      btnAddAnswer !== undefined &&
      bExecuter !== undefined
    ) {
      if (!bCreateAgent) {
        setTimeout(function () {
          textField.innerText =
            "Добрый день! Заявка принята к исполнению. Пожалуйста, ожидайте.";
        }, 300);
      } else {
        setTimeout(function () {
          textField.innerText = "_";
        }, 300);
      }

      if (bExucuterI === undefined) {
        setTimeout(function () {
          bExecuter.click();
        }, 300);
      }
      setTimeout(function () {
        inProcess.click();
      }, 600);
      // if (!bCreateAgent) {
      setTimeout(function () {
        btnAddAnswer.click();
      }, 1000);
      // }
      setTimeout(function () {
        let btnComment = document.querySelector("#tab-comment");
        btnComment.click();
      }, 1500);
      fnMakeComment("Давыденко Денис");
    }
  }, 300);
}
//=================================================================
// TO FIND DESCRIPTION IN PROJECT SEARCH
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH PR D"; // Insert text
btn.addEventListener("click", fnFindProjInSearchDescription);
setTo.appendChild(btn);

function fnFindProjInSearchDescription() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://projects.srvhub.tools/issues?utf8=%E2%9C%93&set_filter=1&sort=updated_on%3Adesc%2Cstart_date%3Adesc%2Cid%3Adesc&f%5B%5D=subject&op%5Bsubject%5D=*&f%5B%5D=description&op%5Bdescription%5D=%7E&v%5Bdescription%5D%5B%5D=" +
        encodeURI(value) +
        "&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=cf_14&c%5B%5D=subject&c%5B%5D=author&c%5B%5D=assigned_to&c%5B%5D=start_date&c%5B%5D=updated_on&c%5B%5D=status&c%5B%5D=cf_15&group_by=&t%5B%5D="
    );
  }
}
//=================================================================
// TO FIND TITLE IN PROJECT SEARCH
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH PR T"; // Insert text
btn.addEventListener("click", fnFindProjInSearchTopic);
setTo.appendChild(btn);

function fnFindProjInSearchTopic() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://projects.srvhub.tools/issues?utf8=%E2%9C%93&set_filter=1&sort=updated_on%3Adesc%2Cstart_date%3Adesc%2Cid%3Adesc&f%5B%5D=subject&op%5Bsubject%5D=%7E&v%5Bsubject%5D%5B%5D=" +
        encodeURI(value) +
        "&f%5B%5D=description&op%5Bdescription%5D=*&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=cf_14&c%5B%5D=subject&c%5B%5D=author&c%5B%5D=assigned_to&c%5B%5D=start_date&c%5B%5D=updated_on&c%5B%5D=status&c%5B%5D=cf_15&group_by=&t%5B%5D="
    );
  }
}

// ================================================================
// FIND SUBJECT IN SUPPORT
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH SUP"; // Insert text
btn.addEventListener("click", fnFindTopicInSupport);
setTo.appendChild(btn);

function fnFindTopicInSupport() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://support.srvhub.ru/ru/ticket/list/filter/id/search/page/1?search=" +
        encodeURI(value)
    );
  }
}
//=================================================================
function fnMakeComment(
  textComment,
  bPostComment = true,
  bGoToAnswerSheet = true
) {
  setTimeout(function () {
    let btnComment = document.querySelector("#tab-comment");
    btnComment.click();
  }, 1500);
  setTimeout(function () {
    let commentField;
    for (const iterator of [
      ...document.querySelectorAll(".ck-editor__editable_inline"),
    ]) {
      if (iterator.innerText === "\n") {
        commentField = iterator.children[0];
        break;
      }
    }
    let btnAddComment;
    for (const iterator of [...document.querySelectorAll(".el-button--mini")]) {
      if (iterator.innerText.trim() === "Добавить комментарий") {
        btnAddComment = iterator;
        break;
      }
    }
    setTimeout(function () {
      commentField.innerText = textComment;
      // console.log("click 1");
    }, 100);
    if (bPostComment) {
      setTimeout(function () {
        console.log("click 2");
        btnAddComment.click();
      }, 300);
    }
    if (bGoToAnswerSheet) {
      setTimeout(function () {
        let btnAnswerGo = document.querySelector("#tab-post");
        btnAnswerGo.click();
      }, 600);
    }
  }, 2500);
}
// Пользователь создан, учетные данные будут высланы на почту.\nУчетная запись уже ранее была создана.
// //=================================================================
// // TO CHANGE TASK TO CLIENT ACTIONS
// var btn = document.createElement("BUTTON"); // Create a <button> element
// btn.innerHTML = "TO CL"; // Insert text
// btn.addEventListener("click", fnProcessToClient);
// setTo.appendChild(btn);

// function fnProcessToClient() {
//   let inProcess;
//   for (const iterator of [...document.querySelectorAll("li span")]) {
//     // console.log(iterator);
//     if (iterator.innerText.trim() === "Ожидает обратной связи от клиента") {
//       inProcess = iterator;
//       break;
//     }
//   }
//   if (inProcess !== undefined) {
//     // let comment = document.querySelectorAll("#tab-comment")
//     // if (comment.length === 1) {
//     //   comment.click();
//     // }
//     inProcess.click();
//   }
// }
// //=================================================================
// // TO CHANGE TASK TO DEVELOPER ACTIONS
// var btn = document.createElement("BUTTON"); // Create a <button> element
// btn.innerHTML = "TO DV"; // Insert text
// btn.addEventListener("click", fnProcessToDeveloper);
// setTo.appendChild(btn);

// function fnProcessToDeveloper() {
//   let inProcess;
//   for (const iterator of [...document.querySelectorAll("li span")]) {
//     // console.log(iterator);
//     if (iterator.innerText.trim() === "Ожидает решения разработчиками") {
//       inProcess = iterator;
//       break;
//     }
//   }
//   if (inProcess !== undefined) {
//     inProcess.click();
//   }
// }
//=================================================================
// MAKE OKPD BUTTON
// change path
// var btn = document.createElement("BUTTON"); // Create a <button> element
// btn.innerHTML = "OKPD"; // Insert text
// btn.addEventListener("click", fnFindOKPD);
// // document.body.appendChild(btn); // Append <button> to <body>
// setTo.appendChild(btn);
// function fnFindOKPD() {
//   let open = "https://psb.itfinance.io/admin/ebb/tenders/?q=";
//   let str = "";
//   if (window.getSelection().baseNode == undefined) {
//     str = "";
//   } else {
//     str = window.getSelection().baseNode.data;

//     if (str == undefined || str.match(/^\d+$/) == null) {
//       str = "";
//     }
//   }
//   window.open(open + str);
// }
