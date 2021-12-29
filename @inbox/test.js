var rows = document.querySelectorAll(".expanded");
var color = null;
for (let index = 0; index < rows.length; index++) {
  const eExecutor = rows[index].children[2].children[0].children[0];
  const eNameOfTask = rows[index].children[3].children[0].children[0];
  const ePrioritet = rows[index].children[4].children[0].children[0];
  const eID = rows[index].children[5].children[0].children[0];
  const eCreatingDate = rows[index].children[8].children[0].children[0];
  const eDateOfChange = rows[index].children[9].children[0].children[0];
  const dateNow = new Date().toLocaleString().replace(",", "");

  //   " Неприсвоенный "
  if (eExecutor.textContent == " Неприсвоенный ") {
    color = "red";
    rows[index].style.background = color;
    document.querySelector(".metro-padding").style.background = color;
  } else if (eExecutor.textContent == " Павел Погиба ") {
    color = "#FEE1DB";
    rows[index].style.background = color;
  } else if (eExecutor.textContent == " Денис Давыденко ") {
    color = "#DCFEC2";
    rows[index].style.background = color;
  }

  if (ePrioritet.textContent === "Срочно") {
    ePrioritet.parentElement.style.background = "#FE0000";
  } else if (ePrioritet.textContent === "Средний") {
    ePrioritet.parentElement.style.background = "#FEA200";
  }

  var massivObj = null;
  var massivObjString = localStorage.getItem("ObjectWorkTasks");
  var wID = eID.textContent.trim();
  var wExecutor = eExecutor.textContent.trim();
  var wCreatingDate = eCreatingDate.textContent.trim();
  var wNameOfTask = eNameOfTask.textContent.trim();
  var wDateOfChange = eDateOfChange.textContent.trim();

  var createNewObject = function () {
    return (objSave = {
      ID: wID,
      Executor: [wExecutor],
      recordedModifications: [dateNow],
      DateOfChange: [wDateOfChange],
      CreatingDate: wCreatingDate,
      NameOfTask: wNameOfTask,
    });
  };

  if (massivObjString === null) {
    massivObj = [createNewObject()];
    localStorage.setItem("ObjectWorkTasks", JSON.stringify(massivObj));
  } else {
    massivObj = JSON.parse(massivObjString);
    console.log(massivObj);

    var indexFind = massivObj.findIndex((obj) => obj.ID === wID);
    console.log(indexFind);

    if (indexFind === -1) {
      massivObj.push(createNewObject());
      localStorage.setItem("ObjectWorkTasks", JSON.stringify(massivObj));
    } else {
      if (
        massivObj[indexFind].Executor[
          massivObj[indexFind].Executor.length - 1
        ] !== wExecutor
      ) {
        console.log("add one task");
        massivObj[indexFind].Executor.push(wExecutor);
        massivObj[indexFind].recordedModifications.push(dateNow);
        massivObj[indexFind].DateOfChange.push(wDateOfChange);
        localStorage.setItem("ObjectWorkTasks", JSON.stringify(massivObj));
      }
    }
  }
}
