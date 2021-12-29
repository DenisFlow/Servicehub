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
// var notRightRequestComeDenis = [];
// var notRightRequestComePathel = [];
// var equalAmountOfTasksNewToPavel = [];
// var equalAmountOfTasksNewToDenis = [];

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

    toCheckNewTaskToWhom();
    // }MAKE ARRAY OF TASKS SCRIPT =====================================================
  }, 1000);
} catch (error) {}

try {
  let sleepBeforeRun = 1000,
    dateHours = new Date().getHours();
  if (dateHours >= 6 && dateHours < 20) {
    sleepBeforeRun *= 5;
  } else if (dateHours >= 20 && dateHours < 0) {
    sleepBeforeRun *= 10;
  } else if (dateHours >= 0 && dateHours < 4) {
    sleepBeforeRun *= 30;
  } else if (dateHours >= 4 && dateHours < 6) {
    sleepBeforeRun *= 10;
  }
  setTimeout(function () {
    location.reload();
  }, 5000);
} catch (error) {}
// ==========================================================

function fnFindThiefsTasks() {
  // to see thief's tasks
  var massivObjString = localStorage.getItem(localStorageName);
  // if not task at all exit from function
  if (massivObjString === null) {
    return false;
  }
  // to get all objects
  var massivObj = JSON.parse(massivObjString);
  massivObj.forEach((obj) => {
    if (obj.Executor.includes(denisName) && obj.Executor.includes(tpName)) {
      // fin index me
      var indexDenis = obj.Executor.findIndex(
        (element) => denisName === element
      );
      // find index TP
      var indexTp = obj.Executor.findIndex((element) => element === tpName);
      // to put objects to one of arrays
      if (indexDenis < indexTp) {
        changesExecuterToPavel.push(obj);
      } else if (indexDenis > indexTp) {
        changesExecuterToDenis.push(obj);
      }
    }
  });

  // to change style and text of element where will be wrote message about tasks
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
  if (lengthChanges > 0) {
    textChanges += ` / ${
      changesExecuterToDenis[lengthChanges - 1].DateOfChange[
        changesExecuterToDenis[lengthChanges - 1].DateOfChange.length - 1
      ]
    }`;
  }
  // to remove year and seconds from string
  textChanges = textChanges.replace(/\.\d{4}/g, "");
  textChanges = textChanges.replace(/(?<=\d{2}:\d{2})(:\d{2})/g, "");
  themeTitle.innerText = textChanges;
}

function fnClearLocalStorage() {
  localStorage.removeItem(localStorageName);
}

