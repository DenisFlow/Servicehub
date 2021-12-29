// get roles from user
// need to select element from developer window

var allRoles = [...document.querySelectorAll("#divRoles table tbody tr")];
var names = [];
allRoles.forEach((x) => {
  var childrens = x.childNodes;
  if (childrens[0].innerHTML.search(`checked=\"\"`) !== -1) {
    names.push(childrens[1].children[0].title);
  }
});

console.log(names);
