///////////////////////////////////
// support\.srvhub\.ru.+page
///////////////////////////////////
// name of object in local storage
const localStorageName = "ObjectWorkTasks";
// my and tp name in system
const denisName = "Денис Давыденко",
  tpName = "Павел Погиба";
// all tasks, which was stolen
var changesExecuterToPavel = [];
var changesExecuterToDenis = [];
// var notRightRequestComeDenis = [];
// var notRightRequestComePathel = [];

try {
  setTimeout(function () {
    // all task in table (line by line)
    var rows = document.querySelectorAll(".expanded");
    // color for row
    var color = null;
    // all objects in system (saved and new ones)
    var massivObj = null;
    // date now
    const dateNow = new Date().toLocaleString().replace(",", "");
    // get all saved tasks from local storage
    const massivObjString = localStorage.getItem(localStorageName);
    // function for creating new object

    // fnClearLocalStorage();

    for (let index = 0; index < rows.length; index++) {
      // html fields
      const eExecutor = rows[index].children[2].children[0].children[0];
      const eNameOfTask = rows[index].children[3].children[0].children[0];
      const ePrioritet = rows[index].children[4].children[0].children[0];
      const eID = rows[index].children[5].children[0].children[0];
      const eCreatingDate = rows[index].children[8].children[0].children[0];
      const eDateOfChange = rows[index].children[9].children[0].children[0];
      const eAmountOfAnswers = rows[index].children[11].children[0].children[0];

      // text fields
      const wID = eID.textContent.trim();
      const wExecutor = eExecutor.textContent.trim();
      const wCreatingDate = eCreatingDate.textContent.trim();
      const wNameOfTask = eNameOfTask.textContent.trim();
      const wDateOfChange = eDateOfChange.textContent.trim();
      const wAmountOfAnswers = Number(eAmountOfAnswers.textContent.trim());
      const wPrioritet = ePrioritet.textContent.trim();

      // {COLOR TEXT SCRIPT =====================================================
      if (eExecutor.textContent == " Неприсвоенный ") {
        color = "red";
        rows[index].style.background = color;
        document.querySelector(".metro-padding").style.background = color;
        document.querySelector(".is-scrolling-left").style.background = color;
      } else if (eExecutor.textContent == " Павел Погиба ") {
        color = "#FEE1DB";
        rows[index].style.background = color;
      } else if (eExecutor.textContent == " Денис Давыденко ") {
        color = "#DCFEC2";
        rows[index].style.background = color;
        // make color all frame in red
        if (wAmountOfAnswers === 0) {
          color = "red";
          document.querySelector(".metro-padding").style.background = color;
          document.querySelector(".is-scrolling-left").style.background = color;
        }
      }

      if (ePrioritet.textContent === "Срочно") {
        ePrioritet.parentElement.style.background = "#FE0000";
      } else if (ePrioritet.textContent === "Средний") {
        ePrioritet.parentElement.style.background = "#FEA200";
      }

      // }COLOR TEXT SCRIPT =====================================================

      // {MAKE ARRAY OF TASKS SCRIPT =====================================================
      // ready object
      const objNew = {
        ID: wID,
        Executor: [wExecutor],
        recordedModifications: [dateNow],
        DateOfChange: [wDateOfChange],
        CreatingDate: wCreatingDate,
        NameOfTask: wNameOfTask,
        dateChecked: dateNow,
        priority: [wPrioritet],
      };

      // check only on first value of array
      if (index === 0) {
        // if local storage is empty then create new one
        if (massivObjString === null) {
          massivObj = [objNew];
          console.log("created new one");
        } else {
          // transfer all saved tasks in object
          massivObj = JSON.parse(massivObjString);
        }
      }
      // paramenter: task already exists in array
      const indexFind = massivObj.findIndex((obj) => obj.ID === wID);

      // if task not exists in array
      if (indexFind === -1) {
        // console.log("added one more");
        massivObj.push(objNew);
      } else {
        // task already exists in array
        // change one of values of array of executer if task was changed
        if (
          massivObj[indexFind].Executor[
            massivObj[indexFind].Executor.length - 1
          ] !== wExecutor
        ) {
          massivObj[indexFind].Executor.push(wExecutor);
          massivObj[indexFind].recordedModifications.push(dateNow);
          massivObj[indexFind].DateOfChange.push(wDateOfChange);
          massivObj[indexFind].priority.push(wPrioritet);
          console.log("changed one item");
        }
        // change date of change
        massivObj[indexFind].dateChecked = dateNow;
      }
    }

    // leave only objects which tasks exists or ts or I exist in executers
    massivObj = massivObj.filter((obj) => {
      if (
        obj.dateChecked !== dateNow &&
        !obj.Executor.includes(denisName) &&
        !obj.Executor.includes(tpName)
      ) {
        console.log("removed one" & obj.ID);
        return false;
      } else {
        return true;
      }
    });

    console.log(massivObj);
    console.log(changesExecuterToPavel);
    console.log(changesExecuterToDenis);

    // LOCAL STORAGE SET
    localStorage.setItem(localStorageName, JSON.stringify(massivObj));
    console.log("working!");

    fnFindThiefsTasks();
    // }MAKE ARRAY OF TASKS SCRIPT =====================================================
  }, 1000);
} catch (error) {}

