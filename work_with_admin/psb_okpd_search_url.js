///////////////////////////////////
// psb\.itfinance\.io.admin.ebb.tenders..q.\d+
///////////////////////////////////
// Find okpd urls and show them into textarea
document.addEventListener("load", fnMakeAction());

function fnMakeAction() {
  var collection = document.links;
  var stringValue = "";
  for (const key in collection) {
    if (Object.hasOwnProperty.call(collection, key)) {
      const element = collection[key];
      if (/.+\d+.+change.+changelist_filters.q.3D/.test(String(element.href))) {
        console.log(element.href);
        //   window.open(element.href, "_blank");
        stringValue += element.href + "\n";
      }
    }
  }

  var setTo = document.getElementById("toolbar");

  var inp = document.createElement("TEXTAREA");
  inp.setAttribute("autofocus", true);
  inp.value = stringValue;
  setTo.insertAdjacentElement("afterend", inp);
  setTo.focus();
}
