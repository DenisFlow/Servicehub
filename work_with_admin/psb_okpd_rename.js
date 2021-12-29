///////////////////////////////////
// https://psb.itfinance.io/admin/ebb/tenders/\d+/change/
///////////////////////////////////
// Find okpd and push button save
var setTo = document.querySelector("#content");

var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "OKPD"; // Insert text
btn.addEventListener("click", fnSetOKPD);
setTo.insertAdjacentElement("afterbegin", btn);

var inp = document.createElement("INPUT");
inp.setAttribute("type", "text");
setTo.insertAdjacentElement("afterbegin", inp);

function fnSetOKPD() {
  let object = document.getElementById("id_okpd2");
//  /<option value=\"" + inp + "\"/.test(object.innerHTML);
  let regExp = new RegExp('<option value="' + inp.value.trim() + '"');
  let el = document.getElementById("id_okpd2");

  try {
    let valueSet = inp.value.trim();
    if (valueSet != "" && regExp.test(object.innerHTML)) {
      el.value = valueSet;
      el.scrollIntoView();
    //   var conf = window.confirm("Do you want to exit from this menu?");
    //   if (conf) {
        document.getElementsByName("_continue")[0].click();
    //   }
    } else {
      el.scrollIntoView();
    }
  } catch (error) {}
}