try {
  setTimeout(function () {
    location.reload();
  }, 10000);
} catch (error) {}
// ==========================================================

function fnFindThiefsTasks() {
  // to see thief's tasks
  var massivObjString = localStorage.getItem(localStorageName);
  if (massivObjString === null) {
    return false;
  }
  var massivObj = JSON.parse(massivObjString);
  massivObj.forEach((obj) => {
    if (obj.Executor.includes(denisName) && obj.Executor.includes(tpName)) {
      var indexDenis = obj.Executor.findIndex(
        (element) => denisName === element
      );
      var indexTp = obj.Executor.findIndex((element) => element === tpName);
      if (indexDenis < indexTp) {
        changesExecuterToPavel.push(obj);
      } else if (indexDenis > indexTp) {
        changesExecuterToDenis.push(obj);
      }
    }
  });

  var themeTitle =
    document.querySelector(".has-gutter tr").children[3].children[0]
      .children[0];
  themeTitle.style.fontSize = "medium";
  var textChanges =
    changesExecuterToPavel.length +
    `(${
      changesExecuterToPavel.length > 0
        ? changesExecuterToPavel[changesExecuterToPavel.length - 1].ID
        : ""
    })` +
    " / " +
    changesExecuterToDenis.length +
    `(${
      changesExecuterToDenis.length > 0
        ? changesExecuterToDenis[changesExecuterToDenis.length - 1].ID
        : ""
    })`;

  lengthChanges = changesExecuterToPavel.length;
  if (lengthChanges > 0) {
    textChanges += `\n${
      changesExecuterToPavel[lengthChanges - 1].DateOfChange[
        changesExecuterToPavel[lengthChanges - 1].DateOfChange.length - 1
      ]
    }`;
  }

  lengthChanges = changesExecuterToDenis.length;
  // textChanges += `\n${lengthChanges}`;
  if (lengthChanges > 0) {
    textChanges += ` / ${
      changesExecuterToDenis[lengthChanges - 1].DateOfChange[
        changesExecuterToDenis[lengthChanges - 1].DateOfChange.length - 1
      ]
    }`;
  }

  textChanges = textChanges.replace(/\.\d{4}/g, "");
  textChanges = textChanges.replace(/(?<=\d{2}:\d{2})(:\d{2})/g, "");
  themeTitle.innerText = textChanges;
}

function fnClearLocalStorage() {
  localStorage.removeItem(localStorageName);
}

fnSetNewElementInObjecr();
// ==========================================================

function fnSetNewElementInObjecr() {
  var arrayObj = JSON.parse(localStorage.getItem(localStorageName));
  for (let index = 0; index < arrayObj.length; index++) {
    if (arrayObj[index].priority === undefined) {
      arrayObj[index].priority = ["Стандартно"];
    }
  }
  localStorage.setItem(localStorageName, JSON.stringify(arrayObj));
}
