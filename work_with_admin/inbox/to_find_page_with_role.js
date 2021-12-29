// Группа ролей html list
var group_roles = document.querySelector("#id_roles_group");
// values
var need_stayOnPage = ["Администратор банка", "Администратор(БАНК)"];
var need_stayOnPageGroups = "Банковские сотрудники";
var is_stay_on_page = false;

// condition check if field "Группа ролей" has definite group
if (
  group_roles.children[group_roles.selectedIndex].innerText !==
  need_stayOnPageGroups
) {
  // exit from page
  window.close();
}

// variables count roles which exist on page
var needStayOnPageCoincidence = 1;
var countStayOnPageCoincidence = 0;
for (let index = 0; index < Number.MAX_VALUE; index++) {
  // ДОСТУПНО РОЛИ html
  htmlRoles = document.querySelector(`#id_rolespages_set-${index}-role`);
  //   if fields more not exist exit from loop
  if (htmlRoles === null) {
    break;
  }

  indexGetSelected = htmlRoles.selectedIndex;
  // to check if exist role in field
  if (need_stayOnPage.includes(htmlRoles[indexGetSelected].innerText)) {
    // count coincidence
    countStayOnPageCoincidence += 1;
    // stay on page
    is_stay_on_page = true;
  }

  //  if amount of coincidence more alowed then exit from page
  if (countStayOnPageCoincidence > needStayOnPageCoincidence) {
    is_stay_on_page = false;
  }
}

if (!is_stay_on_page) {
  // exit from page
  window.close();
}
