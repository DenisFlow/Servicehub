// values
var need_stayOnPage = ["Оператор КСП"];
var nameOfPage = document.querySelector("#id_name");
// variables count roles which exist on page
var needStayOnPageCoincidence = 1;
var countStayOnPageCoincidence = 0;
var dataPagesWithRole = [];

for (let index = 0; index < Number.MAX_VALUE; index++) {
  // ДОСТУПНО РОЛИ html
  htmlRoles = document.querySelector(`#id_rolespages_set-${index}-role`);
  //   if fields more not exist exit from loop
  if (htmlRoles === null) {
    window.close();
    break;
  }

  indexGetSelected = htmlRoles.selectedIndex;
  // to check if exist role in field
  if (need_stayOnPage.includes(htmlRoles[indexGetSelected].innerText)) {
    fnSetValueToLocalStorage(nameOfPage.value);
    break;
  }
}

function fnSetValueToLocalStorage(value) {
  for (let index = 0; index < Number.MAX_VALUE; index++) {
    let data = localStorage.getItem(`dataPagesWithRole${index}`);
    if (data === value) {
      window.close();
      return false;
    }
    if (data === null) {
      localStorage.setItem(`dataPagesWithRole${index}`, value);
      window.close();
      return true;
    }
  }
}

// .+change.+

// ==========================================================
var dataPagesWithRole = [];
function fnRemoveAllStorageForProgramAndCreateVar() {
  for (let index = 0; index < Number.MAX_VALUE; index++) {
    let data = localStorage.getItem(`dataPagesWithRole${index}`);
    if (data === null) {
      console.log(dataPagesWithRole);
      return true;
    }
    dataPagesWithRole.push(data);
    localStorage.removeItem(`dataPagesWithRole${index}`);
  }
}

fnRemoveAllStorageForProgramAndCreateVar();