function toCheckNewTaskToWhom() {
  // to get elements from local storage
  var massivObjString = localStorage.getItem(localStorageName);
  if (massivObjString === null) {
    return false;
  }

  // to set main element
  var massivObj = JSON.parse(massivObjString);

  // to set all local statistic to zero
  var lastNewBornTask;
  var tasksPavel = [];
  var tasksDenis = [];
  var newTasks = [];

  var countPavelEqual =
    (countDenisEqual =
    countPavelMore =
    countDenisMore =
    countPavelLess =
    countDenisLess =
      0);

  massivObj.forEach((obj) => {
    // to check tasks on executer
    if (obj.Executor[obj.Executor.length - 1] === tpName && !obj.newBorn) {
      tasksPavel.push(obj.ID);
    } else if (
      obj.Executor[obj.Executor.length - 1] === denisName &&
      !obj.newBorn
    ) {
      tasksDenis.push(obj.ID);
    }

    // to make statistic new tasks and make them old
    if (obj.newBorn === true) {
      newTasks.push(obj.ID);
      // change value in object is not new born task
      obj.newBorn = false;
      lastNewBornTask = obj;
    }
  });

  // record all tasks again in storage
  localStorage.setItem(localStorageName, JSON.stringify(massivObj));

  // get local storage of tasks in order
  var massivObjEqualAmountOfTasksString = localStorage.getItem(
    localStorageEqualAmountOfTasks
  );

  // to declare new object
  var sMassivObjectsEqualAmountOfTasks;
  if (massivObjEqualAmountOfTasksString === null) {
    sMassivObjectsEqualAmountOfTasks = [];
  } else {
    sMassivObjectsEqualAmountOfTasks = JSON.parse(
      massivObjEqualAmountOfTasksString
    );
  }

  // if was new task and new task only one
  if (newTasks.length === 1 && lastNewBornTask !== undefined) {
    // create object
    sObjectNewOne = {
      taskID: lastNewBornTask.ID,
      date: new Date(),
      toWhom: "",
      tasksWere: {
        pavel: [...new Set(tasksPavel.slice())],
        denis: [...new Set(tasksDenis.slice())],
      },
    };

    // to declare variable toWhom
    if (
      lastNewBornTask.Executor[lastNewBornTask.Executor.length - 1] === tpName
    ) {
      sObjectNewOne.toWhom = tpName;
    } else if (
      lastNewBornTask.Executor[lastNewBornTask.Executor.length - 1] ===
      denisName
    ) {
      sObjectNewOne.toWhom = denisName;
    }

    let indexFindElement = sMassivObjectsEqualAmountOfTasks.findIndex((obj) => {
      return obj.ID === sObjectNewOne.ID;
    });
    // to put object to massiv
    if (indexFindElement === -1) {
      sMassivObjectsEqualAmountOfTasks.push(sObjectNewOne);
    }

    // to set massiv in local storage
    localStorage.setItem(
      localStorageEqualAmountOfTasks,
      JSON.stringify(sMassivObjectsEqualAmountOfTasks)
    );
  }

  // to get information from array of objects
  if (sMassivObjectsEqualAmountOfTasks.length !== 0) {
    sMassivObjectsEqualAmountOfTasks.forEach((obj) => {
      if (obj.toWhom === denisName) {
        if (obj.tasksWere.pavel > obj.tasksWere.denis) {
          countDenisLess++;
        } else if (obj.tasksWere.pavel < obj.tasksWere.denis) {
          countDenisMore++;
        } else if (obj.tasksWere.pavel === obj.tasksWere.denis) {
          countDenisEqual++;
        }
      } else if (obj.toWhom === tpName) {
        if (obj.tasksWere.pavel > obj.tasksWere.denis) {
          countPavelMore++;
        } else if (obj.tasksWere.pavel < obj.tasksWere.denis) {
          countPavelLess++;
        } else if (obj.tasksWere.pavel === obj.tasksWere.denis) {
          countPavelEqual++;
        }
      }
    });
  }

  const pavelTitle =
    document.querySelector(".has-gutter tr").children[2].children[0]
      .children[0];
  const denisTitle =
    document.querySelector(".has-gutter tr").children[4].children[0]
      .children[0];

  pavelTitle.style.fontSize = "medium";
  denisTitle.style.fontSize = "medium";
  pavelTitle.innerText = `TS: \l ${countPavelLess} \n\e ${countPavelEqual} \m ${countPavelMore}`;
  denisTitle.innerText = `D:  \l ${countDenisLess} \n\e ${countDenisEqual} \m ${countDenisMore}`;
}

// ==========================================================
// inbox
// newBorn
const localStorageNameV = "ObjectWorkTasks";
function fnSetNewElementInObjecNewBornTask() {
  var arrayObj = JSON.parse(localStorage.getItem(localStorageNameV));
  for (let index = 0; index < arrayObj.length; index++) {
    if (arrayObj[index].newBorn === undefined) {
      arrayObj[index].newBorn = false;
    }
  }
  localStorage.setItem(localStorageNameV, JSON.stringify(arrayObj));
}
// fnSetNewElementInObjecNewBornTask();

// can be removed
// fnSetNewElementInObjectPriority();
// ==========================================================

function fnSetNewElementInObjectPriority() {
  var arrayObj = JSON.parse(localStorage.getItem(localStorageName));
  for (let index = 0; index < arrayObj.length; index++) {
    if (arrayObj[index].priority === undefined) {
      arrayObj[index].priority = ["Стандартно"];
    }
  }
  localStorage.setItem(localStorageName, JSON.stringify(arrayObj));
}

// var objMassiv, uniqueArray;
// toRemoveTheSameTasks();
// function toRemoveTheSameTasks() {
//   objMassiv = JSON.parse(localStorage.getItem("ObjectEqualAmountOfTasks"));
//   uniqueArray = objMassiv.filter(function (item, pos, self) {
//     return self.indexOf(item) == pos;
//   });
// }
