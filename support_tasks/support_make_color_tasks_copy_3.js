///////////////////////////////////
// support\.srvhub\.ru.+page
///////////////////////////////////
// name of object in local storage
const localStorageName = "ObjectWorkTasks";
const localStorageEqualAmountOfTasks = "ObjectEqualAmountOfTasks";
// my and tp name in system
const denisName = "Денис Давыденко",
  tpName = "Павел Погиба";
// all tasks, which was stolen
var changesExecuterToPavel = [];
var changesExecuterToDenis = [];

var equalAmountOfTasksToWhom = null;

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

    for (let index = 0; index < rows.length; index++) {
      // html fields
      const eSelectCheckBox = rows[index].children[0].children[0].children[0];
      const eExecutorGroup = rows[index].children[5].children[0].children[0];
      const eExecutorWho = rows[index].children[7].children[0].children[0];
      const eNameOfTask = rows[index].children[2].children[0].children[0];
      const ePrioritet = rows[index].children[8].children[0].children[0];
      const eID = rows[index].children[3].children[0].children[0];
      const eRequestsFormWhom = rows[index].children[4].children[0].children[0];
      const eLastAnswerFromWhom =
        rows[index].children[6].children[0].children[0];
      const eCreatingDate = rows[index].children[11].children[0].children[0];
      const eDateOfChange = rows[index].children[12].children[0].children[0];
      const eAmountOfAnswers = rows[index].children[13].children[0].children[0];

      // text fields
      const wID = eID.textContent.trim();
      const wRequestsFormWhom = eRequestsFormWhom.textContent.trim();
      const wLastAnswerFromWhom = eLastAnswerFromWhom.textContent.trim();
      const wExecutorGroup = eExecutorGroup.textContent.trim();
      const wExecutorWho = eExecutorWho.textContent.trim();
      const wCreatingDate = eCreatingDate.textContent.trim();
      const wNameOfTask = eNameOfTask.textContent.trim();
      const wDateOfChange = eDateOfChange.textContent.trim();
      const wAmountOfAnswers = Number(eAmountOfAnswers.textContent.trim());
      const wPrioritet = ePrioritet.textContent.trim();

      // {COLOR TEXT SCRIPT =====================================================
      if (wExecutorGroup === "Техническая Поддержка") {
        color = "#FFD78F";
        rows[index].style.background = color;
      } else if (wExecutorGroup === "Администратор Поддержка") {
        color = "#CCDFFF";
        rows[index].style.background = color;
      } else if (wExecutorGroup === "Клиентская Поддержка") {
        color = "#FFC7F9";
        rows[index].style.background = color;
      } else if (wExecutorGroup === "Ольга Дмитриевна Мармаш") {
        color = "#C3FFF7";
        rows[index].style.background = color;
      }

      let ececuterTP = false;
      if (wExecutorWho === "Погиба Павел") {
        color = "#FEE1DB";
        rows[index].style.background = color;
        ececuterTP = true;
      } else if (
        wExecutorWho === "Давыденко Денис" ||
        wExecutorGroup === "Денис Давыденко"
      ) {
        ececuterTP = true;
        color = "#DCFEC2";
        rows[index].style.background = color;
        // make color all frame in red if task is new
        if (wAmountOfAnswers === 0) {
          color = "red";
          document.querySelector(".metro-padding").style.background = color;
          document.querySelector(".is-scrolling-left").style.background = color;
        }
        // if last comment not from me then red zone of check box
        if (wLastAnswerFromWhom !== "Техническая Поддержка") {
          eSelectCheckBox.parentElement.style.background = "#FE0000";
        }
      }

      // if exist task which not taken then all red zone
      if (wExecutorGroup === "Неприсвоенный") {
        color = "red";
        rows[index].style.background = color;
        document.querySelector(".metro-padding").style.background = color;
        document.querySelector(".is-scrolling-left").style.background = color;
      }

      // make this only if executer one from tech support red zone of requests from whom
      if (ececuterTP) {
        if (wPrioritet === "Срочно") {
          eRequestsFormWhom.parentElement.style.background = "#FE0000";
        } else if (ePrioritet === "Средний") {
          eRequestsFormWhom.parentElement.style.background = "#FEA200";
          eRequestsFormWhom.parentElement.style.color = "white";
        }
      }

      // }COLOR TEXT SCRIPT =====================================================

      // new object
      const objNew = {
        ID: wID,
        Executor: [wExecutor],
        recordedModifications: [dateNow],
        DateOfChange: [wDateOfChange],
        CreatingDate: wCreatingDate,
        NameOfTask: wNameOfTask,
        dateChecked: dateNow,
        priority: [wPrioritet],
        newBorn: true,
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
  }, 1000);
} catch (error) {}

try {
  let sleepBeforeRun = 1000,
    dateHours = new Date().getHours();
  if (dateHours >= 6 && dateHours < 20) {
    sleepBeforeRun *= 10;
  } else if (dateHours >= 20 && dateHours < 0) {
    sleepBeforeRun *= 20;
  } else if (dateHours >= 0 && dateHours < 4) {
    sleepBeforeRun *= 60;
  } else if (dateHours >= 4 && dateHours < 6) {
    sleepBeforeRun *= 20;
  }
  setTimeout(function () {
    location.reload();
  }, sleepBeforeRun);
} catch (error) {}
// ==========================================================
